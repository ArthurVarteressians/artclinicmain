import React from "react";
import "./HowItWorks.css";
import calender from "./assets/calendar.gif";
import checklist from "./assets/checklist.gif";
import medicien from "./assets/medicine.gif";
import stethsocpme from "./assets/stethoscope.gif";
import ".././Sass/LandingpageButton.scss";
import { Link, useNavigate } from "react-router-dom";

function HowItWorks() {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/Profile");
  };
  return (
    <div className="howItWorkL">
      <div className="howItWorkLSec">
        <div className="howItWorkLSecHeader">
          <h4>It's easy to get started</h4>
          <h1>Four easy steps</h1>
        </div>
        <div className="howItWorksLIcons">
          <div className="sec1">
            <img src={checklist} />
            <p>Create An Account</p>
          </div>
          <div className="sec1">
            <img src={calender} />
            <p>Schedule Meeting</p>
          </div>
          <div className="sec1">
            <img src={stethsocpme} />
            <p>Get Cured</p>
          </div>
          <div className="sec1">
            <img src={medicien} />
            <p>Happy life</p>
          </div>
        </div>

        <button onClick={handleClick} className="howItWorkLBtn">
          Make An Appontment
        </button>
      </div>
    </div>
  );
}

export default HowItWorks;
