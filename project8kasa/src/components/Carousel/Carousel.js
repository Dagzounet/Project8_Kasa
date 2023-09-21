import React, { useState } from "react";

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
      <div className="carousel-controls">
        {slideCount > 1 && (
          <div>
            <button onClick={prevImage} className="carousel-button">
              &#8249;
            </button>
            <span className="slide-number">
              {currentSlideNumber}/{slideCount}
            </span>
            <button onClick={nextImage} className="carousel-button">
              &#8250;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
