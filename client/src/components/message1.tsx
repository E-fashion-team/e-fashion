import React, { useState,useEffect,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatSlice';
import io from 'socket.io-client';
import OneMessage from "./OneMessage";
import vec from "../images/messages/Vector (2).svg"
import vec1 from "../images/messages/Vector.svg"
import vec2 from '../images/messages/Group.svg'
import vec3 from "../images/messages/Group (1).svg"
import vec4 from "../images/messages/Ellipse 269.svg"
import vec5 from "../images/messages/Ellipse 270.svg"
import vec6 from "../images/messages/Ellipse 271.svg"
import vec7 from "../images/messages/Ellipse 272.svg"
import vec9 from "../images/messages/Ellipse 274.svg"
import vec10 from "../images/messages/Ellipse 275.svg"
import vec11 from "../../images/messages/Ellipse 251.png"
import vec12 from "../../images/messages/send.svg"


import "../styles/messages.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const socket = io('http://localhost:5000')

const Chat: React.FC = () => {
  const scrollPage = useRef<HTMLDivElement | null>(null)
  const scrollMessages = useRef<HTMLDivElement | null>(null)
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
},[])


return (<div>
  <div>
      <NavBar/>
  </div>
      <div className="messages">
          <div className="overlap-wrapper">
              <div className="overlap">
                  <div className="overlap-2">
                      <div className="text-wrapper-14">Messages</div>
                      <div className="overlap-2">
                          <div className="line-6"/>
                          <div className="line-7" />
                          <div className="line-8" />
                          <div className="line-9" />
                          <div className="overlap-group-wrapper">
                              <div className="overlap-3">
                                  <div className="group-12">
                                      <div className="group-13">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="overlap-9">
                      {
                          receiveMeesage.map((e) => {
                            console.log(e)
                            return(
                           
                            <div className="overlap-7">
                            {/* <div className="ellipse-14" /> */}
                            {/* <div className="ellipse-15" /> */}
                            <img className="ellipse-8" alt="Ellipse" />
                            <div className="messageContainer">
                              <div className='messageInfo'>
                                <div className="text-wrapper-25"></div>
                                <div className="text-wrapper-26">11:01 AM</div>
                              </div>
                                <p className="text-wrapper-27">{e} </p>
                            </div>
                        </div>
                          )} )
       
                          
                          }
                          
                          
                      
                      <div ref={scrollMessages}/>
                      </div>
                      <div className="group-23">
                          <div className="overlap-10">
                              {/* this line is the message input */}
                              <input className="text-wrapper-28" placeholder="Write a Message" type="text"  value={message}
     onChange={(e) => setMessage(e.target.value)}  />
                              <img className="ellipse-17" alt="Ellipse" src={vec11} />
                              {/* this line is the send button */}
                              <img className="vector-3" alt="Vector" src={vec12}    onClick={handleSendMessage} />
                          </div>
                          <div  ref={scrollPage} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
  );
 

  // return (
  //   <div>
  //     <div className="chat-messages">
  //       {receiveMeesage.map((msg, index) => (
  //         <div key={index}>{msg}</div>
  //       ))}
  //     </div>
  //     <input
  //       type="text"
  //       value={message}
  //       onChange={(e) => setMessage(e.target.value)}
  //     />
  //     <button onClick={handleSendMessage}>Send</button>
  //   </div>
  // );




  
};

export default Chat;