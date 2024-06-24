import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { ContactSection } from "../../section/ContactSection/ContactSection";
import { Footer } from "../../layout/Footer/Footer";
import "./ContactPage.scss";


export default function ContactPage() {
  const navigate = useNavigate();

  const handleGetTicketClick = () => {
    navigate("/prijava-na-konferenciju");
  };
  
  return (
    <div className="contact-page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">KONTAKT</h1>
          <p className="header-subtitle">Podržimo održivo 2024.</p>
          <div className="button-content">
          <Button type="button" className="ticket-btn" name="GET TICKET" onClick={handleGetTicketClick} />
          </div>
        </div>
      </div>
     <ContactSection />
      <BannerSection />
      <PartnerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
