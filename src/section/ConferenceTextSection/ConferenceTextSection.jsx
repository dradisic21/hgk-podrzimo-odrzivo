import { Ballons } from "../../components/Balloons/Balloons";
import "./ConferenceTextSection.scss";
import {useTranslation} from "react-i18next";
import i18n from "../../services/i18n";

export function ConferenceTextSection() {
  const { t } = useTranslation();
  return (
    <div className="conference-text-container">
      <div className="balloon-container">
       <Ballons />
        <img
          src="/assets/balloons-component/dots-r.svg"
          alt="ballon"
          className="dots-one"
        />
      </div>
      <div className="conference-text-content">
        <div className="super-text">
          <h2 className="super-text-title">
            {t("Naplata kotizacije")}
          </h2>
            {i18n.language === 'hr' &&
            <div>
                <p className="super-text-subtitle">Za poduzeća koje plaćaju članarinu HGK, vrijednost kotizacija bilježi se kao konzumirana usluga iz plaćene članarine po sudioniku (prijava putem <a href='https://digitalnakomora.hr/e-ucenje/edukacije/1599' target="_blank" rel="noreferrer">Digitalne komore</a>).</p>
                <p className="super-text-subtitle">Za nečlanove, udruge, institucije i članove koji ne plaćaju članarinu HGK, kotizacije se plaćaju po sudioniku sukladno roku prijave i uplate (prijava putem Digitalne komore).</p>
                <p className="super-text-subtitle">Za nečlanove, udruge i članove koji ne plaćaju članarinu HGK, ali bi se odlučili na dobrovoljno plaćanje članstva, kotizacija se bilježi kao za poduzeća koje plaćaju članarinu HGK. Više informacija o dobrovoljnom članstvu možete pronaći <a href='https://www.hgk.hr/clanstvo-u-hgk' target="_blank" rel="noreferrer">OVDJE</a>.</p>
                <p className="super-text-subtitle">Za studente vrijedi povlaštena fiksna cijena kotizacije 62,50 € (sa uključenim PDV-om) do 15. 8. 2024. (prijave i slanje potvrde o statusu studenta poslati putem mail-a <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a>).</p>
                <p className="super-text-subtitle">U slučaju specifičnih upita molimo kontaktirajte nas putem e-pošte na <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a> ili telefonski na <a href='tel:+385 1 460 6705'>+385 1 460 6705</a>.</p>
            </div>
            }
            {i18n.language === 'en' &&
            <div>
                <p className="super-text-subtitle">For companies that pay the CCE membership fee, the value of registration fees is recorded as a consumed service from the paid membership fee per participant (registration via <a href='https://digitalnakomora.hr/e-ucenje/edukacije/1599' target="_blank" rel="noreferrer">Digital Chamber</a>). </p>
                <p className="super-text-subtitle">For non-members, not-for profit organizations, as well as for companies that do not pay the CCE membership fee, the registration fee per participant depends of the registration and payment deadline as stated in the tickets section (registration via Digital Chamber). </p>
                <p className="super-text-subtitle">For non-members, not-for-profit organizations, as well as for companies that do not pay the CCE membership fee but want to become a member and pay the CCE membership fee, registration fee amount is the same as for members that pay the CCE membership fee. More information about how to become a member is available <a href='https://www.hgk.hr/clanstvo-u-hgk' target="_blank" rel="noreferrer">OVDJE</a>. </p>
                <p className="super-text-subtitle">Registration fee for students is 62,50 € (VAT included) until August 15, 2024. (applications and confirmation of student status should be sent to <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a>).</p>
                <p className="super-text-subtitle">If you have any questions regarding registration, please contact us by e-mail at <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a> or call <a href='tel:+385 1 460 6705'>+385 1 460 6705</a>.</p>
            </div>
            }
        </div>
        <div className="super-text">
          <h2 className="super-text-title">
              {t("Uvjeti otkazivanja")}
          </h2>
            {i18n.language === 'hr' &&
          <ul className="super-text-subtitle">
            <li>
                Polaznicima koji plate kotizaciju, a neće moći sudjelovati, potpuni povrat kotizacije bit će moguć samo ako najave svoje otkazivanje na e-adresu <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a>, najkasnije do 4. rujna 2024. Nakon tog roka, povrat novca više neće biti moguć. Uplatom iznosa za sudjelovanja polaznici potvrđuju kako prihvaćaju ove uvjete otkazivanja.
            </li>
              <br/>
              <li>
                  Polaznicima kojima se kotizacija bilježi kao konzumacija usluga, a neće moći sudjelovati, terećenje za konzumaciju usluga neće biti izvršeno ukoliko najave svoje otkazivanje na e-adresu <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a> najkasnije do 4. rujna 2024.
              </li>
          </ul>
            }
            {i18n.language === 'en' &&
          <ul className="super-text-subtitle">
            <li>
                Participants who pay the registration fee and will not be able to participate will receive a full refund of the registration fee only if they send a cancellation e-mail to <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a>, no later than September 4, 2024. After that deadline, refunds will no longer be possible. By paying the registration fee, participants confirm that they accept these cancellation terms and conditions.
            </li>
              <br/>
              <li>
                  Participants whose registration fee is recorded as consumption of services and will not be able to participate, will not be charged for consumption of services if they send a cancellation e-mail to <a href='mailto:esg@hgk.hr'>esg@hgk.hr</a>, no later than September 4, 2024.
              </li>
          </ul>
            }
        </div>
      </div>
    </div>
  );
}
