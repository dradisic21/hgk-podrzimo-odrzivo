import React, { useState, useEffect } from "react";
import { getBronzedPartners } from "../../../services/Api";
import { useTranslation } from 'react-i18next';
import "./BronzedPartner.scss";

export function BronzedPartner() {
  const [partners, setPartners] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getBronzedPartners();
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
  }, [i18n.language]);

  if (!isActive) {
    return null;
  }

  return (
    <div className="bronzed-partners-container">
      <div className="title-box">
        <p className="title">{t('Brončani')}</p>
      </div>

      <div className="partner-box">
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
