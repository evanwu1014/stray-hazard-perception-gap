export default function TotalScoreGauge({ label, value, max, colorClass, threatLabel }) {
  const pct = (value / max) * 100;
  return (
    <div className={`bdetail-total-gauge-wrap ${colorClass}`}>
      <span className="bdetail-total-gauge-label">{label}</span>
      <div className="bdetail-total-gauge-ring">
        <svg className="bdetail-total-gauge-svg" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="grad-threat-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5ea8ff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="grad-threat-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffc845" />
              <stop offset="100%" stopColor="#f5a623" />
            </linearGradient>
            <linearGradient id="grad-threat-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8a50" />
              <stop offset="100%" stopColor="#ff2d55" />
            </linearGradient>
            <linearGradient id="grad-threat-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d55" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="37" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
          <circle
            cx="40" cy="40" r="37" fill="none" stroke={`url(#grad-${colorClass})`} strokeWidth="0.8"
            strokeDasharray="4 6" className="bdetail-total-gauge-decor" opacity="0.3" style={{ transformOrigin: "40px 40px" }}
          />
          <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <circle
            cx="40" cy="40" r="32" fill="none" stroke={`url(#grad-${colorClass})`} strokeWidth="6"
            strokeLinecap="round" strokeDasharray={`${(pct / 100) * 201} 201`} transform="rotate(-90 40 40)"
            className={`bdetail-total-gauge-circle ${colorClass}`}
          />
        </svg>
        <span className={`bdetail-total-gauge-val ${colorClass}`}>
          {value}
          <span className="bdetail-total-gauge-max">/ {max}</span>
        </span>
      </div>
      <span className={`bdetail-total-gauge-badge ${colorClass}`}>{threatLabel}</span>
    </div>
  );
}
