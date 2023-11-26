import React from "react";
import Gif from "./website-maintenance.gif";
import "./Calender.css"
const Under = () => {
  return (
    <div>
      <h1> We are under maintenance</h1>
      <img className="UnderMainGif" src={Gif} />
    </div>
  );
};

export default Under;
