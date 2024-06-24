import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./GalleryPopup.scss";

export function GalleryPopup({ onClose, gallery }) {
  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);

  return (
    <div className="gallery-popup-backdrop">
      <div className="gallery-popup-container">
        <div className="gallery-popup-content">
          <img
            src="/assets/icons/close-white.svg"
            alt="close-btn"
            className="close-button"
            onClick={onClose}
          />
          <div className="popup-images">
            <AliceCarousel
              autoPlay
              autoPlayInterval={5000}
              infinite={true}
              disableButtonsControls={false}
              disableDotsControls={false}
            >
              {gallery.map((image, index) => (
                <img
                  key={index}
                  src={`/assets/conference/${image.image}`}
                  alt={`Gallery ${index + 1}`}
                  className="popup-image"
                />
              ))}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
