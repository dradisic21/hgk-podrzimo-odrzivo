import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();


  const toggleDropdown = () => setIsOpen(!isOpen);

  const switchLanguage = (language) => {

    const currentPath = location.pathname;
    const currentRoute = currentPath.slice(1); // remove leading slash
    const newPath = `/${t(currentRoute, { lng: language })}`;
    navigate(newPath);

    i18n.changeLanguage(language);

    setIsOpen(false);
  };

  return (
    <div className={`language-switcher ${isOpen ? "open" : ""}`}>
      <div className="dropdown-btn" onClick={toggleDropdown}>
        <span className={`current-language ${isOpen ? "active" : ""}`}>
          {i18n.language.toUpperCase()}
        </span>
        <img
          src={`/assets/icons/${isOpen ? "arrow-up.svg" : "arrow-down.svg"}`}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {i18n.language !== "en" && (
            <Button
              className="lng-button"
              onClick={() => switchLanguage("en")}
              name="EN"
            />
          )}
          {i18n.language !== "hr" && (
            <Button
              className="lng-button"
              onClick={() => switchLanguage("hr")}
              name="HR"
            />
          )}
        </div>
      )}
    </div>
  );
}
