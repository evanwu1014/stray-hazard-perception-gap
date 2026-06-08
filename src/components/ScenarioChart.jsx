import { useState } from "react";
import { useI18n } from "../context/I18nContext";
import './ScenarioChart.css';

export default function ScenarioChart() {
  const { scenarios, uiLabels } = useI18n();
  const [activeTab, setActiveTab] = useState("reserve");
  const data = scenarios[activeTab];

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
          {uiLabels.chart.tabs.reserve}
        </div>
        <div 
          className={`chart-tab ${getTabClass("urban")}`} 
          onClick={() => setActiveTab("urban")}
        >
          {uiLabels.chart.tabs.urban}
        </div>
        <div 
          className={`chart-tab ${getTabClass("campus")}`} 
          onClick={() => setActiveTab("campus")}
        >
          {uiLabels.chart.tabs.campus}
        </div>
      </div>

      <div className="chart-layout">
        {/* Visual bars */}
        <div className="bar-visualizer">
          <div className="bar-item">
            <div className="bar-label-row">
              <span className="bar-label">{uiLabels.chart.bars.eco}</span>
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
              <span className="bar-label">{uiLabels.chart.bars.pub}</span>
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
              <span className="bar-label">{uiLabels.chart.bars.welfare}</span>
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
