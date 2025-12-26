import { useEffect } from "react";
import "./App.css";
// import CourseDetailsNavBar from "./components/course-details-components/course-details-navbar/course-details-navbar";
import Footer from "./components/footer/footer";
import CoursesRecommended from "./components/main-page-components/courses-recommended";
import ForumContainer from "./components/main-page-components/forum-container";
import MainPageSearch from "./components/main-page-components/main-page-search";
import PlatformComments from "./components/main-page-components/platform-comments";
import PlatformIntroduction from "./components/main-page-components/platform-introduction";
import VolunteerProjectsContainer from "./components/main-page-components/volunteer-projects-container";
import WhyUs from "./components/main-page-components/why-us";
import Navbar from "./components/volunteer-projects/navbar/Navbar";
// import { useToast } from "./context/ToastContext";

function App() {
  // const { showHideToast } = useToast();

  // useEffect(() => {
  //   showHideToast("مرحباً بك في المنصة السورية!");
  // }, [showHideToast]);

  return (
    <div className="App">
      <div className="main_page">

        <div className="main_page_navbar">
          <Navbar />
        </div>
        
        <PlatformIntroduction />
        <CoursesRecommended />
        <WhyUs />
        <VolunteerProjectsContainer />
        <PlatformComments />
        <MainPageSearch />
        <ForumContainer />
        <Footer />
  
      </div>
    </div>
  );
}

export default App;
