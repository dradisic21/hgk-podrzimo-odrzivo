import React from "react";
import ReactDOM from "react-dom/client";
import { ActiveLinkProvider } from "./services/Context/ActiveLinkContext";
import "./index.css";
import { App } from "./App";
import { I18nextProvider } from "react-i18next"; 
import i18n from "./services/i18n"; 
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> 
      <ActiveLinkProvider>
        <App />
      </ActiveLinkProvider>
      </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
