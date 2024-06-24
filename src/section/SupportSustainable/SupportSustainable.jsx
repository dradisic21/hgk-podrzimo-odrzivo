import { Button } from "../../components/Button/Button"
import "./SupportSustainable.scss"


export function SupportSustainable() {
    return(
        <div className="support-sustainable_container">
            <div className="balloon-container">
                <img src="/assets/balloons/support-home-balloons/balloon1.svg" alt="ballon" className="balloon-sup-one"/>
                <img src="/assets/balloons/support-home-balloons/balloon2.svg" alt="ballon"  className="balloon-sup-two"/>
                <img src="/assets/balloons/support-home-balloons/balloon3.svg" alt="ballon"  className="balloon-sup-three"/>
            </div>
            <div className="title-content">
                <p className="subheadline">PODRŽIMO ODRŽIVO 2024</p>
                <h2 className="support-title">PODRŽIMO ODRŽIVO S<br/>PO REDU KONFERENCIJA</h2>
                <div className="line"></div>
                <div className="text-content">
                    <p>Ovdje istaknuti neki top benefit i onda klikom na button vodi ih na stranicu O konferenciji gdje onda ima više detalja o samoj konferenciji</p>
                </div>
                <Button type="button" className="read-more" name="PROČITAJ VIŠE"/>
            </div>
            <div className="image-content">
                <img src="/assets/support-circle.svg" alt="" />
            </div>
        </div>
    )
}