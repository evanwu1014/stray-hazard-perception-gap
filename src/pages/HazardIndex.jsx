import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import RankList from "../components/RankList";
import DeviationChart from "../components/DeviationChart";
import { HAZARD_TEXT } from "../data/textContent";
import { UI_LABELS } from "../data/uiLabels";

export default function HazardIndex() {
  const { hero, methodology, dimensions, ranking, perception, abuseSociology, polarizationIndicator, insights, quote } = HAZARD_TEXT;

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="hero" id="hero">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p className="hero-sub">
          {hero.sub[0]}<strong>{hero.sub[1]}</strong>{hero.sub[2]}<br />
          {hero.sub[3]}<br />
          {hero.sub[4]}
        </p>
        <div className="hero-scroll"><span>{UI_LABELS.scroll}</span><div className="arrow"></div></div>
      </section>

      {/* ═══ Methodology ═══ */}
      <section id="methodology">
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{methodology.title}</h2>
            <p>{methodology.sub}</p>
          </Reveal>
          
          <Reveal>
            <div className="model-declaration-card">
              <h4>{methodology.declaration.title}</h4>
              {methodology.declaration.content}<br />
              <span className="warning-divider">
                ⚠️ <strong>{methodology.declaration.warning}</strong> <Link to="/scenario" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px" }}>{methodology.declaration.warningLink}</Link> {methodology.declaration.warningSuffix}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Dimensions ═══ */}
      <section id="dimensions" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="dim-grid">
            {dimensions.map((dim, idx) => (
              <Reveal key={idx} className="dim-card" delay={idx * 100}>
                <div className="stripe"></div>
                <div className="icon">{dim.icon}</div>
                <h3>{dim.title} <span className="badge">{dim.range}</span></h3>
                <p className="desc">{dim.desc}</p>
                <ul className="examples">
                  {dim.examples.map((ex, exIdx) => (
                    <li key={exIdx}><strong>{ex.level}</strong>{"　"}{ex.text}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Ranking ═══ */}
      <section id="ranking">
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{ranking.title}</h2>
            <p>{ranking.sub}</p>
          </Reveal>
          
          {/* 前往場域深度分析按鈕 */}
          <Reveal style={{ textAlign: "center", marginBottom: "48px" }}>
            <Link to="/scenario" className="btn-scenario">
              <span>{ranking.button}</span>
              <span style={{ fontFamily: "var(--font-en)", fontSize: "1.1rem", lineHeight: 1 }}>→</span>
            </Link>
          </Reveal>

          <Reveal className="threat-legend">
            <div className="legend-item"><span className="dot lv1"></span>{UI_LABELS.threatLegend.low} (≤10)</div>
            <div className="legend-item"><span className="dot lv2"></span>{UI_LABELS.threatLegend.medium} (11-15)</div>
            <div className="legend-item"><span className="dot lv3"></span>{UI_LABELS.threatLegend.high} (16-22)</div>
            <div className="legend-item"><span className="dot lv4"></span>{UI_LABELS.threatLegend.extreme} (23+)</div>
          </Reveal>

          <RankList />
        </div>
      </section>

      {/* ═══ Perception Gap ═══ */}
      <section id="perception">
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{perception.title}</h2>
            <p>{perception.sub}</p>
          </Reveal>

          <Reveal className="gap-note">
            ⚠️ {perception.note}
          </Reveal>

          {/* Two metric cards */}
          <Reveal className="metric-grid">
            {perception.cards.map((card, idx) => (
              <div key={idx} className="metric-card">
                <div className="m-stripe"></div>
                <h4>{card.title} <span className="m-badge">{card.range}</span></h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </Reveal>

          {/* Formula */}
          <Reveal className="formula-card">
            <code>{perception.formula.expression}</code><br />
            <span style={{ fontSize: ".82rem" }}>{perception.formula.sub}</span>
          </Reveal>

          {/* Deviation legend */}
          <Reveal className="dev-legend">
            <div className="dev-legend-item"><span className="swatch over-swatch"></span>{UI_LABELS.deviation.overreaction}</div>
            <div className="dev-legend-item"><span className="swatch blind-swatch"></span>{UI_LABELS.deviation.blindSpot}</div>
          </Reveal>

          {/* Deviation Chart */}
          <DeviationChart />

          {/* Persona summary */}
          <div style={{ marginTop: "56px" }}>
            <Reveal className="sec-heading" style={{ marginBottom: "36px" }}>
              <h2 style={{ fontSize: "1.6rem" }}>{perception.personasTitle}</h2>
            </Reveal>
            <div className="persona-grid">
              {perception.personas.map((per, idx) => (
                <Reveal key={idx} className="persona" delay={idx * 100}>
                  <span className="persona-icon">{per.icon}</span>
                  <h4>{per.title}</h4>
                  <span className="persona-label">{per.label}</span>
                  <p>{per.desc}</p>
                  <span className="score-tag">{per.scoreTag}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Abuse Sociology ═══ */}
      {abuseSociology && (
        <section id="abuse-sociology" className="abuse-sociology-section" style={{ padding: "80px 0", background: "rgba(255, 255, 255, 0.01)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <Reveal className="sec-heading" style={{ marginBottom: "48px" }}>
              <h2>{abuseSociology.title}</h2>
              <p>{abuseSociology.sub}</p>
            </Reveal>

            <Reveal className="abuse-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "48px" }}>
              {abuseSociology.typologies.map((type, idx) => (
                <div key={idx} className="dim-card" style={{ position: "relative", borderLeft: "4px solid var(--red, #ef4444)" }}>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--text-light)" }}>{type.title}</h4>
                  <p className="desc" style={{ opacity: 0.9, lineHeight: 1.6, fontSize: "0.95rem" }}>{type.desc}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="gender-card" style={{ padding: "32px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.015)", border: "1px solid var(--border)" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🚻</span> {abuseSociology.gendered.title}
              </h3>
              <p style={{ marginBottom: "24px", opacity: 0.8, fontSize: "0.95rem" }}>{abuseSociology.gendered.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                {abuseSociology.gendered.types.map((gt, idx) => (
                  <div key={idx} style={{ background: "rgba(0,0,0,0.1)", padding: "20px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.03)" }}>
                    <strong style={{ display: "block", color: "var(--red, #ef4444)", marginBottom: "8px", fontSize: "1.05rem" }}>{gt.role}</strong>
                    <p style={{ fontSize: "0.92rem", opacity: 0.85, lineHeight: 1.6 }}>{gt.desc}</p>
                  </div>
                ))}
              </div>
              {abuseSociology.gendered.insight && (
                <p style={{ marginTop: "24px", padding: "16px", borderRadius: "8px", background: "rgba(234,179,8,0.07)", borderLeft: "3px solid rgba(234,179,8,0.5)", fontSize: "0.92rem", opacity: 0.9, lineHeight: 1.7 }}>
                  <strong>⚠️ </strong>{abuseSociology.gendered.insight}
                </p>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* ═══ Polarization Indicator ═══ */}
      {polarizationIndicator && (
        <section id="polarization-indicator" style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <Reveal className="sec-heading" style={{ marginBottom: "48px" }}>
              <h2>{polarizationIndicator.title}</h2>
              <p>{polarizationIndicator.sub}</p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {polarizationIndicator.levels.map((group) => {
                const zoneColors = {
                  emotion:  { bar: "rgba(234,179,8,0.75)",  bg: "rgba(234,179,8,0.05)",  border: "rgba(234,179,8,0.25)" },
                  commerce: { bar: "rgba(249,115,22,0.75)", bg: "rgba(249,115,22,0.05)", border: "rgba(249,115,22,0.25)" },
                  crime:    { bar: "rgba(239,68,68,0.8)",   bg: "rgba(239,68,68,0.05)",  border: "rgba(239,68,68,0.3)" },
                };
                const c = zoneColors[group.zone];
                return (
                  <Reveal key={group.range}>
                    {(isVisible) => (
                      <div style={{ borderRadius: "12px", border: `1px solid ${c.border}`, background: c.bg, overflow: "hidden" }}>
                        <div style={{ display: "flex", alignItems: "stretch" }}>
                          {/* Level badge */}
                          <div style={{ width: "5px", background: c.bar, flexShrink: 0 }}></div>
                          <div style={{ padding: "24px 28px", flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
                              <span style={{ fontSize: "1.5rem", fontWeight: 700, color: c.bar, fontFamily: "var(--font-en)" }}>
                                Level {group.range}
                              </span>
                              <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-light)" }}>{group.stageLabel}</span>
                              <span style={{ fontSize: "0.8rem", padding: "2px 10px", borderRadius: "20px", background: c.bar, color: "#000", fontWeight: 600, opacity: 0.9 }}>{group.zoneName}</span>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                              {group.items.map((item, i) => (
                                <li key={i} style={{ fontSize: "0.93rem", lineHeight: 1.65, opacity: 0.88, display: "flex", gap: "8px" }}>
                                  <span style={{ color: c.bar, flexShrink: 0, marginTop: "2px" }}>▶</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <p style={{ fontSize: "0.82rem", opacity: 0.55, margin: 0 }}>幕後驅動力：{group.driver}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal style={{ marginTop: "32px" }}>
              <div style={{ padding: "20px 24px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "0.92rem", lineHeight: 1.75, opacity: 0.85 }}>
                <strong>📋 決策指引：</strong>{polarizationIndicator.decisionGuide}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ═══ Insights ═══ */}
      <section id="insights">
        <div className="container">
          <Reveal className="insight-section">
            <div className="sec-heading" style={{ marginBottom: 0 }}>
              <h2>{insights.title}</h2>
              <p className="mt-2">{insights.sub}</p>
            </div>
            <div className="insight-grid">
              {insights.list.map((ins, idx) => (
                <div key={idx} className="insight-card">
                  <h4>{ins.title}</h4>
                  <p>{ins.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Final Quote ═══ */}
      <Reveal className="final-quote">
        <blockquote>
          {quote.lines[0]}<br />
          {quote.lines[1]}<br />
          {quote.lines[2]}<span className="highlight">{quote.lines[3]}</span>{quote.lines[4]}<br />
          {quote.lines[5]}<span className="highlight">{quote.lines[6]}</span>{quote.lines[7]}
        </blockquote>
      </Reveal>
    </>
  );
}
