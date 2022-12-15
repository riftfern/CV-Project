import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PersonalInfo from './components/PersonalInfo';
import Header from './components/Header';
import FormalEducation from './components/FormalEducation';
import SelfEducation from './components/SelfEducation';
import Experience from './components/Experience';
import CvContent from './components/CvContent';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PersonalInfo />
    <FormalEducation />
    <SelfEducation />
    <Experience />
    <Projects />
    <CvContent /> 
  </React.StrictMode>
);

