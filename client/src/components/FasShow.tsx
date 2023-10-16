// Streamer.tsx
import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';


function Streamer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);



  useEffect(() => {
    const peer = new Peer();
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        
        }
       peer.call('signal', stream);
          console.log('video');
       

   
      })
      .catch((error) => {
        console.error('Error accessing media devices: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Streaming</h2>
      <video ref={videoRef} autoPlay muted playsInline ></video>
    </div>
  );
}

export default Streamer;
