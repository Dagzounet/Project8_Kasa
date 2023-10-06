import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // démarre sur false

  const toggleCollapse = () => {
    setIsOpen(!isOpen); //inversion de l'état
  };

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`icon ${isOpen ? "icon-down" : "icon-up"}`} // true down, false up
        />
      </button>
      <div
        className={`collapse-content ${
          isOpen ? "collapse-animation collapse-open" : "collapse-animation"
        }`} // créer div si ouvert
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired, // title = chaîne de caractères (string)
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired, // content = soit chaîne de caractères (string), soit tableau de chaînes de caractères (string)
};

export default Collapse;
