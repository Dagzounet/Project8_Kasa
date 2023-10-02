import React from "react";
import PropTypes from "prop-types";

function Banner({ image, showText }) {
  return (
    <div className="banner">
      <img src={image} alt="banniere de Kasa" />
      {showText && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired, // image = chaîne de caractères (string) requise
  showText: PropTypes.bool.isRequired, // showText = booléen (bool) requis
};

export default Banner;
