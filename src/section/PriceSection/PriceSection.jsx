import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./PriceSection.scss";
import { Ballons } from "../../components/Balloons/Balloons";
import {useTranslation} from "react-i18next";

export function PriceSection() {
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const { t } = useTranslation();

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
          src="/assets/balloons-component/dots.svg"
          alt="ballon"
          className="dots-one"
        />
      </div>
      <div className="price-section-content">
        {/* Box 1 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">{t("do 14.7.")}</p>
            <h3 className="benefits-title">EARLY BIRD</h3>
            <p className="benefits-subtitle">
              400 EUR + {t("PDV")}
            </p>
            {!benefitsVisible && (
              <div className={`view-benefits-button `} onClick={showBenefits}>
                {t("Pogledaj benefite")}...
              </div>
            )}
            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">{t("dva dana konferencije (9. i 10. rujna 2024.)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("dodatni informativni/edukativni materijali")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("party otvorenja na 1. danu uz catering (finger-food & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("umrežavanje na 2. danu uz catering  (doručak, ručak & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("simultani prijevod (ENG-HRV)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("potvrda o sudjelovanju")}</p>
              </div>
              <div>
                {benefitsVisible && (
                  <div
                    className={`close-benefits-button `}
                    onClick={closeBenefits}
                  >
                    {t("Zatvori")}...
                  </div>
                )}
              </div>
            </div>

            <div className="price-button-content">
              <Button name={t("Kupi ulaznice")} className="price-button" />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">{t("od 15.7.-15.8.")}</p>
            <h3 className="benefits-title">{t("CIJENA")} 1</h3>
            <p className="benefits-subtitle">
              450 EUR + {t("PDV")}
            </p>
            {!benefitsVisible && (
                <div className={`view-benefits-button `} onClick={showBenefits}>
                  {t("Pogledaj benefite")}...
                </div>
            )}
            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">{t("dva dana konferencije (9. i 10. rujna 2024.)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("dodatni informativni/edukativni materijali")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("party otvorenja na 1. danu uz catering (finger-food & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("umrežavanje na 2. danu uz catering  (doručak, ručak & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("simultani prijevod (ENG-HRV)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("potvrda o sudjelovanju")}</p>
              </div>
              <div>
                {benefitsVisible && (
                    <div
                        className={`close-benefits-button `}
                        onClick={closeBenefits}
                    >
                      {t("Zatvori")}...
                    </div>
                )}
              </div>
            </div>

            <div className="price-button-content">
              <Button name={t("Kupi ulaznice")} className="price-button" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title">{t("od 16.8.")}</p>
            <h3 className="benefits-title">{t("CIJENA")} 2</h3>
            <p className="benefits-subtitle">
              500 EUR + {t("PDV")}
            </p>
            {!benefitsVisible && (
                <div className={`view-benefits-button `} onClick={showBenefits}>
                  {t("Pogledaj benefite")}...
                </div>
            )}
            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">{t("dva dana konferencije (9. i 10. rujna 2024.)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("dodatni informativni/edukativni materijali")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("party otvorenja na 1. danu uz catering (finger-food & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("umrežavanje na 2. danu uz catering  (doručak, ručak & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("simultani prijevod (ENG-HRV)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("potvrda o sudjelovanju")}</p>
              </div>
              <div>
                {benefitsVisible && (
                    <div
                        className={`close-benefits-button `}
                        onClick={closeBenefits}
                    >
                      {t("Zatvori")}...
                    </div>
                )}
              </div>
            </div>

            <div className="price-button-content">
              <Button name={t("Kupi ulaznice")} className="price-button" />
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="box">
          <div className="box-content">
            <p className="benefits-pre-title"></p>
            <h3 className="benefits-title">{t("STUDENTI")}</h3>
            <p className="benefits-subtitle">
              50 EUR + {t("PDV")}
            </p>
            {!benefitsVisible && (
                <div className={`view-benefits-button `} onClick={showBenefits}>
                  {t("Pogledaj benefite")}...
                </div>
            )}
            <div className={`benefits ${benefitsVisible ? "expanded" : ""}`}>
              <div>
                <p className="benefit-text">{t("dva dana konferencije (9. i 10. rujna 2024.)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("dodatni informativni/edukativni materijali")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("party otvorenja na 1. danu uz catering (finger-food & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("umrežavanje na 2. danu uz catering  (doručak, ručak & piće)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("simultani prijevod (ENG-HRV)")}</p>
              </div>
              <div>
                <p className="benefit-text">{t("potvrda o sudjelovanju")}</p>
              </div>
              <div>
                {benefitsVisible && (
                    <div
                        className={`close-benefits-button `}
                        onClick={closeBenefits}
                    >
                      {t("Zatvori")}...
                    </div>
                )}
              </div>
            </div>

            <div className="price-button-content">
              <Button name={t("Kupi ulaznice")} className="price-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
