import React, { useState } from "react";
import imagen1 from "../assets/img/sanerPortada.jpg";
import imagen2 from "../assets/img/sebasPortada.jpg";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleNextImage = () => {
    setCurrentImage(currentImage === 1 ? 2 : 1);
  };

  const handlePrevImage = () => {
    setCurrentImage(currentImage === 1 ? 2 : 1);
  };

  return (
    <div
      className="relative"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={currentImage === 1 ? imagen1 : imagen2}
        alt={`Imagen ${currentImage}`}
        style={{ width: "800px", height: "500px" }}
      />

      <button
        onClick={handlePrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
      </button>
      <br />
      <button
        onClick={handleNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
