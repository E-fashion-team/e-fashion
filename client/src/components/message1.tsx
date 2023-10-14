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
// import vec11 from "../../images/messages/Ellipse 251.png"
// import vec12 from "../../images/messages/send.svg"
import moment from 'moment'
import axios from 'axios';
import "../styles/messages.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const socket = io('http://localhost:5000')

interface FormData {
  id:number,
  name: string;
  email: string;
  password: string;
  image:string,
}
interface correctUser {
  name: string;
  image:string,
  message:string
}

const Chat: React.FC = () => {
  const scrollPage = useRef<HTMLDivElement | null>(null)
  const scrollMessages = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch();
//////////////////////Date///////////////////////////
const now = moment();
const formattedTime = now.format('HH:mm')
  //////////////////getUser///////////////////////////
  const userJSON: string | null = localStorage.getItem("user"); 
  const userParse:FormData = userJSON ? JSON.parse(userJSON) : null;

  const[user ,setUser] = useState<FormData>(userParse); 
  const[message ,setMessage] = useState<string>(""); 
  const[userMessage ,setUserMessage] = useState< correctUser | null>(); 
  const[arrayofuserMessages,setArrayofuserMessages]=useState< correctUser[]>([])


  // const messages = useSelector((state: { chat: { messages: string[] } }) => state.chat.messages);

 

 
  
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(addMessage(message));
      const userMessage:correctUser = { name: user.name, image: user.image, message: message };
      socket.emit('chat message', userMessage);
      setMessage('');
     

    }
  };
  
  useEffect(() => {
    socket.on('chat message', (msg:correctUser[] ) => {
      setArrayofuserMessages((prevMessages) => [...prevMessages,...msg]);
      console.log(arrayofuserMessages,"aaa")
    });
  }, []);
const getUserById=(id:number)=>{
  axios.get(`http://localhost:5000/api/user/getById/${id}`).then((response)=>{
    setUser(response.data)
    
  }).catch((error)=>{
    console.log(error)
  })


}


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
                          arrayofuserMessages.map((e,index:number) => {
                         console.log(e,"e")
                          
                            return(
                           
                            <div className="overlap-7"   key={index}>
                            {/* <div className="ellipse-14" /> */}
                            {/* <div className="ellipse-15" /> */}
                            <img className="ellipse-8" alt="Ellipse"  src={e.image}/>
                            <div className="messageContainer">
                              <div className='messageInfo'>
                                <div className="text-wrapper-25"></div>
                                <div className="text-wrapper-26">{formattedTime}{e.name} </div>
                              </div>
                                <p className="text-wrapper-27">{e.message} </p>
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
                              <img className="ellipse-17" alt="Ellipse" src={user.image} />
                              {/* this line is the send button */}
                              <img className="vector-3" alt="Vector"     onClick={handleSendMessage} />
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