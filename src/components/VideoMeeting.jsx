import React,{ useState, useEffect, useRef } from "react";
import { useSocket } from "../context/SocketProvider";
import { useParams } from "react-router-dom";
import peer from "../service/peer";

const VideoMeeting = () => {
  // socket initialization
  const socket = useSocket();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);
  // const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [loading, setLoading] = useState(false);

  // const peerConnectionRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef([]);
  const selectAudioRef = useRef(null);
  const selectVideoRef = useRef(null);

  let { roomId } = useParams();
  console.log(roomId, "roomID");

  const startMedia = async (cameraID, micID) => {
    try {
      console.log(cameraID, "cameraId");

      // Initialize currentCamera properly
      let currentCamera = cameraID === null ? null : cameraID;

      const defaultConstraints = {
        video: true,
        audio: true,
      };
      const selectedCameraConstraints = {
        audio: true,
        video: {
          deviceId: cameraID,
        },
      };
      const cameraOption = currentCamera ? { deviceId: currentCamera } : true;
      const selectedAudioConstraints = {
        video: cameraOption,
        audio: {
          deviceId: micID,
        },
      };
      const constraints =
        cameraID || micID
          ? cameraID
            ? selectedCameraConstraints
            : selectedAudioConstraints
          : defaultConstraints;
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log("Stream tracks:", stream.getAudioTracks());
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  // useEffect to listen for socket events
 

  useEffect(() => {
    const initializeSocket = async () => {
      socket.connect();
  
      if (socket) {
        setLoading(true);
        if (roomId) {
          console.log(roomId, "mm");
          socket.emit("room-join", { roomId });
        }
  
        // Listen for "newjoining" event
        socket.on("newjoining", (data) => {
          console.log("New user joined", data);
        });
  
        const makingWebRTCConnection = async () => {
          // Assuming localStream is already defined and contains tracks you want to add
          await localStream.getTracks().forEach((track) => {
            peer.peer.addTrack(track, localStream);
          });
  
          if (localStream) {
            makingWebRTCConnection();
          
          const offer = await peer.getOffer();
          socket.emit("sendTheOffer", offer, roomId);
  
          console.log(offer);
  
          socket.on("recieveOffer", async (offer) => {
            console.log(offer, "receive offer");
            const ans = await peer.getAnswer(offer);
            console.log(ans);
            socket.emit("sendTheAnswer", ans, roomId); // Sending answer back to server
          });
  
          // Listen for ICE candidates
          peer.peer.onicecandidate = (event) => {
            if (event.candidate) {
              console.log("Sending ICE candidate:", event.candidate);
              socket.emit("sendIceCandidate", event.candidate, roomId);
            }
          };
  
          // Receive ICE candidates from the other peer
          socket.on("receiveIceCandidate", (candidate) => {
            console.log("Received ICE candidate:", candidate);
            peer.peer.addIceCandidate(new RTCIceCandidate(candidate));
          });
  
          // Add remote stream when received
          peer.peer.ontrack = (event) => {
            console.log("Received remote stream",event.streams[0]);
            setRemoteStreams((prevStreams) => [...prevStreams, event.streams[0]]);
            // Assuming remoteVideoRef is a reference to the <video> element for displaying remote stream
            remoteVideoRef.current.srcObject = event.streams[0];
            remoteVideoRef.play();
          };
        }};
  
        makingWebRTCConnection();
        
  
        return () => {
          socket.disconnect();
        };
      }
    };
  
    if (socket && startMedia) {
      initializeSocket();
    }
  }, [socket, startMedia]);
  
  
  
  useEffect(() => {
    remoteVideoRef.current = Array(remoteStreams.length)
      .fill()
      .map(() => React.createRef());
      
  }, [remoteStreams]);
  // function for muting or unmuting video
  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
        setIsVideoMuted(!track.enabled);
      });
    }
  };

  // function for muting or unmuting audio
  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
        setIsAudioMuted(!track.enabled);
      });
    }
  };

  // function for selecting audio device
  const selectAudioDevice = async () => {
    // Clear existing options
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

      // Set selected attribute if it matches the current microphone
      if (currentMic && device.label === currentMic.label) {
        option.selected = true;
      }

      selectAudioRef.current.appendChild(option);
    });
  };

  // function for selecting video device
  const selectVideoDevice = async () => {
    // Clear existing options
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

      // Set selected attribute if it matches the current camera
      if (currentCamera && device.label === currentCamera.label) {
        option.selected = true;
      }

      selectVideoRef.current.appendChild(option);
    });
  };

  // handle audio device selection
  const setAudiodeviceId = (e) => {
    const deviceId = e.target.value;
    startMedia(null, deviceId);
  };

  // handle video device selection
  const setVideodeviceId = (e) => {
    const deviceId = e.target.value;
    startMedia(deviceId);
  };

  // screenSharing
  const toggleScreenSharing = async () => {
    if (!screenSharing) {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
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
      {loading ? (
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
          <div className="flex justify-center items-center space-x-4 mb-4">
            <select
              className="bg-gray-500 text-white px-4 py-2 rounded"
              ref={selectAudioRef}
              onClick={selectAudioDevice}
              onChange={setAudiodeviceId}
            >
              {selectAudioRef.current && (
                <option disabled selected>
                  select mic
                </option>
              )}
            </select>
            <select
              ref={selectVideoRef}
              onClick={selectVideoDevice}
              onChange={setVideodeviceId}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              {selectVideoRef.current && (
                <option disabled selected>
                  select video device
                </option>
              )}
            </select>
          </div>
          <div className="w-full h-96 flex_col_center">
          <h1 className="text-white">Local video</h1>
          <video ref={localVideoRef} autoPlay className="w-full h-96" />
          <h1 className="text-white">Remote videos</h1>
          {remoteStreams&& remoteStreams.map((stream, index) => (
              <video
                key={`remoteVideo_${index}`}
                ref={remoteVideoRef.current[index]}
                autoPlay
                className="w-96 h-96"
              />
            ))}
          </div>

          <div
            className="w-24 h-12 flex_center text-center bg-fuchsia-400 gap-x-8"
            onClick={startMedia}
          >
            start media
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex_center text-white">loading...</div>
      )}
    </div>
  );
};

export default VideoMeeting;
