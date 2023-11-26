import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./UserApp.css";
import End_point from "../../../Baseurl";
const UserAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointmentHistory();
  }, []);

  const fetchAppointmentHistory = () => {
    Axios.get(`${End_point}/PatientAppointmentHistory`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to retrieve appointment history");
        }
        setAppointments(response.data);
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div className="mainAppointmenthisttorySection">
      <div>
        {appointments.map((appointment, index) => (
          <div key={appointment.appointmentnumber} className="grtidTest">
            <h2>Appointment Number: {index + 1}</h2>
            <h5>
              Doctor Full Name:
              <span
                style={{
                  color: "blue",
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "2px",
                  borderRadius: "8px",
                }}
              >
                {appointment.fullname}{" "}
              </span>
            </h5>
            <h5>
              Department:
              <span
                style={{
                  color: "blue",
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "2px",
                  borderRadius: "8px",
                }}
              >
                {appointment.department}{" "}
              </span>
            </h5>
            <h5>
              Appointment Date:
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  padding: "2px",
                  borderRadius: "8px",
                }}
              >
                {appointment.appointment_date}{" "}
              </span>
            </h5>
            <h5>
              Registration Date:
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  padding: "2px",
                  borderRadius: "8px",
                }}
              >
                {appointment.registeration_date}{" "}
              </span>
            </h5>

            <p
              className={`status ${
                appointment.appointment_status === 1 ? "closed" : "in-progress"
              }`}
            >
              Status:
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "2px",
                  borderRadius: "8px",
                }}
              >
                {appointment.appointment_status === 1 ? "Close" : "In Progress"}{" "}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppointment;
