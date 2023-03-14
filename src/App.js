import React from "react";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import FormalEducation from "./components/FormalEducation/FormalEducation";
import SelfEducation from "./components/SelfEducation/SelfEducation";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import SavePagebtn from "./components/buttons/SavePageBtn";

function App() {
  return (
    <div className="app">
      <div className="save-cv-container">
        <SavePagebtn />
      </div>
      <div className="personal-info-section ">
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
