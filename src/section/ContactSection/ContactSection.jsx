import { Ballons } from "../../components/Balloons/Balloons";
import "./ContactSection.scss";
import {useTranslation} from "react-i18next";

export function ContactSection() {
    const { t } = useTranslation();

    return (
    <div className="contact-section-container">
       <div className="balloon-container">
        <Ballons />
        <img
          src="/assets/balloons-component/dots.svg"
          alt="ballon"
          className="dots"
        />
      </div>
      <div className="contact-content">
        <div className="image-content">
          <img src="/assets/contact-hgk.svg" alt="" />
        </div>
        <div className="box-content">
          <div className="content">
            <p className="pre-title">{t("Kontakt")}</p>
            <h1 className="title">
                {t("Hrvatska gospodarska komora")}
            </h1>
            <h1 className="title">
                {t("Sektor za industriju i održivi razvoj")}
            </h1>
            <h1 className="title">
                {t("Odjel energetike, zaštite okoliša i komunalnog gospodarstva")}
            </h1>
          <p className="question-text">{t("Kontakt")}</p>
          <p className="email-contact">E-mail: <a href="mailto:esg@hgk.hr">esg@hgk.hr</a></p>
            <p className="phone-contact">{t("Telefon")}: <a href="tel:+385 1 460 6705">+385 1 460 6705</a></p>
            {/*<p className="question-text">Za sva pitanja vezano za ulaznice kontaktirajte nas na:</p>*/}
            {/*<p className="email">emaila: podržimo@hgk.hr</p>*/}
            {/*<p className="phone">telefon: + 385 1 123 456</p>*/}
            {/*<p className="question-text">Za sva pitanja vezano za medije kontaktirajte nas na:</p>*/}
            {/*<p className="email">emaila: podržimo@hgk.hr</p>*/}
            {/*<p className="phone">telefon: + 385 1 123 456</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
