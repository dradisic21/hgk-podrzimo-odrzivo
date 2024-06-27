import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { SocialMedia } from "../../components/SocialMedia/SocilaMedia";
import { sentNewsletter } from "../../services/Api";
import "./Newsletter.scss";
import {useTranslation} from "react-i18next";


export function Newsletter() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();


  const handleSubscribe = async () => {
 
    try {
      await sentNewsletter(email);
      setEmail("");
    } catch (error) {
      console.log(`Greška pri prijavi na newsletter: ${error.message}`);
    } 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="newsletter-container">
      <div className="content">
        <div className="title-content">
          <h1 className="newsletter-title">Newsletter:</h1>
          <p className="newsletter-text">
            {t("Prijavite se na naš newsletter i budite u koraku s najnovijim ESG trendovima")}
          </p>
        </div>
        <div className="input-content">
          <div className="input-container">
            <Input
              className="newsletter-input"
              placeholder={t("Pošalji svoj e-mail")}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="button-container" onClick={handleSubscribe}>
              <Button className="newsletter-btn">
                <img src="/assets/icons/btn-submit.svg" alt="icons" />
              </Button>
            </div>
          </div>
        </div>
        <div className="social-media-main">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
