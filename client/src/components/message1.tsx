import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatSlice';
import io from 'socket.io-client';

const socket = io('http://localhost:5000')

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: { chat: { messages: string[] } }) => state.chat.messages);
  const [message, setMessage] = useState('');
  const [receiveMeesage,setReceiveMeesage] =useState([])
console.log(messages,"message")
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(addMessage(message));

      socket.emit('chat message', message);
      setMessage('');
      console.log(message)
    }
  };
useEffect(()=>{
  socket.on('chat message', (msg:[]) => {
    console.log(msg)
    setReceiveMeesage([...msg,...receiveMeesage])


  });
})
  return (
    <div>
      <div className="chat-messages">
        {receiveMeesage.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;