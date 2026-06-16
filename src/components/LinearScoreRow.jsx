import TechIcon from "./TechIcon";

export default function LinearScoreRow({ icon, label, value, max, colorClass }) {
  const pct = (value / max) * 100;
  return (
    <div className={`bdetail-linear-row ${colorClass}`}>
      <div className="bdetail-linear-header">
        <span className="bdetail-linear-icon">
          <TechIcon name={icon} size={16} />
        </span>
        <span className="bdetail-linear-label">{label}</span>
      </div>
      <div className="bdetail-linear-bar-wrap">
        <div className="bdetail-linear-track">
          <div 
            className={`bdetail-linear-fill ${colorClass} ${value > 0 ? 'has-glow' : ''}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="bdetail-linear-val">
          <strong>{value}</strong> <span className="bdetail-linear-val-max">/ {max}</span>
        </span>
      </div>
    </div>
  );
}
