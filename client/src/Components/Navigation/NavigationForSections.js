import { useMediaQuery } from "@material-ui/core";
import NavWeb from "./WebView/NavWeb";
import MobNav from "./MobView/MobNav";
import Navtest from "./WebView/Navtest";
import MobNavForSections from "./MobView/MobNavForSections";
function NavigationForSections() {
  const ifWeb = useMediaQuery("(width > 769px)");
  const ifMob = useMediaQuery("(width < 768px)");

  return (
    <div>
      {ifWeb && <Navtest />}
      {ifMob && <MobNavForSections />}
    </div>
  );
}
export default NavigationForSections;
