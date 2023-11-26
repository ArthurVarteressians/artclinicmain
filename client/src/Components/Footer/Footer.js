import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  window.scrollTo(0, 0);

  return (
    <div className="footer">
      <div className="sb-footer sec-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>About Us</h4>
            <Link to="/AboutUs">
              <p>Get In Touch</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Get Start</h4>
            <Link to="/Profile">
              <p>Sign Up</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Regulations</h4>
            <Link to="/Privacy&Policy">
              <p>Privacy & Policy</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Social media</h4>
            <div className="socialMedia">
              <Link href="/">
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <a href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>©{new Date().getFullYear()} Art Clinic. All rights reserved.</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/">
              <div>
                <Link to="/Admin">
                  <p>Manager Login</p>
                </Link>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
