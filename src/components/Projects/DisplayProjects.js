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

export default function DisplayProjects(props) {
  const { projects, id } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{projects.title}</h4>
      <div className="formatted-list">
        <FormatDesc desc={projects.desc} />
      </div>
      <div className="formatted-list">
        <FormatDesc desc={projects.tech} />
      </div>
      <DeleteBtn id={id} deleteHist={props.deleteHist} />
    </div>
  );
}
