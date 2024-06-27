import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./ProgramDetails.scss";
import {useTranslation} from "react-i18next";

export function ProgramDetails() {
  const navigate = useNavigate();
    const { t } = useTranslation();

  const handleClick = () => {
    navigate("/program");
  };
  return (
    <div className="details-container">
      <h1 className="details-title">{t("PROGRAM PODRŽIMO ODRŽIVO 2024")}</h1>
      <Button type="button" name={t("POGLEDAJ PROGRAM")} className="details-btn" onClick={handleClick}/>
    </div>
  );
}
