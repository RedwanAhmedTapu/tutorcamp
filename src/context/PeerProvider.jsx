import React, { useMemo, createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

// Creating the context
const PeerContext = createContext();

// Custom hook to consume the context
export const usePeer = () => useContext(PeerContext);

// Provider component to provide the context
export const PeerProvider = (props) => {
  const [remoteStream, setRemoteStream] = useState(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    // Initialize the RTCPeerConnection instance
    peerRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478",
          ],
        },
      ],
    });

    // Add event listeners
    peerRef.current.addEventListener("track", handleTrackEvent);
    peerRef.current.addEventListener("negotiationneeded", handleNegotiationEvent);

    // Cleanup function to remove event listeners
    return () => {
      if (peerRef.current) {
        peerRef.current.removeEventListener("track", handleTrackEvent);
        peerRef.current.removeEventListener("negotiationneeded", handleNegotiationEvent);
      }
    };
  }, []); // Only run this effect once on component mount

  // Function to get offer
  const getOffer = async () => {
    if (peerRef.current) {
      const offer = await peerRef.current.createOffer();
      await peerRef.current.setLocalDescription(offer);
      return offer;
    }
  };

  const getAnswer = async (offer) => {
    if (peerRef.current) {
      await peerRef.current.setRemoteDescription(offer);
      const ans = await peerRef.current.createAnswer();
      await peerRef.current.setLocalDescription(ans);
      return ans;
    }
  };

  const setRemoteDescription = async (ans) => {
    try {
      await peerRef.current.setRemoteDescription(ans);
      // If successful, continue with other operations
    } catch (error) {
      console.error("Error setting remote description:", error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };

  const addTrackToPeer = async (stream) => {
    if (peerRef.current) {
      stream.getTracks().forEach((track) => {
        peerRef.current.addTrack(track, stream);
      });
    }
  };

  const handleTrackEvent = useCallback((event) => {
    console.log("Received remote stream", event.streams[0]);
    setRemoteStream(event.streams[0]);
  }, []);

  const handleNegotiationEvent = useCallback((event) => {
    console.log("Negotiation needed");
    // Perform any necessary actions when negotiation is needed
  }, []);

  // Providing peer and related functions as context values
  return (
    <PeerContext.Provider
      value={{
        peer: peerRef.current,
        getOffer,
        getAnswer,
        setRemoteDescription,
        addTrackToPeer,
        remoteStream,
        remoteVideoRef,
      }}
    >
      {props.children}
    </PeerContext.Provider>
  );
};
