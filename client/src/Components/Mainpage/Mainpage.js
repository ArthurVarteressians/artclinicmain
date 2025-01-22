import "./Mainpage.css";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
// import Doctors from "../Doctors/Doctors";
function Mainpage() {
  return (
    <div className="mainLangdingPageSec">
      <div className="mainPageStructure">
        <div className="LandingpageTexts">
          <div className="LandingpageTexts2">
            <p>
              At <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we are
              dedicated to providing high-quality healthcare services to our
              patients. Our online clinic development system is designed to
              offer a seamless and user-friendly experience for managing your
              healthcare needs. We are committed to helping you achieve optimal
              health and wellness through our comprehensive services and expert
              medical professionals. Our mission is to deliver exceptional
              healthcare services and patient-centric care.
            </p>
          </div>

          <div className="LandingpageTexts2">
            <p>
              At our clinic, we understand the importance of compassionate care.
              Our team is dedicated to delivering the highest standard of care
              with empathy, respect, and professionalism. We prioritize patient
              safety and follow evidence-based practices to ensure accurate
              diagnoses, effective treatments, and positive outcomes. We are
              committed to building long-term relationships with our patients
              based on trust, integrity, and open communication.
            </p>
          </div>
        </div>
        <div className="mainpageDoctorLBtnSection">
          <Link to="/AllDoctors">
            <button className="mainpageDoctorLBtn">See Doctors</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
