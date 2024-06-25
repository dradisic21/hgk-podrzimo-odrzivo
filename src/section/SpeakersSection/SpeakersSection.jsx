import React, { useState, useEffect } from "react";
import { getSaysSpeakers } from "../../services/Api";
import { PopUp } from "../../components/Popup/PopUp";
import { Button } from "../../components/Button/Button";
import "./SpeakersSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";

export function SpeakersSection() {
  const [speakers, setSpekaers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSpeakerId, setSelectedSpeakerId] = useState({});

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
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

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
        <h1 className="speaker-title">Što kažu naši supercool govornici</h1>
        <p className="speaker-subtitle">
          Samo rečenica uvoda kako su nam super govornici i klikom idu na
          p1regled govornika koji su na posebnoj stranici
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

                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(speaker.body, 100),
                  }}
                />
              </div>
            </div>
            <div className="speaker-actions">
              <Button
                type=""
                name="Pročitaj više"
                className="speake-read-more"
                onClick={() => openPopup(speaker.id)}
              />
              <img src="/assets/icons/social-icons/linkedin-cyan.svg" alt="" />
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
