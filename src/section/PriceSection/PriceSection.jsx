import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./PriceSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";

export function PriceSection() {
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  const showBenefits = () => {
    setBenefitsVisible(true);
  };

  const closeBenefits = () => {
    setBenefitsVisible(false);
  };

  return (
    <div className="price-section-container">
      <div className="balloon-container">
        <Ballons />
        <img
          src="/assets/balloons/conference-benefits-balloons/dots1.svg"
          alt="ballon"
          className="dots-one"
        />
      </div>
      <div className="price-section-content">
        {/* Box 1 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">PODRŽIMO ODRŽIVO 2024</p>
            <h3 className="benefits-title">EARLY BIRD TICKET</h3>
            <p className="benefits-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            {!benefitsVisible && (
              <div className={`view-benefits-button `} onClick={showBenefits}>
                Pogledaj benefite...
              </div>
            )}
            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">Benefit 1</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 2</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 3</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 4</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 5</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 6</p>
              </div>
              <div>
                {benefitsVisible && (
                  <div
                    className={`close-benefits-button `}
                    onClick={closeBenefits}
                  >
                    Zatvori...
                  </div>
                )}
              </div>
            </div>

            <div className="price-button-content">
              <Button name="KUPI ULAZNICU" className="price-button" />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">1. DAY TICKET</p>
            <h3 className="benefits-title">CIJENA 1</h3>
            <p className="benefits-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            {!benefitsVisible && (
              <div className={`view-benefits-button `} onClick={showBenefits}>
                Pogledaj benefite...
              </div>
            )}

            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">Benefit 1</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 2</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 3</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 4</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 5</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 6</p>
              </div>

              {benefitsVisible && (
                <div
                  className={`close-benefits-button `}
                  onClick={closeBenefits}
                >
                  Zatvori...
                </div>
              )}
            </div>

            <div className="price-button-content">
              <Button name="KUPI ULAZNICU" className="price-button" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">2. DAY TICKET</p>
            <h3 className="benefits-title">CIJENA 2</h3>
            <p className="benefits-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            {!benefitsVisible && (
              <div className={`view-benefits-button `} onClick={showBenefits}>
                Pogledaj benefite...
              </div>
            )}

            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">Benefit 1</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 2</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 3</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 4</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 5</p>
              </div>
              <div>
                <p className="benefit-text">Benefit 6</p>
              </div>

              {!benefitsVisible && (
                <Button
                  type="button"
                  className={`view-benefits-button `}
                  name="Pogledaj benefite"
                  onClick={showBenefits}
                />
              )}

              {benefitsVisible && (
                <div
                  className={`close-benefits-button `}
                  onClick={closeBenefits}
                >
                  Zatvori...
                </div>
              )}
            </div>

            <div className="price-button-content">
              <Button name="KUPI ULAZNICU" className="price-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
