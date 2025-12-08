import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layout/layout';
import CourseDetails from './pages/courses/course/course-details';
import CourseTest from './pages/courses/course-test/course-test';
import TestResultsPage from './pages/courses/test-results-page/test-results-page';
import CourseMarks from './pages/courses/course-marks/course-marks';
import CourseCertificateRequirements from './pages/courses/course-certificate-requirements/course-certificate-requirements';
import CourseFinished from './pages/courses/course-finished/course-finished';
import RateCourseAndTrainer from './pages/courses/rate-course-and-trainer/rate-course-and-trainer';
import CourseLessons from './pages/courses/course-lesson/course-lesson';
import Courses from './pages/courses/courses/courses';
import AddCourse from './pages/courses/add-course/add-course';
import AddPost from './pages/posts/add-post/add-post';
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';
import ForgotPassword from './pages/auth/forgotpassword/forgot-password';
import NewPassword from './pages/auth/newpassword/new-password';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
