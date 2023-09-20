import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FetchData } from "../../pages/Home/Home";

function Cards() {
  const [logements, setLogements] = useState([]); // useState pour pouvoir stocker les données des logements

  const handleDataFetched = (data) => {
    // Appel de la fonction pour traiter les données récupérées
    setLogements(data); // Mise à jour du useState avec les données récupérées
  };

  return (
    <div className="gallery">
      <FetchData onDataFetched={handleDataFetched} />
      {/* Appel du composant pour le fetch des données 
          puis boucle map avec les données des logements pour les afficher*/}
      {logements.map((logement, index) => (
        <Link key={index} to={`/housing/${logement.id}`}>
          <figure key={index}>
            <img src={logement.cover} alt={logement.title} />
            <figcaption>{logement.title}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
