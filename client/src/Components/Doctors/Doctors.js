import { useMediaQuery } from "@material-ui/core";
import DoctorsWeb from "./WebView/DoctorsWeb";
import DoctorsMobile from "./MobiveView/DoctorsMobile";
import Footer from "../Footer/Footer";
import NavigationForSections from "../Navigation/NavigationForSections";
function Doctors() {
  const ifWeb = useMediaQuery("(width > 650px)");
  const ifMob = useMediaQuery("(width < 649.9px)");

  return (
    <div>
      <NavigationForSections />
      {ifMob && <DoctorsMobile />}
      {ifWeb && <DoctorsWeb />}
      <Footer />
    </div>
  );
}

export default Doctors;
