import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import "./PrivacyPolicy.scss";
import { PrivacyPolicyText } from "../../section/PrivacyPolicyText/PrivacyPolicyText";


export default function PrivacyPolicy() {


    return (
      <div className="privacy-policy-container">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">Politika privatnosti</h1>
            <p className="header-subtitle">Podržimo održivo 2024.</p>
          </div>
        </div>
        <PrivacyPolicyText />
        <Newsletter />
        <Footer />
      </div>
    );
  }