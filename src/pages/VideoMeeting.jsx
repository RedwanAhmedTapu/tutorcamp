import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSocket } from '../context/SocketProvider';
import { useParams } from 'react-router-dom';
import { usePeer, PeerProvider } from '../context/PeerProvider';

const VideoMeeting = () => {
  const socket = useSocket();
  const { roomId } = useParams();
  const email = localStorage.getItem("email"); // Assuming you store the email in local storage
  const {
    peer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    addTrackToPeer,
    addIceCandidate,
    remoteStream,
    remoteVideoRef,
  } = usePeer();

  const [localStream, setLocalStream] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [answerReceived, setAnswerReceived] = useState(false); // New state to track if answer has been received

  const localVideoRef = useRef(null);

  useEffect(() => {
    // Peer A sends the offer
    socket.on("new-user-joined", async (data) => {
      const { email } = data;
      console.log(`New user joined: ${email}`);
      localStorage.setItem('recipientEmail', email); // Store recipient email
      const offer = await getOffer();
      socket.emit('sendOffer', { email, offer, roomId });
    });

    // Peer B receives the offer and sends back an answer
    socket.on("receiveOffer", async (data) => {
      const { from, offer } = data;
      console.log(`Received offer from: ${from}`);
      const answer = await getAnswer(offer);
      localStorage.setItem('recipientEmail', from); // Store sender email
      socket.emit('sendAnswer', { email: from, answer, roomId });
      setAnswerReceived(true);
    });

    // Peer A receives the answer and sets it as the remote description
    socket.on("receiveAnswer", async (data) => {
      const { answer } = data;
      console.log('Received answer');
      await setRemoteDescription(answer);
      if (localStream) {
        addTrackToPeer(localStream);
      }
    });

    // ICE candidates exchange
    socket.on("receiveIceCandidate", (data) => {
      const { candidate } = data;
      console.log('Received ICE candidate');
      addIceCandidate(candidate);
    });

    return () => {
      socket.off('new-user-joined');
      socket.off('receiveOffer');
      socket.off('receiveAnswer');
      socket.off('receiveIceCandidate');
    };
  }, [socket, getOffer, getAnswer, setRemoteDescription, addTrackToPeer, localStream, addIceCandidate]);

  const startMedia = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      addTrackToPeer(stream);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  }, [addTrackToPeer]);

  useEffect(() => {
    startMedia();
  }, [startMedia]);

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
        setIsVideoMuted(!track.enabled);
      });
    }
  };

  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
        setIsAudioMuted(!track.enabled);
      });
    }
  };

  const toggleScreenSharing = async () => {
    // Logic for screen sharing
  };

  return (
    <div className="w-full h-screen bg-slate-950 pattern-dots">
      <div className="w-full h-full flex_col_center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={toggleAudio}
          >
            {isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={toggleVideo}
          >
            {isVideoMuted ? 'Unmute Video' : 'Mute Video'}
          </button>
          <button
            className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
            onClick={toggleScreenSharing}
          >
            {screenSharing ? 'Stop Sharing' : 'Share Screen'}
          </button>
        </div>
        <div className="w-full h-96 flex_col_center">
          <h1 className="text-white">Local video</h1>
          <video ref={localVideoRef} autoPlay className="w-full h-96" />
          <h1 className="text-white">Remote video</h1>
          <video ref={remoteVideoRef} autoPlay className="w-full h-96" />
        </div>
      </div>
    </div>
  );
};

const VideoMeetingWrapper = () => {
  const { roomId } = useParams();
  const email = localStorage.getItem("email");  // Assuming you store the email in local storage

  return (
    <PeerProvider roomId={roomId} email={email}>
      <VideoMeeting />
    </PeerProvider>
  );
};

export default VideoMeetingWrapper;
