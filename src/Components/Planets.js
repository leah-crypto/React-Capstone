import React, { useState, useContext } from "react";
import axios from "axios";
import Photo from "./Photo";

const Planets = () => {
  const [searchPlanet, setSearchPlanet] = useState("");
  const [planetResults, setPlanetResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const res = await fetch("https://api.api-ninjas.com/v1/planets?", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "planets-by-api-ninjas.p.rapidapi.com",
        "x-rapidapi-key":
          "api_key=36db981753mshf7779b00ac093ddp12783fjsn6c79b9fff60c",
      },
    });

    const data = await res.json();
    setPlanetResults(data);
  };
  return (
    <div className="planets-cont">
      <Photo />
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
        <br></br>
        <br></br>
        <label>Mass</label>
        <br></br>
        <br></br>
        <label>Temp</label>
        <br></br>
        <br></br>
        <label>Light Years Away</label>
        <br></br>
        <br></br>
        <label>Radius</label>
        <br></br>
        <br></br>
        <button>Search</button>
        <button type='submit'>Save</button>
      </form>
      <ul>
        {planetResults.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
