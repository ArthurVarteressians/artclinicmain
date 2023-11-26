import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import End_point from "../../Baseurl";
function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [department, setDepartment] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterDate = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; 
  };
  const fetchDoctors = (department) => {
    fetch(`${End_point}/doctors/${department}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        if (data.length > 0) {
          setSelectedDoctorId(data[0].doctor_id);
        }
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  };

  const fetchAvailableTimes = async (doctorId, date) => {
    try {
      const response = await axios.post(
        `${End_point}/checkAvailability`,
        {
          doctorId: doctorId,
          date: date,
        }
      );
      if (response.status === 200) {
        setAvailableTimes(response.data.availableTimes);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error fetching available times:", error);
      toast.error("Error fetching available times");
    }
  };

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    setSelectedDoctorId(doctorId);
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    if (selectedDate) {
      fetchAvailableTimes(
        selectedDoctorId,
        selectedDate.toISOString().split("T")[0]
      );
    }
    fetchDoctors(selectedDepartment);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first!");
      setTimeout(() => {
        localStorage.removeItem("token");
        navigate("/Profile");
      }, 2000);
      return;
    }
  }, []);

  const handleSubmit = async () => {
    if (!selectedTime) {
      toast.error("Please select a time");
      return;
    }

    try {
      if (doctors.length > 0) {
        const token = localStorage.getItem("token");

        // Check if the selected time is available
        const availabilityResponse = await axios.post(
          `${End_point}/checkAvailability`,
          {
            doctorId: doctors[0].doctor_id,
            date: selectedDate,
            time: selectedTime,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (availabilityResponse.status === 200) {
          const openAppointmentResponse = await axios.get(
            `${End_point}/checkOpenAppointment`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          if (
            openAppointmentResponse.status === 200 &&
            openAppointmentResponse.data.hasOpenAppointment
          ) {
            toast.error("You already have an open appointment!");
            setDepartment("");
            setSelectedDate("");
            setSelectedTime("");
            return;
          }

          const response = await axios.post(
            `${End_point}/Sched`,
            {
              doctorId: doctors[0].doctor_id,
              date: selectedDate,
              time: selectedTime,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );

          toast.success("Appointment booked successfully");
          setDepartment("");
          setSelectedDate("");
          setSelectedTime("");
        } else {
          toast.error("The selected time is not available");
        }
      } else {
        console.error("No doctors found in the doctors array");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // The selected time is not available
        toast.error("The selected time is not available!");
      } else if (error.response && error.response.status === 401) {
        // Session expired
        toast.error("Session expired. Please log in again!");
        setTimeout(() => {
          localStorage.removeItem("token");
          navigate("/Profile");
        }, 2000);
      } else {
        toast.error("Please log in again!");
        setTimeout(() => {
          localStorage.removeItem("token");
          navigate("/Profile");
        }, 2000);
      }
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleDateChange = (date) => {
    const timeZoneOffset = date.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
    const adjustedDate = new Date(date.getTime() - timeZoneOffset); // Adjust the date based on the time zone offset
    setSelectedDate(adjustedDate);

    if (selectedDoctorId) {
      const formattedDate = adjustedDate.toISOString().split("T")[0];
      fetchAvailableTimes(selectedDoctorId, formattedDate);
    }
  };

  return (
    <div className="allSchedule">
      <div className="ScheBox">
        <div className="MainScheSec">
          <h2>Select Department</h2>
          <select
            className="MainselectBox"
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="">Select Department</option>
            <option value="Dentist">Dentist</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Pulmonologist">Pulmonologist</option>
            <option value="Radiologist">Radiologist</option>
          </select>
          {department && (
            <div>
              <ul>
                {doctors.map((doctor) => (
                  <li key={doctor.id}>
                    <span>
                      Your Doctor will be:{" "}
                      <span
                        style={{
                          color: "blue",
                          fontSize: "14px",
                          fontWeight: "400",
                          border: "1px solid black",
                          padding: "2px",
                          borderRadius: "8px",
                        }}
                      >
                        {doctor.fullname}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="MainScheSec">
          <h3>Select Appointment Date and Time:</h3>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            filterDate={filterDate} // Exclude weekends
            minDate={new Date()}
          />{" "}
          <select
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
          >
            <option value="">Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            disabled={availableTimes.length === 0 || !selectedTime}
          >
            Book Appointment
          </button>
          {availableTimes.length === 0 && (
            <p>No available times for the selected date</p>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Calendar;
