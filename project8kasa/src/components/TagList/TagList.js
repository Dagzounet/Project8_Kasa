import React from "react";
import PropTypes from "prop-types";

function TagList({ tags }) {
  return (
    <div className="tags-container">
      {tags.map(
        (
          tag,
          index // map créer new tableau depuis l'ancien "tags" avec <p> pour chaque tag
        ) => (
          <p key={index} className="tag">
            {tag}
          </p>
        )
      )}
    </div>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // tags = tableau de chaînes de caractères (strings)
};

export default TagList;
