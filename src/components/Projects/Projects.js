import React, { useState } from "react";
import SectionHeading from "../Header/Header";
import OpenModalBtn from "../buttons/OpenModalBtn";
import ProjectForm from "./ProjectsForm";
import DisplayProjects from "./DisplayProjects";

function Projects() {
  const [displayForm, setDisplay] = useState(false);
  let [projects, addProject] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveWork = (projectInfo) => {
    const newProject = [...projects, projectInfo];
    addProject(newProject);
    handleDisplay();
  };

  const deleteHist = (id) => {
    const newProject = [...projects];
    newProject.splice(id, 1);
    addProject(newProject);
  };

  return (
    <>
      <SectionHeading title="Projects" />
      {projects.map((project) => (
        <DisplayProjects
          project={project}
          key={project.id}
          deleteHist={deleteHist}
        />
      ))}
      <ProjectForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveWork={saveWork}
      />
      <OpenModalBtn title="Projects" handleDisplay={handleDisplay} />
    </>
  );
}

export default Projects;
