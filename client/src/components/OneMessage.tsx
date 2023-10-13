import React from 'react'
import vec8 from "../images/messages/Ellipse 273.svg"
import '../styles/OneMessage.css'
import moment from 'moment'

interface userObj {
  "name": string;
  "image": string;
  "email": string;
  "password": string;
  "dateOfBirth": string;
  "role": string;
}

interface messageObj {
  id: number;
  user: userObj;
  message: string;
  createdAt: string;
}

interface Prop {
  messageInfo: any;
}


const OneMessage = (props: Prop) => {
  return (
    <div className="overlap-7">
        {/* <div className="ellipse-14" /> */}
        {/* <div className="ellipse-15" /> */}
        {props.messageInfo?.User?.image
        ? <img className="ellipse-8" alt="Ellipse" src={props.messageInfo?.User.image} />
        : <img className="ellipse-8" alt="Ellipse" src={vec8} />}
        <div className="messageContainer">
          <div className='messageInfo'>
            <div className="text-wrapper-25">{props.messageInfo?.User?.name}</div>
            <div className="text-wrapper-26">{moment(props.messageInfo?.createdAt).format('LT')}</div>
          </div>
            <p className="text-wrapper-27">{props.messageInfo.message}</p>
        </div>
    </div>
  )
}

export default OneMessage