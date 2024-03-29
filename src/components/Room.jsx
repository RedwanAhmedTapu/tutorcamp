// RoomPage.jsx
import React, { useEffect, useCallback, useState } from "react";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const handleUserJoined = useCallback(({ id }) => {
    console.log(`User ${id} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      const offer = await peer.getOffer();
      socket.emit("user:call", { to: remoteSocketId, offer });
      setMyStream(stream);
    } catch (error) {
      console.error("Error calling user:", error);
    }
  }, [remoteSocketId, socket]);

  const handleIncomingCall = useCallback(
    async ({ from, offer }) => {
      try {
        setRemoteSocketId(from);
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        setMyStream(stream);
        console.log(`Incoming Call`, from, offer);
        const ans = await peer.getAnswer(offer);
        socket.emit("call:accepted", { to: from, ans });
      } catch (error) {
        console.error("Error handling incoming call:", error);
      }
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    async ({ from, ans }) => {
      try {
        await peer.setLocalDescription(ans);
        console.log("Call Accepted!");
        sendStreams();
      } catch (error) {
        console.error("Error accepting call:", error);
      }
    },
    [sendStreams]
  );

  const handleNegotiationNeeded = useCallback(async () => {
    try {
      const offer = await peer.getOffer();
      socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
    } catch (error) {
      console.error("Error handling negotiation needed:", error);
    }
  }, [remoteSocketId, socket]);

  const handleNegotiationNeededIncoming = useCallback(
    async ({ from, offer }) => {
      try {
        const ans = await peer.getAnswer(offer);
        socket.emit("peer:nego:done", { to: from, ans });
      } catch (error) {
        console.error("Error handling negotiation needed (incoming):", error);
      }
    },
    [socket]
  );

  const handleNegotiationFinal = useCallback(
    async ({ ans }) => {
      try {
        await peer.setLocalDescription(ans);
      } catch (error) {
        console.error("Error handling negotiation final:", error);
      }
    },
    []
  );

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegotiationNeeded);
    return () => {
      peer.peer.removeEventListener(
        "negotiationneeded",
        handleNegotiationNeeded
      );
    };
  }, [handleNegotiationNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const [stream] = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(stream);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegotiationNeededIncoming);
    socket.on("peer:nego:final", handleNegotiationFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegotiationNeededIncoming);
      socket.off("peer:nego:final", handleNegotiationFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncomingCall,
    handleCallAccepted,
    handleNegotiationNeededIncoming,
    handleNegotiationFinal,
  ]);

  return (
    <div className="w-full h-screen bg-slate-300 flex_col_center">
      <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {myStream && (
        <button
          className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
          onClick={sendStreams}
        >
          Send Stream
        </button>
      )}
      {remoteSocketId && (
        <button
          className="w-16 h-12 bg-blue-600 rounded-md shadow-lg text-white"
          onClick={handleCallUser}
        >
          CALL
        </button>
      )}
      {myStream && (
        <div>
          <h1>My Stream</h1>
          <video srcObject={myStream} autoPlay muted />
        </div>
      )}
      {remoteStream && (
        <div>
          <h1>Remote Stream</h1>
          <video srcObject={remoteStream} autoPlay />
        </div>
      )}
    </div>
  );
};

export default RoomPage;
