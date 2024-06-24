import React, { useState, useEffect } from "react";
import { getGoldPartners } from "../../../services/Api";
import "./GoldPartners.scss";

export function GoldPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getGoldPartners();
        setPartners(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gold-partners-container">
      <div className="title-box">
        <p className="title">Zlatni</p>
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
