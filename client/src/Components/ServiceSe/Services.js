import React from "react";
import Footer from "../Footer/Footer";
import ServicesWeb from "./ServiceWeb/ServicesWeb";
import NavigationForSections from "../Navigation/NavigationForSections";
function Services() {
  return (
    <div>
      <NavigationForSections />
      <ServicesWeb />
      <Footer />
    </div>
  );
}

export default Services;
