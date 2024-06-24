import React from "react";
import ReactDOM from "react-dom/client";
import { ActiveLinkProvider } from "./services/Context/ActiveLinkContext";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <ActiveLinkProvider>
        <App />
      </ActiveLinkProvider>
  </React.StrictMode>
);

reportWebVitals();
