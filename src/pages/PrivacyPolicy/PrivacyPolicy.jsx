import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import { Ballons } from "../../components/Balloons/Balloons";
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
      <div className="text-content">
        <PrivacyPolicyText />
        <div className="balloon-container">
          <Ballons />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
