import { Ballons } from "../../components/Balloons/Balloons"
import { Button } from "../../components/Button/Button"
import "./SupportSustainable.scss"


export function SupportSustainable() {
    return(
        <div className="support-sustainable_container">
            <div className="balloon-container">
                <Ballons />
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