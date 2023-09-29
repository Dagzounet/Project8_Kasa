import React from "react";

function Banner({ image, showText }) {
  return (
    <div className="banner">
      <img src={image} alt="banniere de Kasa" />
      {showText && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
}

export default Banner;
