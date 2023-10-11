import React from 'react'
import '../styles/clientDard.css'
import danCristan from '../images/danCristan.png'
import aionyhaust from '../images/aiony-haust-.png'

const ClientCard = () => {
  return (
    <div className="clientCard ">
    <div className="clientCardSha shadow">
      <img className="immgg" src={danCristan} alt="" />
      <div className="images flex flex-c justify-center alg-center">
        <img className="logImg" src={aionyhaust} alt="Unsplash" />
        <div className="text-log">John Wick</div>
      </div>
      <div  className="parag">
      <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      </div>
    <button className="butt">
<div className="butt-wrapper">+ Follow</div>
</button>
    </div>
  </div>
  )
}

export default ClientCard