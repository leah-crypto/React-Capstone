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
  // `${base_URL}/lists`,
  // userPlanets(req.body());
  // userPlanets.body =

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
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const options = {
      params: { name: searchPlanet },
      headers: {
        "X-RapidAPI-Key": "36db981753mshf7779b00ac093ddp12783fjsn6c79b9fff60c", //put in .env later
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.get(API_URL, options);
      // console.log(res.data);
      // const { name, mass, radius, temperature, distance_light_year } = res.data;
      // const planetId = localStorage.getItem("planetId");

      const planetRes = [...res.data];

      // console.log(planetRes);

      setPlanetResults(planetRes);
    } catch (err) {
      console.log(err);
    }
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
      .catch((err) => {
        console.log(err);
      });
  };

  const planetSearch = planetResults.map((planet) => (
    <PlanetCard handleSavePlanet={handleSavePlanet} planet={planet} />
  ));

  return (
    <div className="planets-cont">
      <form className="planets-form" onSubmit={handleSearch}>
        <label>
          Planet
          <input
            type="text"
            value={searchPlanet}
            onChange={(e) => setSearchPlanet(e.target.value)}
            className="planet-searchbar"
          />
        </label>

        {planetResults && planetSearch}
        <button className="planet-btn">Search</button>
      </form>
    </div>
  );
};

export default Planets;
