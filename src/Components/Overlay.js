import React from 'react';
// import './App.css';
import solar from "../assets/solar-system.jpg";


// image = 

function Overlay() {
  return (
    <div className="image-overlay">
       <h2 className='overlay-heading'>Tracking the Universe</h2>

      <div className="overlay"
      style={{ position: 'absolute'}}>
       
        </div>
      <img src={solar} className="pic-styles"/>
      
    </div>
  );
}

export default Overlay;