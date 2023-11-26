import React, { useState } from "react";
import CallRequests from "../Getinfopage/CallRequests/CallRequests";
import GetPatientInformations from "../Getinfopage/Patientlist/GetPatientInformations";
import "./FullManagerSection.css";
import ManagerNav from "../ManagerNav/ManagerNav";
import Footer from "../../Footer/Footer";
import Calendar from "../AppointmentChart/Calendar";

function FullManagerSecion() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const handlePatientInformationClick = () => {
    setActiveComponent("patientInformations");
  };

  return (
    <div className="managerContainer">
      <ManagerNav />
      <div className="managerSectionBody">
        <div className="subheader">
          <button
            className={activeComponent === "patientInformations" ? "active" : ""}
            onClick={handlePatientInformationClick}
          >
            Patient Information
          </button>
          <button
            className={activeComponent === "monthlyClientCounts" ? "active" : ""}
            onClick={() => handleClick("monthlyClientCounts")}
          >
            Monthly Report
          </button>
          <button
            className={activeComponent === "callRequests" ? "active" : ""}
            onClick={() => handleClick("callRequests")}
          >
            Call Requests
          </button>
        </div>
        {activeComponent === "callRequests" && <CallRequests />}
        {activeComponent === "monthlyClientCounts" && <Calendar />}
        {activeComponent === "patientInformations" && <GetPatientInformations />}
      </div>
      <Footer />
    </div>
  );
}

export default FullManagerSecion;
