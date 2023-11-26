import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./DoctorAppointments.css";
import End_point from "../../../../Baseurl";
const DoctorAppointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await Axios.get(`${End_point}/getDoctorsList`);
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointments = async (doctorId) => {
    try {
      const response = await Axios.get(
        `${End_point}/appointmentss?doctorId=${doctorId}`
      );
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDoctorChange = (event) => {
    const doctorId = event.target.value;
    setSelectedDoctor(doctorId);
    fetchAppointments(doctorId);
  };

  const totalAppointments = appointments.length;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div
      style={{ padding: "10px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <h2>Doctor Appointments</h2>
      <select value={selectedDoctor} onChange={handleDoctorChange}>
        <option value="">Select a Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.doctor_id} value={doctor.doctor_id}>
            {doctor.fullname}
          </option>
        ))}
      </select>

      {appointments.length > 0 ? (
        <div>
          <p>
            Total Appointments:{" "}
            <span style={{ fontWeight: "bold" }}> {totalAppointments}</span>
          </p>
          <div className="appointment-grid">
            {appointments.map((appointment) => (
              <div
                key={appointment.appointmentNumber}
                className="appointment-card"
              >
                <div className="card-body">
                  <p>
                    <span className="label">Patient ID: </span>
                    <span className="value"> {appointment.patient_id}</span>
                  </p>

                  <p>
                    <span className="label">Patient full name:</span>{" "}
                    <span className="value">{appointment.patient_name}</span>
                  </p>
                  <p>
                    <span className="label">Patient Phone Number:</span>{" "}
                    <span className="value">
                      {appointment.patient_phone_number}
                    </span>
                  </p>
                  <p>
                    <span className="label"> Appointment Date: </span>{" "}
                    <span className="value">
                      {formatDate(appointment.appointment_date)}
                    </span>
                  </p>
                  <p>
                    <span className="label">Update Date: </span>{" "}
                    <span className="value">
                      {formatDate(appointment.update_date)}
                    </span>
                  </p>
                  <p>
                    <span className="label"> Appointment Status: </span>{" "}
                    {appointment.appointment_status === 0 ? (
                      <span className="in-progress">In Progress</span>
                    ) : (
                      <span className="closed">Closed</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please select the Doctor.</p>
      )}
    </div>
  );
};

export default DoctorAppointments;
