import React, { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard";

const API_URL = "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets";
const base_URL = "http://localhost:4000";

const Planets = () => {
  const [searchPlanet, setSearchPlanet] = useState("");
  const [planetResults, setPlanetResults] = useState([]);
  const [userPlanets, setUserPlanets] = useState([]);

  const JWTToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`${base_URL}/userlists/${userId}`)
      .then((res) => {
        setUserPlanets(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleSearch();
  }, []);

  const handleSearch = () => {
    const options = {
      params: { name: searchPlanet },
      headers: {
        "X-RapidAPI-Key": "36db981753mshf7779b00ac093ddp12783fjsn6c79b9fff60c", //put in .env later
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    };

    console.log("in try before axios", searchPlanet);

    axios
      .get(API_URL, options)
      .then((res) => res.data)
      .then((res) => {
        setPlanetResults(...res);
        console.log(planetResults);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSavePlanet = ({
    name,
    mass,
    radius,
    distance_light_year,
    temperature,
  }) => {
    const body = {
      name,
      mass,
      radius,
      distance_light_year,
      temperature,
      userId: +userId,
    };
    // console.log(body);
    axios
      .post(`${base_URL}/lists`, body, {
        headers: {
          authorization: JWTToken,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("itemSaved");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const planetSearch = userPlanets.map((planet, index) => (
    <PlanetCard planet={planet} key={index} />
  ));
  // console.log(planetSearch)
  return (
    <div>
      <div className="planets-cont">
        <div className="planets-form">
          <label>
            Planet
            <input
              type="text"
              value={searchPlanet}
              onChange={(e) => setSearchPlanet(e.target.value)}
              className="planet-searchbar"
            />
          </label>
          {/* {planetResults} */}
          {/* <div className="planet-btn-con"> */}
          <button className="planet-btn" onClick={handleSearch}>
            Search
          </button>
          {/* </div> */}
          {!Array.isArray(planetResults) && (
            <div>
              <p>Name: {planetResults.name}</p>
              <p>Mass: {planetResults.mass}</p>
              <p>Raduis: {planetResults.radius}</p>
              <p>Temperature: {planetResults.temperature}</p>
              <p>Light Years Away: {planetResults.distance_light_year}</p>
              <div className="planet-btn-con">
              <button
                type="submit"
                className="planet-btn"
                onClick={() => handleSavePlanet(planetResults)}
              >
                Save
              </button>
            </div>
            </div>
          )}
        </div>
      </div>
      <div className="planet-planet-card">{planetSearch}</div>
    </div>
  );
};

export default Planets;
