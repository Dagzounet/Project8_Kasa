import React from "react";
import banner from "../../assets/BANNER.png";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banniere de Kasa" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
