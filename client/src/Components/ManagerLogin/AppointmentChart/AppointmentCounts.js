import React, { useEffect, useState } from "react";
import Axios from "axios";
import End_point from "../../../Baseurl";

const AppointmentCounts = () => {
  const [appointmentCounts, setAppointmentCounts] = useState([]);

  useEffect(() => {
    Axios.get(`${End_point}/appointmentCounts`)
      .then((response) => {
        setAppointmentCounts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Appointment Counts</h2>
      <ul>
        {appointmentCounts.map((appointment) => (
          <li key={appointment.doctorId}>
            Doctor ID: {appointment.id} - Count: {appointment.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentCounts;
