import React, { useState } from "react";
import uniqid from "uniqid";

function FormalEduForm(props) {
  const initialState = {
    school: "",
    dateAttended: "",
    studyField: "",
    location: "",
    degree: "",
    id: uniqid(),
  };

  const [formalEduInfo, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
}
