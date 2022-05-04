import React from 'react';
import Video from "../back.mp4";
import "./Home.css"
function Home() {
  return (
    <div>
    <h1 className='tag'>Make Border BorderLess</h1>
    <video className='background' loop autoPlay>
    <source src= { Video } type="video/mp4" />
    </video>
    </div>
  )
}

export default Home