import { useTranslation } from "react-i18next";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import { Ballons } from "../../components/Balloons/Balloons";
import "./PrivacyPolicy.scss";
import { PrivacyPolicyText } from "../../section/PrivacyPolicyText/PrivacyPolicyText";
import { PrivacyPolicyEnText } from "../../section/PrivacyPolicyEnText/PrivacyPolicyEnText";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  return (
    <div className="privacy-policy-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">{t("Politika privatnosti")}</h1>
          <p className="header-subtitle">{t("Podržimo održivo 2024.")}</p>
        </div>
      </div>
      <div className="text-content">
        {i18n.language === "hr" && <PrivacyPolicyText />}
        {i18n.language === "en" && <PrivacyPolicyEnText />}
        <div className="balloon-container">
          <Ballons />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
