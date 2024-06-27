import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Ballons } from "../../components/Balloons/Balloons";
import { getInstPartners } from "../../services/Api";
import { useTranslation } from "react-i18next";
import "./BecomePartner.scss";

export function BecomePartner() {
  const [documents, setDocuments] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getInstPartners();
        console.log(response);
        setDocuments(response);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
  }, [i18n.language]);

  const downloadLink =
    documents.files && documents.files.length > 0
      ? documents.file_prefix + documents.files[0].url_path
      : null;

  return (
    <div className="become-partner_container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="title-content">
        <h2 className="support-title">
          {t("POSTANITE PARTNER")} <br />
          {t("PODRŽIMO ODRŽIVO 2024.")}
        </h2>
        <div className="line"></div>
        <div className="text-content">
          <p>{t("partnersBody")}</p>
        </div>

        <a href={downloadLink} download target="_blank" rel="noreferrer">
          <Button
            type="button"
            className="read-more"
            name={t("SPONZORSKI PAKETI")}
          />
        </a>
      </div>
      <div className="image-content">
        <img src="/assets/become-partner-circle.svg" alt="" />
      </div>
    </div>
  );
}
