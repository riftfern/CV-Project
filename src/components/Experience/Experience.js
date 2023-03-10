import React, { useState } from "react";
import SectionHeading from "../Header/Header";
import OpenModalBtn from "../buttons/OpenModalBtn";
import ExpForm from "./ExpForm";
import DisplayExp from "./DisplayExp";

function Experience() {
  const [displayForm, setDisplay] = useState(false);
  let [workExp, addWorkExp] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveWork = (workInfo) => {
    const newWorkExp = [...workExp, workInfo];
    addWorkExp(newWorkExp);
    handleDisplay();
  };

  const deleteHist = (id) => {
    const newWorkExp = [...workExp];
    newWorkExp.splice(id, 1);
    addWorkExp(newWorkExp);
  };
  return (
    <>
      <SectionHeading title="Work Experience" />
      {workExp.map((workHist) => (
        <DisplayExp
          workHist={workHist}
          key={workHist.id}
          deleteHist={deleteHist}
        />
      ))}
      <ExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveWork={saveWork}
      />
      <OpenModalBtn title="Work Experience" handleDisplay={handleDisplay} />
    </>
  );
}

export default Experience;
