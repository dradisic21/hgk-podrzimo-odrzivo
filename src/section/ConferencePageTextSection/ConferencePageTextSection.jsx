import "./ConferencePageTextSection.scss";

export function ConferencePageTextSection() {
  return (
    <div className="conference-page-text-container">
      <div className="balloon-container">
        <img
          src="/assets/balloons/conference-balloons/balloon1.svg"
          alt="ballon"
          className="balloon-one"
        />
        <img
          src="/assets/balloons/conference-balloons/balloon2.svg"
          alt="ballon"
          className="balloon-two"
        />
        <img
          src="/assets/balloons/conference-balloons/dots.svg"
          alt="ballon"
          className="dots"
        />
      </div>

      <div className="conference-page-text-content">
        <div className="super-text">
          <h2 className="super-text-title">
            Prvi super tekst koji sve objašnjava.
          </h2>
          <p className="super-text-subtitle">
            Hrvatska gospodarska komora vas s velikim zadovoljstvom poziva na 4.
            međunarodnu konferenciju Podržimo održivo 2023. - Suradnja i nove
            tehnologije za održivost koja će se održati 19. rujna, u Laubi, na
            adresi prilaz baruna Filipovića 23a, u Zagrebu.
          </p>
        </div>
        <div className="super-text">
          <h2 className="super-text-title">
            Prvi super tekst koji sve objašnjava.
          </h2>
          <p className="super-text-subtitle">
            Podržimo održivo središnji je događaj o održivosti u Hrvatskoj koji
            svake godine okuplja sve relevantne dionike oko ključnih tema puta
            prema održivom poslovanju.
          </p>
        </div>
        <div className="super-text">
          <h2 className="super-text-title">
            Prvi super tekst koji sve objašnjava.
          </h2>
          <p className="super-text-subtitle">
            Ove godine ćemo kroz novi format ključnih dijaloga (eng. key
            dialogues) predstaviti govornike na četiri glavne tematske cjeline
            konferencije: Net positive put, suradnja i održivost, tehnologije i
            dizajn za održivost, te vodstvo u održivosti. Svaka tema u središte
            razgovora stavit će suradnju i nove tehnologije za održivost.
          </p>
        </div>
      </div>
    </div>
  );
}
