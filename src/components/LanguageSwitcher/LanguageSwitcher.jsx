import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const switchLanguage = (language) => {
    i18n
      .changeLanguage(language)
      // .then(() => console.log(`Switching language to: ${i18n.language}`))
      // .catch((err) => console.error("Language switch failed:", err));
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


