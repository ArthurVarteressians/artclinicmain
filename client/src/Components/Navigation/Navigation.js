import useMediaQuery from "../hooks/useMediaQuery";
import NavWeb from "./WebView/NavWeb";
import MobNav from "./MobView/MobNav";

function Navigation() {
  const ifWeb = useMediaQuery("(min-width: 770px)");
  const ifMob = useMediaQuery("(max-width: 769px)");

  return (
    <div>
      {ifWeb && <NavWeb />}
      {ifMob && <MobNav />}
    </div>
  );
}

export default Navigation;
