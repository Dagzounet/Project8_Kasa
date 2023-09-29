import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`icon ${isOpen ? "icon-up" : "icon-down"}`}
        />
      </button>
      <div
        className={`collapse-content ${
          isOpen ? "collapse-animation collapse-open" : "collapse-animation"
        }`}
      >
        {Array.isArray(content) ? ( //si tableau (array) = affiche balise "ul" et "li"
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p> //sinon affiche contenu en p
        )}
      </div>
    </div>
  );
};

export default Collapse;
