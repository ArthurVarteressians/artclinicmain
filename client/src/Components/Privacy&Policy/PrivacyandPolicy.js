import React from "react";
import Navtest from "../Navigation/WebView/Navtest";
import Footer from "../Footer/Footer";
import "./PrivacyandPolicy.css";

function PrivacyandPolicy() {
    window.scrollTo(0, 0);
  return (
    <div>
      <Navtest />
      <div className="mainPrivacy">
        {" "}
        <div className="privacySec">
          <div className="privacyBoxes">
            <h2>Privacy & Policy</h2>
            <p>
              At <span style={{ fontWeight: "bold" }}> Art Clinic</span>, we are
              committed to protecting your privacy and ensuring the
              confidentiality of your personal information. We understand the
              importance of safeguarding your data and maintaining the highest
              standards of privacy and security. This Privacy & Policy statement
              outlines how we collect, use, and safeguard your personal
              information in accordance with applicable laws and regulations.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Information Collection:</h3>
            <p>
              We collect personal information, including but not limited to,
              your name, contact details, medical history, and other relevant
              data, for the purpose of providing you with quality healthcare
              services. We collect this information through secure methods, such
              as online forms, in-person consultations, and electronic medical
              records. We may also collect non-personal information, such as
              website usage data, for analytical and statistical purposes to
              improve our services.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Information Use:</h3>
            <p>
              We use the personal information collected solely for the purpose
              of providing you with healthcare services, including but not
              limited to, scheduling appointments, managing medical records, and
              communicating with you about your treatment plan. We may also use
              your information for billing and insurance purposes, as required
              by law. We do not share your personal information with third
              parties, except as required by law or with your explicit consent.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Information Security:</h3>
            <p>
              We maintain strict security measures to protect your personal
              information from unauthorized access, use, or disclosure. We use
              industry-standard practices, such as encryption, firewalls, and
              password protection, to safeguard your data. However, please note
              that no method of data transmission or storage can be completely
              secure, and we cannot guarantee the absolute security of your
              personal information.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Information Retention:</h3>
            <p>
              We retain your personal information for as long as necessary to
              provide you with healthcare services and as required by law. We
              may also retain your information for archival, research, and
              statistical purposes, but only in an anonymous and aggregated form
              that does not identify you personally.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Your Rights:</h3>
            <p>
              You have the right to access, update, and correct your personal
              information held by
              <span style={{ fontWeight: "bold" }}> Art Clinic</span>. You can
              also request the deletion of your personal information, subject to
              applicable laws and regulations. We will promptly respond to your
              requests and take appropriate measures to ensure the accuracy and
              integrity of your personal information.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Consent:</h3>
            <p>
              By using <span style={{ fontWeight: "bold" }}> Art Clinic</span>
              services and providing us with your personal information, you
              consent to the collection, use, and safeguarding of your
              information as outlined in this Privacy & Policy statement.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Updates to Privacy & Policy:</h3>
            <p>
              We may update this Privacy & Policy statement periodically to
              reflect changes in our practices or as required by law. We
              encourage you to review this statement regularly for any updates.
            </p>
          </div>
          <div className="privacyBoxes">
            <h3>Contact Us:</h3>
            <p>
              If you have any questions, concerns, or requests regarding our
              Privacy & Policy, or if you wish to exercise your rights or update
              your information, please contact us using the contact information
              provided on our website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyandPolicy;
