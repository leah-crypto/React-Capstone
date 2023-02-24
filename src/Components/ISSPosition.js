// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ISSPosition = () => {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     const fetchPositions = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.wheretheiss.at/v1/satellites/25544"
//         );
//         setPositions(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchPositions();
//   }, []);

//   return (
//     <div>
//       <div className="issCon">
//       <h2 className="issHeading">ISS Position</h2>
//       {positions.map((position) => (
//         <div className="issdata" key={position.timestamp}>
//           {/* <p>Timestamp: {position.timestamp}</p> */}
//           <p>Latitude: {position.latitude}</p>
//           <p>Longitude: {position.longitude}</p>
//           <p>Altitude: {position.altitude}</p>
//           <p>Visibility: {position.visibility}</p>
//           <p>Velocity: {position.velocity}</p>
//         </div>
//       ))}
//       </div>
//       {/* <iframe src="http://free.timeanddate.com/clock/i8qgch9b/n401/fs19/tce2e9f5/pce2e9f5/ftb/pd2/tt0/tw0/tm1/ts1/tb4" frameborder="0" width="118" height="46"></iframe> */}
//       <iframe
//         className="time-date"
//         src="http://free.timeanddate.com/clock/i8qgeqir/n401/fs16/tc7e87d6/ftb/pd3/tt0/tw0/tm1/ts1/tb4"
//         frameborder="0"
//         width="100"
//         height="38"
//       ></iframe>
//     </div>
//   );
// };

// export default ISSPosition;

import React, { useState, useEffect } from 'react';

function ISSPosition() {
  const [positionData, setPositionData] = useState(null);

  useEffect(() => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data => setPositionData(data))
      .catch(error => console.log(error));
  }, []);

  if (!positionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='outter'>
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
