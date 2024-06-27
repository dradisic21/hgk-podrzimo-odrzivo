import { Link } from "react-router-dom";
import "./BannerSection.scss";

export function BannerSection() {
  return (
    <div className="banner-container">
      <Link to="https://esg.hgk.hr/prijava" target="_blank">
        <img src="/assets/desktop-banner.png" alt="banner" />
      </Link>
    </div>
  );
}
