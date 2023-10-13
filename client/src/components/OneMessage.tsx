import React from 'react'
import vec8 from "../images/messages/Ellipse 273.svg"
import '../styles/OneMessage.css'

interface Prop{
  jdidi: string;
}


const OneMessage = (props: Prop) => {
  return (
    <div className="overlap-7">
        {/* <div className="ellipse-14" /> */}
        {/* <div className="ellipse-15" /> */}
        <img className="ellipse-8" alt="Ellipse" src={vec8} />
        <div className="messageContainer">
          <div className='messageInfo'>
            <div className="text-wrapper-25">{props.jdidi}</div>
            <div className="text-wrapper-26">11:01 AM</div>
          </div>
            <p className="text-wrapper-27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, platea aliquet suscipit pellentesque.
            </p>
        </div>
    </div>
  )
}

export default OneMessage