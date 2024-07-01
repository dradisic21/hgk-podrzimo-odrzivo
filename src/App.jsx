import React, { useState, useEffect, Suspense } from "react";
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);


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
                <Route path={`/o-konferenciji`} element={<ConferencePage />} />
                <Route path={`/program`} element={<ProgramPage />} />
                <Route path={`/govornici`} element={<SpeakersPage />} />
                <Route path={`/partneri`} element={<PartnersPage />} />
                <Route path={`/kontakt`} element={<ContactPage />} />
                <Route
                  path={`/prijava-na-konferenciju`}
                  element={<ConferenceRegistrationPage />}
                />
                <Route path={`/politika-privatnosti`} element={<PrivacyPolicy />} />

                <Route path={`/about-conference`} element={<ConferencePage />} />
                <Route path={`/program`} element={<ProgramPage />} />
                <Route path={`/speakers`} element={<SpeakersPage />} />
                <Route path={`/partners`} element={<PartnersPage />} />
                <Route path={`/contact`} element={<ContactPage />} />
                <Route
                  path={`/conference-registration`}
                  element={<ConferenceRegistrationPage />}
                />
                <Route path={`/privacy-policy`} element={<PrivacyPolicy />} />
                <Route path="/:slug" element={<SingleNewsPage />} />
              </Routes>
            )}
          </div>
        </div>
      </Suspense>
    </Router>
  );
}