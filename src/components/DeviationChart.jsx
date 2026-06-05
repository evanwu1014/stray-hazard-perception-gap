import Reveal from "./Reveal";
import { useI18n } from "../context/I18nContext";

export default function DeviationChart() {
  const { getProcessedData, uiLabels } = useI18n();
  const processedData = getProcessedData();
  
  // Sort by deviation descending (most overreacted first)
  const sortedData = [...processedData].sort((a, b) => b.deviation - a.deviation);

  const maxAbs = Math.max(...sortedData.map(d => Math.abs(d.deviation)));

  return (
    <div className="dev-chart" id="devChart">
      <div className="dev-chart-header">
        <div>{uiLabels.deviation.behavior}</div>
        <div style={{ textAlign: "center" }}>{uiLabels.deviation.morality}</div>
        <div style={{ textAlign: "center" }}>{uiLabels.deviation.outcry}</div>
        <div className="bar-header">{uiLabels.deviation.barHeader}</div>
        <div style={{ textAlign: "center" }}>{uiLabels.deviation.deviation}</div>
      </div>
      
      {sortedData.map((item, index) => {
        const isPos = item.deviation >= 0;
        const barPct = (Math.abs(item.deviation) / maxAbs) * 46; // 46% max each side
        
        return (
          <Reveal key={item.id} delay={index * 50}>
            {(isVisible) => (
              <div className="dev-row">
                <div className="dev-name">{item.name}</div>
                <div className="dev-scores-mobile">
                  <span>{uiLabels.deviation.morality}: <strong style={{ color: "var(--d-md)" }}>{item.condemn}</strong></span>
                  <span>{uiLabels.deviation.outcry}: <strong style={{ color: "var(--purple)" }}>{item.outcry}</strong></span>
                </div>
                <div className="dev-score-cell condemn">{item.condemn}</div>
                <div className="dev-score-cell outcry">{item.outcry}</div>
                <div className="dev-bar-wrap">
                  <div className="dev-bar-center"></div>
                  <div 
                    className={`dev-bar ${isPos ? "over" : "blind"}`} 
                    style={{ width: isVisible ? `${barPct}%` : "0%" }}
                  ></div>
                </div>
                <div className={`dev-val ${isPos ? "pos" : "neg"}`}>
                  {isPos ? "+" : ""}{item.deviation}
                </div>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
