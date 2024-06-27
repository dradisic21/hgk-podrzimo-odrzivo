import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "./PopUp.scss";

export function PopUp({ selectedSpeakerId, speakers, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const selectedSpeaker = speakers.find(
    (speaker) => speaker.id === selectedSpeakerId
  );

  if (!selectedSpeaker) {
    return null;
  }

  return (
    <div className="popup-backdrop">
      <div className="popup-container">
        <div className="popup-content">
          <img
            src="/assets/icons/close.svg"
            alt="close-btn"
            className="close-button"
            onClick={onClose}
          />
          <p className="card-title">PODRŽIMO ODRŽIVO 2024</p>

          <img
            src={`https://hgk.hr/images/full/${selectedSpeaker.picture_path}`}
            alt="profile-pic"
            className="speaker-image"
          />

          <h2 className="speaker-name">{selectedSpeaker.title}</h2>
          <div
            className="speaker-body"
            dangerouslySetInnerHTML={{ __html: selectedSpeaker.body }}
          />
          <div className="popup-action">
            <Button
              type="button"
              name="Zatvori"
              className="popup-close"
              onClick={onClose}
            />
            <div className="popup-contant">
              <p>Kontakt:</p>

              {selectedSpeaker.childs &&
                selectedSpeaker.childs.map((child) =>
                  child.title.includes("linkedin") ? (
                    <a
                      href={child.title}
                      key={child.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/icons/social-icons/linkedin-cyan.svg"
                        alt="LinkedIn"
                      />
                    </a>
                  ) : null
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
