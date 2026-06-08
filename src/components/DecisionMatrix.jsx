import { useState } from "react";
import { useI18n } from "../context/I18nContext";
import './DecisionMatrix.css';

export default function DecisionMatrix() {
  const { decisionMatrix, uiLabels } = useI18n();
  const [activeTab, setActiveTab] = useState("reserve");

  return (
    <div className="matrix-container">
      {/* 行動端場域切換 Tab Headers */}
      <div className="matrix-mobile-tabs">
        <button 
          className={`matrix-tab-btn ${activeTab === "reserve" ? "active reserve" : ""}`}
          onClick={() => setActiveTab("reserve")}
        >
          {uiLabels.matrix.columns.reserve}
        </button>
        <button 
          className={`matrix-tab-btn ${activeTab === "urban" ? "active urban" : ""}`}
          onClick={() => setActiveTab("urban")}
        >
          {uiLabels.matrix.columns.urban}
        </button>
        <button 
          className={`matrix-tab-btn ${activeTab === "campus" ? "active campus" : ""}`}
          onClick={() => setActiveTab("campus")}
        >
          {uiLabels.matrix.columns.campus}
        </button>
      </div>

      {/* 行動端卡片清單 */}
      <div className="matrix-mobile-list">
        {decisionMatrix.map((row, index) => {
          const colData = row.cols[activeTab];
          return (
            <div key={index} className="matrix-mobile-card">
              <div className="card-header-row">
                <span className="card-method-name">
                  {row.method}
                  {row.sub && <small className="card-method-sub">{row.sub}</small>}
                </span>
                <span className={`matrix-badge ${colData.type}`}>
                  {colData.status}
                </span>
              </div>
              <div className="matrix-detail">
                {colData.detail}
              </div>
            </div>
          );
        })}
      </div>

      {/* 桌面端傳統 Table 視圖 */}
      <table className="matrix-table">
        <thead>
          <tr>
            <th>{uiLabels.matrix.method}</th>
            <th>{uiLabels.matrix.columns.reserve}</th>
            <th>{uiLabels.matrix.columns.urban}</th>
            <th>{uiLabels.matrix.columns.campus}</th>
          </tr>
        </thead>
        <tbody>
          {decisionMatrix.map((row, index) => (
            <tr key={index}>
              <td className="col-header">
                {row.method}
                {row.sub && <small>{row.sub}</small>}
              </td>
              <td>
                <span className={`matrix-badge ${row.cols.reserve.type}`}>
                  {row.cols.reserve.status}
                </span>
                <div className="matrix-detail">
                  {row.cols.reserve.detail}
                </div>
              </td>
              <td>
                <span className={`matrix-badge ${row.cols.urban.type}`}>
                  {row.cols.urban.status}
                </span>
                <div className="matrix-detail">
                  {row.cols.urban.detail}
                </div>
              </td>
              <td>
                <span className={`matrix-badge ${row.cols.campus.type}`}>
                  {row.cols.campus.status}
                </span>
                <div className="matrix-detail">
                  {row.cols.campus.detail}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
