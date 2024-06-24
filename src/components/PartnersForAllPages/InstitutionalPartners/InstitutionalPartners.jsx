import React, { useState, useEffect } from "react";
import { getInstPartners } from "../../../services/Api";
import "./InstitutionalPartners.scss";

export function InstitutionalPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getInstPartners();
        setPartners(response.accordions);
       
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="institutional-partners-container">
      <div className="title-box">
        <p className="title">Institucionalni partneri</p>
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
