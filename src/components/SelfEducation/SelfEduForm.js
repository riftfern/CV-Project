import React, { useState } from "react";
import uniqid from "uniqid";

function SelfEduForm(props) {
  const initialState = {
    bootCamp: "",
    dateAttended: "",
    studyField: "",
    id: uniqid(),
  };

  const [selfEduInfo, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveFormalEdu(selfEduInfo);
    resetState();
  };

  if (!props.displayForm) return null;
  return (
    <div className="modal-container">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bootCamp">Bootcamp/Course Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="bootCamp"
            id="bootCampInput"
            value={selfEduInfo.school}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateAttended">
            Date Attended <span>(MM/YYYY - MM/YYYY)</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="dateAttended"
            id="dateAttended-input"
            value={selfEduInfo.dateAttended}
          />
        </div>
        <div className="form-group">
          <label htmlFor="studyField">Field of Study</label>
          <input
            onChange={handleChange}
            type="text"
            name="studyField"
            id="studyField-input"
            value={selfEduInfo.studyField}
          />
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

export default SelfEduForm;
