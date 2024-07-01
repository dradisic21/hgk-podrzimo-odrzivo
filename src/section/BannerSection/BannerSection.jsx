import { Link } from "react-router-dom";
import "./BannerSection.scss";

export function BannerSection() {
  return (
    <div className="banner-container">
      <Link to="https://www.hgk.hr/hrvatski-esg-rating" target="_blank">
        <img src="/assets/desktop-banner.png" alt="banner" className="desktop-banner-image"/>
        <img src="/assets/mobile-banner.png" alt="banner" className="mobile-banner-image" />
      </Link>
    </div>
  );
}
