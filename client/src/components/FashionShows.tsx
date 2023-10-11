import React from "react";
import '../styles/fashionShows.css'
import NavBar from "./NavBar";
import rect1 from '../images/Rectangle 1918.png'
import vec3 from '../images/aiony-haust-3TLl_97HNJo-unsplash (1) 1.png'
import Footer from "./Footer";
const FashionShows = () => {
  return (
    <div>
        <NavBar/>
      <div className="fashion-shows">
        <div className="fashion-shows-child" />
        <div className="fashion-shows1">Fashion Shows</div>
        <div className="live-now-parent">
          <div className="rectangle-parent">
            <img
              className="rectangle-icon"
              alt=""
              src={rect1}
            />
            <div className="frame-div">
              <img className="vector-icon" alt="" src="/vector3.svg" />
              <div className="div1">55</div>
            </div>
            <div className="live-parent1">
              <div className="live">Live</div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="showing-parent">
            <div className="showing">Showing :</div>
            <div className="group-parent">
              <div className="zalando-parent">
                <div className="zalando">Zalando</div>
                <img className="group-icon" alt="" src={vec3}/>
              </div>
              <img className="photo1-icon" alt="" src="/photo1@2x.png" />
            </div>
          </div>
          <div className="since-824-am">Since 8:24 am</div>
        </div>
      </div>
      
    </div>
  );
};

export default FashionShows;
