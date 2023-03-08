import React, { useState } from "react";
import SectionHeading from "../Header/Header";
import OpenModalBtn from "../buttons/OpenModalBtn";
import EduExpForm from "./FormalEduForm";
import DisplayFormalEdu from "./DisplayFormalEdu";

function FormalEducation() {
  const [displayForm, setDisplay] = useState(false);
  let [edu, addEduInfo] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveEdu = (eduInfo) => {
    const newEduInfo = [...edu, eduInfo];
    addEduInfo(newEduInfo);
    handleDisplay();
  };

  const deleteEdu = (id) => {
    const newEduInfo = [...edu];
    newEduInfo.splice(id, 1);
    addEduInfo(newEduInfo);
  };

  return (
    <>
      <SectionHeading title="Formal Education" />

      {edu.map((eduHist) => (
        <DisplayFormalEdu
          eduHist={eduHist}
          key={eduHist.id}
          deleteEdu={deleteEdu}
        />
      ))}
      <EduExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <OpenModalBtn title="Formal Education" handleDisplay={handleDisplay} />
    </>
  );
}

export default FormalEducation;
