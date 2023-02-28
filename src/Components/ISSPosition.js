
import React, { useState, useEffect } from 'react';
import GoogleMap from './GoogleMap';
import AstroidPic from './AstroidPic';

function ISSPosition() {
  const [positionData, setPositionData] = useState({});

  useEffect(() => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data => setPositionData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='outter'>
            {/* <GoogleMap/> */}
            <AstroidPic />
    <div className="issCon">
      <h2>ISS Position:</h2>
      <p>Latitude: {positionData.latitude}</p>
      <p>Longitude: {positionData.longitude}</p>
      <p>Altitude: {positionData.altitude}</p>
      <p>Velocity: {positionData.velocity}</p>
      <iframe
        className="time-date"
        src="http://free.timeanddate.com/clock/i8qgeqir/n401/fs16/tc7e87d6/ftb/pd3/tt0/tw0/tm1/ts1/tb4"
        frameborder="0"
        width="100"
        height="38"
      ></iframe>
     </div>
     
    </div>
  );
 
}

export default ISSPosition;
