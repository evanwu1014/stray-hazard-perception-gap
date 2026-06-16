import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import Reveal from "../components/Reveal";
import TechIcon from "../components/TechIcon";
import { getThreatClass, getColorClass } from "../utils/scoreHelpers";
import './BehaviorDetail.css';

const getRiskConfig = (level) => {
  const configs = {
    critical: { color: "var(--red)", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.3)", label: "" },
    high:     { color: "var(--t-3)", bg: "rgba(255,138,80,0.08)", border: "rgba(255,138,80,0.3)", label: "" },
    moderate: { color: "var(--t-2)", bg: "rgba(255,200,69,0.08)", border: "rgba(255,200,69,0.3)", label: "" },
  };
  return configs[level] || configs.moderate;
};

export default function BehaviorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hazardData, uiLabels } = useI18n();
  const labels = uiLabels.behaviorDetail;

  // Find item and its rank (sorted by objTotal ascending = worse rank last)
  const sortedData = [...hazardData]
    .filter(item => !item.isSupplemental)
    .sort((a, b) => a.objTotal - b.objTotal);

  const supplemental = hazardData.find(item => item.isSupplemental && item.id === parseInt(id));
  const item = sortedData.find(i => i.id === parseInt(id)) || supplemental;
  const rank = sortedData.findIndex(i => i.id === parseInt(id)) + 1;
  const isSupplemental = !!supplemental;

  const carouselRef = useRef(null);
  const activeCardRef = useRef(null);

  // Auto-scroll the active card to the center inside the horizontal carousel (locally, without scrolling the main window)
  useEffect(() => {
    if (isSupplemental) return;
    const timer = setTimeout(() => {
      const listEl = carouselRef.current;
      const cardEl = activeCardRef.current;
      if (listEl && cardEl) {
        const listWidth = listEl.clientWidth;
        const cardWidth = cardEl.clientWidth;
        const cardOffsetLeft = cardEl.offsetLeft;
        listEl.scrollTo({
          left: cardOffsetLeft - (listWidth / 2) + (cardWidth / 2),
          behavior: "smooth"
        });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [id, isSupplemental]);

  // Translate vertical mouse wheel scrolling to horizontal scroll for desktop ease of use
  useEffect(() => {
    if (isSupplemental) return;
    const listEl = carouselRef.current;
    if (!listEl) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        listEl.scrollLeft += e.deltaY * 0.8; // 0.8 is a speed dampening factor for smoother scrolling
      }
    };

    listEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      listEl.removeEventListener("wheel", handleWheel);
    };
  }, [isSupplemental]);

  if (!item) {
    return (
      <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
        <p style={{ color: "var(--text-dim)" }}>找不到此條目</p>
        <Link to="/" className="btn-scenario" style={{ marginTop: "24px", display: "inline-flex" }}>
          返回首頁
        </Link>
      </div>
    );
  }

  const threatClass = getThreatClass(item.objTotal);
  const threat = {
    cls: threatClass,
    label:
      threatClass === "threat-1" ? uiLabels.threatLegend.low :
      threatClass === "threat-2" ? uiLabels.threatLegend.medium :
      threatClass === "threat-3" ? uiLabels.threatLegend.high :
      uiLabels.threatLegend.extreme
  };
  const perception = (item.condemn + item.outcry) / 2;
  const objNorm = +(item.objTotal / 3).toFixed(1);
  const deviation = +(perception - objNorm).toFixed(1);
  const relations = item.relationship
    ? (Array.isArray(item.relationship) ? item.relationship : [item.relationship])
    : [];

  // Build adjacent items for navigation
  const allSorted = sortedData;
  const currentIdx = allSorted.findIndex(i => i.id === parseInt(id));
  const prevItem = currentIdx > 0 ? allSorted[currentIdx - 1] : null;
  const nextItem = currentIdx < allSorted.length - 1 ? allSorted[currentIdx + 1] : null;

  return (
    <div className="bdetail-page">
      {/* ─── Header Navigation ─── */}
      <div className="container">
        <div className="bdetail-header-wrap">
          <button
            className="bdetail-back"
            onClick={() => navigate("/", { state: { scrollTo: `behavior-${item.id}` } })}
            aria-label="返回列表"
          >
            <span className="bdetail-back-arrow">←</span>
            {labels.backToList}
          </button>

          {!isSupplemental && (
            <div className="bdetail-quick-nav">
              <Link
                to={prevItem ? `/behavior/${prevItem.id}` : '#'}
                className={`bdetail-quick-nav-btn prev ${!prevItem ? 'disabled' : ''}`}
                title={prevItem ? `危害較低：${prevItem.name}` : ''}
                onClick={(e) => !prevItem && e.preventDefault()}
              >
                ←
              </Link>
              <span className="bdetail-quick-nav-info">
                綜合排名 #{rank} / {allSorted.length}
              </span>
              <Link
                to={nextItem ? `/behavior/${nextItem.id}` : '#'}
                className={`bdetail-quick-nav-btn next ${!nextItem ? 'disabled' : ''}`}
                title={nextItem ? `危害較高：${nextItem.name}` : ''}
                onClick={(e) => !nextItem && e.preventDefault()}
              >
                →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="bdetail-hero-section">
        <div className="container">
          <Reveal>
            <div className="bdetail-hero">
              <div className="bdetail-hero-meta">
                {!isSupplemental && (
                  <div className="bdetail-rank-badge">
                    <span className="bdetail-rank-label">{labels.rank}</span>
                    <span className="bdetail-rank-num">#{rank}</span>
                    <span className="bdetail-rank-total">/ {allSorted.length}</span>
                  </div>
                )}
                {isSupplemental && (
                  <div className="bdetail-rank-badge bdetail-rank-supp">
                    <span className="bdetail-rank-label">附錄條目</span>
                  </div>
                )}
                <div className={`bdetail-threat-badge ${threat.cls}`}>
                  {threat.label}
                </div>
              </div>

              <h1 className="bdetail-title">{item.name}</h1>
              <p className="bdetail-lead">{item.desc}</p>

              {/* ─── Score Panel ─── */}
              <div className={`bdetail-scores-panel ${threat.cls}`}>
                {/* Left col: Total score giant ring */}
                <div className="bdetail-scores-left">
                  <TotalScoreGauge
                    label={uiLabels.totalScore}
                    value={item.objTotal}
                    max={30}
                    colorClass={threat.cls}
                    threatLabel={threat.label}
                  />
                </div>
                {/* Right col: Three sub-score horizontal progress bars */}
                <div className="bdetail-scores-right">
                  <LinearScoreRow
                    icon="pain"
                    label={uiLabels.painDepthFull}
                    value={item.subScores.pain}
                    max={10}
                    colorClass={getColorClass(item.subScores.pain)}
                  />
                  <LinearScoreRow
                    icon="scale"
                    label={uiLabels.harmScale}
                    value={item.subScores.scale}
                    max={10}
                    colorClass={getColorClass(item.subScores.scale)}
                  />
                  <LinearScoreRow
                    icon="ripple"
                    label={uiLabels.externalCostFull}
                    value={item.subScores.external}
                    max={10}
                    colorClass={getColorClass(item.subScores.external)}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Detail Content ─── */}
      {item.detailContent && (
        <section className="bdetail-content-section">
          <div className="container">
            <div className="bdetail-content-grid">
              <Reveal className="bdetail-content-card">
                <h3>{labels.fullDesc}</h3>
                <p>{item.detailContent.fullDesc}</p>
                {item.detailContent.comparisonCaveat && (
                  <div className="bdetail-comparison-caveat">
                    <span className="bdetail-comparison-caveat-title">【{labels.comparisonCaveatLabel}對照】</span>
                    <span className="bdetail-comparison-caveat-text">{item.detailContent.comparisonCaveat}</span>
                  </div>
                )}
              </Reveal>
              <Reveal className="bdetail-content-card" delay={100}>
                <h3>{labels.causeAnalysis}</h3>
                <p>{item.detailContent.causeAnalysis}</p>
              </Reveal>
              <Reveal className="bdetail-content-card" delay={200}>
                <h3>{labels.policyImplication}</h3>
                <p>{item.detailContent.policyImplication}</p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ─── Relationship Chain ─── */}
      {relations.length > 0 && (
        <section className="bdetail-relations-section">
          <div className="container">
            <Reveal className="sec-heading">
              <h2>{labels.relationshipTitle}</h2>
              <p>{labels.relationshipSubtitle}</p>
            </Reveal>

            {relations.map((rel, rIdx) => (
              <div key={rIdx} className="bdetail-relation-group">
                {rel.typeName && (
                  <Reveal className="bdetail-relation-type-heading">
                    <h3>{rel.typeName}</h3>
                  </Reveal>
                )}

                <div className="bdetail-relation-flow-layout">
                  {/* Agents */}
                  <Reveal className="bdetail-agents-card">
                    <h4>{labels.agentLabel}</h4>
                    <div className="bdetail-agents-list">
                      {rel.agents.map((agent, aIdx) => (
                        <div key={aIdx} className="bdetail-agent-item">
                          <span className="bdetail-agent-role">{agent.role}</span>
                          {agent.note && (
                            <span className="bdetail-agent-note">
                              {labels.agentNotePrefix || " — "}{agent.note}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  <div className="bdetail-flow-connector">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="connector-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Transmission Path */}
                  <Reveal className="bdetail-transmission">
                    <div className="bdetail-transmission-header">
                      <span className="bdetail-transmission-dot"></span>
                      <h4>{labels.transmissionLabel}</h4>
                    </div>
                    <p className="bdetail-transmission-path">{rel.transmission}</p>
                  </Reveal>

                  <div className="bdetail-flow-connector">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="connector-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Victims */}
                  <div className="bdetail-victims-section">
                    <h4 className="bdetail-victims-title">{labels.victimLabel}</h4>
                    <div className="bdetail-victims-grid">
                      {rel.victims.map((v, vIdx) => (
                        <Reveal key={vIdx} delay={vIdx * 100} className="bdetail-victim-card">
                          <div className="bdetail-victim-header">
                            <span className="bdetail-victim-icon" role="img" aria-label={v.category}><TechIcon name={v.icon} size={22} /></span>
                            <div className="bdetail-victim-meta">
                              <h5>{v.category}</h5>
                              <p className="bdetail-victim-entities">{v.entities}</p>
                            </div>
                          </div>
                          <p className="bdetail-victim-desc">{v.desc}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* Beneficiaries */}
                  {rel.beneficiaries && rel.beneficiaries.length > 0 && (
                    <>
                      <div className="bdetail-flow-connector">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="connector-arrow">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>

                      <div className="bdetail-beneficiaries-section">
                        <h4 className="bdetail-beneficiaries-title">{labels.beneficiaryLabel}</h4>
                        <div className="bdetail-beneficiaries-grid">
                          {rel.beneficiaries.map((b, bIdx) => (
                            <Reveal key={bIdx} delay={bIdx * 100} className="bdetail-beneficiary-card">
                              <div className="bdetail-beneficiary-header">
                                <span className="bdetail-beneficiary-icon" role="img" aria-label={b.category}><TechIcon name={b.icon} size={22} /></span>
                                <div className="bdetail-beneficiary-meta">
                                  <h5>{b.category}</h5>
                                  <p className="bdetail-beneficiary-entities">{b.entities}</p>
                                </div>
                              </div>
                              <p className="bdetail-beneficiary-desc">{b.desc}</p>
                              {b.caveat && (
                                <div className="bdetail-beneficiary-caveat">
                                  <span className="bdetail-caveat-prefix">{labels.beneficiaryCaveatPrefix}</span>
                                  <span className="bdetail-caveat-text">{b.caveat}</span>
                                </div>
                              )}
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Perception Gap ─── */}
      <section className="bdetail-perception-section">
        <div className="container">
          <Reveal className="bdetail-perception-card">
            <h2>{labels.perceptionGap}</h2>
            <p className="bdetail-perception-sub">{labels.perceptionGapDesc}</p>
            <div className="bdetail-perception-bars">
              <div className="bdetail-pbar-row">
                <span className="bdetail-pbar-label">{labels.moralScore}</span>
                <div className="bdetail-pbar-track">
                  <div
                    className="bdetail-pbar-fill moral"
                    style={{ width: `${(perception / 10) * 100}%` }}
                  />
                </div>
                <span className="bdetail-pbar-val moral-val">{perception}</span>
              </div>
              <div className="bdetail-pbar-row">
                <span className="bdetail-pbar-label">{labels.objScore}</span>
                <div className="bdetail-pbar-track">
                  <div
                    className={`bdetail-pbar-fill obj ${threat.cls}`}
                    style={{ width: `${(objNorm / 10) * 100}%` }}
                  />
                </div>
                <span className="bdetail-pbar-val obj-val">{objNorm}</span>
              </div>
            </div>
            <div className={`bdetail-deviation-tag ${deviation > 0 ? "over" : deviation < 0 ? "blind" : "neutral"}`}>
              {deviation > 0
                ? `過度反應 +${deviation}`
                : deviation < 0
                ? `認知盲區 ${deviation}`
                : "評估吻合"}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Scenarios ─── */}
      {item.scenarios && item.scenarios.length > 0 && (
        <section className="bdetail-scenarios-section">
          <div className="container">
            <Reveal className="sec-heading">
              <h2>{labels.scenariosTitle}</h2>
              <p>{labels.scenariosSubtitle}</p>
            </Reveal>

            <div className="bdetail-scenario-grid">
              {item.scenarios.map((sc, idx) => {
                const riskCfg = getRiskConfig(sc.riskLevel);
                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div
                      className="bdetail-scenario-card"
                      style={{
                        "--sc-color": riskCfg.color,
                        "--sc-bg": riskCfg.bg,
                        "--sc-border": riskCfg.border,
                      }}
                    >
                      <div className="bdetail-sc-header">
                        {sc.icon && <span className="bdetail-sc-icon">{sc.icon}</span>}
                        <div className="bdetail-sc-meta">
                          <h3>{sc.name}</h3>
                          <span className="bdetail-sc-risk-badge">
                            {riskCfg.label} {sc.riskLabel}
                          </span>
                        </div>
                      </div>

                      <p className="bdetail-sc-desc">{sc.desc}</p>

                      <div className="bdetail-sc-actions">
                        <h4>{labels.actionsTitle}</h4>
                        <ul>
                          {sc.actions.map((act, ai) => (
                            <li key={ai}>
                              <span className="bdetail-sc-role">{act.role}</span>
                              <span className="bdetail-sc-action">{act.action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Citation ─── */}
      <section className="bdetail-citation-section">
        <div className="container">
          <Reveal className="bdetail-citation-card">
            <div className="bdetail-citation-content">
              <h3>{labels.citationTitle}</h3>
              <p className="bdetail-citation-title-text">{item.tooltipTitle}</p>
              <p className="bdetail-citation-body">{item.tooltipContent}</p>
              <div className="bdetail-citation-ref" style={{ display: "block" }}>
                <span className="bdetail-citation-ref-label" style={{ display: "block", marginBottom: "8px" }}>
                  {uiLabels.citationLabel || "參考文獻"}
                </span>
                {item.references && item.references.length > 0 ? (
                  <ul className="bdetail-citation-ref-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.references.map((ref, idx) => (
                      <li key={idx} style={{ marginBottom: "8px", lineHeight: "1.5" }}>
                        {ref.url ? (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cite-link"
                            style={{ color: "#60a5fa", textDecoration: "underline", wordBreak: "break-all" }}
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
                  <span className="bdetail-citation-ref-text">{item.citation}</span>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Navigation Sliding Carousel ─── */}
      {!isSupplemental ? (
        <section className="bdetail-carousel-section">
          <div className="container">
            <div className="bdetail-carousel-header">
              <h3>{labels.exploreOthers || "探索其他危害行為"}</h3>
              <p>{labels.exploreOthersDesc || "左右滑動預覽 / 依客觀危害排名"}</p>
            </div>
            <div className="bdetail-carousel-list" ref={carouselRef}>
              {allSorted.map((behave, index) => {
                const isActive = behave.id === item.id;
                const behaveRank = index + 1;
                const behaveThreatClass = getThreatClass(behave.objTotal);
                return (
                  <Link
                    key={behave.id}
                    to={`/behavior/${behave.id}`}
                    ref={isActive ? activeCardRef : null}
                    className={`bdetail-carousel-card ${isActive ? 'active' : ''} ${behaveThreatClass}`}
                  >
                    <span className="bdetail-cc-rank">#{behaveRank}</span>
                    <span className="bdetail-cc-name">{behave.name}</span>
                    <div className="bdetail-cc-meta">
                      <span className="bdetail-cc-dot" />
                      <span className="bdetail-cc-score">{behave.objTotal} 分</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="container" style={{ textAlign: "center", padding: "40px 0 60px" }}>
          <Link to="/" className="btn-scenario" style={{ display: "inline-flex" }}>
            {labels.backToList}
          </Link>
        </div>
      )}
    </div>
  );
}


/* ─── TotalScoreGauge Sub-component ─── */
function TotalScoreGauge({ label, value, max, colorClass, threatLabel }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Reset to 0, then transition to final value on mount or change
    setAnimatedValue(0);
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 50);
    return () => clearTimeout(timer);
  }, [value]);

  const pct = (animatedValue / max) * 100;
  return (
    <div className={`bdetail-total-gauge-wrap ${colorClass}`}>
      <span className="bdetail-total-gauge-label">{label}</span>
      <div className="bdetail-total-gauge-ring">
        <svg className="bdetail-total-gauge-svg" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="grad-threat-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5ea8ff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="grad-threat-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffc845" />
              <stop offset="100%" stopColor="#f5a623" />
            </linearGradient>
            <linearGradient id="grad-threat-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8a50" />
              <stop offset="100%" stopColor="#ff2d55" />
            </linearGradient>
            <linearGradient id="grad-threat-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d55" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="37" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
          <circle
            cx="40" cy="40" r="37" fill="none" stroke={`url(#grad-${colorClass})`} strokeWidth="0.8"
            strokeDasharray="4 6" className="bdetail-total-gauge-decor" opacity="0.3" style={{ transformOrigin: "40px 40px" }}
          />
          <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <circle
            cx="40" cy="40" r="32" fill="none" stroke={`url(#grad-${colorClass})`} strokeWidth="6"
            strokeLinecap="round" strokeDasharray={`${(pct / 100) * 201} 201`} transform="rotate(-90 40 40)"
            className={`bdetail-total-gauge-circle ${colorClass}`} style={{ transition: "stroke-dasharray 1s cubic-bezier(.22,1,.36,1)" }}
          />
        </svg>
        <span className={`bdetail-total-gauge-val ${colorClass}`}>
          {value}
          <span className="bdetail-total-gauge-max">/ {max}</span>
        </span>
      </div>
      <span className={`bdetail-total-gauge-badge ${colorClass}`}>{threatLabel}</span>
    </div>
  );
}

/* ─── LinearScoreRow Sub-component ─── */
function LinearScoreRow({ icon, label, value, max, colorClass }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Reset to 0, then transition to final value on mount or change
    setAnimatedValue(0);
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 50);
    return () => clearTimeout(timer);
  }, [value]);

  const pct = (animatedValue / max) * 100;
  return (
    <div className={`bdetail-linear-row ${colorClass}`}>
      <div className="bdetail-linear-header">
        <span className="bdetail-linear-icon">
          <TechIcon name={icon} size={16} />
        </span>
        <span className="bdetail-linear-label">{label}</span>
      </div>
      <div className="bdetail-linear-bar-wrap">
        <div className="bdetail-linear-track">
          <div 
            className={`bdetail-linear-fill ${colorClass} ${value > 0 ? 'has-glow' : ''}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="bdetail-linear-val">
          <strong>{value}</strong> <span className="bdetail-linear-val-max">/ {max}</span>
        </span>
      </div>
    </div>
  );
}
