import React from "react";
// import Planets from "./Planets"

const PlanetCard = ({ planet, handleSavePlanet }) => {
  return (
    <div>
      <ul key={planet.id}>
        <li>
          {" "}
          <label>Name:</label>
          {planet.name}{" "}
        </li>
        <li>
          {" "}
          <label>Mass:</label>
          {planet.mass}
        </li>
        <li>
          {" "}
          <label>Temperature:</label>
          {planet.temperature}
        </li>
        <li>
          {" "}
          <label>Light Years Away:</label>
          {planet.distance_light_year}
        </li>
        <li>
          {" "}
          <label>Raduis:</label>
          {planet.radius}
        </li>
      </ul>

      <button
        type="submit"
        className="planet-btn"
        onClick={() => handleSavePlanet(planet)}
      >
        Save
      </button>
    </div>
  );
};

export default PlanetCard;
