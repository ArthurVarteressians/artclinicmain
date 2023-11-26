import React from "react";
import "./DoctorWeb.css";

const Doctor = ({ img, name, profession, description, social, alt }) => {
  return (
    <>
      <div className="doctorsWebcard">
        <div className="imgBox">
          <img src={img} alt={alt} />
          <div className="contentboxText">
            <h2>{name}</h2>
            <h4>{profession}</h4>
            <h5>See More!</h5>
          </div>
        </div>
        <div className="content">
          <p>{description}</p>
          <div className="soc">{social}</div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
