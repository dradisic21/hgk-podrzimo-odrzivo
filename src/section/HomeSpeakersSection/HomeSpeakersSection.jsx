import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSaysSpeakers } from "../../services/Api";
import { Button } from "../../components/Button/Button";
import "./HomeSpeakersSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";

export function HomeSpeakersSection() {
  const [speakers, setSpekaers] = useState([{}]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/govornici");
  };

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

  return (
    <div className="home-speaker_container">
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
          name="POGLEDAJ SVE GOVORNIKE"
          className="speakers-btn"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
