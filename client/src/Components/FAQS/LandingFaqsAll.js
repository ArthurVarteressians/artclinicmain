import React from "react";
import "./LandingFaqs.css";
import FAQSection from "./LandingFaqs";
import FaqsData from "./FAQ.json";
function LandingFaqsAll() {
  return (
    <>
      <FAQSection FaqsDatas={FaqsData} />
    </>
  );
}
export default LandingFaqsAll;
