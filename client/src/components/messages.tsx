import React, { useState, useRef, useEffect } from "react";
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
import vec11 from "../images/messages/Ellipse 251.png"
import vec12 from "../images/messages/send.svg"


import "../styles/messages.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const Messages = () => {

    const [userStatus, setUserStatus] = useState(false)
    const [messages, setMessages] = useState([])
    const scrollPage = useRef<HTMLDivElement | null>(null)
    const scrollMessages = useRef<HTMLDivElement | null>(null)



    useEffect(() => {
        scrollPage.current?.scrollIntoView()
        scrollMessages.current?.scrollIntoView({ block: "end" })
    }, [messages])

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
                            messages.map((e) => <OneMessage jdidi={"jdidi"} key={e}/>)
                        }
                        <div ref={scrollMessages}/>
                        </div>
                        <div className="group-23">
                            <div className="overlap-10">
                                {/* this line is the message input */}
                                <input className="text-wrapper-28" placeholder="Write a Message"/>
                                <img className="ellipse-17" alt="Ellipse" src={vec11} />
                                {/* this line is the send button */}
                                <img className="vector-3" alt="Vector" src={vec12} />
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
