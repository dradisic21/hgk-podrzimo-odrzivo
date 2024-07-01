import React, { useState, useEffect } from "react";
import { getSaysSpeakers } from "../../services/Api";
import { PopUp } from "../../components/Popup/PopUp";
import { Button } from "../../components/Button/Button";
import "./SpeakersSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import {useTranslation} from "react-i18next";

export function SpeakersSection() {
  const [speakers, setSpekaers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSpeakerId, setSelectedSpeakerId] = useState({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSaysSpeakers();
        setSpekaers(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);


  const openPopup = (speakerId) => {
    setSelectedSpeakerId(speakerId);
    setIsPopupOpen(true);
  };

  return (
    <div className="speaker_container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="title-main">
        <h1 className="speaker-title">{t("GOVORNICI KOJI INSPIRIRAJU I POTIČU NA AKCIJU")}</h1>
        <p className="speaker-subtitle">
          {t("speakersSubTitle")}
        </p>
      </div>

      <div className="speakers-content">
        {speakers.map((speaker) => (
          <div className="speaker-card" key={speaker.id}>
            <div className="content">
              <div className="profile-main">
                <img
                  src={`https://hgk.hr/images/full/${speaker.picture_path}`}
                  alt="profile-pic"
                  className="speaker-image"
                />
                <h3 className="card-title">PODRŽIMO ODRŽIVO 2024</h3>
                <div className="speaker-info">
                  <h2 className="speaker-name">{speaker.title}</h2>
                </div>
                <p className="text">{speaker.subtitle}</p>
              </div>
            </div>
            <div className="speaker-actions">
              <Button
                type=""
                name={t("Pročitaj više")}
                className="speake-read-more"
                onClick={() => openPopup(speaker.id)}
              />
              <div>
              {speaker.childs && speaker.childs.map((child) => (
                  <a href={child.title} key={child.id} target="_blank" rel="noopener noreferrer">
                  {child.title.includes("linkedin") && (
                    <img
                      src="/assets/icons/social-icons/linkedin-cyan.svg"
                      alt="LinkedIn"
                    />
                  )}
                </a>
                ))}
              
              </div>
                  
            </div>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <PopUp
          selectedSpeakerId={selectedSpeakerId}
          speakers={speakers}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}
