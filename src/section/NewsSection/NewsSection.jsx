import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getNews } from "../../services/Api";
import "./NewsSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import { useTranslation } from "react-i18next";

export function NewsSection() {
  const [newsletter, setNewsletter] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getNews();
        setNewsletter(response);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hr-HR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="news-container">
      <div className="balloon-container">
        <Ballons />
      </div>

      <div className="news-titles-content">
        <h1 className="news-title">
          {t("Pročitajte nešto od vijesti i događanja")}
        </h1>
      </div>

      <div className="news-content">
        <AliceCarousel
          autoPlay
          autoPlayInterval={5000}
          infinite={true}
          disableButtonsControls={false} 
          disableDotsControls={false}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {newsletter.map((news) => (
            <div className="news-box" key={news.id}>
              <Link to={`/${news.slug}`}>
                <div className="content">
                  <div className="image-content">
                    <img
                      src={`https://hgk.hr/images/full/${news.featured_image}`}
                      alt="slika"
                    />
                  </div>
                  <div className="text-content">
                    <p className="head-date">{formatDate(news.created_at)}</p>
                    <h3 className="box-title">{news.title}</h3>
                    <div
                      className="box-subtitle"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(news.body, 13),
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}
