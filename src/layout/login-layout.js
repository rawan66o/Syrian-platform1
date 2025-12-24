import { Outlet } from "react-router";
import Navbar from "../pages/auth/navbar/navbar";

function LoginLayout() {
    return <div style={{background: 'linear-gradient(0deg, #E8F7FB 0%, #ffff 60%, #E8F7FB 75% #ffff 100%)' }}>
        <Navbar />
        <Outlet />
    </div>
}

export default LoginLayout;