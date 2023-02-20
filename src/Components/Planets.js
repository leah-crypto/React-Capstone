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
      const { name, mass, radius, temperature, distance_light_year } = res.data;
      const planetId = localStorage.getItem("planetId");
      const userId = localStorage.getItem("userId");

      // await axios.post("/api/planets", {
      //   userId,
      //   name,
      //   mass,
      //   radius,
      //   temperature,
      //   distance_light_year

      // });
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
        <br></br>
        <label>Name:</label>
        <br></br>
        <label>Radius:</label>
        <br></br>
        <label>Mass:</label>
        <br></br>
        <label>Temp:</label>
        <br></br>
        <label>Light Years Away:</label>
        <br></br>
        <br></br>
        <button className="planet-btn">Search</button>
        <button type="submit" className="planet-btn">
          Save
        </button>
      </form>
      <ul>
        {planetResults.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

//axios call should be made on the search button

export default Planets;
