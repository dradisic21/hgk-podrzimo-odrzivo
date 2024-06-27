import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./SpeakersPage.scss";
import { SpeakersSection } from "../../section/SpeakersSection/SpeakersSection";
import {useTranslation} from "react-i18next";

export default function SpeakersPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleGetTicketClick = () => {
    navigate(`/${t('prijava-na-konferenciju')}`);
  };

  return (
    <div className="speakers-page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">{t("GOVORNICI")}</h1>
          <p className="header-subtitle">{t("Podržimo održivo 2024.")}</p>
          <div className="button-content">
            <Button type="button" className="ticket-btn" name={t("Kupi ulaznice")} onClick={handleGetTicketClick} />
          </div>
        </div>
      </div>
      <SpeakersSection />
      <BannerSection />
      <PartnerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
