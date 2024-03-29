import  { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [videoMuted, setVideoMuted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      console.log("GOT TRACKS!!", remoteStream);

      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  const toggleVideoMute = () => {
    myStream.getVideoTracks().forEach((track) => {
      track.enabled = !videoMuted;
    });
    setVideoMuted(!videoMuted);
  };

  const toggleAudioMute = () => {
    myStream.getAudioTracks().forEach((track) => {
      track.enabled = !audioMuted;
    });
    setAudioMuted(!audioMuted);
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
    <div className="w-full h-screen bg-slate-300 flex_col_center">
      <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {myStream && (
        <>
          <button
            className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
            onClick={sendStreams}
          >
            Send Stream
          </button>

          <button
            className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
            onClick={toggleVideoMute}
          >
            {videoMuted ? "Unmute Video" : "Mute Video"}
          </button>
          <button
            className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
            onClick={toggleAudioMute}
          >
            {audioMuted ? "Unmute Audio" : "Mute Audio"}
          </button>
          <button
            className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
            onClick={toggleScreenSharing}
          >
            {screenSharing ? "Stop Sharing" : "Share Screen"}
          </button>
        </>
      )}
      {myStream && (
        <>
          <h1>My Stream</h1>
          <video
            autoPlay
            muted
            ref={(videoRef) => {
              if (videoRef) {
                videoRef.srcObject = myStream;
              }
            }}
            className="h-100 w-200"
          />
        </>
      )}
      {remoteStream && (
        <>
          <h1>Remote Stream</h1>
          <video
            autoPlay
            ref={(videoRef) => {
              if (videoRef) {
                videoRef.srcObject = remoteStream;
              }
            }}
            className="h-100 w-200"
          />
        </>
      )}
    </div>
  );
};

export default RoomPage;
