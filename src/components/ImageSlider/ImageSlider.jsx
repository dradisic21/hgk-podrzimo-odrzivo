import React from "react";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "../Button/Button";
import "./ImageSlider.scss";



export function ImageSlider() {
  const navigate = useNavigate();
  const images = ["slide1.svg", "slide2.svg", "slide3.svg", "slide4.svg"];

  const handleGetTicketClick = () => {
    if (i18n.language === "en") {
      navigate("/conference-registration");
    } else if (i18n.language === "hr") {
      navigate("/prijava-na-konferenciju");
    }
  };
  
  const items = images.map((image, index) => (
    <div className="slide" key={index} style={{ position: "relative" }}>
      <img src={`/assets/slider/${image}`} alt={`Slika ${index + 1}`} style={{ width: "100%" }} />
      <div className="slide-content">
        <h1 className="slide-title">Podržimo održivo 2024. 9. - 10.9.2024. Lauba, Zagreb</h1>
        <p className="slide-subtitle">Transformacija na djelu Transformation in Action</p>
        <Button type="button" className="ticket-btn" name="GET TICKET" onClick={handleGetTicketClick} />
      </div>
    </div>
  ));

  return (
    <div className="image-slider_container">
      <AliceCarousel
        autoPlay
        autoPlayInterval={5000}
        infinite={true}
        disableButtonsControls={false} 
        disableDotsControls={false}
      >
        {items}
      </AliceCarousel>
    </div>
  );
}
