import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Mainlayouts = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic content */}
      <div className="min-h-[calc(100vh-428px)]">
      <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Mainlayouts;