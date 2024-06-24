import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnersForPage } from "../../section/PartnersForPage/PartnersForPage";
import { BecomePartner } from "../../section/BecomePartner/BecomePartner";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./PartnersPage.scss";


export default function PartnersPage() {
  const navigate = useNavigate();

  const handleGetTicketClick = () => {
    navigate("/prijava-na-konferenciju");
  };
  
    return (
      <div className="partners-page-container">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">PARTNERI</h1>
            <p className="header-subtitle">Podržimo održivo 2024.</p>
            <div className="button-content">
            <Button type="button" className="ticket-btn" name="GET TICKET" onClick={handleGetTicketClick} />
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