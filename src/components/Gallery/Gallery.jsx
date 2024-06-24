import React, { useState } from "react";
import {
  galleryImage1,
  galleryImage2,
  galleryImage3,
} from "../../services/gallery";
import { Button } from "../Button/Button";
import "./Gallery.scss";
import { GalleryPopup } from "../GalleryPopup/GalleryPopup";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState([]);

  const openPopup = (gallery) => {
    setSelectedGallery(gallery);
    setIsOpen(true);
  };

  return (
    <div className="gallery-container">

      <div className="balloon-container">
        <img
          src="/assets/balloons/conference-balloons/balloon3.svg"
          alt="ballon"
          className="balloon-one"
        />
        <img
          src="/assets/balloons/conference-balloons/balloon4.svg"
          alt="ballon"
          className="balloon-two"
        />
      </div>

      <div className="gallery-content">
        <div className="gallery-head">
          <p className="head-title">Slike od prošlih konferencija</p>
          <div className="watch-gallery">
            <Button type="button" className="gallery-btn">
              <img src="/assets/icons/ph_arrow-up.svg" alt="strelica" />
            </Button>
            <p className="all-gallery">POGLEDAJ GALERIJU</p>
          </div>
        </div>

        <div className="gallery-image-content">
          <div className="gallery-image">
            <img
              src={`/assets/conference/${galleryImage1[0].image}`}
              alt="Gallery 1"
              className="gallery-image"
            />
            <div className="button-position">
              <Button
                type="button"
                className="open-gallery-btn"
                onClick={() => openPopup(galleryImage1)}
              >
                <img
                  src="/assets/icons/ph_arrow-up-yellow.svg"
                  alt="strelica"
                />
              </Button>
            </div>
            <div className="gallery-text">
              <p className="gallery-title">Prošla konferencija 2023.</p>
            </div>
          </div>
          <div className="gallery-image">
            <img
              src={`/assets/conference/${galleryImage2[0].image}`}
              alt="Gallery 2"
              className="gallery-image"
            />
            <div className="button-position">
              <Button
                type="button"
                className="open-gallery-btn"
                onClick={() => openPopup(galleryImage2)}
              >
                <img
                  src="/assets/icons/ph_arrow-up-yellow.svg"
                  alt="strelica"
                />
              </Button>
            </div>
            <div className="gallery-text">
              <p className="gallery-title">Prošla konferencija 2023.</p>
            </div>
          </div>
          <div className="gallery-image">
            <img
              src={`/assets/conference/${galleryImage3[0].image}`}
              alt="Gallery 3"
              className="gallery-image"
            />
            <div className="button-position">
              <Button
                type="button"
                className="open-gallery-btn"
                onClick={() => openPopup(galleryImage3)}
              >
                <img
                  src="/assets/icons/ph_arrow-up-yellow.svg"
                  alt="strelica"
                />
              </Button>
            </div>
            <div className="gallery-text">
              <p className="gallery-title">Prošla konferencija 2023.</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <GalleryPopup
          onClose={() => setIsOpen(false)}
          gallery={selectedGallery}
        />
      )}
    </div>
  );
}
