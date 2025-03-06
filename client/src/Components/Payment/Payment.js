import React from "react";
import "./Payment.css";
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
          </div>
          <div className="card-number">
            <label> Card Number</label>
            <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
          <div className="card-details">
            <div className="expiry-date">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>

            <div className="security-code">
              <label>Security Code</label>
              <input type="text" placeholder="CVV" />
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
