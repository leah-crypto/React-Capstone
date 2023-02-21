import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Photo />
      <h1 className="landingHeading">Welcome!</h1>
      <h3 className="landingIntro">
        This page was created from my love of space and is meant <br />
        to help people track and understand more about space.
      </h3>
      <Link to="/login">
        <button className="planet-btn" id="landing-btn">
          Sign Up or Login
        </button>
      </Link>
    </div>
  );
};

export default Landing;
