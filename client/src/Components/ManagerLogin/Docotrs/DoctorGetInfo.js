import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManagerNav from "../ManagerNav/ManagerNav";
import Footer from "../../Footer/Footer";
import Swal from "sweetalert2";
import "./DoctorGetinfo.css";
import End_point from "../../../Baseurl";
const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [statusOptions, setStatusOptions] = useState(["0", "1"]);
  const [doctorFullName, setDoctorFullName] = useState("");
  const [showOpenAppointments, setShowOpenAppointments] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleStatusChange = (appointmentnumber, newStatus) => {
    if (newStatus !== "1") {
      toast.error("For closing appointment, please change status to 1");
      return;
    }
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to update the appointment status?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.put(
          `${End_point}/api/appointments/${appointmentnumber}`,
          {
            status: newStatus,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("Failed to update appointment status");
            }
            const updatedAppointments = appointments.filter(
              (appointment) =>
                appointment.appointmentnumber !== appointmentnumber
            );
            setAppointments(updatedAppointments);
            setTotalAppointments((prevTotal) => prevTotal - 1);
          })
          .catch((error) => setError(error.response.data.message));
      }
    });
  };

  const getDoctorName = () => {
    Axios.get(`${End_point}/getDoctorName`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to retrieve appointments");
        }
        const data = response.data;
        setDoctorFullName(data);
        toast.success(`Welcome Doctor ${data}!`, {
          autoClose: 1500,
        });
      })
      .catch((error) => setError(error.response.data.message));
  };

  const handleGetAppointments = () => {
    setShowOpenAppointments(true);

    Axios.get(`${End_point}/api/doctors/openAppointments`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to retrieve appointments");
        }
        const data = response.data;
        setAppointments(data);
        setTotalAppointments(data.length);
      })
      .catch((error) => setError(error.response.data.message));
  };

  const handleClosedAppointments = () => {
    setShowOpenAppointments(false);

    Axios.get(`${End_point}/api/doctors/closedAppointments`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to retrieve closed appointments");
        }
        const data = response.data.map((appointment) => ({
          ...appointment,
          name: appointment.name,
        }));
        setAppointments(data);
        setTotalAppointments(data.length);
      })
      .catch((error) => setError(error.response.data.message));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    appointments.forEach((appointment) => {
      handleStatusChange(appointment.appointmentnumber, appointment.newStatus);
    });
  };

  useEffect(() => {
    getDoctorName();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterAppointments = (appointments, searchValue) => {
    if (!searchValue) {
      return appointments;
    }

    const searchTerm = searchValue.toLowerCase();

    return appointments.filter(
      (appointment) =>
        appointment.appointmentnumber.toString().includes(searchTerm) ||
        appointment.phonenumber.includes(searchTerm)
    );
  };

  const filteredAppointments = filterAppointments(appointments, searchValue);

  return (
    <div>
      <ManagerNav />
      <div>
        <div className="mainDoctorsprofile">
          <h3>
            Doctor <span style={{ fontWeight: "500" }}>{doctorFullName}</span>
          </h3>
          <div className="mainDoctorsProfileBTN">
            
            <button onClick={handleGetAppointments}>
              Get Open Appointments
            </button>
            <button onClick={handleClosedAppointments}>
              Get Closed Appointments
            </button>
          </div>

          <div>
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search by ID or Phone Number"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
            {showOpenAppointments ? (
              <>
                <div className="statusHeader">
                  <h2>Open Appointments</h2>
                </div>
                <div className="grid-container">
                  <div className="appointments">
                    <p style={{ paddingLeft: "10px", fontSize: "large" }}>
                      Total Open Appointments:{" "}
                      <span style={{ fontWeight: "800" }}>
                        {totalAppointments}
                      </span>
                    </p>
                    <div className="appointment-grid">
                      {filteredAppointments.map((appointment) => (
                        <div
                          className="appointment-card"
                          key={appointment.appointmentnumber}
                        >
                          <p>
                            Appointment Number:{" "}
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "600",
                              }}
                            >
                              {appointment.appointmentnumber}{" "}
                            </span>{" "}
                          </p>
                          <p>
                            <span className="label">Patient Full Name:</span>{" "}
                            <span className="value">{appointment.name}</span>
                          </p>
                          <p>
                            <span className="label">Appointment Date:</span>{" "}
                            <span className="value">
                              {new Date(
                                appointment.appointment_date
                              ).toLocaleString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </p>

                          <p>
                            <span className="label">Patient Phone Number:</span>{" "}
                            <span className="value">
                              {appointment.phonenumber}
                            </span>
                          </p>

                          <label
                            htmlFor={`status-${appointment.appointmentnumber}`}
                            className="changeStatusDropDown"
                          >
                            Change Status:{" "}
                            <select
                              id={`status-${appointment.appointmentnumber}`}
                              value={appointment.newStatus}
                              onChange={(event) => {
                                const newStatus = event.target.value;
                                setAppointments((prevAppointments) =>
                                  prevAppointments.map((prevAppointment) =>
                                    prevAppointment.appointmentnumber ===
                                    appointment.appointmentnumber
                                      ? { ...prevAppointment, newStatus }
                                      : prevAppointment
                                  )
                                );
                              }}
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.386)",
                                fontWeight: "bold",
                              }}
                            >
                              {statusOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </label>
                          <div>
                            <button
                              type="submit"
                              onClick={() =>
                                handleStatusChange(
                                  appointment.appointmentnumber,
                                  appointment.newStatus
                                )
                              }
                            >
                              Update Statuses
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="ClosedSection">
                {" "}
                <div className="statusHeader">
                  <h2>Closed Appointments</h2>
                </div>
                <div className="closed-appointments">
                  <p>
                    Total Closed Appointments:{" "}
                    <span style={{ fontWeight: "800" }}>
                      {totalAppointments}
                    </span>{" "}
                  </p>
                  <div className="appointment-grid">
                    {filteredAppointments.map((appointment) => (
                      <div className="appointment-card" key={appointment.id}>
                        <div>
                          <p>
                            <span className="label">Appointment Number:</span>{" "}
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "600",
                              }}
                            >
                              {appointment.appointmentnumber}{" "}
                            </span>{" "}
                          </p>
                          <p>
                            <span className="label">Patient full name:</span>{" "}
                            <span className="value">{appointment.name}</span>
                          </p>
                          <p>
                            <span className="label">
                              Appointment Date & Time:
                            </span>{" "}
                            <span className="value">
                              {new Date(
                                appointment.appointment_date
                              ).toLocaleString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              })}
                            </span>
                          </p>

                          <p>
                            <span className="label">Patient Phone Number:</span>{" "}
                            <span className="value">
                              {appointment.phonenumber}
                            </span>
                          </p>
                          <p>
                            <span className="label">Status:</span>{" "}
                            <span className="value status-closed">Closed</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>{" "}
              </div>
            )}
          </div>

          {error && <p>{error}</p>}
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorAppointments;
