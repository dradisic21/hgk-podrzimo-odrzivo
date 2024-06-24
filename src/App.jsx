import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./layout/Nav/Nav";
import { Cookies } from "./layout/Cookie/Cookies";
import { HomePage } from "./pages/HomePage/HomePage";
import { ConferencePage } from "./pages/ConferencePage/ConferencePage";
import { ProgramPage } from "./pages/ProgramPage/ProgramPage";
import { SpeakersPage } from "./pages/SpeakersPage/SpeakersPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { PartnersPage } from "./pages/PartnersPage/PartnersPage";
import { ConferenceRegistrationPage } from "./pages/ConferenceRegistrationPage/ConferenceRegistrationPage";
import { SingleNewsPage } from "./pages/SingleNewsPage/SingleNewsPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./styles/App.scss";


export function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="App-container">
          <Cookies />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="o-konferenciji" element={<ConferencePage />} />
            <Route path="program" element={<ProgramPage />} />
            <Route path="govornici" element={<SpeakersPage />} />
            <Route path="partneri" element={<PartnersPage />} />
            <Route path="kontakt" element={<ContactPage />} />
            <Route
              path="prijava-na-konferenciju"
              element={<ConferenceRegistrationPage />}
            />
            <Route path=":slug" element={<SingleNewsPage />} />
            <Route path="politika-privatnosti" element={<PrivacyPolicy />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
