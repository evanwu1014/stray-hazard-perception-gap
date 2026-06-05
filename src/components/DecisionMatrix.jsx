import { DECISION_MATRIX } from "../data/scenarioData";
import { UI_LABELS } from "../data/uiLabels";

export default function DecisionMatrix() {
  return (
    <div className="matrix-container">
      <table className="matrix-table">
        <thead>
          <tr>
            <th>{UI_LABELS.matrix.method}</th>
            <th>{UI_LABELS.matrix.columns.reserve}</th>
            <th>{UI_LABELS.matrix.columns.urban}</th>
            <th>{UI_LABELS.matrix.columns.campus}</th>
          </tr>
        </thead>
        <tbody>
          {DECISION_MATRIX.map((row, index) => (
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
