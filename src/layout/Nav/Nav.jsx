import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hamburger from "hamburger-react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher";
import { Button } from "../../components/Button/Button";
import "./Nav.scss";
import i18n from "../../services/i18n";

export function Nav() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSignIn = () => {
    window.open("https://digitalnakomora.hr/home", "_blank");
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="nav">
      <div className={`nav-container ${isOpen ? "mobile-open" : ""}`}>
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/logo/nav-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="nav-content">
          <ul className="nav-list">
            <NavLink
              to={`/${t("o-konferenciji")}`}
              className={({ isActive }) =>
                isActive ? "active-link active" : "active-link"
              }
            >
              {t("About the conference")}
            </NavLink>
            <NavLink
              to={`/${t("program")}`}
              className={({ isActive }) =>
                isActive ? "active-link active" : "active-link"
              }
            >
              {t("Program")}
            </NavLink>
            <NavLink
              to={`/${t("govornici")}`}
              className={({ isActive }) =>
                isActive ? "active-link active" : "active-link"
              }
            >
              {t("Speakers")}
            </NavLink>
            <NavLink
              to={`/${t("partneri")}`}
              className={({ isActive }) =>
                isActive ? "active-link active" : "active-link"
              }
            >
              {t("Partners")}
            </NavLink>
            <NavLink
              to={`/${t("kontakt")}`}
              className={({ isActive }) =>
                isActive ? "active-link active" : "active-link"
              }
            >
              {t("Contact")}
            </NavLink>
          </ul>

          <div className="language-content">
            <LanguageSwitcher />
          </div>

          <div className="login-button">
            <Button
              className="login-btn"
              name={t("Sign in")}
              onClick={handleSignIn}
            />
          </div>
          <div className="hgk-logo">
            {i18n.language === "hr" && (
              <img src="/assets/logo/hgk-logo.svg" alt="hgk-logo" />
            )}
            {i18n.language === "en" && (
              <img src="/assets/logo/hgk-logo-en.svg" alt="hgk-logo" />
            )}
          </div>
        </div>

        <div className="mobile-toggle">
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          {isOpen && <Sidebar closeSidebar={closeSidebar} />}
        </div>
      </div>
    </div>
  );
}
