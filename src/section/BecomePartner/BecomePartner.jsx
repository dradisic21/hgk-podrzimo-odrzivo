import { Button } from "../../components/Button/Button";
import { Ballons } from "../../components/Balloons/Balloons";
import "./BecomePartner.scss";

export function BecomePartner() {
  return (
    <div className="become-partner_container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="title-content">
        <p className="subheadline">DODJELA NAGRADA 2024</p>
        <h2 className="support-title">
          ŽELITE LI POSTATI PARTNER PODRŽIMO ODRŽIVO 2024.
        </h2>
        <div className="line"></div>
        <div className="text-content">
          <p>
            Pogledajte naše sponzorske pakete ili kontaktirajte nas i poslati
            ćemo vam naše sponzorske pakete SPONZORSKI
          </p>
        </div>
        <Button type="button" className="read-more" name="PROČITAJ VIŠE" />
      </div>
      <div className="image-content">
        <img src="/assets/become-partner-circle.svg" alt="" />
      </div>
    </div>
  );
}
