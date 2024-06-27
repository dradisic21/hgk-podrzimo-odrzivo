import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../services/i18n";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavLinkClick = useCallback(() => {
    scrollToTop();
  }, []);

  const handlePrivacyClick = useCallback(() => {
    navigate(`/${t("politika-privatnosti")}`);
    scrollToTop();
  }, [navigate, t]);

  return (
    <div className="footer-container">
      <div className="logos-content">
        <Link to="/" onClick={handleNavLinkClick}>
          <img src="/assets/logo/nav-logo.svg" alt="logo" />
        </Link>
        {i18n.language === "hr" && (
          <img
            src="/assets/logo/hgk-logo.svg"
            alt="hgk logo"
            className="hgk-footer-logo"
          />
        )}
        {i18n.language === "en" && (
          <img
            src="/assets/logo/hgk-logo-en.svg"
            alt="hgk logo"
            className="hgk-footer-logo"
          />
        )}
      </div>

      <div className="footer-nav-content">
        <ul className="footer-nav-list">
          <NavLink
            to={`/${t("o-konferenciji")}`}
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            {t("About the conference")}
          </NavLink>
          <NavLink
            to={`/${t("program")}`}
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            {t("Program")}
          </NavLink>
          <NavLink
            to={`/${t("govornici")}`}
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            {t("Speakers")}
          </NavLink>
          <NavLink
            to={`/${t("partneri")}`}
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            {t("Partners")}
          </NavLink>
          <NavLink
            to={`/${t("kontakt")}`}
            className={({ isActive }) =>
              isActive ? "active-link active" : "active-link"
            }
            onClick={handleNavLinkClick}
          >
            {t("Contact")}
          </NavLink>
        </ul>
      </div>

      <div className="privacy-content">
        <p className="privacy" onClick={handlePrivacyClick}>
          {t("Pravila privatnosti")}
        </p>
        <p className="footer-copyright">
          © 2024 <span>{t("Podržimo održivo 2024.")} | Web by</span>{" "}
          <a
            href="https://dritos.hr"
            target={"_blank"}
            style={{ color: "white" }}
            rel="noopener noreferrer"
          >
            Dritos
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
