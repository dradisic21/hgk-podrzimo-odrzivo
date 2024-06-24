import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { PriceSection } from "../../section/PriceSection/PriceSection";
import { Footer } from "../../layout/Footer/Footer";
import "./ConferenceRegistrationPage.scss";
import { ConferenceTextSection } from "../../section/ConferenceTextSection/ConferenceTextSection";

export default function ConferenceRegistrationPage() {
  return (
    <div className="conference-reg-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">PRIJAVA NA KONFERENCIJU</h1>
          <p className="header-subtitle">Podržimo održivo 2024.</p>
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
