
import React, { useState, useEffect } from "react";
import { notify } from "./toast";
import validate from "./validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import End_point from "../../Baseurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


function SignUp({ onSignInClick }) {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    age: "",
    phonenumber: "",
    password: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [registrationDate, setRegistrationDate] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched, navigate]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const formattedDate = currentDate.toISOString().split('T')[0];

    if (!Object.keys(errors).length) {
      const enteredData = {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        age: data.age,
        phonenumber: data.phonenumber,
        password: data.password,
        isAccepted: data.isAccepted,
        registrationDate: formattedDate,
      };

      try {
        const response = await axios.post(`${End_point}/Profile`, enteredData);

        if (response.status === 200) {
          notify("You signed up successfully", "success");
          localStorage.setItem("token", response.data.token);
          setTimeout(() => {
            navigate("/Patient-Profile");
          }, 1000);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          notify("Use Unique Information!", "error");
        } else {
          console.error("Error:", error.message);
          notify("Invalid data!", "error");
        }
      }
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        lastname: true,
        email: true,
        age: true,
        phonenumber: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.mainSignUpSec}>
      <div className={styles.SignUpSecText}>
        <p>
          At <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we believe
          that every patient deserves the highest quality of care. That's why
          our team of skilled physicians and healthcare professionals are
          dedicated to providing personalized, compassionate care to each and
          every patient.
        </p>
      </div>
      <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <h2 className={styles.header}>SignUp</h2>
          <div className={styles.formField}>
            <label htmlFor="name">Full name</label>
            <input
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              className={
                errors.email && touched.email
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="email"
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>

          <div className={styles.formField}>
            <label htmlFor="age">Age</label>
            <input
              className={
                errors.age && touched.age
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="age"
              type="number"
              name="age"
              value={data.age}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.age && touched.age && <span>{errors.age}</span>}
          </div>

          <div className={styles.formField}>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              className={
                errors.phonenumber && touched.phonenumber
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="phonenumber"
              type="number"
              name="phonenumber"
              value={data.phonenumber}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.phonenumber && touched.phonenumber && (
              <span>{errors.phonenumber}</span>
            )}
          </div>

          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              className={
                errors.password && touched.password
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touched.password && (
              <p className={styles.testttt}>{errors.password}</p>
            )}
          </div>
          <div className={styles.formField}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? styles.uncompleted
                  : styles.formInput
              }
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
              <label>
                I Accept Terms Of{" "}
                <Link
                  to="/Privacy&Policy"
                  style={{ textDecoration: "underline", color: "#0c70f3" }}
                >
                  Privacy & Policy
                </Link>
              </label>
              <input
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                // onFocus={focusHanlder}
              />
            </div>
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
            <ReCAPTCHA
              sitekey="6Ld0BAwmAAAAAKmgFmJaKfws1Q8JWmb0IGg0IUwc"
              theme="light"
              size="invisible"
            />
            <button type="submit">Sign Up</button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "clamp(8px, 2vw, 14px)", fontWeight: "bold" }}
            >
              Already have an account?
            </span>
            <button style={{ margin: "0" }} onClick={onSignInClick}>
              Sign In
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

//===================================================Sign IN=======================================
function SignIn({ onSignUpClick }) {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandlerForLogin = async (e) => {
    e.preventDefault();
    try {
      const loginEnteredData = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        `${End_point}/ClientsLogins`,
        loginEnteredData
      );

      if (response.status === 200) {
        notify("You signed up successfully", "success");
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/Patient-Profile"); // Change the URL here
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.log("token has expired. Please log in again.");

        if (status === 401) {
          notify("Check your inputes!", "error");
        } else if (data === "token expired") {
          notify("Try again", "error");
        }
      } else {
        console.error("Error:", error.message);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className={styles.mainSignUpSec}>
      <div className={styles.SignUpSecText}>
        <p>
          At <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we believe
          that every patient deserves the highest quality of care. That's why
          our team of skilled physicians and healthcare professionals are
          dedicated to providing personalized, compassionate care to each and
          every patient.
        </p>
      </div>
      <div className={styles.container}>
        <form onSubmit={submitHandlerForLogin} className={styles.formContainer}>
          <h2 className={styles.header}>Login</h2>
          <div className={styles.formField}>
            <label>Email</label>
            <input
              className={
                errors.email && touched.email
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>

          <div className={styles.formField}>
            <label>Password</label>
            <input
              className={
                errors.password && touched.password
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touched.password && (
              <span>{errors.loginpassword}</span>
            )}
          </div>
          <ReCAPTCHA
            sitekey="6Ld0BAwmAAAAAKmgFmJaKfws1Q8JWmb0IGg0IUwc"
            theme="light"
            size="invisible"
          />

          <div className={styles.formButtons}>
            <button type="submit">Login</button>
          </div>
          <div
            style={{
              fontSize: "clamp(8px, 2vw, 14px)s",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span>Don't have an account?</span>
            <button style={{ margin: "0" }} onClick={onSignUpClick}>
              Sign Up
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}
function SignUpOrSignIn() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignInClick = () => setIsSignIn(true);
  const handleSignUpClick = () => setIsSignIn(false);

  return (
    <div>
      {isSignIn ? (
        <SignIn onSignUpClick={handleSignUpClick} />
      ) : (
        <SignUp onSignInClick={handleSignInClick} />
      )}
    </div>
  );
}

export default SignUpOrSignIn;
