import { Ballons } from "../../components/Balloons/Balloons";
import { Button } from "../../components/Button/Button"
import "./PrizeGivingSection.scss";
import {useTranslation} from "react-i18next";

export function PrizeGivingSection() {
    const { t } = useTranslation();
    return (
    <div className="prize-section_container">
      <div className="balloon-container">
        <Ballons/>
         <img
          src="/assets/balloons-component/dots.svg"
          alt="ballon"
          className="dots"
        />
      </div>
      <div className="title-content">
        <p className="subheadline">{t("DODJELA NAGRADA")} 2024</p>
        <h2 className="prize-title">
            {t("DODJELA NAGRADA")}
          <br />
            {t("PRVOG HRVATSKOG ESG RATINGA")}
        </h2>
        <div className="line"></div>
        <div className="text-content">
          <p>
              {t("awardsBody")}
          </p>
        </div>
        <Button type="button" className="read-more" name={t("PROČITAJ VIŠE")} />
      </div>
      <div className="image-content">
        <img src="/assets/prize-circle.svg" alt="prize" />
      </div>
    </div>
  );
}
