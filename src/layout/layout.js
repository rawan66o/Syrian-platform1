import { Outlet } from "react-router";
import "./layout.css";
import Navbar from "../components/volunteer-projects/Navbar";

const Layout = () => {

    return <div>

        <Navbar />
    <div className="pages_styles">
        <Outlet />
    </div>
    </div>
}
export default Layout;

