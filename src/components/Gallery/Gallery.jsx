import React, { useState } from "react";
import {
  galleryImage1,
  galleryImage2,
  galleryImage3,
} from "../../services/gallery";
import { Button } from "../Button/Button";
import "./Gallery.scss";
import { GalleryPopup } from "../GalleryPopup/GalleryPopup";
import { Ballons } from "../Balloons/Balloons";
import { useTranslation } from "react-i18next";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const { t } = useTranslation();

  const openPopup = (gallery) => {
    setSelectedGallery(gallery);
    setIsOpen(true);
  };

  const openFirstGallery = () => {
    setSelectedGallery(galleryImage1);
    setIsOpen(true); 
  };

  return (
    <div className="gallery-container">
      <div className="balloon-container">
        <Ballons />
      </div>

      <div className="gallery-content">
        <div className="gallery-head">
          <p className="head-title">{t("Slike od prošlih konferencija")}</p>
          <div className="watch-gallery">
            <Button type="button" className="gallery-btn" onClick={openFirstGallery}>
              <img src="/assets/icons/ph_arrow-up.svg" alt="strelica" />
            </Button>
            <p className="all-gallery">{t("POGLEDAJ GALERIJU")}</p>
          </div>
        </div>

        <div className="gallery-image-content">
          <div
            className="gallery-image"
            onClick={() => openPopup(galleryImage1)}
          >
            <img
              src={`/assets/conference/${galleryImage1[0].image}`}
              alt="Gallery 1"
              className="gallery-image"
            />
            <div className="button-position">
              <Button type="button" className="open-gallery-btn">
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
          <div
            className="gallery-image"
            onClick={() => openPopup(galleryImage2)}
          >
            <img
              src={`/assets/conference/${galleryImage2[0].image}`}
              alt="Gallery 2"
              className="gallery-image"
            />
            <div className="button-position">
              <Button type="button" className="open-gallery-btn">
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
          <div
            className="gallery-image"
            onClick={() => openPopup(galleryImage3)}
          >
            <img
              src={`/assets/conference/${galleryImage3[0].image}`}
              alt="Gallery 3"
              className="gallery-image"
            />
            <div className="button-position">
              <Button type="button" className="open-gallery-btn">
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
