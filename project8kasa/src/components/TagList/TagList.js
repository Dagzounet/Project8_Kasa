import React from "react";

function TagList({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}

export default TagList;
