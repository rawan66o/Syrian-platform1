import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // تغيير من 'react-router' إلى 'react-router-dom'
import App from './App';
import Layout from './layout/layout';
import CourseDetails from './pages/courses/course/course-details';
import CourseTest from './pages/courses/course-test/course-test';
import TestResultsPage from './pages/courses/test-results-page/test-results-page';
import CourseMarks from './pages/courses/course-marks/course-marks';
import CourseCertificateRequirements from './pages/courses/course-certificate-requirements/course-certificate-requirements';
import CourseFinished from './pages/courses/course-finished/course-finished';
import RateCourseAndTrainer from './pages/courses/rate-course-and-trainer/rate-course-and-trainer';
import VolunteerProjects from './viewCopmonont/VolunteerProjects';
import Posts from './viewCopmonont/Posts';
import AddProject from './viewCopmonont/AddProgect';
import ApplicationForMembership from './viewCopmonont/ApplicationForMembership';
import Guide from './viewCopmonont/Guide';
import { StudentGuide, VolunteerGuide, CoachGuide } from './viewCopmonont/GuideData';
import Partners from './viewCopmonont/PartnersPage';
import Profile from './dashboard/pages/profile/profile';
import ContentDashboard from './dashboard/pages/dashboard-home/dashbooard-home';
import DashboardLayout from './dashboard/pages/dashboard-layout/dashboard-layout';
import Certificates from './dashboard/pages/certificates/certificates';
import CourseLessons from './pages/courses/course-lesson/course-lesson';
import Courses from './pages/courses/courses/courses';
import AddCourse from './pages/courses/add-course/add-course';
import AddPost from './pages/posts/add-post/add-post';
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';
import ForgotPassword from './pages/auth/forgotpassword/forgot-password';
import NewPassword from './pages/auth/newpassword/new-password';
import MycoursesDashboard from './dashboard/pages/mycourses-dashboard/mycourses-dashboard';
import MyProgectes from './dashboard/pages/my-volunteer-progect/my-volunteer-progect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='new-password' element={<NewPassword />} />
          <Route path='courses' element={<Courses />} />
          <Route path='courses/:courseId' element={<CourseDetails />} />
          <Route path='courses/:courseId/course-test' element={<CourseTest />} />
          <Route path='courses/:courseId/test-result' element={<TestResultsPage />} />
          <Route path='courses/:courseId/course-marks' element={<CourseMarks />} />
          <Route path='courses/:courseId/certificate-requirements' element={<CourseCertificateRequirements />} />
          <Route path='courses/:courseId/course-finished' element={<CourseFinished />} />
          <Route path='courses/:courseId/rate-course-and-trainer' element={<RateCourseAndTrainer />} />
          <Route path='courses/:courseId/course-lesson' element={<CourseLessons />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='add-post' element={<AddPost />} />
        </Route>
        
        <Route path="/student-guide" element={<Guide data={StudentGuide} title="دليل الحياة الجامعية" />} />
        <Route path="/coach-guide" element={<Guide data={CoachGuide} title="دليل المدرب" />} />
        <Route path="/volunteer-guide" element={<Guide data={VolunteerGuide} title="دليل المتطوع" />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/volunteer-projects" element={<VolunteerProjects />} />
        <Route path="/posts-projects" element={<Posts />} />
        <Route path="/form" element={<ApplicationForMembership />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<ContentDashboard />} />          
          <Route path="profile" element={<Profile status='volunteer' />} />      
          <Route path="certificates" element={<Certificates />} />      
          <Route path="my-courses" element={<MycoursesDashboard />} />      
          <Route path="my-progects" element={<MyProgectes />} />      
          {/* <Route path="settings" element={<Settings />} />    
          <Route path="analytics" element={<Analytics />} />   */}
          {/* تضيف أي صفحة بدك */}
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();