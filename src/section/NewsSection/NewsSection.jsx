import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../services/Api";
import { Button } from "../../components/Button/Button";
import "./NewsSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";

export function NewsSection() {
  const [newsletter, setNewsletter] = useState([]);

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
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hr-HR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="news-container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="news-titles-content">
        <h1 className="news-title">Pročitajte nešto od vijesti i događanja</h1>
        <p className="news-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been...
        </p>

        <div className="news-content">
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
                    <h3 className="box-title">
                      {truncateText(news.title, 62)}
                    </h3>
                    <p className="box-subtitle">
                      {truncateText(news.meta_description, 94)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="btn-content">
          <Button
            type="button"
            name="UČITAJ VIŠE VIJESTI"
            className="news-btn"
          />
        </div>
      </div>
    </div>
  );
}
