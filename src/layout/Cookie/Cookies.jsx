import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import "./Cookies.scss";

export function Cookies() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieRejected = localStorage.getItem("cookieRejected");

    if (cookieAccepted === "true") {
      setAccepted(true);
    } else if (cookieRejected === "true") {
      setRejected(true);
    }

    setInitialCheck(true);
  }, []);

  useEffect(() => {
    if (!initialCheck) return;

    if (!accepted && !rejected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [initialCheck, accepted, rejected]);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem("cookieAccepted", "true");
  };

  const handleClose = () => {
    setRejected(true);
    localStorage.setItem("cookieRejected", "true");
  };

  if (!initialCheck || accepted || rejected) {
    return null;
  }

  return (
    <div>
      <div className="cookies-backdrop">
        <div className="cookies-container">
          <img
            src="/assets/icons/close-white.svg"
            alt="close-btn"
            className="close-button"
            onClick={handleClose}
          />
          <div className="cookies-content">
            <h1 className="cookies-title">Kolačići</h1>
            <p className="cookies-text">
              Za ispravan rad internetskih stranica Hrvatske gospodarske komore,
              njihovo unaprijeđenije te poboljšanje vašeg iskustva
              pregledavanja, ove stranice moraju na vaše računalo ili mobilni
              uređaj spremiti malenu količinu informacija u obliku takozvanih
              kolačića (engl. cookies).
            </p>
            <p className="cookies-text">
              Kolačići su male tekstualne datoteke koje internetska stranica
              sprema na vašu terminalnu opremu (računalo ili mobilni uređaj)
              kada ju posjetite.
            </p>
            <div className="btn-content">
              <Button
                onClick={handleAccept}
                name="Prihvati kolačiće"
                className="accept-cookies-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
