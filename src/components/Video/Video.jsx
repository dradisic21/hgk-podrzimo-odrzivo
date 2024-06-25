import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Video.scss";

export function Video() {
  const navigate = useNavigate();

  const handleGetTicketClick = () => {
    navigate("/prijava-na-konferenciju");
  };

  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
        <source src="/assets/video/hgk_podrzimo_odrzivo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-content">
        <h1 className="video-title">
          Podržimo održivo 2024. 9. - 10.9.2024. Lauba, Zagreb
        </h1>
        <p className="video-subtitle">
          Transformacija na djelu Transformation in Action
        </p>
        <Button
          type="button"
          className="ticket-btn"
          name="GET TICKET"
          onClick={handleGetTicketClick}
        />
      </div>
    </div>
  );
}
