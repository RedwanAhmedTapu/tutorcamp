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

  useEffect(() => {
    const fetchTurnServers = async () => {
      try {
        const response = await axios.get(`https://yourappname.metered.live/api/v1/turn/credentials?apiKey=${process.env.API_KEY}`);
        const iceServers = response.data;
        const peerConfiguration = { iceServers };
        peer.current = new RTCPeerConnection(peerConfiguration);
        // Attach event listeners
        peer.current.ontrack = handleRemoteTrack;
        peer.current.onicecandidate = handleIceCandidate;
      } catch (error) {
        console.error("Error fetching TURN server credentials:", error);
      }
    };
    fetchTurnServers();
  }, []);

  // Send ICE candidate to the remote peer via socket
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

  // Handle ICE candidate event
  useEffect(() => {
    if (!peer.current) return;

    peer.current.onicecandidate = (event) => {
      if (event.candidate) {
        handleIceCandidate(event);
      }
    };
  }, [handleIceCandidate]);

  // Create and send an offer
  const getOffer = useCallback(async () => {
    if (!peer.current) return;

    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    return offer;
  }, []);

  // Create and send an answer
  const getAnswer = useCallback(async (offer) => {
    if (!peer.current) return;

    await peer.current.setRemoteDescription(offer);
    setOfferReceived(true);
    const answer = await peer.current.createAnswer();
    await peer.current.setLocalDescription(answer);
    setAnswerReceived(true);
    return answer;
  }, []);

  // Set the remote description and process any buffered ICE candidates
  const setRemoteDescription = useCallback(async (answer) => {
    if (!peer.current) return;

    await peer.current.setRemoteDescription(answer);
    setAnswerReceived(true);
    processBufferedICECandidates();
  }, []);

  // Process buffered ICE candidates when both offer and answer are received
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

  // Add tracks to the peer connection
  const addTrackToPeer = useCallback((stream) => {
    if (!peer.current) return;

    stream.getTracks().forEach(track => {
      if (!sendersRef.current.find(sender => sender.track === track)) {
        const sender = peer.current.addTrack(track, stream);
        sendersRef.current.push(sender);
      }
    });
  }, []);

  // Add ICE candidate or buffer it if the remote description is not set
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
