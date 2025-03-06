import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MangerLogin.css";
import Navtest from "../Navigation/WebView/Navtest";
import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import End_point from "../../Baseurl";

const ManagerLogin = () => {
  const [managerEmail, setManagerEmail] = useState("");
  const [managerPassword, setManagerPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Function to handle login logic
  const handleLogin = () => {
    Axios.post(`${End_point}/ManagerLogin`, {
      email: managerEmail,
      password: managerPassword,
    })
      .then((response) => {
        const { data } = response;
        if (data && data.success) {
          if (data.doctorId) {
            navigate("/Admin/Doctor");
            localStorage.setItem("token", data.token);
          } else if (data.managerId) {
            localStorage.setItem("token", data.token);
            navigate("/Admin/Manager");
          } else {
            setError("Invalid role");
          }
        } else {
          setError("Invalid email or password. Please try again.");
        }
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
      });
  };

  // Function to autofill demo account credentials (for doctor or manager)
  const handleDemoLogin = (role) => {
    if (role === "doctor") {
      setManagerEmail("A.kim@doctor.com");
      setManagerPassword("123");
    } else if (role === "manager") {
      setManagerEmail("artclinic@manager.com");
      setManagerPassword("54321");
    }
  };

  return (
    <div>
      <Navtest />

      <div className="MainBoxes">
        <div className="mainSignUpBodySection">
          <h2>Admin Login</h2>
          <div className="mainSignUpBody">


            {/* Email input */}
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={managerEmail}
              onChange={(e) => {
                setManagerEmail(e.target.value);
              }}
            />

            {/* Password input */}
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter password"
              type="password"
              id="password"
              value={managerPassword}
              onChange={(e) => {
                setManagerPassword(e.target.value);
              }}
            />

            {/* Sign In Button */}
            <button onClick={handleLogin}>Sign In</button>
                        {/* Demo Accounts Button */}
                        <div className="demo-accounts">
              <button
                className="demo-btn"
                onClick={() => handleDemoLogin("doctor")}
              >
                Demo Doctor Account
              </button>
              <button
                className="demo-btn"
                onClick={() => handleDemoLogin("manager")}
              >
                Demo Manager Account
              </button>
            </div>

            {/* Error message */}
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>

      {/* Invisible ReCAPTCHA */}
      <ReCAPTCHA
        sitekey="6Ld0BAwmAAAAAKmgFmJaKfws1Q8JWmb0IGg0IUwc"
        theme="light"
        size="invisible"
      />
      <Footer />
    </div>
  );
};

export default ManagerLogin;
