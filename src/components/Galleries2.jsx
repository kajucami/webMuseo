import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imagen1 from "../assets/img/obras/DelBarrio.jpg";
import imagen2 from "../assets/img/obras/DelBarrio2.jpg";
import imagen3 from "../assets/img/obras/DHockney.jpg";

const images = [imagen1, imagen2, imagen3];

const Gallery2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="relative"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        style={{
          maxWidth: "600px",
          maxHeight: "800px",
        }}
        className="p-2"
      />

      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{ maxWidth: "80px", maxHeight: "100px" }}
            onClick={() => setCurrentImage(index)}
            className={`thumbnail ${index === currentImage ? "active" : ""}`}
          />
        ))}
      </div>
      <button
        onClick={handlePrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
      </button>
    </div>
  );
};

export default Gallery2;
