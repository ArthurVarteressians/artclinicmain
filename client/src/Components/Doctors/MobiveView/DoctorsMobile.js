import React from "react";
import DoctorMobile from "./DoctorMobile";
import img1 from "../img1.webp";
import img2 from "../img2.webp";
import img3 from "../img3.webp";
import img4 from "../img4.webp";

// import "./DoctorsMobile.css";

const DoctorsMobile = () => {
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
  ];
  return (
    <div className="main">
      <DoctorMobile
        img={img1}
        alt="img"
        name="M. Brandon"
        profession="Dentist"
        description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"
        social={soc1}
      />
      <DoctorMobile
        alt="img"
        img={img2}
        name="J. Aikens"
        profession="Cardiologists"
        description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"
        social={soc2}
      />
      <DoctorMobile
        alt="img"
        img={img3}
        name="K. Pauline"
        profession="Audiologists"
        description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"
        social={soc3}
      />
      <DoctorMobile
        alt="img"
        img={img4}
        name="J. Richard"
        profession="Radiologist"
        description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"
        social={soc4}
      />
    </div>
  );
};

export default DoctorsMobile;
