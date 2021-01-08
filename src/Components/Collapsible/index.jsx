import React from "react";
import { useState } from "react";
import "./Collapsible.css";

const Collapsible = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <>
      <label
        className={`collapsible-label${isOpen ? " open" : ""}`}
        onClick={toggleCollapse}
      >
        {label}
      </label>
      <div className={`collapsible-content${isOpen ? " open" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Collapsible;
