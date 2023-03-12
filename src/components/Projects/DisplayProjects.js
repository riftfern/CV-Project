import React from "react";

function FormatDesc(props) {
  const { desc } = props;
  if (desc === "") return "";
  return (
    <ul className="project-desc-list">
      {desc.split("\n").map((bulletPoint) => {
        return <li>{bulletPoint}</li>;
      })}
    </ul>
  );
}

function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={props.deleteHist.bind(this, id)}>
        X
      </button>
    </div>
  );
}

function DisplayProjects(props) {
  const { project, id } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{project.title}</h4>
      <div className="formatted-list">
        <FormatDesc desc={project.desc} />
      </div>
      <div className="formatted-list">
        <FormatDesc desc={project.tech} />
      </div>
      <DeleteBtn id={id} deleteHist={props.deleteHist} />
    </div>
  );
}

export default DisplayProjects;
