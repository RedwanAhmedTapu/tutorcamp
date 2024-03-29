import { useState, useEffect, useRef } from "react";
const VideoMeeting = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);
  const [classID, setClassID] = useState("");
  const [studentId, setStudentId] = useState("");
  const [joiningClassID, setJoiningClassID] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [mic, setMic] = useState(false);

  const peerConnectionRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRefs = useRef([]);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        console.log(stream)

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    startMedia()
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      remoteStreams.forEach((stream) => {
        stream.getTracks().forEach((track) => track.stop());
      });
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
    };
  }, []);


  return (
    <div className="w-full h-screen bg-slate-950 pattern-dots">
      <div className="w-full h-full flex_col_center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            {isVideoMuted ? "Unmute Video" : "Mute Video"}
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <select className="bg-gray-500 text-white px-4 py-2 rounded">
            <option disabled selected>
              selct mic
            </option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
          <select className="bg-gray-500 text-white px-4 py-2 rounded">
            <option disabled selected>
              select
            </option>
            <option value="1"></option>
            <option value="2"></option>
          </select>
        </div>
        <video ref={localVideoRef} autoPlay className="w-full h-96" muted />
        {remoteStreams.map((stream, index) => (
          <video
            key={`remoteVideo_${index}`}
            ref={(el) => (remoteVideoRefs.current[index] = el)}
            autoPlay
            className="w-full h-96"
          />
        ))}
        {!isMeetingStarted && (
          <p className="text-xl text-white">
            Waiting for the class to start...
          </p>
        )}
        <div className="w-64 h-24 flex_center gap-x-8"></div>
      </div>
    </div>
  );
};

export default VideoMeeting;
