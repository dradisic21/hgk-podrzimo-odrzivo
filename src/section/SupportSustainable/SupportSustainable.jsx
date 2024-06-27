import { Ballons } from "../../components/Balloons/Balloons"
import { Button } from "../../components/Button/Button"
import "./SupportSustainable.scss"
import {useTranslation} from "react-i18next";


export function SupportSustainable() {
    const { t } = useTranslation();
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
                <Button type="button" className="read-more" name={t("PROČITAJ VIŠE")}/>
            </div>
            <div className="image-content">
                <img src="/assets/support-circle.svg" alt="" />
            </div>
        </div>
    )
}