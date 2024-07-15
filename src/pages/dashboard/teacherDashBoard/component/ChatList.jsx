const ChatList = ({ sender, receiver, initialMessages }) => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      const socket = io('http://localhost:3001');
  
      socket.emit('join', { sender, receiver });
  
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [sender, receiver]);
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') return;
  
      const socket = io('http://localhost:3001');
      const message = { sender, receiver, text: newMessage.trim() };
  
      socket.emit('sendMessage', message);
      setNewMessage('');
    };
  
    return (
      <div>
        <div className="mb-4 p-4 border border-gray-300 rounded-md h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <strong>{message.sender}: </strong>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default ChatList;
  