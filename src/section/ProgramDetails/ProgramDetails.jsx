import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./ProgramDetails.scss";
import {useTranslation} from "react-i18next";

export function ProgramDetails() {
  const navigate = useNavigate();
    const { t, i18n  } = useTranslation();

  const handleClick = () => {
    if (i18n.language === "en") {
      navigate("/program");
    } else if (i18n.language === "hr") {
      navigate("/program");
    }
  };

  const handleGetTicketClick = () => {
    if (i18n.language === "en") {
      navigate("/conference-registration");
    } else if (i18n.language === "hr") {
      navigate("/prijava-na-konferenciju");
    }
  };


  return (
    <div className="details-container">
      <h1 className="details-title">{t("PROGRAM PODRŽIMO ODRŽIVO 2024")}</h1>
      <div className="button-position">
      <Button type="button" name={t("POGLEDAJ PROGRAM")} className="details-btn" onClick={handleClick}/>
     <Button
          type="button"
          className="ticket-btn"
          name={t("Kupi ulaznice")}
          onClick={handleGetTicketClick}
        />
      </div>
    
    </div>
  );
}
