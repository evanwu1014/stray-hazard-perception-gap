import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { useI18n } from "../context/I18nContext";

const getColorClass = (val) => {
  if (val <= 3) return "c-lo";
  if (val <= 6) return "c-md";
  return "c-hi";
};

const getThreatClass = (total) => {
  if (total <= 10) return "threat-1";
  if (total <= 15) return "threat-2";
  if (total <= 22) return "threat-3";
  return "threat-4";
};

export default function RankList() {
  const { hazardData, uiLabels } = useI18n();
  const [openCiteId, setOpenCiteId] = useState(null);

  const sortedData = [...hazardData]
    .filter(item => !item.isSupplemental)
    .sort((a, b) => a.objTotal - b.objTotal);

  const toggleCite = (id, e) => {
    e.stopPropagation();
    setOpenCiteId(prev => (prev === id ? null : id));
  };

  return (
    <div className="rank-list">
      {sortedData.map((item, index) => {
        const isCiteOpen = openCiteId === item.id;
        return (
          <Reveal key={item.id} delay={index * 50} className="rank-item-reveal-wrapper">
            {(isVisible) => (
              <div className="rank-item-wrapper" id={`behavior-${item.id}`}>
                <div
                  className={`rank-item ${isCiteOpen ? "rank-item--cite-open" : ""}`}
                  data-total={item.objTotal}
                  style={{ "--bar-pct": isVisible ? (item.objTotal / 30) * 100 : 0 }}
                >
                  {/* Rank Number */}
                  <div className="rank-num">{index + 1}</div>

                  {/* Body */}
                  <div className="rank-body">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>

                    {/* Action Row */}
                    <div className="rank-actions">
                      <button
                        className={`cite-btn ${isCiteOpen ? "cite-btn--active" : ""}`}
                        onClick={(e) => toggleCite(item.id, e)}
                        aria-expanded={isCiteOpen}
                        aria-controls={`cite-panel-${item.id}`}
                      >
                        <span>{uiLabels.researchBtn}</span>
                        <span className={`cite-btn-chevron ${isCiteOpen ? "open" : ""}`}>›</span>
                      </button>

                      <Link
                        to={`/behavior/${item.id}`}
                        className="learn-more-btn"
                        aria-label={`深入了解：${item.name}`}
                      >
                        <span>{uiLabels.learnMore}</span>
                        <span className="learn-more-arrow">→</span>
                      </Link>
                    </div>
                  </div>

                    {/* Scores */}
                    <div className="rank-scores">
                      <div className="s-sub-scores">
                        <div className="s-row">
                          <span className="label">{uiLabels.painDepth}</span>
                          <span className={`val ${getColorClass(item.subScores.pain)}`}>
                            {item.subScores.pain}
                          </span>
                        </div>
                        <div className="s-row">
                          <span className="label">{uiLabels.harmScale}</span>
                          <span className={`val ${getColorClass(item.subScores.scale)}`}>
                            {item.subScores.scale}
                          </span>
                        </div>
                        <div className="s-row">
                          <span className="label">{uiLabels.externalCost}</span>
                          <span className={`val ${getColorClass(item.subScores.external)}`}>
                            {item.subScores.external}
                          </span>
                        </div>
                      </div>
                      <div className={`s-box total ${getThreatClass(item.objTotal)}`}>
                        <span className="label">{uiLabels.totalScore}</span>
                        <span className="val">{item.objTotal}</span>
                      </div>
                    </div>
                </div>

                {/* Cite Panel — slide-down 行內展開 */}
                <div
                  id={`cite-panel-${item.id}`}
                  className={`cite-panel ${isCiteOpen ? "cite-panel--open" : ""}`}
                  aria-hidden={!isCiteOpen}
                >
                  <div className="cite-panel-inner">
                    <div className="cite-panel-topbar" />
                      <div className="cite-panel-body">
                        <div className="cite-panel-right">
                        <strong className="cite-panel-title">{item.tooltipTitle}</strong>
                        <p className="cite-panel-content">{item.tooltipContent}</p>
                          <div className="cite-panel-ref">
                            <span className="cite-panel-ref-label">{uiLabels.citationLabel || "參考文獻"}</span>
                          {item.references && item.references.length > 0 ? (
                            <ul className="cite-panel-ref-list" style={{ listStyle: "none", padding: 0, margin: "8px 0 0 0" }}>
                              {item.references.map((ref, idx) => (
                                <li key={idx} style={{ marginBottom: "6px", fontSize: "0.85em" }}>
                                  {ref.url ? (
                                    <a
                                      href={ref.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="cite-link"
                                      style={{ color: "#60a5fa", textDecoration: "underline" }}
                                    >
                                      {ref.title}
                                    </a>
                                  ) : (
                                    <span style={{ color: "var(--text-dim)" }}>{ref.title}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="cite-panel-ref-text">{item.citation}</span>
                          )}
                        </div>
                        <Link
                          to={`/behavior/${item.id}`}
                          className="cite-panel-detail-link"
                        >
                          {uiLabels.viewScenario || "查看完整情境分析 →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
