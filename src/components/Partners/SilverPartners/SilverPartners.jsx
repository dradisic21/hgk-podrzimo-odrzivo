import React, { useState, useEffect } from "react";
import { getSilverPartners } from "../../../services/Api";
import { useTranslation } from 'react-i18next';
import "./SilverPartners.scss";

export function SilverPartners() {
  const [partners, setPartners] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSilverPartners();
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
    <div className="silver-partners-container">
      <div className="title-box">
        <p className="title">{t('Srebrni')}</p>
      </div>

      <div className="partner-box">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
