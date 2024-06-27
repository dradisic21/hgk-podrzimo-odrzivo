import { InstitutionalPartners } from "../../components/PartnersForAllPages/InstitutionalPartners/InstitutionalPartners";
import { PlatinumPartners } from "../../components/PartnersForAllPages/PlatinumPartners/PlatinumPartners";
import { GoldPartners } from "../../components/PartnersForAllPages/GoldPartners/GoldPartners";
import { SilverPartners } from "../../components/PartnersForAllPages/SilverPartners/SilverPartners";
import { BronzedPartner } from "../../components/PartnersForAllPages/BronzedPartner/BronzedPartner";
import { FriendsPartner } from "../../components/PartnersForAllPages/FriendsPartner/FriendsPartner";
import "./PartnerSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import {useTranslation} from "react-i18next";


export function PartnerSection() {
  const { t } = useTranslation();

  return (
    <div className="partners-section-container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="partners-content">
        <div className="partners-titles">
          <h1 className="title">{t("Upoznaj naše partnere")}</h1>
        </div>
        <div className="partners">
          <InstitutionalPartners />
          <div className="partners-main">
            <PlatinumPartners />
          </div>
          <div className="partners-main">
            <GoldPartners />
          </div>
          <div className="partners-main">
            <SilverPartners />
          </div>
          <div className="partners-main">
            <BronzedPartner />
          </div>
          <div className="partners-main">
            <FriendsPartner />
          </div>
        </div>
      </div>
    </div>
  );
}
