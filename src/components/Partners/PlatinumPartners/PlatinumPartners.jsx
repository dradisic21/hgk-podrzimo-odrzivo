import React, { useState, useEffect } from "react";
import { getPlatinumPartners } from "../../../services/Api";
import { useTranslation } from 'react-i18next';
import "./PlatinumPartners.scss";

export function PlatinumPartners() {
  const [partners, setPartners] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPlatinumPartners();
        if (response && response.active_page) {
          setPartners(response.accordions);
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  if (!isActive) {
    return null; 
  }

  return (
    <div className="platinum-partners-page-container">
      <div className="title-box">
        <p className="title">{t('Platinasti')}</p>
      </div>

      <div className="partner-page-box">
        {partners.map((partner) => (
          <div
            className={`partner-card ${partner.subtitle ? "has-subtitle" : ""}`}
            key={partner.id}
          >
            {partner.subtitle ? (
              <a
                href={partner.subtitle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content">
                  <div className="image-content">
                    <img
                      src={`https://hgk.hr/images/full/${partner.picture_path}`}
                      alt="slika"
                    />
                  </div>
                  <div className="text-content">
                    <p className="partner-name">{partner.title}</p>
                    <div className="text">
                      <div dangerouslySetInnerHTML={{ __html: partner.body }} />
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div className="content">
                <div className="image-content">
                  <img
                    src={`https://hgk.hr/images/full/${partner.picture_path}`}
                    alt="slika"
                  />
                </div>
                <div className="text-content">
                  <p className="partner-name">{partner.title}</p>
                  <div className="text">
                    <div dangerouslySetInnerHTML={{ __html: partner.body }} />
                  </div>
                </div>
                <div className="link-content">
                  <p className="read-web">Pročitaj više na našem webu...</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
