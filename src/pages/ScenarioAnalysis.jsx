import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ScenarioChart from "../components/ScenarioChart";
import DecisionMatrix from "../components/DecisionMatrix";
import { useI18n } from "../context/I18nContext";

export default function ScenarioAnalysis() {
  const { scenarioText, scenarioList, uiLabels } = useI18n();
  const { hero, intro, scenarios, charts, matrix, philosophy, bottom } = scenarioText;

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="hero" id="hero">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p className="hero-sub">
          {hero.sub[0]}<br />
          {hero.sub[1]}
        </p>
        <div className="hero-actions">
          <a 
            href="#scenarios" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("scenarios")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.primaryBtn}
          </a>
          <Link to="/" state={{ scrollTo: "ranking" }} className="btn-secondary">{hero.secondaryBtn}</Link>
        </div>
        <div className="hero-scroll"><span>{uiLabels.scroll}</span><div className="arrow"></div></div>
      </section>

      {/* ═══ Introduction ═══ */}
      <section id="intro" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="intro-box">
            <div className="intro-visual">
              <h3>{intro.title}</h3>
              <p>{intro.eyebrow}</p>
            </div>
            <div className="intro-text">
              {intro.desc}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Three Scenarios ═══ */}
      <section id="scenarios">
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{scenarios.title}</h2>
            <p>{scenarios.sub}</p>
          </Reveal>

          <div className="scenario-grid">
            {scenarioList.map((sc, index) => (
              <Reveal 
                key={sc.id} 
                className={`scenario-card ${sc.id}`} 
                delay={index * 100}
              >
                <span className="scenario-badge">{sc.badge}</span>
                <h3>{sc.icon} {sc.title}</h3>
                <p className="desc">{sc.desc}</p>
                <div className="scenario-details">
                  <div className="detail-row">
                    <span className="label">{uiLabels.scenarioDetails.ecoRisk}</span>
                    <span className={`val ${sc.metricColorClass}`}>{sc.metrics.eco}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">{uiLabels.scenarioDetails.coreGoal}</span>
                    <span className="val">{sc.metrics.core}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">{uiLabels.scenarioDetails.coreMethod}</span>
                    <span className={`val ${sc.metricColorClass}`}>{sc.metrics.method}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Interactive Charts ═══ */}
      <section id="charts" style={{ background: "var(--bg2)" }}>
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{charts.title}</h2>
            <p>{charts.sub}</p>
          </Reveal>

          <Reveal>
            <ScenarioChart />
          </Reveal>
        </div>
      </section>

      {/* ═══ Decision Matrix ═══ */}
      <section id="matrix">
        <div className="container">
          <Reveal className="sec-heading">
            <h2>{matrix.title}</h2>
            <p>{matrix.sub}</p>
          </Reveal>

          <Reveal>
            <DecisionMatrix />
          </Reveal>
        </div>
      </section>

      {/* ═══ Wording Note ═══ */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="methodology-note">
            <h3>{philosophy.title}</h3>
            <p>{philosophy.desc}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Bottom Quote & Actions ═══ */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="bottom-action">
            <p>{bottom.prompt}</p>
            <Link 
              to="/" 
              state={{ scrollTo: "ranking" }}
              className="btn-primary" 
              style={{ padding: "14px 32px" }}
            >
              <span>{bottom.btn}</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
