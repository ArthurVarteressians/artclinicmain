import React, { useEffect } from "react";
import "./ServicesLanding.css";
import img1 from "../1.webp";
import img2 from "../2.webp";
import img3 from "../3.webp";
import HowItWorks from "../../HowItWorks/HowItWorks";
import "../../Sass/LandingpageButton.scss";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/ServicesPage");
  };
  return (
    <>
      <div className="ServicesLWeb">
        <div className="ServicesLpageBody">
          <div className="ServicesLHeader">
            <h1>Why choose us?</h1>
          </div>
          <div className="ServicesLContainer">
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img1} alt="It's one of our clinic Services " />
                <h4>Years of experience</h4>
                <p>
                  With a wealth of experience in our field, we bring expertise
                  and knowledge to every service we provide
                </p>
              </div>
            </div>
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img2} alt="It's one of our clinic Services " />
                <h4>Modern equipment</h4>
                <p>
                  Our advanced technology and equipment ensure
                  precise and efficient services, delivering optimal results for
                  our patients
                </p>
              </div>
            </div>
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img3} alt="It's one of our clinic Services " />
                <h4>Caring Personnel</h4>
                <p>
                  Our compassionate team provides personalized care Your
                  well-being is our top priority
                </p>
              </div>
            </div>
          </div>
          <button onClick={handleClick}>Explore More</button>
        </div>
        <hr className="landingServicesDivider" />
        <HowItWorks />
      </div>
    </>
  );
};
export default Services;
