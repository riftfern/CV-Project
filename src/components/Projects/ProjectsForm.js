import React, { useState } from "react";
import uniqid from "uniqid";

function ProjectsForm(props) {
  const initialState = {
    title: "",
    desc: "",
    tech: "",
    id: uniqid(),
  };

  const [projectInfo, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveWork(projectInfo);
    resetState();
  };

  if (!props.displayForm) return null;
  return (
    <div className="modal-container">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            name="title"
            id="project-title"
            value={projectInfo.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="project-desc"
            placeholder="Tasks will re-format into bulletpoints on save"
            value={projectInfo.desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tech">Technologies Used</label>
          <textarea
            name="tech"
            id="project-tech"
            placeholder="Technologies will re-format into bulletpoints on save"
            value={projectInfo.tech}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="modal-action-btns">
          <input type="submit" value="Save" className="save-info-btn" />
          <button className="close-form-btn" onClick={props.handleDisplay}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectsForm;
