import { Link, NavLink } from "react-router-dom";
import authCon from "../store/authCon";
import { useContext, useState } from "react";
import solar from "../assets/solar-system.jpg";
import Overlay from "./Overlay";

const Header = () => {
  const authCtx = useContext(authCon);

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#f57145" : "",
    };
  };
  //add post will be list instead of form

  return (
    <div>
      <header className="header flex-row">
        <div className="flex-row"></div>
        <nav>
          {authCtx.token ? (
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/planets">Add Planet</Link>
              </li>
              <li>
                <button className="logout-btn" onClick={() => authCtx.login()}>
                  Login
                </button>
              </li>
            </ul>
          ) : (
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login or Sign Up</Link>
              </li>
              <li>
                <Link to="/planets">Planet Info</Link>
              </li>
            </ul>
          )}
        </nav>
        <Overlay />
      </header>
      {/* <div className="image-overlay">
    <img src={solar} className="pic-styles"/>
    </div> */}
    </div>
  );
};

export default Header;
