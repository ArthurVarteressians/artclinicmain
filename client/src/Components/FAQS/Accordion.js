import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleToggle() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <div className="accordion">
        <button className="accordion__button" onClick={handleToggle}>
          <p className="accordion__title">{title}</p>
          <span
            className={`accordion__icon ${
              isExpanded ? "accordion__icon--expanded" : ""
            }`}
          >
            <i className="fas fa-plus"></i> <i className="fas fa-minus"></i>
          </span>
        </button>
      </div>
      <div
        className={`accordion__content ${
          isExpanded ? "accordion__content--expanded" : ""
        }`}
      >
        {content}
      </div>
    </>
  );
}
export default Accordion;
