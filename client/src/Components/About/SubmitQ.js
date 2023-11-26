import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./submitQ.css";
import ReCAPTCHA from "react-google-recaptcha";
import End_point from "../../Baseurl";
function SubmitQ() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phonenumber) {
      toast.error("Please enter all fields.");
    } else {
      try { 
        // Check if the client has already submitted a call request
        const response = await Axios.get(`${End_point}/SubmitQ`, {
          params: {
            email: data.email,
            phonenumber: data.phonenumber,
          },
        });

        if (
          response.status === 200 &&
          response.data === "Duplicate email or phone number"
        ) {
          toast.error("You have already submitted a call request.");
        } else if (
          response.status === 200 &&
          response.data === "No duplicate entries"
        ) {
          // If the client hasn't submitted a call request, proceed with form submission
          const submitResponse = await Axios.post(
            `${End_point}/SubmitQ`,
            data
          );
          toast.success(
            "Your call request submitted successfully. We will call you as soon as possible."
          );
          // Reset the form fields
          setData({
            name: "",
            email: "",
            phonenumber: "",
          });
        } else {
          toast.error("Error checking duplicate entries.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error submitting form. Please try again.");
      }
    }
  };

  return (
    <div className="AllSubmit">
      <div className="contactUsbox">
        <h1>Contact Us</h1>
        <p>
          At our organization, we value our clients and strive to provide the
          best possible service to meet their needs. Our team of experienced
          professionals is dedicated to addressing any inquiries or concerns our
          clients may have.
        </p>

        <p>
          We believe that every client interaction is an opportunity to build
          trust and strengthen our relationship. Our clients are important to
          us, and we strive to maintain open lines of communication to better
          understand their expectations, address any issues, and deliver the
          highest level of service. We value their feedback and actively seek it
          to continuously improve our services.
        </p>
        <p>
          Getting in touch with us is easy. Clients can fill out the form below,
          send us an a call request, or call us at{" "}
          <span style={{ fontWeight: "bold" }}>02212</span>. Our team is
          available during business hours to promptly respond to inquiries and
          provide assistance.
        </p>
      </div>
      <div className="submitQinputs">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label htmlFor="phonenumber">Phone Number</label>
          <input
            id="phonenumber"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            onChange={(e) => setData({ ...data, phonenumber: e.target.value })}
          />
          <button type="submit">Free Consulting Request</button>
        </form>
      </div>
      <ReCAPTCHA
        sitekey="6Ld0BAwmAAAAAKmgFmJaKfws1Q8JWmb0IGg0IUwc"
        theme="light"
        size="invisible"
      />
      <ToastContainer />
    </div>
  );
}

export default SubmitQ;
