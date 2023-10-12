import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './message.css';

; // Make sure your server address is correctly configured here

function Message() {
  const socket = io('http://localhost:5000')
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // Add a useEffect hook to set up your socket.io listeners when the component mounts
  useEffect(() => {


    socket.on('connection', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('chat message', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Don't forget to clean up the listeners when the component unmounts
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('chat message', message);
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className='testMessage'>
      <input
        id="inputTest"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete="off"
      />
      <button onClick={sendMessage}>Send</button>

      <ul id="messagesAll">
        {messages.map((msg, index) => (
          <div id="oneMessage" key={index}>
            <li>{msg}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Message;
