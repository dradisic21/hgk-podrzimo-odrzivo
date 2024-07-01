import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Ballons } from "../../components/Balloons/Balloons"
import { Button } from "../../components/Button/Button"
import "./SupportSustainable.scss"
import {useTranslation} from "react-i18next";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

export function SupportSustainable() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleConfClick = useCallback(() => {
        navigate(`/${t("o-konferenciji")}`);
        scrollToTop();
      }, [navigate, t]);

    return(
        <div className="support-sustainable_container">
            <div className="balloon-container">
                <Ballons />
            </div>
            <div className="title-content">
                <p className="subheadline">{t("JUBILARNA 5. KONFERENCIJA")} </p>
                <h2 className="support-title">{t("PODRŽIMO ODRŽIVO")}</h2>
                <div className="line"></div>
                <div className="text-content">
                    <p>{t("supportSustainabilityBody")}</p>
                </div>
                <Button type="button" className="read-more" name={t("PROČITAJ VIŠE")} onClick={handleConfClick}/>
            </div>
            <div className="image-content">
                <img src="/assets/support-circle.svg" alt="" />
            </div>
        </div>
    )
}