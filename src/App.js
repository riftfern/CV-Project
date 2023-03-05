import React from "react";
import Header from "./Header/Header";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import FormalEducation from "./FormalEducation/FormalEducation";
import SelfEducation from "./SelfEducation/SelfEducation";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="app">
      <div className="header-section">
        <Header />
      </div>
      <div className="save-cv-container">{/* save button*/}</div>
      <div className="personal-info-section">
        <PersonalInfo />
      </div>
      <div className="formal-education-section">
        <FormalEducation />
      </div>
      <div className="self-education-section">
        <SelfEducation />
      </div>
      <div className="experience-section">
        <Experience />
      </div>
      <div className="projects-section">
        <Projects />
      </div>
    </div>
  );
}
export default App;
