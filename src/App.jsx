import React, { useState, useEffect, Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./layout/Nav/Nav";
import { Cookies } from "./layout/Cookie/Cookies";
import { DefaultLoading } from "./components/DefaultLoading/DefaultLoading";
import "./styles/App.scss";


const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const ConferencePage = React.lazy(() =>
  import("./pages/ConferencePage/ConferencePage")
);
const ProgramPage = React.lazy(() => import("./pages/ProgramPage/ProgramPage"));
const SpeakersPage = React.lazy(() =>
  import("./pages/SpeakersPage/SpeakersPage")
);
const ContactPage = React.lazy(() => import("./pages/ContactPage/ContactPage"));
const PartnersPage = React.lazy(() =>
  import("./pages/PartnersPage/PartnersPage")
);
const ConferenceRegistrationPage = React.lazy(() =>
  import("./pages/ConferenceRegistrationPage/ConferenceRegistrationPage")
);
const SingleNewsPage = React.lazy(() =>
  import("./pages/SingleNewsPage/SingleNewsPage")
);
const PrivacyPolicy = React.lazy(() =>
  import("./pages/PrivacyPolicy/PrivacyPolicy")
);

export function App() {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
   
  }, [i18n.language]);

  return (
    <Router>
      <Suspense fallback={<DefaultLoading />}>
        <div className="App">
          <Nav />
          <div className="App-container">
            <Cookies />
            {loading ? (
              <DefaultLoading />
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={`/${t('o-konferenciji')}`} element={<ConferencePage />} />
                <Route path={`/${t('program')}`} element={<ProgramPage />} />
                <Route path={`/${t('govornici')}`} element={<SpeakersPage />} />
                <Route path={`/${t('partneri')}`} element={<PartnersPage />} />
                <Route path={`/${t('kontakt')}`} element={<ContactPage />} />
                <Route
                  path={`/${t('prijava-na-konferenciju')}`}
                  element={<ConferenceRegistrationPage />}
                />
                <Route path="/:slug" element={<SingleNewsPage />} />
                <Route path={`/${t('politika-privatnosti')}`} element={<PrivacyPolicy />} />
              </Routes>
            )}
          </div>
        </div>
      </Suspense>
    </Router>
  );
}