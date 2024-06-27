import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { getPrograms } from "../../services/Api";
import { Button } from "../Button/Button";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";
import { Ballons } from "../Balloons/Balloons";
import "./ConferenceRegistration.scss";

export function ConferenceRegistration() {
  const [programs, setPrograms] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [mainBody, setMainBody] = useState("");
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getPrograms();
        setPrograms(response.accordions);
        setActiveTab(response.accordions[0]?.id);
        setMainBody(response);
        setLoading(false);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="conference-registration-container">
      <div className="balloon-container">
        <Ballons />
      </div>
      <div className="body-main-content">
        <div dangerouslySetInnerHTML={{ __html: mainBody.body }} />
      </div>
      <div className="box-container">
        <div className="conference-box">
          <div className="tab-buttons">
            {programs.map((program) => (
              <Button
                key={program.id}
                type="button"
                name={program.title}
                className={`tab-btn ${
                  activeTab === program.id ? "active" : ""
                }`}
                onClick={() => handleTabClick(program.id)}
              />
            ))}
          </div>
          {loading ? (
            <div className="list-content">
              <SkeletonLoader />
            </div>
          ) : (
            <div className="list-content">
              {programs.map(
                (program) =>
                  activeTab === program.id && (
                    <div className="content" key={program.id}>
                      {program.childs.map((child, index) => (
                        <div className="program-list" key={child.id}>
                          <div className="title-content">
                            <p
                              className={`program-title ${
                                index === program.childs.length - 1
                                  ? "last-title"
                                  : ""
                              }`}
                            >
                              {child.title}
                            </p>
                          </div>
                          <div className="body-content">
                            <pre>
                              <div
                                dangerouslySetInnerHTML={{ __html: child.body }}
                              />
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
