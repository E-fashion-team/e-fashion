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



export const Messages = () => {

    const [userStatus, setUserStatus] = useState(false)
    const scrollPage = useRef<HTMLDivElement | null>(null)
    const scrollMessages = useRef<HTMLDivElement | null>(null)
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState<boolean>(false)
    const [msg,setMsg]=useState([])
    const socket = io('http://localhost:5000')
    const dispatch = useDispatch()
    // const user = useSelector((state: {signIn: {user: userObj}}) => state.signIn.user)
    const messages = useSelector((state: {messages: {data: any}}) => state.messages.data)
    console.log("this is type",messages);
    
    interface userObj {
        "id": number;
        "name": string;
        "image": string;
        "email": string;
        "password": string;
        "dateOfBirth": string;
        "role": string;
    }
    
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        socket.emit('chatRoomConnection', {id: 1, name: 'torbaga'}, message);
        setMessage('');
        setUpdated(!updated)
      }
    };

    // interface Object {
    //     user: string;
    //     message: string;
    //     createdAt: string;
    // }

    const fetchMessages = (): any => {
      return socket.on('fetchChat', (data: any) => {
        console.log(data);
        setMsg(data)
          return data
        });
    };


        useEffect(()=>{
            socket.emit('sendChat')
            dispatch(setMessages(fetchMessages()));
            console.log(messages)
        }, [updated])


        

    useEffect(() => {
        scrollPage.current?.scrollIntoView()
        scrollMessages.current?.scrollIntoView({ block: "end" })
    }, [])


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
                            msg.map((message: any, i: number) => <OneMessage messageInfo={message} key={i}/>)
                        }
                        <div ref={scrollMessages}/>
                        </div>
                        <div className="group-23">
                            <div className="overlap-10">
                                <input onChange={(e) => setMessage(e.target.value)} className="text-wrapper-28" placeholder="Write a Message"/>
                                <img className="ellipse-17" alt="Ellipse" src={vec11} />
                                <img onClick={handleSendMessage} className="vector-3" alt="Vector" src={vec12} />
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
};
