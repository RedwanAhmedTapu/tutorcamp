import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSocket } from "../context/SocketProvider";
import { useParams } from "react-router-dom";
import { usePeer } from "../context/PeerProvider";

const VideoMeeting = () => {
  const socket = useSocket();
  const { roomId } = useParams();
  const email = localStorage.getItem("email");
  const {
    peer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    addTrackToPeer,
    addIceCandidate,
    remoteVideoRef,
  } = usePeer();

  const [localStream, setLocalStream] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);

  const localVideoRef = useRef(null);

  const handleNewUserJoining = useCallback(
    async (data) => {
      const { email } = data;
      console.log(`New user joined: ${email}`);
      localStorage.setItem("recipientEmail", email);

      if (localStream) {
        console.log(localStream, "createoffer");

        addTrackToPeer(localStream);
        const offer = await getOffer();
        socket.emit("sendOffer", { email, offer, roomId });
      }
    },
    [roomId, getOffer, socket, localStream, addTrackToPeer]
  );

  // const handleReceiveOffer = useCallback(
    async (data) => {
      const stream = await startMedia();
      const { from, offer } = data;
      console.log(`Received offer from: ${from}`);
      if (stream) {
        console.log(stream, "received offer stream");
        addTrackToPeer(stream);

        const answer = await getAnswer(offer);
        localStorage.setItem("recipientEmail", from);
        socket.emit("sendAnswer", { email: from, answer });
      }
    },
    [getAnswer, socket, localStream, addTrackToPeer]
  // );
  const handleReceiveOffer = useCallback(
    async (data) => {
      const { from, offer } = data;
      console.log(`Received offer from: ${from}`);
      try {
        const stream = await startMedia();
        console.log(localStream,"ans");
        if (stream) {
          console.log("Local stream obtained for received offer:", stream);
          addTrackToPeer(stream);

          console.log("Remote description set for received offer");

          console.log("Local description set with answer");
         
          console.log(`Answer sent to: ${from}`);
        }
        const answer = await getAnswer(offer);
        localStorage.setItem("recipientEmail", from);
        socket.emit("sendAnswer", { email: from, answer });
      } catch (error) {
        console.error("Error handling received offer:", error);
      }
    },
    [getAnswer, socket, localStream, addTrackToPeer]
  );

  const handleReceiveAnswer = useCallback(
    async (data) => {
      const { answer } = data;
      console.log("Received answer");
      await setRemoteDescription(answer);
    },
    [setRemoteDescription]
  );

  const handleReceiveIceCandidate = useCallback(
    (data) => {
      const { candidate } = data;
      console.log("Received ICE candidate");
      addIceCandidate(candidate);
    },
    [addIceCandidate]
  );

  useEffect(() => {
    socket.on("new-user-joined", handleNewUserJoining);
    socket.on("receiveOffer", handleReceiveOffer);
    socket.on("receiveAnswer", handleReceiveAnswer);
    socket.on("receiveIceCandidate", handleReceiveIceCandidate);

    return () => {
      socket.off("new-user-joined", handleNewUserJoining);
      socket.off("receiveOffer", handleReceiveOffer);
      socket.off("receiveAnswer", handleReceiveAnswer);
      socket.off("receiveIceCandidate", handleReceiveIceCandidate);
    };
  }, [
    socket,
    handleNewUserJoining,
    handleReceiveOffer,
    handleReceiveAnswer,
    handleReceiveIceCandidate,
    localStream,
  ]);

  const startMedia = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          echoCancellation: true, // Add echoCancellation constraint
        },
      });
      if (stream) {
        console.log("stream obtained");
        setLocalStream(stream);
      }
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      return stream;
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  }, []);

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
    if (!screenSharing) {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        const videoTrack = screenStream.getVideoTracks()[0];
        const sender = peer.peer.getSenders().find((s) => {
          return s.track.kind === videoTrack.kind;
        });
        if (sender) {
          sender.replaceTrack(videoTrack);
        }
        setScreenSharing(true);
      } catch (error) {
        console.error("Error sharing screen:", error);
      }
    } else {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      const videoTrack = videoStream.getVideoTracks()[0];
      const sender = peer.peer.getSenders().find((s) => {
        return s.track.kind === videoTrack.kind;
      });
      if (sender) {
        sender.replaceTrack(videoTrack);
      }
      setScreenSharing(false);
    }
  };

  return (
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
        <div className="w-full h-96 flex flex-row gap-x-8">
          <div className="flex flex-col items-center">
            <h1 className="text-white mb-2">Local Video</h1>
            <video ref={localVideoRef} autoPlay className="w-full h-96" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-white mb-2">Remote Video</h1>
            <video ref={remoteVideoRef} autoPlay className="w-full h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMeeting;
