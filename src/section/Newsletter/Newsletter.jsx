import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "./Newsletter.scss";
import { SocialMedia } from "../../components/SocialMedia/SocilaMedia";

export function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="content">
        <div className="title-content">
          <h1 className="newsletter-title">Newsletter:</h1>
          <p className="newsletter-text">
            Prijavite se na naš newsletter i budite u koraku s najnovijim ESG
            trendovima.
          </p>
        </div>
        <div className="input-content">
          <div className="input-container">
            <Input
              className="newsletter-input"
              placeholder="Pošalji svoj e-mail"
            />
            <div className="button-container">
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
