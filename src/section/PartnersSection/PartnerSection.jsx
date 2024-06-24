import { InstitutionalPartners } from "../../components/PartnersForAllPages/InstitutionalPartners/InstitutionalPartners";
import { PlatinumPartners } from "../../components/PartnersForAllPages/PlatinumPartners/PlatinumPartners";
import { GoldPartners } from "../../components/PartnersForAllPages/GoldPartners/GoldPartners";
import { SilverPartners } from "../../components/PartnersForAllPages/SilverPartners/SilverPartners";
import { BronzedPartner } from "../../components/PartnersForAllPages/BronzedPartner/BronzedPartner";
import { FriendsPartner } from "../../components/PartnersForAllPages/FriendsPartner/FriendsPartner";
import "./PartnerSection.scss";


export function PartnerSection() {
  return (
    <div className="partners-section-container">
      <div className="balloon-container">
        <img
          src="/assets/balloons/partners-home-balloons/balloon1.svg"
          alt="ballon"
          className="balloon-par-one"
        />
        <img
          src="/assets/balloons/partners-home-balloons/balloon2.svg"
          alt="ballon"
          className="balloon-par-two"
        />
        <img
          src="/assets/balloons/partners-home-balloons/balloon3.svg"
          alt="ballon"
          className="balloon-par-three"
        />
        <img
          src="/assets/balloons/partners-home-balloons/balloon4.svg"
          alt="ballon"
          className="balloon-par-four"
        />
         <img
          src="/assets/balloons/partners-home-balloons/balloon5.svg"
          alt="ballon"
          className="balloon-par-five"
        />
         <img
          src="/assets/balloons/partners-home-balloons/balloon6.svg"
          alt="ballon"
          className="balloon-par-six"
        />
      </div>
      <div className="partners-content">
        <div className="partners-titles">
          <h1 className="title">Upoznaj naše partnere</h1>
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
