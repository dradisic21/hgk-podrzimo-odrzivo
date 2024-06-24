import React, { useState, useEffect } from "react";
import { getPrograms } from "../../services/Api";
import { Button } from "../Button/Button";
import "./ConferenceRegistration.scss";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";

export function ConferenceRegistration() {
  const [programs, setPrograms] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getPrograms();
        setPrograms(response.accordions);
        setActiveTab(response.accordions[0]?.id);
        setLoading(false);
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja podataka:", error);
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="conference-registration-container">
       <div className="balloon-container">
        <img
          src="/assets/balloons/news-home-balloons/balloon1.svg"
          alt="ballon"
          className="balloon-con-one"
        />
        <img
          src="/assets/balloons/news-home-balloons/balloon2.svg"
          alt="ballon"
          className="balloon-con-two"
        />
        <img
          src="/assets/balloons/news-home-balloons/balloon3.svg"
          alt="ballon"
          className="balloon-con-three"
        />
      </div>
      <div className="conference-box">
        <div className="tab-buttons">
          {programs.map((program) => (
            <Button
              key={program.id}
              type="button"
              name={program.title}
              className={`tab-btn ${activeTab === program.id ? "active" : ""}`}
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
                        <p className={`program-title ${index === program.childs.length - 1 ? 'last-title' : ''}`}>{child.title}</p>
                        </div>
                        <div className="body-content">
                          <div
                            dangerouslySetInnerHTML={{ __html: child.body }}
                          />
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
  );
}