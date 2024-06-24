import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import { getSingleNews } from "../../services/Api";
import "./SingleNewsPage.scss";

export function SingleNewsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [news, setNews] = useState([[]]);

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
  }, [slug]);

  const handleGetTicketClick = () => {
    navigate("/prijava-na-konferenciju");
  };

  return (
    <div className="single-news-page-container">
      <div className="header">
        <img
          src={`https://hgk.hr/images/full/${news.featured_image}`}
          alt="header-pictures"
        />

        <div className="header-content">
          <h1 className="header-title">O KONFERENCIJI</h1>
          <p className="header-subtitle">{news.title}</p>
          <div className="button-content">
            <Button
              type="button"
              className="ticket-btn"
              name="GET TICKET"
              onClick={handleGetTicketClick}
            />
          </div>
        </div>
      </div>
  
      <div className="single-news-page">
        <div dangerouslySetInnerHTML={{ __html: news.body }} />
      </div>

      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
}
