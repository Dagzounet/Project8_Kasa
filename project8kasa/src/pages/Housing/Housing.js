import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import TagList from "../../components/TagList/TagList";
import StarRating from "../../components/StarRating/StarRating";
import Collapse from "../../components/Collapse/Collapse";

function Housing() {
  const { id } = useParams(); // hooks pour extraire id spécifique à afficher
  const [logement, setLogement] = useState(null); // pour stocker les données récupérées
  const [isValidId, setIsValidId] = useState(true); // pour vérifier si le logement est valide

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        const logementData = data.find((item) => item.id === id); // pour récup données = à id url

        if (logementData) {
          setLogement(logementData); // actualise le hooks state = ré-renderisation avec les data
        } else {
          setIsValidId(false); // pour pouvoir renvoyer vers 404
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du logement :", error);
        setIsValidId(false);
      }
    };

    fetchLogement();
  }, [id]); // le hooks effect est exécuté chaque fois que l'id change

  if (!isValidId) {
    return <Navigate to="/not-found" />;
  }

  if (!logement) {
    return <div>Chargement...</div>;
  } // pour laisser le temps au logement de charger

  return (
    <div className="Housing">
      <Carousel images={logement.pictures} />
      <article className="location-text-container">
        <div className="TitleLocation">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <TagList tags={logement.tags} />
        </div>
        <div className="HostRating">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="photo du propriétaire" />
          <StarRating rating={logement.rating} />
        </div>
      </article>
      <div className="Collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Equipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Housing;
