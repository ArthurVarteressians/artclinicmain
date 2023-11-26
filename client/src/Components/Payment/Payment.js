import React from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCalendarAlt,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SchedulingNav from "../Scheduling/SchedulingNav";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function CardDetails() {
  return (
    <div>
      <SchedulingNav />
      <div className="paymentSec">
        <NavLink to="/Patient-Profile">
          <button>Back</button>
        </NavLink>

        <div className="payment-card">
          <div className="name">
            <label> Card Holder Full Name</label>
            <input type="text" placeholder="Your name" />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="card-number">
            <label> Card Number</label>
            <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
          </div>
          <div className="card-details">
            <div className="expiry-date">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            </div>

            <div className="security-code">
              <label>Security Code</label>
              <input type="text" placeholder="CVV" />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
          </div>

          <button>Pay Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
