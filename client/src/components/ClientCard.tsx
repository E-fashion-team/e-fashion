import React from "react";
import "../styles/clientDard.css";
import danCristan from "../images/danCristan.png";
import aionyhaust from "../images/aiony-haust-.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const ClientCard = () => {

  return (
    <div>
    <NavBar/>
    <div className="clientCard ">
      <div className="clientCardSha shadow">
        <img className="immgg" src={danCristan} alt="" />
        <div className="images flex flex-c justify-center alg-center">
          <img className="logImg" src={aionyhaust} alt="Unsplash" />
          <div className="text-log">John Wick</div>
        </div>
        <div className="parag">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button className="butt">
          <div className="butt-wrapper">+ Follow</div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ClientCard;
