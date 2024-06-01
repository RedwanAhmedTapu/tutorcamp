import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSocket } from "../context/SocketProvider";
import { useParams } from "react-router-dom";
import { usePeer, PeerProvider } from "../context/PeerProvider"; // Import PeerProvider

const VideoMeeting = () => {
  const socket = useSocket();
  const { roomId } = useParams();
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

  const localVideoRef = useRef(null);

  const handlenewUserJoining = useCallback(
    async (data) => {
      const { email } = data;
      const offer = await getOffer();
      socket.emit("sendTheOffer", { email, offer });
    },
    [getOffer, socket]
  );

  const handlereceiveoffer = useCallback(
    async (data) => {
      const { from, offer } = data;
      const ans = await getAnswer(offer);
      socket.emit("sendTheAnswer", { emailID: from, ans });
    },
    [getAnswer, socket]
  );

  const handlereceiveAnswer = useCallback(
    async (data) => {
      const { ans } = data;
      await setRemoteDescription(ans);
      if (localStream) {
        addTrackToPeer(localStream);
      }
    },
    [setRemoteDescription, localStream, addTrackToPeer]
  );

  const handleReceiveIceCandidate = useCallback(
    async (data) => {
      const { candidate } = data;
      try {
        await addIceCandidate(candidate);
      } catch (error) {
        console.error("Error adding received ICE candidate", error);
      }
    },
    [addIceCandidate]
  );

  useEffect(() => {
    socket.on("new-user-joined", handlenewUserJoining);
    socket.on("recieveOffer", handlereceiveoffer);
    socket.on("recieveAnswer", handlereceiveAnswer);
    socket.on("receiveIceCandidate", handleReceiveIceCandidate);
    console.log(remoteVideoRef)
    console.log(localVideoRef)

    return () => {
      socket.off("new-user-joined", handlenewUserJoining);
      socket.off("recieveOffer", handlereceiveoffer);
      socket.off("recieveAnswer", handlereceiveAnswer);
      socket.off("receiveIceCandidate", handleReceiveIceCandidate);
    };
  }, [socket, handlenewUserJoining, handlereceiveoffer, handlereceiveAnswer, handleReceiveIceCandidate]);

  const startMedia = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      stream.getTracks().forEach((track) => {
        peer.addTrack(track, stream);
      });
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  }, [peer]);

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

  const selectAudioDevice = async () => {
    // Logic for selecting audio device
  };

  const selectVideoDevice = async () => {
    // Logic for selecting video device
  };

  const toggleScreenSharing = async () => {
    // Logic for screen sharing
  };

  return (
    <PeerProvider roomId={roomId}>
      <div className="w-full h-screen bg-slate-950 pattern-dots">
        <div className="w-full h-full flex_col_center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={toggleAudio}
            >
              {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={toggleVideo}
            >
              {isVideoMuted ? "Unmute Video" : "Mute Video"}
            </button>
            <button
              className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
              onClick={toggleScreenSharing}
            >
              {screenSharing ? "Stop Sharing" : "Share Screen"}
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
    </PeerProvider>
  );
};

export default VideoMeeting;
