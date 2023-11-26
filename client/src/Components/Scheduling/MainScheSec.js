import React, { useState, useEffect } from "react";
import Cal from "./Calendar";
import "./Cal.css";
import "./Calender.css";
import SchedulingNav from "./SchedulingNav";
import Footer from "../Footer/Footer";
import Under from "./Under";
import UserAppointment from "./UserAppontmen/UserApp";
import Axios from "axios";
import End_point from "../../Baseurl";
function Calendar() {
  const [showAppointmentSection, setShowAppointmentSection] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [showAppointmentHistorySection, setShowAppointmentHistorySection] =
    useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientPhonenumber, setPatientPhonenumber] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientId,setPatientID] = useState("");
  const [error, setError] = useState(null);

  const handleAppointmentClick = () => {
    setShowAppointmentSection(true);
    setShowPaymentSection(false);
    setShowAppointmentHistorySection(false);
  };

  const handlePaymentClick = () => {
    setShowAppointmentSection(false);
    setShowPaymentSection(true);
    setShowAppointmentHistorySection(false);
  };

  const handleAppointmentHistoryClick = () => {
    setShowAppointmentSection(false);
    setShowPaymentSection(false);
    setShowAppointmentHistorySection(true);
  };

  const patientInformation = () => {
    Axios.get(`${End_point}/patientInformation`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to retrieve patient information");
        }
        const data = response.data;
        setPatientName(data.name);
        setPatientPhonenumber(data.phoneNumber);
        setPatientEmail(data.email);
        setPatientID(data.id)
      })
      .catch((error) => setError(error.response.data.message));
  };

  useEffect(() => {
    patientInformation();
  }, []);

  return (
    <>
      <SchedulingNav />
      <div className="Mainmain">
        <div className="Mainmain__left">
          <div className="mainPatientInfoSec">
            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Welcome dear:{" "}
              </span>
              {patientName}
            </p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Phone Number:{" "}
              </span>
              {patientPhonenumber}
            </p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Email:{" "}
              </span>
              {patientEmail}
            </p>

            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Patient  ID:{" "}
              </span>
              {patientId}
            </p>
          </div>{" "}
        </div>

        <div className="SchedulingBtns">
          <button onClick={handleAppointmentClick}>Make an Appointment</button>
          <button onClick={handleAppointmentHistoryClick}>
            Appointment History
          </button>
          <button onClick={handlePaymentClick}>Payment History</button>
        </div>
        {showAppointmentSection && <Cal />}
        {showPaymentSection && <Under />}
        {showAppointmentHistorySection && <UserAppointment />}
      </div>
      <Footer />
    </>
  );
}
export default Calendar;
