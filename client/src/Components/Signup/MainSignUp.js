import React from "react";
import Signup from "./SignUp";
import Footer from "../Footer/Footer";
import NavigationForSections from "../Navigation/NavigationForSections";

const MainSignUp = () => {
  return (
    <div>
      <NavigationForSections />
      <Signup />
      <Footer />
    </div>
  );
};

export default MainSignUp;
