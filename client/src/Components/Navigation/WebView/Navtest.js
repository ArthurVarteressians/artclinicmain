import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/logo.webp";
import Telicon from "./emergency-call.gif";
import LoginIcon from "./profile.gif";

function Navtest() {
  return (
    <div className="navWebV">
      <div className="navWebVContainer">
        <NavLink exact to="/" activeClassName="activeLink">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="navWebVLinks">
          <li>
            <NavLink exact to="/" activeClassName="activeLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" activeClassName="activeLink">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/AllDoctors" activeClassName="activeLink">
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/ServicesPage" activeClassName="activeLink">
              Services
            </NavLink>
          </li>
          <li>
            <div className="iconLoginNav">
              <NavLink to="/Profile" activeClassName="activeLink">
                <img src={LoginIcon} />
                <span className="iconNumber">02212</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="iconNumSe">
              <img src={Telicon} alt="Clinic Number" />
              <span className="iconNumber">02212</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navtest;
