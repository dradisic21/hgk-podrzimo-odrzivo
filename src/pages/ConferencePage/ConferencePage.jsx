import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ConferencePageTextSection } from "../../section/ConferencePageTextSection/ConferencePageTextSection";
import { Gallery } from "../../components/Gallery/Gallery";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./ConferencePage.scss";



export function ConferencePage() {
  const navigate = useNavigate();

  const handleGetTicketClick = () => {
    navigate("/prijava-na-konferenciju");
  };

  return (
    <div className="conference-page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">O KONFERENCIJI</h1>
          <p className="header-subtitle">Podržimo održivo 2024.</p>
          <div className="button-content">
            <Button type="button" className="ticket-btn" name="GET TICKET" onClick={handleGetTicketClick} />
          </div>
        </div>
      </div>

      <ConferencePageTextSection />
      <Gallery />
      <BannerSection />
      <PartnerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
