import React, { useState } from "react";
import SectionHeading from "../Header/Header";
import OpenModalBtn from "../buttons/OpenModalBtn";
import SelfEduForm from "./SelfEduForm";
import DisplaySelfEdu from "../SelfEducation/DisplaySelfEdu";

function SelfEducation() {
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
      <SectionHeading title="Self Education" />

      {edu.map((eduHist) => (
        <DisplaySelfEdu
          eduHist={eduHist}
          key={eduHist.id}
          deleteEde={deleteEdu}
        />
      ))}
      <SelfEduForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <OpenModalBtn title="Self Education" handleDisplay={handleDisplay} />
    </>
  );
}

export default SelfEducation;
