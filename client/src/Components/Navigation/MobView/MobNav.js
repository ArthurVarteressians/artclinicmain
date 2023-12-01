import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/logo.webp";
import Telicon from "../WebView/emergency-call.gif";
import LoginIcon from "../WebView/profile.gif";
import "./MobNav.css";
import Mainpage from "../../Mainpage/Mainpage";
import Services from "../../ServicesLanding/WebView/ServicesLanding";
import LandingFaqs from "../../FAQS/LandingFaqs";
import Footer from "../../Footer/Footer";
import LandingFaqsAll from "../../FAQS/LandingFaqsAll";
function MobNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navWebV">
      <div className="navWebVContainer">
        <NavLink exact to="/" activeClassName="activeLink">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button className="hamburgerButton" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <div className={`navWebVLinks ${menuOpen ? "showMenu" : ""}`}>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="activeLink"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="activeLink"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AllDoctors"
                activeClassName="activeLink"
                onClick={toggleMenu}
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ServicesPage"
                activeClassName="activeLink"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <div className="iconLoginNav">
                <NavLink
                  to="/Profile"
                  activeClassName="activeLink"
                  onClick={toggleMenu}
                >
                  <img src={LoginIcon} alt="Profile" />
                </NavLink>
              </div>
            </li>
            <li>
              <div className="iconNumSe">
                <img src={Telicon} alt="Clinic Number" />
              </div>
                <span className="iconNumber">02212</span>
            </li>
          </ul>
        </div>
      </div>
      <Mainpage />
      <Services />
      <LandingFaqsAll />
      <Footer />
    </div>
  );
}

export default MobNav;
