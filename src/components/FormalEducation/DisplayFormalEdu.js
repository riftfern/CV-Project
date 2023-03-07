import React from "react";

function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button
        className="delete-btn"
        onClick={props.delteFormalEdu.bind(this, id)}
      >
        X
      </button>
    </div>
  );
}

function DisplayFormalEdu(props) {
  const { formalEduHist } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{formalEduHist.school}</h4>
      <p className="sub-info">{formalEduHist.degree}</p>
      <p className="sub-info">{formalEduHist.studyField}</p>
      <p className="sub-info">{formalEduHist.location}</p>
      <p className="date-info">{formalEduHist.dateAttended}</p>
    </div>
  );
}

export default DisplayFormalEdu;
