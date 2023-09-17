import React, { useState } from "react";
import FetchData from "../FetchData/FetchData";

function Card() {
  const [logements, setLogements] = useState([]);

  const handleDataFetched = (data) => {
    setLogements(data);
  };

  return (
    <div className="gallery">
      <FetchData onDataFetched={handleDataFetched} />
      {logements.map((logement, index) => (
        <figure key={index}>
          <img src={logement.cover} alt={logement.title} />
          <figcaption>{logement.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Card;
