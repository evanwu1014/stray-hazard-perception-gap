import { useState } from "react";
import { SCENARIOS } from "../data/scenarioData";
import { UI_LABELS } from "../data/uiLabels";

export default function ScenarioChart() {
  const [activeTab, setActiveTab] = useState("reserve");
  const data = SCENARIOS[activeTab];

  const getTabClass = (id) => {
    return activeTab === id ? `active ${id}` : "";
  };

  return (
    <div className="chart-container">
      <div className="chart-tabs">
        <div 
          className={`chart-tab ${getTabClass("reserve")}`} 
          onClick={() => setActiveTab("reserve")}
        >
          {UI_LABELS.chart.tabs.reserve}
        </div>
        <div 
          className={`chart-tab ${getTabClass("urban")}`} 
          onClick={() => setActiveTab("urban")}
        >
          {UI_LABELS.chart.tabs.urban}
        </div>
        <div 
          className={`chart-tab ${getTabClass("campus")}`} 
          onClick={() => setActiveTab("campus")}
        >
          {UI_LABELS.chart.tabs.campus}
        </div>
      </div>

      <div className="chart-layout">
        {/* Visual bars */}
        <div className="bar-visualizer">
          <div className="bar-item">
            <div className="bar-label-row">
              <span className="bar-label">{UI_LABELS.chart.bars.eco}</span>
              <span className="bar-val">{data.eco} / 10</span>
            </div>
            <div className="bar-bg">
              <div 
                className="bar-fill" 
                style={{ 
                  width: `${data.eco * 10}%`,
                  backgroundColor: data.badgeColor
                }}
              ></div>
            </div>
          </div>
          <div className="bar-item">
            <div className="bar-label-row">
              <span className="bar-label">{UI_LABELS.chart.bars.pub}</span>
              <span className="bar-val">{data.pub} / 10</span>
            </div>
            <div className="bar-bg">
              <div 
                className="bar-fill" 
                style={{ 
                  width: `${data.pub * 10}%`,
                  backgroundColor: data.badgeColor
                }}
              ></div>
            </div>
          </div>
          <div className="bar-item">
            <div className="bar-label-row">
              <span className="bar-label">{UI_LABELS.chart.bars.welfare}</span>
              <span className="bar-val">{data.welfare} / 10</span>
            </div>
            <div className="bar-bg">
              <div 
                className="bar-fill" 
                style={{ 
                  width: `${data.welfare * 10}%`,
                  backgroundColor: data.badgeColor
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="chart-info">
          <span className="sub" style={{ color: data.badgeColor }}>{data.badge}</span>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <div className={`policy-badge ${activeTab}`}>
            {data.policy}
          </div>
        </div>
      </div>
    </div>
  );
}
