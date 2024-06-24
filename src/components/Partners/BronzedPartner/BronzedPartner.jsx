import React, { useState, useEffect } from "react";
import { getBronzedPartners } from "../../../services/Api";
import "./BronzedPartner.scss";

export function BronzedPartner() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getBronzedPartners();
        setPartners(response.accordions);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bronzed-partners-container">
      <div className="title-box">
        <p className="title">Brončani</p>
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
