import React from "react";
import img1 from "../img1.webp";
import img2 from "../img2.webp";
import img3 from "../img3.webp";
import img4 from "../img4.webp";
import img5 from "../img5.webp";
import img6 from "../img6.webp";

import Landingbg from "./b1.webp";
import "./DoctorWeb.css";
import Doctor from "./DoctorWeb";

const DoctorsWeb = () => {
  const soc1 = [
    <a>
      <i class="fa-brands fa-instagram"></i>
    </a>,
    <a>
      <i class="fa-brands fa-facebook"></i>
    </a>,
    <a>
      <i class="fa-brands fa-linkedin"></i>
    </a>,
  ];
  const soc2 = [
    <a>
      <i class="fa-brands fa-instagram"></i>
    </a>,
    <a>
      <i class="fa-brands fa-facebook"></i>
    </a>,
  ];
  const soc3 = [
    <a>
      <i class="fa-brands fa-instagram"></i>
    </a>,
    <a>
      <i class="fa-brands fa-facebook"></i>
    </a>,
    <a>
      <i class="fa-brands fa-linkedin"></i>
    </a>,
  ];
  const soc4 = [
    <a>
      <i class="fa-brands fa-facebook"></i>
    </a>,
    <a>
      <i class="fa-brands fa-linkedin"></i>
    </a>,
  ];
  const soc5 = [
    <a>
      <i class="fa-brands fa-instagram"></i>
    </a>,
        <a>
        <i class="fa-brands fa-linkedin"></i>
      </a>,
  ];
  const soc6 = [
    <a>
      <i class="fa-brands fa-facebook"></i>
    </a>,
    <a>
      <i class="fa-brands fa-linkedin"></i>
    </a>,
  ];
  return (
    <div
      className="DoctorsWebBG"
      style={{ backgroundImage: `url(${Landingbg})` }}
    >
      <div className="DoctorsWebPageBody">
        <div className="doctorsWebContainer">
          <Doctor
            img={img1}
            alt="img"
            name="A. Kim"
            profession="Dentist"
            description="Skilled in comprehensive dental care, from check-ups to advanced procedures like fillings and root canals. Ensures oral health and beautiful smiles."
            social={soc1}
          />
          <Doctor
            img={img2}
            alt="img"
            name="H. Jhon"
            profession="Cardiologists"
            description="Expert in diagnosing and treating heart conditions. Utilizes cutting-edge technology and patient-centered approach for optimal heart health."
            social={soc2}
          />
          <Doctor
            img={img3}
            alt="img"
            name="J. Alik"
            profession="Neurologist"
            description="Skilled in diagnosing and treating neurological conditions affecting the brain and nervous system. Provides personalized care for optimal brain health."
            social={soc3}
          />
          <Doctor
            img={img4}
            alt="img"
            name="P. Lee"
            profession="Internal Medicine"
            description="Providing expert care for adults, managing a wide range of health conditions,and promoting overall health through comprehensive care."
            social={soc4}
          />
          <Doctor
            img={img5}
            alt="img"
            name="B. Gaya"
            profession="Pulmonologist"
            description="Specializes in diagnosing and treating respiratory conditions. Expert in managing lung health, including asthma, chronic bronchitis, and pneumonia. "
            social={soc5}
          />
          <Doctor
            img={img6}
            alt="img"
            name="C. Richard"
            profession="Radiologist"
            description="Expert in interpreting medical imaging studies, such as X-rays, CT scans, and MRI scans. Provides accurate diagnoses for various medical conditions."
            social={soc6}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsWeb;
