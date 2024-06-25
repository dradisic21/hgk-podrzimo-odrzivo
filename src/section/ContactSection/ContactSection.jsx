import { Ballons } from "../../components/Balloons/Balloons";
import "./ContactSection.scss";

export function ContactSection() {
  return (
    <div className="contact-section-container">
       <div className="balloon-container">
        <Ballons />
        <img
          src="/assets/balloons/contact-balloons/dots.svg"
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
            <p className="pre-title">Kontakt</p>
            <h1 className="title">
              Za sva dodatna pitanja kontaktirajte nas putem sljedećih kanala
            </h1>
            <p className="email-contact">emaila: podržimo@hgk.hr</p>
            <p className="phone-contact">telefon: + 385 1 123 456</p>
            <p className="question-text">Za sva pitanja vezano za ulaznice kontaktirajte nas na:</p>
            <p className="email">emaila: podržimo@hgk.hr</p>
            <p className="phone">telefon: + 385 1 123 456</p>
            <p className="question-text">Za sva pitanja vezano za medije kontaktirajte nas na:</p>
            <p className="email">emaila: podržimo@hgk.hr</p>
            <p className="phone">telefon: + 385 1 123 456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
