import { Ballons } from "../../components/Balloons/Balloons";
import "./ConferencePageTextSection.scss";
import {useTranslation} from "react-i18next";

export function ConferencePageTextSection() {
  const { t } = useTranslation();

  return (
    <div className="conference-page-text-container">
      <div className="balloon-container">
       <Ballons />
        <img
          src="/assets/balloons-component/dots.svg"
          alt="ballon"
          className="dots"
        />
      </div>

      <div className="conference-page-text-content">
        <div className="super-text">
          <h2 className="super-text-title">
            {t("O KONFERENCIJI")}
          </h2>
          <p className="super-text-subtitle">
            {t("aboutConferenceFirstParagraph")}
          </p>
        </div>
        <div className="super-text">
          <p className="super-text-subtitle">
            {t("aboutConferenceSecondParagraph")}
          </p>
        </div>
          <img src="/assets/growth-infograph.png" alt="Infograf rasta"/>
          <div className="super-text-subtitle">
              <p>{t("Konferencija je namijenjena")}</p>
              <ul>
                  <li>
                      {t("Poslovnoj zajednici")}
                  </li>
                  <li>
                      {t("Državnoj i lokalnoj upravi")}
                  </li>
                  <li>
                      {t("Neprofitnim organizacijama i civilnom sektoru")}
                  </li>
                  <li>
                      {t("Akademskoj zajednici")}
                  </li>
                  <li>
                      {t("Ostalim zainteresiranim institucijama i profesionalcima")}
                  </li>
              </ul>
          </div>

      </div>
    </div>
  );
}
