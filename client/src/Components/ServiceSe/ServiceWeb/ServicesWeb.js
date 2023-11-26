import React, { useEffect } from "react";
import "./ServicesWeb.css";
import img1 from "../img1.png";
import img3 from "../img3.png";
import img4 from "../img4.png";
import img5 from "../img5.png";
import { Link, useNavigate } from "react-router-dom";

const ServicesWeb = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/Profile");
  };

  return (
    <div>
      <div class="servicesWebMain">
        <div class="service1">
          <img src={img1} alt="Service1" />
          <p>
            Our clinic provides comprehensive cardiovascular care, focusing on
            the health of your heart. Our expert medical team offers a range of
            services, including heart health assessments, diagnostics, and
            personalized treatment plans. We are committed to helping you
            maintain a healthy heart and prevent cardiovascular diseases,
            ensuring your overall well-being.
          </p>
        </div>

        <div class="service2">
          <p>
            We prioritize brain health and offer specialized
            services to address neurological concerns. Our experienced
            neurologists provide thorough evaluations, diagnostics, and advanced
            treatment options for conditions such as migraines, seizures,
            dementia, and more. Trust us to provide expert care for your brain
            health needs.
          </p>
          <img src={img5} alt="service2" />
        </div>
        <div class="service3">
          <img src={img3} alt="service3" />
          <p>
            Oral health is a crucial aspect of overall wellness, and our clinic
            offers comprehensive dental services to ensure your oral health is
            well taken care of. From routine dental cleanings and check-ups to
            advanced restorative procedures, our skilled dentists provide
            personalized care to help you achieve a healthy and beautiful smile.
          </p>
        </div>
        <div class="service4">
          <p>
            Our clinic specializes in respiratory health, offering comprehensive
            services for conditions affecting the lungs and respiratory system.
            Our team of pulmonary specialists provides thorough evaluations,
            diagnostics, and individualized treatment plans for conditions such
            as asthma, COPD, lung infections, and more. Count on us for expert
            care to keep your lungs healthy and breathing easy.
          </p>
          <img src={img4} alt="service4" />
        </div>
        <button onClick={handleClick}>Schedule A Meeting</button>
      </div>
    </div>
  );
};

export default ServicesWeb;
