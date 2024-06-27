import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHomeSpeakers } from "../../services/Api";
import { Button } from "../../components/Button/Button";
import "./HomeSpeakersSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import {useTranslation} from "react-i18next";

export function HomeSpeakersSection() {
  const [speakers, setSpekaers] = useState([{}]);
  const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleClick = () => {
    navigate("/govornici");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getHomeSpeakers();
        setSpekaers(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div className="home-speaker_container">
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
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <div className="content">
              <div className="logo-image">
                <img src="/assets/logo/speaker-logo.svg" alt="logo" />
              </div>
              <div className="text">
                <div dangerouslySetInnerHTML={{ __html: speaker.body }}></div>
              </div>
              <div className="profile-main">
                <img
                  src={`https://hgk.hr/images/full/${speaker.picture_path}`}
                  alt="profile-pic"
                  className="speaker-image"
                />
                <div className="speaker-info">
                  <h2 className="speaker-name">{speaker.title}</h2>
                  <p className="speaker-description">{speaker.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-content">
        <Button
          type="button"
          name={t("POGLEDAJ SVE GOVORNIKE")}
          className="speakers-btn"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
