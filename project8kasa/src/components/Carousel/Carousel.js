import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight as chevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft as chevronLeft } from "@fortawesome/free-solid-svg-icons";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideCount = images.length;
  const currentSlideNumber = currentIndex + 1;

  return (
    <div className="carousel-container">
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Image ${currentSlideNumber}`}
      />
      {slideCount > 1 && (
        <div className="carousel-controls">
          <button onClick={prevImage} className="arrow-left">
            <FontAwesomeIcon icon={chevronLeft} />
          </button>
          <span className="slide-number">
            {currentSlideNumber}/{slideCount}
          </span>
          <button onClick={nextImage} className="arrow-right">
            <FontAwesomeIcon icon={chevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // images = tableau de chaînes de caractères (URLs)
};

export default Carousel;
