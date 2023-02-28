import React, { useState, useEffect } from "react";
import axios from "axios";

const NEO = ({ start_date, end_date, api_key }) => {
  const [neoData, setNeoData] = useState([]);

  // const start_date = 2023-22-02
  // const end_date = 2023-23-02

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-02-27&end_date=2023-02-28&api_key=WbRkJzJZ43olavmnr3q6aEvA1JkfCnKppzDeiEKq"
      );
      setNeoData(response.data);
    };
    fetchData();
  }, [start_date, end_date, api_key]);

  return (
    <div className="neo-con">
      {neoData.near_earth_objects && (
        <div>
          <h2 className="neo-heading">Near Earth Objects</h2>
          {Object.keys(neoData.near_earth_objects).map((date, index) => (
            <div key={index}>
              <h3 className="neo-date">Date: {date}</h3>
              <div>
                <div id="neo-card-con">
                  {neoData.near_earth_objects[date].map((neo) => (
                    <div className="neo-data" key={neo.id}>
                      <h4>Name: {neo.name}</h4>
                      <p>
                        Estimated Diameter:{" "}
                        {
                          neo.estimated_diameter.kilometers
                            .estimated_diameter_min
                        }{" "}
                        -{" "}
                        {
                          neo.estimated_diameter.kilometers
                            .estimated_diameter_max
                        }{" "}
                        km
                      </p>
                      <p>
                        Closest Approach Date:{" "}
                        {neo.close_approach_data[0].close_approach_date}
                      </p>
                      <p>
                        Miss Distance:{" "}
                        {neo.close_approach_data[0].miss_distance.kilometers} km
                      </p>
                      <p>
                        Is hazardous:{" "}
                        {neo.is_potentially_hazardous_asteroid
                          ? "true"
                          : "false"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NEO;
