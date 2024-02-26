import { useState } from "react";

const JoinClass = ({ socket }) => {
  const [classID, setClassID] = useState(null);
  const [studentId, setStudentId] = useState("");

  const click = () => {
    // if (!classID || !socket) {
    //   console.error("Class ID or Socket is not available");
    //   return;
    // }

    socket.emit("join-class", { classId: "bhndzzp5ym", studentId });
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  return (
    <div className="m-4 p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-2">Join Class</h2>
      <p>Class ID: {classID}</p>
      <input
        type="text"
        value={studentId}
        onChange={handleStudentIdChange}
        placeholder="Enter Your ID"
        className="border border-gray-400 rounded px-2 py-1 mb-2"
      />
      <button className="w-44 h-32 text-white" onClick={click}>
        Join Class
      </button>
    </div>
  );
};

export default JoinClass;
