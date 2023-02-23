import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NEO = ({ start_date, end_date, api_key }) => {
    
const [neoData, setNeoData] = useState([]);

const start_date = 2023-22-02
const end_date = 2023-23-02

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=api_key=WbRkJzJZ43olavmnr3q6aEvA1JkfCnKppzDeiEKq'
      );
      setNeoData(response.data);
    };
    fetchData();
  }, [start_date, end_date, api_key]);

  return (
    <div>
      {neoData.near_earth_objects && (
        <div>
          <h2>Near Earth Objects</h2>
          {Object.keys(neoData.near_earth_objects).map((date, index) => (
            <div key={index}>
              <h3>{date}</h3>
              <ul>
                {neoData.near_earth_objects[date].map((neo) => (
                  <li key={neo.id}>
                    <h4>{neo.name}</h4>
                    <p>Estimated Diameter: {neo.estimated_diameter.kilometers.estimated_diameter_min} - {neo.estimated_diameter.kilometers.estimated_diameter_max} km</p>
                    <p>Closest Approach Date: {neo.close_approach_data[0].close_approach_date}</p>
                    <p>Miss Distance: {neo.close_approach_data[0].miss_distance.kilometers} km</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NEO;