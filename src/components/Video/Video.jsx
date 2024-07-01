import "./Video.scss";
import {useTranslation} from "react-i18next";

export function Video() {
  const { t } = useTranslation();

  return (
    <div className="video-container">
      <video className="video" autoPlay loop preload="auto" muted controlsList="nodownload nofullscreen noremoteplayback">
        <source src="/assets/video/hgk_podrzimo_odrzivo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-content">
        <h1 className="video-title">
          {t("Podržimo održivo 2024.")}
        </h1>
        <h1 className="video-title">
          {t("9. - 10. rujna .2024. Lauba, Zagreb")}
        </h1>
        <p className="video-subtitle">
          {t("Transformacija na djelu")}
        </p>
      </div>
    </div>
  );
}
