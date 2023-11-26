import FullManagerSecion from "./AllSections/MainTest";
import ManagerNav from "./ManagerNav/ManagerNav";
import Footer from "../Footer/Footer";
function ManagerDashbord() {
  return (
    <div>
      <ManagerNav />
      <FullManagerSecion />
      <Footer />
    </div>
  );
}
export default ManagerDashbord;
