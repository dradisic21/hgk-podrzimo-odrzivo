import React, { useState, useEffect } from "react";
import { getPlatinumPartners } from "../../../services/Api";
import "./PlatinumPartners.scss";

export function PlatinumPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPlatinumPartners();
        setPartners(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="platinum-partners-container">
      <div className="title-box">
        <p className="title">Platinasti</p>
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
