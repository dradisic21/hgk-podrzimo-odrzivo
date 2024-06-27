import { InstitutionalPartners } from "../../components/Partners/InstitutionalPartners/InstitutionalPartners";
import { PlatinumPartners } from "../../components/Partners/PlatinumPartners/PlatinumPartners";
import { GoldPartners } from "../../components/Partners/GoldPartners/GoldPartners";
import { SilverPartners } from "../../components/Partners/SilverPartners/SilverPartners";
import { BronzedPartner } from "../../components/Partners/BronzedPartner/BronzedPartner";
import { FriendsPartner } from "../../components/Partners/FriendsPartner/FriendsPartner";
import "./PartnersForPage.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import {useTranslation} from "react-i18next";


export function PartnersForPage() {
  const { t } = useTranslation();

  return (
    <div className="partners-for-page-section-container">
      <div className="balloon-container">
       <Ballons />
      </div>
      <div className="partners-for-page-content">
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
