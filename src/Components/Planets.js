import React, { useState, useContext } from "react";
import axios from "axios";

const API_URL = "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets";

const Planets = () => {
  const [searchPlanet, setSearchPlanet] = useState("");
  const [planetResults, setPlanetResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const options = {
      params: { name: searchPlanet },
      headers: {
        "X-RapidAPI-Key": "36db981753mshf7779b00ac093ddp12783fjsn6c79b9fff60c",
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.get(API_URL, options);
      console.log(res.data);
      // const { name, mass, radius, temperature, distance_light_year } = res.data;
      // const planetId = localStorage.getItem("planetId");
      // const userId = localStorage.getItem("userId");

      const planetResults = res.data.map((planet) => ({
        id: planet.id,
        name: planet.name,
        radius: planet.radius,
        mass: planet.mass,
        temperature: planet.temperature,
        distance_light_year: planet.distance_light_year
      }));
    setPlanetResults(planetResults)
    } catch (err) {
      console.log(err);
    }
  };
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
           <ul>
        {planetResults.map((planet) => (
          <li key={planet.id}>
            <label>Name:</label>{planet.name}<br/>
            <label>Raduis:</label>{planet.radius}<br/>
            <label>Mass:</label>{planet.mass}<br/>
            <label>Temperature:</label>{planet.temperature}<br/>
            <label>Light Years Away:</label>{planet.distance_light_year}<br/>
          
          </li>
        ))}
      </ul>
        <button className="planet-btn">Search</button>
        <button type="submit" className="planet-btn">
          Save
        </button>
      </form>
   
    </div>
  );
};

export default Planets;
