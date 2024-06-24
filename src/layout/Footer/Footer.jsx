import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./Footer.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export function Footer() {
  const navigate = useNavigate();

  const handleNavLinkClick = useCallback(() => {
    scrollToTop();
  }, []);

  const handlePrivacyClick = useCallback(() => {
    navigate("/politika-privatnosti");
    scrollToTop();
  }, [navigate]);

  return (
    <div className="footer-container">
      <div className="logos-content">
        <Link to="/" onClick={handleNavLinkClick}>
          <img src="/assets/logo/nav-logo.svg" alt="logo" />
        </Link>
        <img
          src="/assets/logo/hgk-logo.svg"
          alt="hgk logo"
          className="hgk-footer-logo"
        />
      </div>

      <div className="footer-nav-content">
        <ul className="footer-nav-list">
          <NavLink
            to="/o-konferenciji"
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            O konferenciji
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            Program
          </NavLink>
          <NavLink
            to="/govornici"
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            Govornici
          </NavLink>
          <NavLink
            to="/partneri"
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            Partneri
          </NavLink>
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            Kontakt
          </NavLink>
        </ul>
      </div>

      <div className="privacy-content">
        <p className="privacy" onClick={handlePrivacyClick}>Pravila privatnosti</p>
        <p className="footer-copyright">
          © 2024 <span>Podržimo održivo | Web by</span> Dritos{" "}
        </p>
      </div>
    </div>
  );
}
