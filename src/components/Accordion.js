import React from "react";
import { useState } from "react";

export const Accordion = ({ accordion }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{accordion.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{accordion.content}</div>}
    </div>
  );
};
