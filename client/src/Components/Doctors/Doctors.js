import useMediaQuery from "./../hooks/useMediaQuery";
import DoctorsWeb from "./WebView/DoctorsWeb";
import DoctorsMobile from "./MobiveView/DoctorsMobile";
import Footer from "../Footer/Footer";
import NavigationForSections from "../Navigation/NavigationForSections";

function Doctors() {
  const ifWeb = useMediaQuery("(min-width: 651px)");
  const ifMob = useMediaQuery("(max-width: 650.9px)");

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
