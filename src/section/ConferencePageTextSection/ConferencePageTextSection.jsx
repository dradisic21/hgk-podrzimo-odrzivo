import "./ConferencePageTextSection.scss";
import {useTranslation} from "react-i18next";

export function ConferencePageTextSection() {
  const { t } = useTranslation();

  return (
    <div className="conference-page-text-container">
      <div className="balloon-container">
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
          <div className="super-text">
              <h2 className="super-text-title">
                  {t("Ugostili smo vrhunske međunarodne i domaće stručnjake")}
              </h2>
              <p className="super-text-subtitle">
                  {t("2023. godine")}
              </p>
              <ul>
                  <li>{t("Mark Esposito")}</li>
                  <li>{t("Eila Kreivi")}</li>
                  <li>{t("Stephanie Hare")}</li>
                  <li>{t("Michela Magaš")}</li>
                  <li>{t("Elin Bergman")}</li>
                  <li>{t("Nicolas De Santis")}</li>
                  <li>{t("Paul Clements-Hunt")}</li>
                  <li>{t("Sasja Beslik")}</li>
                  <li>{t("Ana Zorić")}</li>
                  <li>{t("Sandra Švaljek")}</li>
                  <li>{t("Ante Žigman")}</li>
                  <li>{t("Anđelko Švaljek")}</li>
                  <li>{t("Medeja Lončar")}</li>
                  <li>{t("Christoph Schoefboeck")}</li>
                  <li>{t("Ivana Petričević")}</li>
                  <li>{t("Domagoj Boljar")}</li>
                  <li>{t("Hrvoje Glavaš")}</li>
                  <li>{t("Davor Blažek")}</li>
              </ul>

              <p className="super-text-subtitle">
                  {t("2022. godine")}
              </p>
              <ul>
                  <li>{t("Andrew Winston")}</li>
                  <li>{t("Marc Buckley")}</li>
                  <li>{t("Daria Krivonos")}</li>
                  <li>{t("Ladeja Godina Košir")}</li>
                  <li>{t("Dieter Vollkomer")}</li>
              </ul>

              <p className="super-text-subtitle">
                  {t("2021. godine")}
              </p>

              <ul>
                  <li>{t("Paul Polman")}</li>
                  <li>{t("Jakob Trollbäck")}</li>
              </ul>

          </div>
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
