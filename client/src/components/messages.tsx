import { useState, useRef, useEffect } from "react";
import OneMessage from "./OneMessage";
import vec11 from "../images/messages/Ellipse 251.png"
import vec12 from "../images/messages/send.svg"
import "../styles/messages.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../store/messagesSlice';
import axios from "axios";
import {getUser}  from '../store/userSlice'; // Import the action and reducer
import { AppDispatch, RootState } from "../store";


interface FormData {
  id:number,
  name: string;
  email: string;
  password: string;
  image:string,
}

export const Messages = () => {
    const userJSON: string | null = localStorage.getItem("user"); 
    const userParse:FormData = userJSON ? JSON.parse(userJSON) : null;
    const[user, setUser] = useState<FormData>(userParse);
    // const scrollPage = useRef<HTMLDivElement | null>(null)
    // const scrollMessages = useRef<HTMLDivElement | null>(null)
    const [message, setMessage] = useState('');
    const socket = io('http://127.0.0.1:5000')
    const dispatch: AppDispatch = useDispatch()
    const messages = useSelector((state: {messages: {data: any}}) => state.messages.data)
    const userFromRedux = useSelector((state: RootState) => state.activeUser.user)
    // const userState = useSelector((state: RootState) => state.activeUser);
    // console.log("this is userId: ", user.id);
    
    useEffect(() => {
        // Dispatch the `getUser` action to fetch the user data
        dispatch(getUser(user.id));
    }, []);
    
    console.log("this is userFromRedux: ", userFromRedux);

    // interface userObj {
    //     "id": number;
    //     "name": string;
    //     "image": string;
    //     "email": string;
    //     "password": string;
    //     "dateOfBirth": string;
    //     "role": string;
    // }
    
    // interface Object {
    //     user: string;
    //     message: string;
    //     createdAt: string;
    // }

    const handleSendSocket = () => {
      if (message.trim()) {
        socket.emit('send', user, message);
        setMessage('');
      }
    };

    const handleSendDB = async () => {
      try {
        if(message.trim()) {
            const response = await axios.post('http://127.0.0.1:5000/api/message/message/1', {message: message, UserId: user.id})
            console.log('lookin for user: ', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    const fetchMessages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/api/room/messageByRoom/1')
          dispatch(setMessages(response.data[0].Messages.reverse()));
        } catch (err) {
          console.log(err)
        }
    };

    
    
    const handleSend = () => {
        handleSendSocket()
        handleSendDB()
    }
    
    useEffect(() => {
        fetchMessages()
    }, [])

    useEffect(() => {
        const listener = (user: any, message: any) => {
            console.log('received from socket: ', message);
            dispatch(setMessages([{message: message, User: user}, ...messages]));
        };
    
        socket.on('sendBack', listener);
    
        return () => {
            socket.off('sendBack', listener);
        };
    }, [messages]);
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
                            {/* <div  ref={scrollPage} /> */}
                        {
                            messages.map((message: any, i: number) => <OneMessage messageInfo={message} key={i}/>)
                        }
                        </div>
                        <div className="group-23">
                            <div className="overlap-10">
                                <input onChange={(e) => setMessage(e.target.value)} value={message} className="messagesInput" placeholder="Write a Message"/>
                                <img className="ellipse-17" alt="userImg" />
                                <img onClick={handleSend} className="vector-3" alt="sendIcon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};
