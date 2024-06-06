import React, { createContext, useContext, useRef, useState, useCallback } from 'react';
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
    ],
  }));
  const [remoteStream, setRemoteStream] = useState(null);
  const remoteVideoRef = useRef(null);
  const iceCandidateQueue = useRef([]);
  const sendersRef = useRef([]);
  const [isOfferSet, setIsOfferSet] = useState(false);
  const [isAnswerSet, setIsAnswerSet] = useState(false);

  // Handle remote track event
  peer.current.ontrack = (event) => {
    console.log('ontrack event', event);
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = event.streams[0];
    }
    setRemoteStream(event.streams[0]);
  };

  // Handle ICE candidate event
  peer.current.onicecandidate = (event) => {
    if (event.candidate) {
      handleIceCandidate(event.candidate);
    }
  };

  // Send ICE candidate to the remote peer via socket
  const handleIceCandidate = useCallback((candidate) => {
    const recipientEmail = localStorage.getItem('recipientEmail');
    socket.emit('sendIceCandidate', {
      candidate,
      recipientEmail,
    });
  }, [socket]);

  // Create and send an offer
  const getOffer = useCallback(async () => {
    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    setIsOfferSet(true);
    return offer;
  }, []);

  // Create and send an answer
  const getAnswer = useCallback(async (offer) => {
    await peer.current.setRemoteDescription(offer);
    const answer = await peer.current.createAnswer();
    await peer.current.setLocalDescription(answer);
    setIsAnswerSet(true);
    return answer;
  }, []);

  // Set the remote description and process any buffered ICE candidates
  const setRemoteDescription = useCallback(async (answer) => {
    await peer.current.setRemoteDescription(answer);
    setIsAnswerSet(true);
    if (isOfferSet) {
      while (iceCandidateQueue.current.length > 0) {
        const candidate = iceCandidateQueue.current.shift();
        await peer.current.addIceCandidate(candidate);
      }
    }
  }, [isOfferSet]);

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
    if (isOfferSet && isAnswerSet) {
      peer.current.addIceCandidate(candidate);
    } else {
      iceCandidateQueue.current.push(candidate);
    }
  }, [isOfferSet, isAnswerSet]);

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
