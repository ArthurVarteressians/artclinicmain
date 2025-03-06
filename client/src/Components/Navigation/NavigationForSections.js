import useMediaQuery from "./../hooks/useMediaQuery";
import Navtest from "./WebView/Navtest";
import MobNavForSections from "./MobView/MobNavForSections";

function NavigationForSections() {
  const ifWeb = useMediaQuery("(min-width: 770px)");
  const ifMob = useMediaQuery("(max-width: 769px)");

  return (
    <div>
      {ifWeb && <Navtest />}
      {ifMob && <MobNavForSections />}
    </div>
  );
}

export default NavigationForSections;
