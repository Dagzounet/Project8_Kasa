import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import TagList from "../../components/TagList/TagList";
import StarRating from "../../components/StarRating/StarRating";
import Collapse from "../../components/Collapse/Collapse";

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isValidId, setIsValidId] = useState(true);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        const logementData = data.find((item) => item.id === id);

        if (logementData) {
          setLogement(logementData);
        } else {
          setIsValidId(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du logement :", error);
        setIsValidId(false);
      }
    };

    fetchLogement();
  }, [id]);

  if (!isValidId) {
    return <Navigate to="/not-found" />;
  }

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="Housing">
      {logement.pictures.length > 1 && <Carousel images={logement.pictures} />}
      {logement.pictures.length === 1 && (
        <img
          className="carousel-image"
          src={logement.pictures[0]}
          alt="Image"
        />
      )}
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
