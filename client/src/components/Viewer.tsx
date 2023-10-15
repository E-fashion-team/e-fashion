// Viewer.tsx
import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';
import NavBar from './NavBar';
import './../styles/FasShow.css';
function Viewer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
   const peer = new Peer('signal');
     
    peer.on('call', (call:any) => {
      console.log('Call')
      navigator.mediaDevices.getUserMedia({ video: false, audio: true })

      .then((stream) => {
          console.log('stream', stream);
          
          call.answer(stream);
          call.on('stream', (remoteStream:any) => {
            // Display remote stream
            if (videoRef.current) {
              videoRef.current.srcObject = remoteStream;
            }
          });
        })
        .catch((error) => {
          console.error('Error accessing media devices: ', error);
        });
    });
  }, []);

  
return (
  
  <div>
    <NavBar/>
    <div className="fashion-show">
        <div className="overlap-wrapper">
            <div className="overlap">
               
                <div className="frame-2">
                    <div className="text-wrapper-14">Mint Now</div>
                </div>
                <div className="brand-button">
                    <div className="text-wrapper-15">Zalando</div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <div className="ellipse" />
                            <img className="vector" alt="Vector" src="vector.svg" />
                        </div>
                    </div>
              
                    <div className="frame-3">
                        <div className="text-wrapper-16">Follow</div>
                    </div>
                </div>
                <div className="overlap-2">
                    <div className="group-5">
                        <div className="overlap-3">
                        <div>
                        <video ref={videoRef} autoPlay  playsInline></video>
  </div>
                        <div className="frame-7">
                            <div className="group-7">
                                <div className="group-8">
                                    <img className="vector-4" alt="Vector" src="vector-3.svg" />
                                    <div className="text-wrapper-20">Liked</div>
                                </div>
                                <div className="text-wrapper-21">12k</div>
                            </div>
                            <div className="group-9">
                                <div className="group-10">
                                    <div className="text-wrapper-22">Share</div>
                                    <img className="vector-5" alt="Vector" src="vector-4.svg" />
                                </div>
                                <div className="text-wrapper-23">3 Shares</div>
                            </div>
                        </div>
                        <p className="text-wrapper-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                   
                </div>
                <div className="group-11">
                    <div className="frame-8">
                        <img className="vector-6" alt="Vector" src="vector-5.svg" />
                        <div className="text-wrapper-25">Back to Fashion Shows</div>
                    </div>
                    <div className="overlap-4">
                        <div className="text-wrapper-26">Watching Now</div>
                    </div>
                    <div className="overlap-5">
                        <div className="frame-9">
                            <img className="vector-7" alt="Vector" src="vector-8.svg" />
                            <div className="text-wrapper-27">45</div>
                        </div>
                        <div className="frame-10">
                            <div className="text-wrapper-28">Live</div>
                            <div className="ellipse-4" />
                        </div>
                    </div>
                    <div className="overlap-6">
                        <div className="frame-9">
                            <img className="vector-7" alt="Vector" src="vector-7.svg" />
                            <div className="text-wrapper-27">35</div>
                        </div>
                        <div className="frame-10">
                            <div className="text-wrapper-28">Live</div>
                            <div className="ellipse-4" />
                        </div>
                    </div>
                    <div className="overlap-7">
                        <div className="frame-10">
                            <div className="text-wrapper-28">Live</div>
                            <div className="ellipse-4" />
                        </div>
                        <div className="frame-9">
                            <img className="vector-7" alt="Vector" src="vector-6.svg" />
                            <div className="text-wrapper-27">25</div>
                        </div>
                    </div>
                    <div className="group-12">
                        <div className="text-wrapper-29">Showing :</div>
                        <div className="group-13">
                            <div className="group-14">
                                <div className="text-wrapper-30">Zalando</div>
                                <div className="group-15">
                                    <div className="overlap-group-4">
                                        <div className="ellipse-5" />
                                        <img className="vector-8" alt="Vector" src="vector-9.svg" />
                                    </div>
                                </div>
                            </div>
                            <img className="photo-2" alt="Photo" src="image.png" />
                        </div>
                    </div>
                    <div className="group-16">
                        <div className="text-wrapper-29">Showing :</div>
                        <div className="group-13">
                            <div className="group-14">
                                <div className="text-wrapper-30">Zalando</div>
                                <div className="group-15">
                                    <div className="overlap-group-4">
                                        <div className="ellipse-5" />
                                        <img className="vector-8" alt="Vector" src="vector-10.svg" />
                                    </div>
                                </div>
                            </div>
                            <img className="photo-2" alt="Photo" src="photo-1-2.png" />
                        </div>
                    </div>
                    <div className="group-17">
                        <div className="text-wrapper-29">Showing :</div>
                        <div className="group-13">
                            <div className="group-14">
                                <div className="text-wrapper-30">Zalando</div>
                                <div className="group-15">
                                    <div className="overlap-group-4">
                                        <div className="ellipse-5" />
                                        <img className="vector-8" alt="Vector" src="vector-11.svg" />
                                    </div>
                                </div>
                            </div>
                            <img className="photo-2" alt="Photo" src="photo-1-3.png" />
                        </div>
                    </div>
                    <div className="group-18">
                        <div className="text-wrapper-29">Showing :</div>
                        <div className="group-13">
                            <div className="group-14">
                                <div className="text-wrapper-30">Zalando</div>
                                <div className="group-15">
                                    <div className="overlap-group-4">
                                        <div className="ellipse-5" />
                                        <img className="vector-8" alt="Vector" src="vector-12.svg" />
                                    </div>
                                </div>
                            </div>
                            <img className="photo-2" alt="Photo" src="photo-1-4.png" />
                        </div>
                    </div>
                    <div className="text-wrapper-31">Since 8:24 am</div>
                    <div className="text-wrapper-32">Since 9:24 am</div>
                    <div className="text-wrapper-33">Since 10:24 am</div>
                    <div className="text-wrapper-34">Since 12:24 am</div>
                </div>
                <div className="group-19">
                    <div className="overlap-8">
                        <div className="xhat">
                            <div className="overlap-9">
                                <div className="overlap-10">
                                    <div className="overlap-11">
                                        <div className="group-20">
                                            <div className="text-wrapper-35">Lorem ipsum dolor.</div>
                                            <img className="ellipse-6" alt="Ellipse" src="ellipse-260.png" />
                                        </div>
                                        <div className="group-21">
                                            <div className="text-wrapper-35">Lorem ipsum dolor.</div>
                                            <img className="ellipse-6" alt="Ellipse" src="ellipse-260-6.png" />
                                        </div>
                                        <div className="group-wrapper">
                                            <div className="group-22">
                                                <div className="overlap-group-5">
                                                    <div className="text-wrapper-36">Write a comment</div>
                                                    <img className="ellipse-7" alt="Ellipse" src="ellipse-249.png" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-11">
                                            <div className="text-wrapper-37">+23 New Messages</div>
                                        </div>
                                        <img className="vector-9" alt="Vector" src="vector-13.svg" />
                                    </div>
                                    <div className="img-wrapper">
                                        <img className="group-23" alt="Group" src="group.png" />
                                    </div>
                                </div>
                                <div className="group-24">
                                    <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <img className="ellipse-6" alt="Ellipse" src="ellipse-260-2.png" />
                                </div>
                                <div className="group-25">
                                    <div className="text-wrapper-35">Lorem ipsum dolor.</div>
                                    <img className="ellipse-6" alt="Ellipse" src="ellipse-260-3.png" />
                                </div>
                                <div className="group-26">
                                    <p className="lorem-ipsum-dolor">
                                        Lorem ipsum dolor sit amet, consectetu
                                        <br />
                                        egestas.
                                    </p>
                                    <img className="ellipse-6" alt="Ellipse" src="ellipse-260-4.png" />
                                </div>
                                <div className="group-27">
                                    <div className="text-wrapper-35">Lorem ipsum dolor.</div>
                                    <img className="ellipse-6" alt="Ellipse" src="ellipse-260-5.png" />
                                </div>
                                <div className="text-wrapper-39">Top Chat</div>
                            </div>
                            <div className="rectangle-2" />
                        </div>
                        <div className="text-wrapper-40">Representing Products</div>
                        <div className="group-28">
                            <div className="overlap-group-6">
                                <div className="text-wrapper-41">Lorem Ipsum</div>
                                <img className="img-2" alt="Fakurian design pgdw" src="fakurian-design-pgdw-bhdbpi-unsplash-1.png" />
                                <div className="text-wrapper-42">@farhan khan</div>
                                <div className="text-wrapper-43">13 Mins Ago</div>
                            </div>
                        </div>
                        <div className="group-29">
                            <div className="overlap-12">
                                <div className="text-wrapper-44">Lorem Ipsum</div>
                                <div className="text-wrapper-45">@farhan khan</div>
                                <div className="text-wrapper-46">13 Mins Ago</div>
                            </div>
                        </div>
                        <div className="frame-12">
                            <div className="text-wrapper-47">+2 New Products</div>
                        </div>
                        <div className="group-30">
                            <img className="group-23" alt="Group" src="group-2.png" />
                        </div>
                        <div className="group-31">
                            <div className="overlap-13">
                                <div className="group-32">
                                    <div className="overlap-group-6">
                                        <div className="text-wrapper-41">Lorem Ipsum</div>
                                        <div className="text-wrapper-42">@farhan khan</div>
                                        <div className="text-wrapper-43">13 Mins Ago</div>
                                    </div>
                                </div>
                                <img className="img-2" alt="Daniels joffe" src="daniels-joffe-smcktich5e-unsplash-1.png" />
                            </div>
                        </div>
                        <div className="group-33">
                            <div className="overlap-13">
                                <div className="group-32">
                                    <div className="overlap-group-6">
                                        <div className="text-wrapper-41">Lorem Ipsum</div>
                                        <div className="text-wrapper-42">@farhan khan</div>
                                        <div className="text-wrapper-43">13 Mins Ago</div>
                                    </div>
                                </div>
                                <img className="img-2" alt="Fakurian design" src="fakurian-design-lolixkjevge-unsplash-1.png" />
                            </div>
                        </div>
                        <img
                            className="ricardo-gomez-angel"
                            alt="Ricardo gomez angel"
                            src="ricardo-gomez-angel-j5gcokzdm6i-unsplash-1.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
);
}

export default Viewer;