import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

library.add(solidStar);

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Si (i) est inférieur ou égal à la note, alors apparition d'une étoile avec une classe destiné au rouge
      stars.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="star-red" />
      );
    } else {
      // Sinon, apparition d'une étoile avec une classe destiné au gris
      stars.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="star-gray" />
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
}

StarRating.propTypes = {
  rating: PropTypes.string.isRequired, // rating = chaine de caractères ici (pas un number)
};

export default StarRating;
