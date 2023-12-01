import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.webp";
import Logout from "./right-arrow.gif";

function ManagerNav() {
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
          <li>
            <div className="iconLoginNav">
              <NavLink
                to="/Admin"
                activeClassName="activeLink"
                onClick={handleLogout}
              >
                <img src={Logout} />
              </NavLink>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default ManagerNav;
