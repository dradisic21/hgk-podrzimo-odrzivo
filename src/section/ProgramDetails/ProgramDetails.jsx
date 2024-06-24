import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./ProgramDetails.scss";

export function ProgramDetails() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/program");
  };
  return (
    <div className="details-container">
      <h1 className="details-title">PROGRAM PODRŽIMO ODRŽIVO 2024</h1>
      <Button type="button" name="POGLEDAJ PROGRAM" className="details-btn" onClick={handleClick}/>
    </div>
  );
}
