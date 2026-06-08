import { useI18n } from "../context/I18nContext";
import './DecisionMatrix.css';

export default function DecisionMatrix() {
  const { decisionMatrix, uiLabels } = useI18n();

  return (
    <div className="matrix-container">
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
