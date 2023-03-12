import React from "react";

function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={props.deleteEdu.bind(this, id)}>
        X
      </button>
    </div>
  );
}

function DisplaySelfEdu(props) {
  const { eduHist } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{eduHist.bootCamp}</h4>
      <p className="sub-info">{eduHist.dateAttended}</p>
      <p className="sub-info">{eduHist.studyField}</p>
      <DeleteBtn id={eduHist.id} deleteEdu={props.deleteEdu} />
    </div>
  );
}

export default DisplaySelfEdu;
