import React from "react";
import '../styles/fashionShows.css'
import NavBar from "./NavBar";
import rect1 from '../images/Rectangle 1918.png'
import vec3 from '../images/aiony-haust-3TLl_97HNJo-unsplash (1) 1.png'
import Footer from "./Footer";
const FashionShows = () => {
  return (
    <div>
      shows
        <NavBar/>
        <div>
        <div className="fashion-shows">
      <div className="fashion-shows1">Fashion Shows</div>
      <div className="live-now-parent">
        <div className="live-now">Live Now</div>
        <div className="live-parent">
          {/* <div className="live">Live</div> */}
          <div className="frame-child" />
        </div>
        <div className="rectangle-parent">
          <img className="rectangle-icon" alt="" src="/rectangle-1918@2x.png" />
          <div className="frame-div">
            <img className="vector-icon" alt="" src="/vector3.svg" />
            <div className="div1">55</div>
          </div>
        </div>
        <div className="showing-parent">
          <div className="showing">Showing :</div>
          <div className="group-parent">
            <div className="zalando-parent">
              <div className="zalando">Zalando</div>
              <img className="group-icon" alt="" src="/group-48095470.svg" />
            </div>
            <img className="photo1-icon" alt="" src="/photo1@2x.png" />
          </div>
        </div>
        <div className="since-824-am">Since 8:24 am</div>
      </div>
  
        
       
     
      <div className="upcoming-shows-parent">
        <div className="upcoming-shows">Upcoming Shows</div>
        <img className="group-child4" alt="" src="/rectangle-1922@2x.png" />
        <div className="today-8-pm">Today 8 PM</div>
        {/* <div className="coming-soon">Coming Soon</div> */}
        <div className="showing-parent2">
          <div className="showing">Showing :</div>
          <div className="group-parent">
            <div className="zalando-parent">
              <div className="zalando">Zalando</div>
              <img className="group-child8" alt="" src="/group-480954704.svg" />
            </div>
            <img className="photo1-icon" alt="" src="/photo14@2x.png" />
          </div>
        </div>
      </div>



      <div className="previous-shows-parent">
        <div className="upcoming-shows">Previous Shows</div>
        <img className="group-child4" alt="" src="/rectangle-1926@2x.png" />
        
        <div className="mins-ago">18 Mins Ago</div>
    
        <div className="group-parent6">
          <div className="showed-parent">
            <div className="showing">Showed :</div>
            <div className="group-parent7">
              <div className="zalando-parent">
                <div className="zalando">Zalando</div>
                <img className="group-icon" alt="" src="/group-480954708.svg" />
              </div>
              
            </div>
          </div>
        </div>


        
      </div>
      <div className="line-parent">
        <div className="line-div" />
        <div className="group-child20" />
        <button className="creators-brands-wrapper">
          <div className="creators-brands">Creators Brands</div>
        </button>

        <button className="established-brands-wrapper">
          <div className="creators-brands">Established Brands</div>
        </button>
      </div>
     
      
    </div>
    </div>
    <div>
      
    </div>
    </div>
    
  );
};

export default FashionShows;
