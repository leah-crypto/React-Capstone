import React from 'react';
import solar from "../assets/universe.jpg";


// image = 

function Overlay() {
  return (
    <div className="image-overlay">
       <h1 className='overlay-heading'>Tracking the Universe</h1>
       <h3 className='overlay-heading2'>A guide to space and space like things...</h3>

      <div className="overlay">
      <img src={solar} className="pic-styles"/>
      </div>
     
      
    </div>
  );
}

export default Overlay;