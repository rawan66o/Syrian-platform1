import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import VolunteerProjects from './viewCopmonont/VolunteerProjects';
import Posts from './viewCopmonont/Posts';
import ApplicationForMembership from './viewCopmonont/ApplicationForMembership';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<VolunteerProjects />}>
          <Route path='/' element={<App />} />
          <Route path='/velunteer projects' element={<VolunteerProjects />} />
          <Route path='/posts projects' element={<Posts />} />
          <Route path='/fom' element={<ApplicationForMembership />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
