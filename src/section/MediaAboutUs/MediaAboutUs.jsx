import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { mediaCards } from "../../services/media";
import "./MediaAboutUs.scss";

export function MediaAboutUs() {
  const [activeTab, setActiveTab] = useState(mediaCards[0].year);
  const [hoveredCard, setHoveredCard] = useState(null);

  const getUniqueYears = () => {
    const years = mediaCards.map((media) => media.year);
    return Array.from(new Set(years));
  };

  const uniqueYears = getUniqueYears();

  const handleTabClick = (year) => {
    setActiveTab(year);
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const { t } = useTranslation();
  return (
    <div className="media-about-us-container">
      <div className="media-about-us-title">
        <h1 className="media-title">{t("Mediji o nama")}</h1>
      </div>

      <div className="media-about-us-content">
        <div className="button-media-content">
          {uniqueYears.map((year) => (
            <Button
              key={year}
              type="button"
              name={year}
              className={`tab-btn ${activeTab === year ? "active" : ""}`}
              onClick={() => handleTabClick(year)}
            />
          ))}
        </div>

        <div className="media-cards-content">
          {mediaCards
            .filter((media) => media.year === activeTab)
            .map((media) => (
              <Link
                to={media.link}
                key={media.id}
                target="_blank"
                rel="noopener noreferrer"
                className={`media-card ${
                  hoveredCard === media.id ? "hovered" : ""
                } ${hoveredCard && hoveredCard !== media.id ? "dimmed" : ""}`}
                onMouseEnter={() => setHoveredCard(media.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={`assets/media-about-us/${media.image}`}
                  alt={media.title}
                  className="media-image"
                />
                <div className="media-text">
                  <p className="media-card-pretitle">{media.preTitle}</p>
                  <h3 className="media-card-title">
                    {truncateText(media.title, 8)}
                  </h3>
                  <p className="media-card-subtitle">
                    {truncateText(media.subtitle, 16)}
                  </p>
                  <p className="media-read-more">{t("Pročitaj više")}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
