import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import Telicon from "./emergency-call.gif";
import Logout from "./img/right-arrow.gif";
import Payment from "./img/pos-terminal.gif";

function SchedulingNav() {
  function handleLogout() {
    localStorage.clear();
  }

  return (
    <div className="navWebV">
      <div className="navWebVContainer">
        <NavLink exact to="/" activeClassName="activeLink">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="navWebVLinks">
          {/* <li>
            <NavLink exact to="/" activeClassName="activeLink">
              Home
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/AllDoctors" activeClassName="activeLink">
              Doctors
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/Payment" activeClassName="activeLink">
              <img src={Payment} />
            </NavLink>
          </li>
          <li>
            <div className="iconLoginNav">
              <NavLink
                to="/Profile"
                activeClassName="activeLink"
                onClick={handleLogout}
              >
                <img src={Logout} />
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

export default SchedulingNav;
