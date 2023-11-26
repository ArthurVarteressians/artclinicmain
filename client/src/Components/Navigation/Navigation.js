import { useMediaQuery } from "@material-ui/core";
import NavWeb from "./WebView/NavWeb";
import MobNav from "./MobView/MobNav";
function Navigation() {
  const ifWeb = useMediaQuery("(width > 769px)");
  const ifMob = useMediaQuery("(width < 768px)");

  return (
    <div>
      {ifWeb && <NavWeb />}
      {ifMob && <MobNav />}
    </div>
  );
}
export default Navigation;
