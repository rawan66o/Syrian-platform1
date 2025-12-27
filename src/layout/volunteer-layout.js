import { Outlet } from "react-router"
import Navbar from "../components/volunteer-projects/navbar/Navbar"

function VolunteerLayout() {
   return(
    <>
        <Navbar />
        <Outlet />
    </>
   ) 
}

export default VolunteerLayout