import React, { useState, useEffect } from "react";
import { getSilverPartners } from "../../../services/Api";
import "./SilverPartners.scss";

export function SilverPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSilverPartners();
        setPartners(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="silver-partners-container">
      <div className="title-box">
        <p className="title">Srebrni</p>
      </div>

      <div className="partner-box">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.id}>
            <div className="content">
              <div className="image-content">
                <img src={`https://hgk.hr/images/full/${partner.picture_path}`} alt="slika" />
              </div>
              <div className="text-content">
                <p className="partner-name">{partner.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
