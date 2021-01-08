import React from "react";
import "./InputField.css";

const InputField = ({ label, isTextArea, ...props }) => {
  const currComponent = { type: isTextArea ? "textarea" : "input" };

  return (
    <>
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
      <currComponent.type {...props} required />
    </>
  );
};

export default InputField;
