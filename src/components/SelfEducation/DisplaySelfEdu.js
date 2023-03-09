import React from "react";

function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button
        className="delete-btn"
        onClick={props.deleteFormalEdu.bind(this, id)}
      >
        X
      </button>
    </div>
  );
}

function DisplaySelfEdu(props) {
  const { selfEduHist } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{selfEduHist.bootCamp}</h4>
      <p className="sub-info">{selfEduHist.dateAttended}</p>
      <p className="sub-info">{selfEduHist.studyField}</p>
      <DeleteBtn id={selfEduHist.id} deleteEdu={props.deleteFormalEdu} />
    </div>
  );
}

export default DisplaySelfEdu;
