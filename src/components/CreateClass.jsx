
const CreateClass = ({ socket }) => {
  console.log(socket)
  const generateRandomId = () => {
    
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 10; i++) {
      randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
  };

  const handleCreateClass = () => {
    if (!socket) {
      console.error("Socket is not available");
      return;
    }

    const teacherId = generateRandomId();
    console.log(teacherId);
    socket.emit('create-class', teacherId);
  };

  return (
    <div className="m-4 p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-2">Create Class</h2>
      <button onClick={handleCreateClass} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create
      </button>
    </div>
  );
};

export default CreateClass;
