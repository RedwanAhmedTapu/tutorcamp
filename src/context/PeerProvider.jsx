import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';
import { useSocket } from './SocketProvider';
import axios from 'axios';

const PeerContext = createContext();

export const usePeer = () => {
  return useContext(PeerContext);
};

export const PeerProvider = ({ children }) => {
  const socket = useSocket();
  const peer = useRef(null);
  const remoteVideoRef = useRef(null);
  const iceCandidateQueue = useRef([]);
  const sendersRef = useRef([]);
  const [offerReceived, setOfferReceived] = useState(false);
  const [answerReceived, setAnswerReceived] = useState(false);

  const restartIce = useCallback(async () => {
    if (!peer.current) return;

    try {
      const offer = await peer.current.createOffer({ iceRestart: true });
      await peer.current.setLocalDescription(offer);
      socket.emit('sendOffer', offer);
    } catch (error) {
      console.error('Error restarting ICE:', error);
    }
  }, [socket]);

  useEffect(() => {
    const iceServers = [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      {
        urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
        credential: 'webrtc',
        username: 'webrtc',
      },
      {
        urls: 'turn:turn.bistri.com:80',
        credential: 'homeo',
        username: 'homeo',
      },
      {
        urls: 'turn:turn.bistri.com:443',
        credential: 'homeo',
        username: 'homeo',
      },
    ];

    const peerConfiguration = { iceServers };
    peer.current = new RTCPeerConnection(peerConfiguration);

    // Attach event listeners
    peer.current.ontrack = handleRemoteTrack;
    peer.current.onicecandidate = handleIceCandidate;
  }, []);

  const handleIceCandidate = useCallback((event) => {
    if (event.candidate) {
      const recipientEmail = localStorage.getItem('recipientEmail');
      socket.emit('sendIceCandidate', {
        candidate: event.candidate,
        recipientEmail,
      });
    }
  }, [socket]);

  const handleRemoteTrack = useCallback((event) => {
    console.log('ontrack event', event);
    if (remoteVideoRef.current && event.streams && event.streams[0]) {
      remoteVideoRef.current.srcObject = event.streams[0];
    }
  }, []);

  useEffect(() => {
    if (!peer.current) return;

    peer.current.oniceconnectionstatechange = () => {
      if (peer.current.iceConnectionState === 'failed') {
        console.error('ICE connection failed');
        restartIce();
      }
    };

    peer.current.onicecandidateerror = (event) => {
      console.error('ICE candidate error:', event.errorText);
      if (event.errorCode === someSpecificErrorCode) {
        // Handle specific error code
        console.log('Handling specific ICE candidate error');
        // Implement specific error handling logic
      } else {
        // Retry ICE connection
        restartIce();
      }
    };

    peer.current.onicecandidate = (event) => {
      if (event.candidate) {
        handleIceCandidate(event);
      }
    };
  }, [handleIceCandidate, restartIce]);

  const getOffer = useCallback(async () => {
    if (!peer.current) return;

    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    return offer;
  }, []);

  const getAnswer = useCallback(async (offer) => {
    if (!peer.current) return;

    await peer.current.setRemoteDescription(offer);
    setOfferReceived(true);
    const answer = await peer.current.createAnswer();
    await peer.current.setLocalDescription(answer);
    setAnswerReceived(true);
    return answer;
  }, []);

  const setRemoteDescription = useCallback(async (answer) => {
    if (!peer.current) return;

    await peer.current.setRemoteDescription(answer);
    setAnswerReceived(true);
    processBufferedICECandidates();
  }, []);

  const processBufferedICECandidates = useCallback(() => {
    if (offerReceived && answerReceived) {
      iceCandidateQueue.current.forEach(candidate => {
        peer.current.addIceCandidate(candidate).catch(e => {
          console.error('Error adding ICE candidate:', e);
        });
      });
      iceCandidateQueue.current = [];
    }
  }, [offerReceived, answerReceived]);

  const addTrackToPeer = useCallback((stream) => {
    if (!peer.current) return;

    stream.getTracks().forEach(track => {
      if (!sendersRef.current.find(sender => sender.track === track)) {
        const sender = peer.current.addTrack(track, stream);
        sendersRef.current.push(sender);
      }
    });
  }, []);

  const addIceCandidate = useCallback((candidate) => {
    if (!peer.current) return;

    if (offerReceived && answerReceived) {
      peer.current.addIceCandidate(candidate).catch(e => {
        console.error('Error adding ICE candidate:', e);
      });
    } else {
      iceCandidateQueue.current.push(candidate);
    }
  }, [offerReceived, answerReceived]);

  useEffect(() => {
    if (offerReceived && answerReceived) {
      processBufferedICECandidates();
    }
  }, [offerReceived, answerReceived, processBufferedICECandidates]);

  return (
    <PeerContext.Provider
      value={{
        peer: peer.current,
        getOffer,
        getAnswer,
        setRemoteDescription,
        addTrackToPeer,
        addIceCandidate,
        remoteVideoRef,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};
