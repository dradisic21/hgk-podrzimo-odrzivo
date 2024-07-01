import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ConferencePageTextSection } from "../../section/ConferencePageTextSection/ConferencePageTextSection";
import { Gallery } from "../../components/Gallery/Gallery";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { MediaAboutUs } from "../../section/MediaAboutUs/MediaAboutUs";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./ConferencePage.scss";
import {useTranslation} from "react-i18next";




export default function ConferencePage() {
  const navigate = useNavigate();
    const { t, i18n } = useTranslation();


    const handleGetTicketClick = () => {
      if (i18n.language === "en") {
        navigate("/conference-registration");
      } else if (i18n.language === "hr") {
        navigate("/prijava-na-konferenciju");
      }
    };

  return (
    <div className="conference-page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">{t("O KONFERENCIJI")}</h1>
          <p className="header-subtitle">{t("Podržimo održivo 2024.")}</p>
          <div className="button-content">
            <Button type="button" className="ticket-btn" name={t("Kupi ulaznice")} onClick={handleGetTicketClick} />
          </div>
        </div>
      </div>

      <ConferencePageTextSection />
        <BannerSection />
      <Gallery />
      <BannerSection />
      <MediaAboutUs />
      <PartnerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
