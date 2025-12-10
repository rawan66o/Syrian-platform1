<<<<<<< HEAD
// eslint-disable-next-line
import './App.css';
=======
import "./App.css";
import CourseDetailsNavBar from "./components/course-details-components/course-details-navbar/course-details-navbar";
import Footer from "./components/footer/footer";
import CoursesRecommended from "./components/main-page-components/courses-recommended";
import ForumContainer from "./components/main-page-components/forum-container";
import MainPageSearch from "./components/main-page-components/main-page-search";
import PlatformComments from "./components/main-page-components/platform-comments";
import PlatformIntroduction from "./components/main-page-components/platform-introduction";
import VolunteerProjectsContainer from "./components/main-page-components/volunteer-projects-container";

import WhyUs from "./components/main-page-components/why-us";
>>>>>>> 2cf96ccabc32d06af5182040fa61a8ec7225568e

function App() {


  return (
<<<<<<< HEAD
    <div className="App">
 <h1>Welcome to the Homepage</h1>
=======
    <div className="main_page">
      <div className="main_page_navbar">
        <CourseDetailsNavBar />
      </div>
      <PlatformIntroduction />
      <CoursesRecommended />
      <WhyUs />
      <VolunteerProjectsContainer />
      <PlatformComments />
      <MainPageSearch />
      <ForumContainer />
      <Footer />
>>>>>>> 2cf96ccabc32d06af5182040fa61a8ec7225568e
    </div>
  );
}

export default App;
