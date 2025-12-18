import "./course-details-navbar.css";
import { NavLink } from "react-router";

const CourseDetailsNavBar = () => {

    return <div className="course_details_navbar">
        <div className="nav_body">
            <div className="nav_body_icon_links">
                <div className="nav_icon_container">
                    <img className="nav_icon_img" src="/icons/syrian_platform_icon/syrian_platform.svg" alt="" />
                </div>
                <div className="nav_separation_line" />
                <div className="nav_links_to_pages">
                    <NavLink className="home_nav_link">Home</NavLink>
                    <NavLink className="course_nav_link">Projects</NavLink>
                    <NavLink className="course_nav_link">Forum</NavLink>
                    <NavLink className="course_nav_link">Courses</NavLink>
                    <NavLink className="course_nav_link">Contact</NavLink>
                </div>
            </div>
            <div className="course_details_navbar_search_container">
                <input className="course_details_nav_search_input" type="search" placeholder="Research" />
                <img className="course_details_nav_search_icon" src="/icons/search_icon/search_normal.svg" alt="" />
            </div>
            <div className="signup_notifications_language_container">
                <div className="notifications_language_container">
                    <button className="not_lang_button">
                        <img src="/icons/language_icon/material-symbols-light_language.svg" alt="" />
                    </button>
                    <button className="not_lang_button">
                        <img src="/icons/notifications_icon/notification.svg" alt="" />
                    </button>
                </div>
                <div className="nav_separation_line" />
                <div className="signup_button_container">
                    <button className="signup_button">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
};
export default CourseDetailsNavBar;
