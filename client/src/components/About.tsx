import React from "react";
import "../styles/About.css";
import rect1 from '../images/Rectangle 1.png'
import rect2 from '../images/Rectangle 2.png'
import rect3 from '../images/Rectangle 3.png'
import rect4 from '../images/Rectangle 4.png'
import rect5 from '../images/Rectangle 5.png'
import rect6 from '../images/Rectangle 6.png'
import rect7 from '../images/Rectangle 7.png'
import rect8 from '../images/Rectangle 8.png'
import rect9 from '../images/Rectangle 9.png'



export default function About (){
    return(
    

        <div className="about-us-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="group">
                            <div className="group-wrapper">
                                <div className="group-2">
                                    <div className="text-wrapper-8">Who we are.</div>
                                    <p className="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et
                                        turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel
                                        lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
                                    </p>
                                    <div className="frame">
                                        <div className="text-wrapper-9">More +</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper-10">About Us</div>
                            <div className="rectangle" />
                        </div>
                    
                       
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-11">What We Do</div>
                        <p className="text-wrapper-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis
                            scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit
                            tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
                        </p>
                        <div className="div-wrapper">
                            <div className="text-wrapper-13">More +</div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <img className="rectangle-2" alt="Rectangle" src={rect3} />
                                <img className="rectangle-3" alt="Rectangle" src={rect2} />
                                <img className="rectangle-4" alt="Rectangle" src={rect1} />
                            </div>
                        </div>
                        <div className="group-4">
                            <div className="text-wrapper-14">Since 2014</div>
                            <div className="rectangle-5" />
                        </div>
                    </div>
                    <div className="group-5">
                        <div className="group-6">
                            <div className="text-wrapper-15">When We Started</div>
                            <p className="text-wrapper-16">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis
                                scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit
                                tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
                            </p>
                            <div className="frame-2">
                                <div className="text-wrapper-13">More +</div>
                            </div>
                        </div>
                        <div className="group-7">
                            <div className="group-8">
                                <div className="overlap-group-3">
                                    <img className="rectangle-6" alt="Rectangle" src={rect2}/>
                                    <img className="rectangle-7" alt="Rectangle" src={rect1} />
                                    <img className="rectangle-8" alt="Rectangle" src={rect3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-17">Our Makers</div>
                        <p className="text-wrapper-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis
                            scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit
                            tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
                        </p>
                        <div className="group-10">
                            <img className="rectangle-9" alt="Rectangle" src={rect4} />
                            <div className="text-wrapper-19">Ebony Nash</div>
                            <div className="frame-3">

                                <div className="text-wrapper-20">Co Founder</div>
                            </div>
                        </div>
                        <div className="group-11">
                            <img className="rectangle-9" alt="Rectangle" src={rect5} />
                            <div className="text-wrapper-21">Tracy Reyes</div>
                            <div className="frame-3">
                                <div className="text-wrapper-20">COO</div>
                            </div>
                        </div>
                        <div className="group-12">
                            <img className="rectangle-10" alt="Rectangle" src={rect7} />
                            <div className="frame-3">
                                <div className="text-wrapper-20">CEO</div>
                            </div>
                            <div className="text-wrapper-22">Cory Bass</div>
                        </div>
                        <div className="group-13">
                            <img className="rectangle-9" alt="Rectangle" src={rect6} />
                            <div className="frame-3">
                                <div className="text-wrapper-20">Finance</div>
                            </div>
                            <div className="text-wrapper-23">Christina Maldonado</div>
                        </div>
                        <div className="group-14">
                            <div className="group-15" />
                            <img className="rectangle-10" alt="Rectangle" src={rect9} />
                            <div className="frame-3">
                                <div className="text-wrapper-20">CTO</div>
                            </div>
                            <div className="text-wrapper-24">Grady Thomas</div>
                        </div>
                        <div className="group-16">
                            <div className="group-17" />
                            <img className="rectangle-9" alt="Rectangle" src={rect8} />
                            <div className="frame-3">
                         
                                <div className="text-wrapper-20">Member</div>
                            </div>
                            <div className="text-wrapper-25">Gerald Kim</div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>



    )
}