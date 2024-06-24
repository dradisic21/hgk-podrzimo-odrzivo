import { Button } from "../../components/Button/Button"
import "./PrizeGivingSection.scss";

export function PrizeGivingSection() {
  return (
    <div className="prize-section_container">
      <div className="balloon-container">
        <img
          src="/assets/balloons/prize-home-balloons/balloon1.svg"
          alt="ballon"
          className="balloon-one"
        />
        <img
          src="/assets/balloons/prize-home-balloons/balloon2.svg"
          alt="ballon"
          className="balloon-two"
        />
        <img
          src="/assets/balloons/prize-home-balloons/balloon3.svg"
          alt="ballon"
          className="balloon-three"
        />
         <img
          src="/assets/balloons/prize-home-balloons/dots.svg"
          alt="ballon"
          className="dots"
        />
      </div>
      <div className="title-content">
        <p className="subheadline">DODJELA NAGRADA 2024</p>
        <h2 className="prize-title">
          DODJELA ESG
          <br />
          RATING NAGRADA
        </h2>
        <div className="line"></div>
        <div className="text-content">
          <p>
            Ovdje bih samo uvod kratko o ESG ratingu, klikom na button otvara se
            stranica gdje su prošlogodišnje nagrade/slike i malo teksta
          </p>
        </div>
        <Button type="button" className="read-more" name="PROČITAJ VIŠE" />
      </div>
      <div className="image-content">
        <img src="/assets/prize-circle.svg" alt="prize" />
      </div>
    </div>
  );
}
