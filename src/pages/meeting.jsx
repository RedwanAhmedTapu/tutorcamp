import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSocket } from "../context/SocketProvider";
import { useParams } from "react-router-dom";
import { usePeer } from "../context/PeerProvider";
import Draggable from "react-draggable";
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiMonitor } from "react-icons/fi";

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
  const selectAudioRef = useRef(null);
  const selectVideoRef = useRef(null);

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

  const handleReceiveOffer = useCallback(
    async (data) => {
      const { from, offer } = data;
      console.log(`Received offer from: ${from}`);
      try {
        console.log(localStream, "ans");
        let stream = localStream;
        if (!stream) {
          stream = await startMedia();
          setLocalStream(stream);
        }

        if (stream) {
          addTrackToPeer(stream);
          const answer = await getAnswer(offer);
          localStorage.setItem("recipientEmail", from);
          socket.emit("sendAnswer", { email: from, answer });
        } else {
          console.error("Failed to get local stream.");
        }
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

  const startMedia = async (cameraID = null, micID = null) => {
    try {
      const constraints = {
        video: cameraID ? { deviceId: { exact: cameraID } } : true,
        audio: micID ? { deviceId: { exact: micID } } : true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log("Stream tracks:", stream.getAudioTracks());
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      return stream;
    } catch (error) {
      console.error("Error accessing media devices:", error);
      return null;
    }
  };

  useEffect(() => {
    startMedia();
  }, []);

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
    selectAudioRef.current.innerHTML = "";
    const availableAudioDevices =
      await navigator.mediaDevices.enumerateDevices();
    const audioInputDevices = availableAudioDevices.filter(
      (device) => device.kind === "audioinput"
    );
    const currentMic = localStream ? localStream.getAudioTracks()[0] : null;

    audioInputDevices.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.text =
        device.label ||
        `Microphone ${selectAudioRef.current.options.length + 1}`;

      if (currentMic && device.label === currentMic.label) {
        option.selected = true;
      }

      selectAudioRef.current.appendChild(option);
    });
  };

  const selectVideoDevice = async () => {
    selectVideoRef.current.innerHTML = "";
    const availableVideoDevices =
      await navigator.mediaDevices.enumerateDevices();
    const videoInputDevices = availableVideoDevices.filter(
      (device) => device.kind === "videoinput"
    );
    const currentCamera = localStream ? localStream.getVideoTracks()[0] : null;

    videoInputDevices.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.text =
        device.label ||
        `VideoDevice ${selectVideoRef.current.options.length + 1}`;

      if (currentCamera && device.label === currentCamera.label) {
        option.selected = true;
      }

      selectVideoRef.current.appendChild(option);
    });
  };

  const setAudiodeviceId = (e) => {
    const deviceId = e.target.value;
    startMedia(null, deviceId);
  };

  const setVideodeviceId = (e) => {
    const deviceId = e.target.value;
    startMedia(deviceId);
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
    <div className="w-full h-screen bg-slate-900 relative top-16 flex flex-col items-center justify-center">
      <div className="relative w-full md:w-11/12 h-4/5 bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <video
          ref={localVideoRef}
          autoPlay
          className="w-full h-full object-cover"
        />
        <Draggable>
          <div
            className="absolute w-64 h-44 md:w-1/4 md:h-1/4 bg-slate-600 rounded-lg shadow-lg top-4 right-4 cursor-move"
            style={{ left: "calc(100% - 40%)", top: "4%" }}
          >
            <video
              ref={remoteVideoRef}
              autoPlay
              className="w-full h-full object-cover rounded-lg z-50"
            />
          </div>
        </Draggable>
      </div>
      <div className="w-full flex flex-col  justify-center items-center space-y-4  md:space-x-4 mt-4">
        <div className="flex justify-center items-center space-x-4">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleAudio}
          >
            {isAudioMuted ? <FiMicOff /> : <FiMic />}
          </button>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleVideo}
          >
            {isVideoMuted ? <FiVideoOff /> : <FiVideo />}
          </button>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={toggleScreenSharing}
          >
            <FiMonitor />
            {screenSharing ? " Stop Sharing" : " Share Screen"}
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <select
            className="bg-gray-500 text-white px-4 py-2 rounded"
            ref={selectAudioRef}
            onClick={selectAudioDevice}
            onChange={setAudiodeviceId}
          >
            <option disabled selected>
              Select mic
            </option>
          </select>
          <select
            ref={selectVideoRef}
            onClick={selectVideoDevice}
            onChange={setVideodeviceId}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            <option disabled selected>
              Select video device
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VideoMeeting;
