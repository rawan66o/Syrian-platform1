import { Outlet } from "react-router";
import "./layout.css";
import Navbar from "../components/volunteer-projects/navbar/Navbar";
<<<<<<< HEAD
// import NavBar from "../components/navbar/navbar";
// import CourseDetailsNavBar from "../components/course-details-components/course-details-navbar/course-details-navbar";
=======

>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
const Layout = () => {

    return <div>

        <Navbar />
    <div className="pages_styles">
        <Outlet />
    </div>
    </div>
}
export default Layout;

