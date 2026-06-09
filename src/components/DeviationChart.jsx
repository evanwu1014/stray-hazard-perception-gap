import Reveal from "./Reveal";
import { useI18n } from "../context/I18nContext";
import { getThreatClass } from "../utils/scoreHelpers";

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
        <div style={{ textAlign: "center" }}>{uiLabels.deviation.harm}</div>
        <div className="bar-header">{uiLabels.deviation.barHeader}</div>
        <div style={{ textAlign: "center" }}>{uiLabels.deviation.deviation}</div>
      </div>
      
      {sortedData.map((item, index) => {
        const isPos = item.deviation >= 0;
        const barPct = (Math.abs(item.deviation) / maxAbs) * 46; // 46% max each side
        const threatClass = getThreatClass(item.objTotal);
        
        return (
          <Reveal key={item.id} delay={index * 50}>
            {(isVisible) => (
              <div className="dev-row">
                {/* 行動端專屬 Meta 列 */}
                <div className="dev-meta-mobile">
                  <div className="dev-name-mobile">{item.name}</div>
                  <div className={`dev-val-mobile ${isPos ? "pos" : "neg"}`}>
                    {isPos ? "+" : ""}{item.deviation}
                  </div>
                </div>

                {/* 桌面端直屬單元格 */}
                <div className="dev-name">{item.name}</div>
                <div className="dev-score-cell condemn">{item.condemn}</div>
                <div className="dev-score-cell outcry">{item.outcry}</div>
                <div className={`dev-score-cell harm ${threatClass}`}>{item.objTotal}</div>
                
                {/* 雙端共用長條圖 */}
                <div 
                  className="dev-bar-wrap" 
                  role="img" 
                  aria-label={`${item.name}：${isPos ? uiLabels.deviation.overreaction.split(" — ")[0] : uiLabels.deviation.blindSpot.split(" — ")[0]}，${uiLabels.deviation.deviation}：${isPos ? "+" : ""}${item.deviation}`}
                >
                  <div className="dev-bar-center"></div>
                  <div 
                    className={`dev-bar ${isPos ? "over" : "blind"}`} 
                    style={{ width: isVisible ? `${barPct}%` : "0%" }}
                  ></div>
                </div>
                
                {/* 桌面端偏差值 */}
                <div className={`dev-val ${isPos ? "pos" : "neg"}`}>
                  {isPos ? "+" : ""}{item.deviation}
                </div>

                {/* 行動端專屬 Score 底部列 */}
                <div className="dev-scores-mobile">
                  <span>{uiLabels.deviation.morality}: <strong className="condemn">{item.condemn}</strong></span>
                  <span>{uiLabels.deviation.outcry}: <strong className="outcry">{item.outcry}</strong></span>
                  <span>{uiLabels.deviation.harm}: <strong className={`harm-val ${threatClass}`}>{item.objTotal}</strong></span>
                </div>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
