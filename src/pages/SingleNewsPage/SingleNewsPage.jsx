import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import { getSingleNews } from "../../services/Api";
import "./SingleNewsPage.scss";
import { useTranslation } from "react-i18next";
import { BannerSection } from "../../section/BannerSection/BannerSection";

export default function SingleNewsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [news, setNews] = useState([[]]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSingleNews(slug);
        setNews(response);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
  }, [slug, i18n.language]);

  const handleGetTicketClick = () => {
    if (i18n.language === "en") {
      navigate("/conference-registration");
    } else if (i18n.language === "hr") {
      navigate("/prijava-na-konferenciju");
    }
  };

  return (
    <div className="single-news-page-container">
      <div className="header">
        <img
          src={`https://hgk.hr/images/full/${news.featured_image}`}
          alt="header-pictures"
        />

        <div className="header-content">
          <p className="header-subtitle">{news.title}</p>
          <div className="button-content">
            <Button
              type="button"
              className="ticket-btn"
              name={t("Kupi ulaznice")}
              onClick={handleGetTicketClick}
            />
          </div>
        </div>
      </div>

      <div className="single-news-page">
        <div dangerouslySetInnerHTML={{ __html: news.body }} />
      </div>

      <Gallery />
      {(slug === "awards-ceremony-of-the-first-croatian-esg-rating" ||
        slug === "dodjela-nagrada-prvog-hrvatskog-esg-ratinga") && (
        <BannerSection />
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}
