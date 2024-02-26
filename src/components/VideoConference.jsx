import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const VideoConference = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [classID, setClassID] = useState("");
  const [studentId, setStudentId] = useState("");
  const [joiningClassID, setJoiningClassID] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const peerConnectionRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("https://tutorcampbackend.onrender.com");

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        const peerConnection = new RTCPeerConnection();
        peerConnectionRef.current = peerConnection;

        stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));

        peerConnection.ontrack = (event) => {
          setRemoteStream(event.streams[0]);
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            socket.current.emit("ice-candidate", {
              candidate: event.candidate,
              classId: classID || joiningClassID,
            });
          }
        };

        if (isMeetingStarted && (classID || joiningClassID)) {
          const offer = await peerConnection.createOffer();
          await peerConnection.setLocalDescription(offer);
          socket.current.emit("offer", { offer, classId: classID || joiningClassID });
        }

        socket.current.on("answer", async (answer) => {
          console.log("Received answer:", answer);
          await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.current.on("ice-candidate", async (candidate) => {
          console.log(candidate);
          if (candidate && candidate.sdpMid && candidate.sdpMLineIndex !== null) {
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
          }
        });
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    if (isMeetingStarted && (classID || joiningClassID)) {
      startMedia();
    }

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
    };
  }, [isMeetingStarted, classID, joiningClassID]);

  const startMeeting = () => {
    setMeetingStarted(true);
  };

  const generateRandomId = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < 10; i++) {
      randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
  };

  const handleCreateClass = () => {
    if (!socket.current) {
      console.error("Socket is not available");
      return;
    }

    const teacherId = generateRandomId();
    socket.current.emit("create-class", teacherId);
    socket.current.on("class-created", (data) => {
      setClassID(data);
      setIsTeacher(true);
    });
    startMeeting(); // Start the meeting after creating the class
  };

  const handleJoiningClassIDChange = (event) => {
    setJoiningClassID(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const joinClass = () => {
    if (!socket.current || !joiningClassID || !studentId) {
      console.error("Class ID or Student ID or Socket is not available");
      return;
    }

    socket.current.emit("join-class", { classId: joiningClassID, studentId });
    socket.current.on("class-not-found", () => {
      console.error("Class not found");
    });
    startMeeting(); // Start the meeting after joining the class
  };

  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
        setIsAudioMuted(!track.enabled);
      });
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
        setIsVideoMuted(!track.enabled);
      });
    }
  };

  return (
    <div className="w-full h-screen bg-slate-950 pattern-dots">
      <div className="m-4 p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-semibold mb-2">Create Class</h2>
        <button
          onClick={handleCreateClass}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>
      <div className="m-4 p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-semibold mb-2">Join Class</h2>
        <p>Class ID: {classID}</p>
        <input
          type="text"
          value={joiningClassID}
          onChange={handleJoiningClassIDChange}
          placeholder="Enter Class ID"
          className="border border-gray-400 rounded px-2 py-1 mb-2"
        />
        <input
          type="text"
          value={studentId}
          onChange={handleStudentIdChange}
          placeholder="Enter Your ID"
          className="border border-gray-400 rounded px-2 py-1 mb-2"
        />
        <button onClick={joinClass} className="bg-blue-500 text-white px-4 py-2 rounded">
          Join Class
        </button>
      </div>
      <div className="w-full h-full flex_col_center">
        { (
          <>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <button onClick={toggleAudio} className="bg-gray-500 text-white px-4 py-2 rounded">
                {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
              </button>
              <button onClick={toggleVideo} className="bg-gray-500 text-white px-4 py-2 rounded">
                {isVideoMuted ? "Unmute Video" : "Mute Video"}
              </button>
            </div>
            <video ref={localVideoRef} autoPlay className="w-full h-96" muted />
            <video ref={remoteVideoRef} autoPlay className="w-full h-96" />
          </>
        )}
        {!isMeetingStarted && !isTeacher && (
          <p className="text-xl text-white">Waiting for the class to start...</p>
        )}
        <div className="w-64 h-24 flex_center gap-x-8"></div>
      </div>
    </div>
  );
};

export default VideoConference;
