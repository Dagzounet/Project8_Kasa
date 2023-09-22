import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        const logementData = data.find((item) => item.id === id);

        if (logementData) {
          setLogement(logementData);
        } else {
          console.error("Logement introuvable");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du logement :", error);
      }
    };

    fetchLogement();
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>;
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

      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <p>{logement.tags}</p>
      <p>
        <img src={logement.host.picture} alt="photo du propriétaire" />
        {logement.host.name}
        {logement.rating}
      </p>
      <div>
        <h2>Description</h2>
        <p>{logement.description}</p>
      </div>
      <div>
        <h2>Equipements</h2>
        <p>{logement.description}</p>
      </div>
    </div>
  );
}

export default Housing;
