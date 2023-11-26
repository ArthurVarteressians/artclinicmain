import React from "react";
import "./LandingFaqs.css";
import Accordion from "./Accordion";
export default function LandingFaqs({ FaqsDatas }) {
  return (
    <div className="faqMainSection">
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>

        {FaqsDatas.map((FaqsData) => (
          <Accordion
            key={FaqsData.id}
            title={FaqsData.title}
            content={FaqsData.content}
          />
        ))}
      </div>
    </div>
  );
}
