import { Outlet } from "react-router";
import "./layout.css";
// import NavBar from "../components/navbar/navbar";
import CourseDetailsNavBar from "../components/course-details-components/course-details-navbar/course-details-navbar";
const Layout = () => {

    return <div className="pages_styles">
        {/* <NavBar /> */}
        <CourseDetailsNavBar />
        <Outlet />
    </div>
}
export default Layout;

