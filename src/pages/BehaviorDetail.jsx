import { useParams, useNavigate, Link } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import Reveal from "../components/Reveal";

const getThreatClass = (total) => {
  if (total <= 10) return { cls: "threat-1", label: "低度威脅" };
  if (total <= 15) return { cls: "threat-2", label: "中度威脅" };
  if (total <= 22) return { cls: "threat-3", label: "高度威脅" };
  return { cls: "threat-4", label: "極端威脅" };
};

const getColorClass = (val) => {
  if (val <= 3) return "c-lo";
  if (val <= 6) return "c-md";
  return "c-hi";
};

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

  const threat = getThreatClass(item.objTotal);
  const perception = (item.condemn + item.outcry) / 2;
  const objNorm = +(item.objTotal / 3).toFixed(1);
  const deviation = +(perception - objNorm).toFixed(1);

  // Build adjacent items for navigation
  const allSorted = sortedData;
  const currentIdx = allSorted.findIndex(i => i.id === parseInt(id));
  const prevItem = currentIdx > 0 ? allSorted[currentIdx - 1] : null;
  const nextItem = currentIdx < allSorted.length - 1 ? allSorted[currentIdx + 1] : null;

  return (
    <div className="bdetail-page">
      {/* ─── Back Button ─── */}
      <div className="container">
        <button
          className="bdetail-back"
          onClick={() => navigate("/", { state: { scrollTo: `behavior-${item.id}` } })}
          aria-label="返回列表"
        >
          <span className="bdetail-back-arrow">←</span>
          {labels.backToList}
        </button>
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

              {/* ─── Score Gauges ─── */}
              <div className="bdetail-scores">
                <div className="bdetail-gauge-grid">
                  <ScoreGauge
                    label={uiLabels.painDepthFull}
                    value={item.subScores.pain}
                    max={10}
                    colorClass={getColorClass(item.subScores.pain)}
                  />
                  <ScoreGauge
                    label={uiLabels.harmScale}
                    value={item.subScores.scale}
                    max={10}
                    colorClass={getColorClass(item.subScores.scale)}
                  />
                  <ScoreGauge
                    label={uiLabels.externalCostFull}
                    value={item.subScores.external}
                    max={10}
                    colorClass={getColorClass(item.subScores.external)}
                  />
                  <div className={`bdetail-total-score ${threat.cls}`} style={{ "--score-pct": `${(item.objTotal / 30) * 100}%` }}>
                    <span className="bdetail-total-label">{uiLabels.totalScore}</span>
                    <div className="bdetail-total-num">
                      <span className="bdetail-total-val">{item.objTotal}</span>
                      <span className="bdetail-total-max">/ 30</span>
                    </div>
                  </div>
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

      {/* ─── Navigation between items ─── */}
      <div className="container">
        <div className="bdetail-nav">
          {prevItem ? (
            <Link to={`/behavior/${prevItem.id}`} className="bdetail-nav-btn prev">
              <span className="bdetail-nav-arrow">←</span>
              <span className="bdetail-nav-text">
                <span className="bdetail-nav-hint">危害較低</span>
                <span className="bdetail-nav-name">{prevItem.name}</span>
              </span>
            </Link>
          ) : <div />}
          {nextItem ? (
            <Link to={`/behavior/${nextItem.id}`} className="bdetail-nav-btn next">
              <span className="bdetail-nav-text">
                <span className="bdetail-nav-hint">危害較高</span>
                <span className="bdetail-nav-name">{nextItem.name}</span>
              </span>
              <span className="bdetail-nav-arrow">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}


/* ─── ScoreGauge Sub-component ─── */
function ScoreGauge({ label, value, max, colorClass }) {
  const pct = (value / max) * 100;
  return (
    <div className="bdetail-gauge">
      <div className="bdetail-gauge-ring-wrap">
        <svg className="bdetail-gauge-svg" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="grad-c-lo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="grad-c-md" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f5a623" />
            </linearGradient>
            <linearGradient id="grad-c-hi" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke={`url(#grad-${colorClass})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * 201} 201`}
            transform="rotate(-90 40 40)"
            className={colorClass}
            style={{ transition: "stroke-dasharray 1s cubic-bezier(.22,1,.36,1)" }}
          />
        </svg>
        <span className={`bdetail-gauge-val ${colorClass}`}>{value}</span>
      </div>
      <span className="bdetail-gauge-label">{label}</span>
    </div>
  );
}
