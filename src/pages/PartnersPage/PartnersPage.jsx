import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnersForPage } from "../../section/PartnersForPage/PartnersForPage";
import { BecomePartner } from "../../section/BecomePartner/BecomePartner";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./PartnersPage.scss";
import {useTranslation} from "react-i18next";


export default function PartnersPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleGetTicketClick = () => {
    navigate(`/${t('prijava-na-konferenciju')}`);
  };
  
    return (
      <div className="partners-page-container">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">{t("PARTNERI")}</h1>
            <p className="header-subtitle">{t("Podržimo održivo 2024.")}</p>
            <div className="button-content">
            <Button type="button" className="ticket-btn" name={t("Kupi ulaznice")} onClick={handleGetTicketClick} />
            </div>
          </div>
        </div>
        <PartnersForPage />
        <BannerSection />
        <BecomePartner />
        <Newsletter />
        <Footer />
      </div>
    );
  }