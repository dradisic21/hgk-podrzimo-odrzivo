import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import "./Video.scss";
import {useTranslation} from "react-i18next";

export function Video() {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { t } = useTranslation();

  const handleGetTicketClick = () => {
    navigate(`/${t('prijava-na-konferenciju')}`);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const video = document.querySelector('.video');
    video.addEventListener('loadeddata', handleVideoLoaded);

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoaded);
    };
  }, []);

  return (
    <div className={`video-container ${isVideoLoaded ? 'loaded' : ''}`}>
      <video className="video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
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
