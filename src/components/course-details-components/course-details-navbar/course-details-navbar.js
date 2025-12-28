import "./course-details-navbar.css";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
const CourseDetailsNavBar = () => {
    const location = useLocation();
    const loggedIn = true;
    const fullNavPaths = [
        "/",
        "/courses",
        "/courses/:courseId",
        "/volunteer-projects",
        "/student-guide",
        "/coach-guide",
        "/volunteer-guide",
        "/partners",
        "/dashboard",
        "/dashboard/profile",
        "/dashboard/certificates",
        "/dashboard/my-courses",
        "/dashboard/my-progects",
    ];



    if (fullNavPaths.includes(location.pathname)) {
        return <div className="course_details_navbar">
            <div className="nav_body" dir="rtl">
                <div className="nav_body_icon_links">
                    <div className="nav_icon_container">
                        <img className="nav_icon_img" src="/icons/syrian_platform_icon/syrian_platform.svg" alt="" />
                    </div>
                    <div className="nav_separation_line" />
                    <div className="nav_links_to_pages">
                        <NavLink className="home_nav_link">الرئيسية</NavLink>
                        <NavLink className="course_nav_link">الكورسات</NavLink>
                        <NavLink className="course_nav_link">المنتدى</NavLink>
                        <NavLink className="course_nav_link">المشاريع</NavLink>
                        <NavLink className="course_nav_link">اتصل بنا</NavLink>
                    </div>
                </div>
                <div className="course_details_navbar_search_container">
                    <input className="course_details_nav_search_input" type="search" placeholder="البحث" />
                    <img className="course_details_nav_search_icon" src="/icons/search_icon/search_normal.svg" alt="" />
                </div>
                <div className="signup_notifications_language_container">
                    <div className="notifications_language_container">
                        <button className="not_lang_button">
                            <img src="/icons/notifications_icon/notification.svg" alt="" />
                        </button>
                        <button className="not_lang_button">
                            <img src="/icons/language_icon/material-symbols-light_language.svg" alt="" />
                        </button>
                    </div>
                    <div className="nav_separation_line" />
                    <div className="signup_button_container">
                        {!loggedIn && <button className="signup_button">تسجيل الدخول</button>}
                        {loggedIn && <div className="navbar_user_container">
                            <img src="/images/nav_user/nav_user.png" alt="" />
                            <p className="navbar_user_container_username">المدرب.محمد الشيخ</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        return <div className="course_details_navbar">
            <div className="nav_body" dir="rtl">
                <div className="nav_body_icon_links">
                    <div className="nav_icon_container">
                        <img className="nav_icon_img" src="/icons/syrian_platform_icon/syrian_platform.svg" alt="" />
                    </div>
                    <div className="nav_separation_line" />
                    <div className="nav_links_to_pages">
                        <NavLink className="home_nav_link">الرئيسية</NavLink>
                    </div>
                </div>
                <div className="signup_notifications_language_container">
                    <div className="notifications_language_container">
                        <button className="not_lang_button">
                            <img src="/icons/notifications_icon/notification.svg" alt="" />
                        </button>
                        <button className="not_lang_button">
                            <img src="/icons/language_icon/material-symbols-light_language.svg" alt="" />
                        </button>
                    </div>
                    <div className="nav_separation_line" />
                    <div className="signup_button_container">
                        {!loggedIn && <button className="signup_button">تسجيل الدخول</button>}
                        {loggedIn && <div className="navbar_user_container">
                            <img src="/images/nav_user/nav_user.png" alt="" />
                            <p className="navbar_user_container_username">المدرب.محمد الشيخ</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    }
};
export default CourseDetailsNavBar;
