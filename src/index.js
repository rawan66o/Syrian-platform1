import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import VolunteerProjects from './viewCopmonont/VolunteerProjects';
import Posts from './viewCopmonont/Posts';
import AddProject from './viewCopmonont/AddProgect';
import ApplicationForMembership from './viewCopmonont/ApplicationForMembership';
import Guide from './viewCopmonont/Guide';
import {StudentGuide,VolunteerGuide,CoachGuide} from './viewCopmonont/GuideData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/student guide' element={<Guide data={StudentGuide} title={"دليل الحياة الجامعية"} />} />
        <Route path='/coach guide' element={<Guide data={CoachGuide} title={"دليل المدرب"} />} />
        <Route path='/volunteer guide' element={<Guide data={VolunteerGuide} title={"دليل المتطوع"} />} />
        <Route path='/add project' element={<AddProject />} />
        <Route path='/velunteer projects' element={<VolunteerProjects />} />
        <Route path='/posts projects' element={<Posts />} />
        <Route path='/form' element={<ApplicationForMembership />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
