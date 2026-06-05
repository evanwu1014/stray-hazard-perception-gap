import { HAZARD_DATA } from "../data/hazardData";
import Reveal from "./Reveal";
import { UI_LABELS } from "../data/uiLabels";

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
  // Sort data by objTotal ascending (matches original HTML), filtering out supplemental entries
  const sortedData = [...HAZARD_DATA]
    .filter(item => !item.isSupplemental)
    .sort((a, b) => a.objTotal - b.objTotal);

  return (
    <div className="rank-list">
      {sortedData.map((item, index) => (
        <Reveal
          key={item.id}
          delay={index * 50}
          className="rank-item-reveal-wrapper"
        >
          {(isVisible) => (
            <div
              className="rank-item"
              data-total={item.objTotal}
              style={{
                "--bar-pct": isVisible ? (item.objTotal / 30) * 100 : 0
              }}
            >
              <div className="rank-num">{index + 1}</div>
              <div className="rank-body">
                <h3>
                  {item.name}
                  <span className="cite-ref">
                    {UI_LABELS.citationRef}
                    <span className="tooltip">
                      <strong>{item.tooltipTitle}</strong>
                      {item.tooltipContent}
                      <span className="citation">{item.citation}</span>
                    </span>
                  </span>
                </h3>
                <p>{item.desc}</p>
              </div>
              <div className="rank-scores">
                <div className="s-sub-scores">
                  <div className="s-box">
                    <span className="label">{UI_LABELS.painDepth}</span>
                    <span className={`val ${getColorClass(item.subScores.pain)}`}>
                      {item.subScores.pain}
                    </span>
                  </div>
                  <div className="s-box">
                    <span className="label">{UI_LABELS.harmScale}</span>
                    <span className={`val ${getColorClass(item.subScores.scale)}`}>
                      {item.subScores.scale}
                    </span>
                  </div>
                  <div className="s-box">
                    <span className="label">{UI_LABELS.externalCost}</span>
                    <span className={`val ${getColorClass(item.subScores.external)}`}>
                      {item.subScores.external}
                    </span>
                  </div>
                </div>
                <div className={`s-box total ${getThreatClass(item.objTotal)}`}>
                  <span className="label">{UI_LABELS.totalScore}</span>
                  <span className="val">{item.objTotal}</span>
                </div>
              </div>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
