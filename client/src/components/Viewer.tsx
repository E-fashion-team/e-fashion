
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
  

                        <div>
                        <video ref={videoRef} autoPlay  playsInline></video>
  </div>
      </div>                  
);
}

export default Viewer;