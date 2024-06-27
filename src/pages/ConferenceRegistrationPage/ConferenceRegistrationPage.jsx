import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { PriceSection } from "../../section/PriceSection/PriceSection";
import { Footer } from "../../layout/Footer/Footer";
import "./ConferenceRegistrationPage.scss";
import { ConferenceTextSection } from "../../section/ConferenceTextSection/ConferenceTextSection";
import {useTranslation} from "react-i18next";

export default function ConferenceRegistrationPage() {
    const { t } = useTranslation();

    return (
    <div className="conference-reg-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">{t("ULAZNICE")}</h1>
          <p className="header-subtitle">{t("Podržimo održivo 2024.")}</p>
        </div>
      </div>
      <PriceSection />
      <ConferenceTextSection />
      <BannerSection />
      <PartnerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
