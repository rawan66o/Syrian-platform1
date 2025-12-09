import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // تغيير من 'react-router' إلى 'react-router-dom'
import App from './App';
import Dashboard from './dashboard/pages/dashboard';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />
          <Route path="courses/:courseId/course-test" element={<CourseTest />} />
          <Route path="courses/:courseId/test-result" element={<TestResultsPage />} />
          <Route path="courses/:courseId/course-marks" element={<CourseMarks />} />
          <Route path="courses/:courseId/certificate-requirements" element={<CourseCertificateRequirements />} />
          <Route path="courses/:courseId/course-finished" element={<CourseFinished />} />
          <Route path="courses/:courseId/rate-course-and-trainer" element={<RateCourseAndTrainer />} />
        </Route>
        
        <Route path="/student-guide" element={<Guide data={StudentGuide} title="دليل الحياة الجامعية" />} />
        <Route path="/coach-guide" element={<Guide data={CoachGuide} title="دليل المدرب" />} />
        <Route path="/volunteer-guide" element={<Guide data={VolunteerGuide} title="دليل المتطوع" />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/volunteer-projects" element={<VolunteerProjects />} />
        <Route path="/posts-projects" element={<Posts />} />
        <Route path="/form" element={<ApplicationForMembership />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();