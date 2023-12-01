import "./NavWeb.css";
import Logo from "../Imgs/logo.webp";
import Telicon from "./emergency-call.gif";
import LoginIcon from "./profile.gif";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Mainpage from "../../Mainpage/Mainpage";
import Services from "../../ServicesLanding/WebView/ServicesLanding";
import LandingFaqsAll from "../../FAQS/LandingFaqsAll";
import Footer from "../../Footer/Footer";
import { useState } from "react";
function NavWeb() {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/Profile");
  };

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="navWebV">
      <div className="navWebVContainer">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="navWebVLinks">
          <li>
            <ScrollLink
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section2"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              Concession
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section3"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              FAQS
            </ScrollLink>
          </li>
          <li>
            <RouterLink to="/AboutUs">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/AllDoctors">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="/ServicesPage">Services</RouterLink>
          </li>
          <li>
            <div className="iconLoginNav">
              <RouterLink to="/Profile">
                <img src={LoginIcon} />
              </RouterLink>
            </div>
          </li>

          <li>
            <div className="iconNumSe">
              <img src={Telicon} alt="Clinic Number" />
              <span className="iconNumber">02212</span>
            </div>
          </li>
        </div>
      </div>

      <div id="section1">
        <Mainpage />
      </div>
      <div id="section2">
        <Services />
      </div>
      <div id="section3">
        <LandingFaqsAll />
        <ReCAPTCHA
        sitekey="6Ld0BAwmAAAAAKmgFmJaKfws1Q8JWmb0IGg0IUwc"
        theme="light"
        size="invisible"
      />
        <Footer />
      </div>
    </div>
  );
}

export default NavWeb;
