import React, { useState } from "react";
import "./DoctorsMobile.css";

const DoctorMobile = ({ img, name, alt, profession, description, social }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="main">
      <div className="mainCard" onClick={handleClick}>
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p className="des">{profession}</p>
        <div className={`${active ? "opened" : "close"}`}>
          <div className="contentMore">
            <p>{description}</p>
          </div>
          <div className="soc">{social}</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMobile;
