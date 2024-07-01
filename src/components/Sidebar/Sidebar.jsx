import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher";
import { Button } from "../Button/Button";
import { menuSlide } from "../../ui/Anime/anime";
// import { Curve } from "../../ui/Curve/Curve";
import "./Sidebar.scss";
import {useTranslation} from "react-i18next";
import i18n from "../../services/i18n";

export function Sidebar({ closeSidebar }) {
  const { t } = useTranslation();

  
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="mobile-nav-container">
        <div className="mobile-logo">
        <Link to="/" onClick={closeSidebar}>
          <img src="/assets/logo/mobile-nav_logo.png" alt="" />
        </Link>
        </div>
        <div className="mobile-nav-content">
          <ul className="nav-list">
            <Link to="/o-konferenciji" onClick={closeSidebar}>
              <p className="text">{t("About the conference")}</p>
            </Link>
            <Link to="/program" onClick={closeSidebar}>
              <p className="text">{t("Program")}</p>
            </Link>
            <Link to="/govornici" onClick={closeSidebar}>
              <p className="text">{t("Speakers")}</p>
            </Link>
            <Link to="/partneri" onClick={closeSidebar}>
              <p className="text">{t("Partners")}</p>
            </Link>
            <Link to="/kontakt" onClick={closeSidebar}>
              <p className="text">{t("Contact-nav")}</p>
            </Link>
          </ul>
         <div className="nav-actions">
          <div className="language-content">
              <LanguageSwitcher />
            </div>

            <div className="login-button">
              <Button className="login-btn" name="Prijavi se" />
            </div>
            <div className="hgk-logo">
              {i18n.language === 'hr' &&
                  <img src="/assets/logo/hgk-logo.svg" alt="hgk-logo"/>
              }
              {i18n.language === 'en' &&
                  <img src="/assets/logo/hgk-logo-en.svg" alt="hgk-logo"/>
              }
            </div>
        </div>
         
        </div>
      </div>
      {/* <Curve /> */}
    </motion.div>
  );
}
