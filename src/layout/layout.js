import { Outlet, useLocation } from "react-router";
import "./layout.css";

import NavBar from "../components/navbar/navbar";
import CourseDetailsNavBar from "../components/course-details-components/course-details-navbar/course-details-navbar";
import Navbar from "../components/volunteer-projects/navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  const authPaths = ["/register", "/login", "/forgot-password", "/new-password"];

  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div className="pages_styles">
      {isAuthPage ? (
        <NavBar />
      ) : (
        <CourseDetailsNavBar />
      )}

      {/* في حال بدك Navbar خاص بالـ volunteer pages */}
      {/* <Navbar /> */}

      <Outlet />
    </div>
  );
};

export default Layout;
