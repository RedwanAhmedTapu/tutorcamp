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
      {
        urls: 'stun:stun.l.google.com:19302',
      },
    ],
  }));
  const [remoteStream, setRemoteStream] = useState(null);
  const remoteVideoRef = useRef(null);
  const iceCandidateQueue = useRef([]);
  const sendersRef = useRef([]);

  peer.current.ontrack = (event) => {
    console.log('ontrack event', event);
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = event.streams[0];
    }
    setRemoteStream(event.streams[0]);
  };

  peer.current.onicecandidate = (event) => {
    if (event.candidate) {
      handleIceCandidate(event.candidate);
    }
  };

  const handleIceCandidate = useCallback((candidate) => {
    const recipientEmail = localStorage.getItem('recipientEmail');
    socket.emit('sendIceCandidate', {
      candidate,
      recipientEmail,
    });
  }, [socket]);

  const getOffer = useCallback(async () => {
    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    return offer;
  }, []);

  const getAnswer = useCallback(async (offer) => {
    await peer.current.setRemoteDescription(offer);
    const answer = await peer.current.createAnswer();
    await peer.current.setLocalDescription(answer);
    return answer;
  }, []);

  const setRemoteDescription = useCallback(async (answer) => {
    await peer.current.setRemoteDescription(answer);
    while (iceCandidateQueue.current.length > 0) {
      const candidate = iceCandidateQueue.current.shift();
      await peer.current.addIceCandidate(candidate);
    }
  }, []);

  const addTrackToPeer = useCallback((stream) => {
    console.log(stream,"peer-a-b");
    stream.getTracks().forEach(track => {
      if (!sendersRef.current.find(sender => sender.track === track)) {
        const sender = peer.current.addTrack(track, stream);
        sendersRef.current.push(sender);
      }
    });
  }, []);

  const addIceCandidate = useCallback((candidate) => {
    if (peer.current.remoteDescription) {
      peer.current.addIceCandidate(candidate);
    } else {
      iceCandidateQueue.current.push(candidate);
    }
  }, []);

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
