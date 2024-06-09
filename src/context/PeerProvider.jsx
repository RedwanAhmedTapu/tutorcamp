import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';
import { useSocket } from './SocketProvider';

const PeerContext = createContext();

export const usePeer = () => {
  return useContext(PeerContext);
};

export const PeerProvider = ({ children }) => {
  const socket = useSocket();
  const peer = useRef(new RTCPeerConnection({
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:global.stun.twilio.com:3478' },
      {
        urls: 'relay1.expressturn.com:3478',
        username: 'efGYIAJX8LZT3XAPIV',
        credential: 'jqdaH4GVPLxQizua'
      }
    ],
  }));
  const [remoteStream, setRemoteStream] = useState(null);
  const remoteVideoRef = useRef(null);
  const iceCandidateQueue = useRef([]);
  const sendersRef = useRef([]);
  const [offerReceived, setOfferReceived] = useState(false);
  const [answerReceived, setAnswerReceived] = useState(false);

  // Send ICE candidate to the remote peer via socket
  const handleIceCandidate = useCallback((candidate) => {
    const recipientEmail = localStorage.getItem('recipientEmail');
    socket.emit('sendIceCandidate', {
      candidate,
      recipientEmail,
    });
  }, [socket]);

  // Handle remote track event
  useEffect(() => {
    peer.current.ontrack = (event) => {
      console.log('ontrack event', event);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
      setRemoteStream(event.streams[0]);
    };
  }, []);

  // Handle ICE candidate event
  useEffect(() => {
    peer.current.onicecandidate = (event) => {
      if (event.candidate) {
        handleIceCandidate(event.candidate);
      }
    };
  }, [handleIceCandidate]);

  // Create and send an offer
  const getOffer = useCallback(async () => {
    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    return offer;
  }, []);

  // Create and send an answer
  const getAnswer = useCallback(async (offer) => {
    await peer.current.setRemoteDescription(offer);
    setOfferReceived(true);
    const answer = await peer.current.createAnswer();
    await peer.current.setLocalDescription(answer);
    setAnswerReceived(true);
    return answer;
  }, []);

  // Set the remote description and process any buffered ICE candidates
  const setRemoteDescription = useCallback(async (answer) => {
    await peer.current.setRemoteDescription(answer);
    setAnswerReceived(true);
    processBufferedICECandidates();
  }, []);

  // Process buffered ICE candidates when both offer and answer are received
  const processBufferedICECandidates = useCallback(() => {
    if (offerReceived && answerReceived) {
      iceCandidateQueue.current.forEach(candidate => {
        peer.current.addIceCandidate(candidate);
      });
      iceCandidateQueue.current = [];
    }
  }, [offerReceived, answerReceived]);

  // Add tracks to the peer connection
  const addTrackToPeer = useCallback((stream) => {
    console.log(stream, "peer-a-b");
    stream.getTracks().forEach(track => {
      if (!sendersRef.current.find(sender => sender.track === track)) {
        const sender = peer.current.addTrack(track, stream);
        sendersRef.current.push(sender);
      }
    });
  }, []);

  // Add ICE candidate or buffer it if the remote description is not set
  const addIceCandidate = useCallback((candidate) => {
    if (offerReceived && answerReceived) {
      peer.current.addIceCandidate(candidate);
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
        remoteStream,
        remoteVideoRef,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};
