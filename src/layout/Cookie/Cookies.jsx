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
              Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper. Massa vitae tortor condimentum lacinia quis vel.
              Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam
              ut porttitor leo a diam sollicitudin tempor id.
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
