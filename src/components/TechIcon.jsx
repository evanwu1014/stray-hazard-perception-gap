import './TechIcon.css';

const ICONS = {
  wildlife: (
    <>
      {/* Simplified lion/wildlife head — triangular ears + mane outline */}
      <circle cx="12" cy="13" r="5" />
      <path d="M12 8V6" />
      <path d="M8.5 9.5L7 7.5" />
      <path d="M15.5 9.5L17 7.5" />
      <path d="M9 15l-2 3" />
      <path d="M15 15l2 3" />
      <circle cx="10.5" cy="12.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="12.5" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  paw: (
    <>
      {/* Paw print */}
      <circle cx="12" cy="15" r="3" />
      <circle cx="7.5" cy="11" r="1.5" />
      <circle cx="16.5" cy="11" r="1.5" />
      <circle cx="9" cy="7.5" r="1.5" />
      <circle cx="15" cy="7.5" r="1.5" />
    </>
  ),
  community: (
    <>
      {/* People group */}
      <circle cx="12" cy="8" r="2.5" />
      <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
      <circle cx="5" cy="10" r="1.8" />
      <path d="M3 20v-.5a3 3 0 013-3" />
      <circle cx="19" cy="10" r="1.8" />
      <path d="M21 20v-.5a3 3 0 00-3-3" />
    </>
  ),
  scale: (
    <>
      {/* Balance scale */}
      <path d="M12 3v18" />
      <path d="M4 7l8-4 8 4" />
      <path d="M4 7l-1 7h6l-1-7" />
      <path d="M20 7l-1 7h6l-1-7" />
      <path d="M8 20h8" />
    </>
  ),
  brain: (
    <>
      {/* Brain outline */}
      <path d="M12 2a5 5 0 015 5c0 1.5-.5 2.5-1.5 3.5" />
      <path d="M12 2a5 5 0 00-5 5c0 1.5.5 2.5 1.5 3.5" />
      <path d="M8.5 10.5a4 4 0 00-1 5.5" />
      <path d="M15.5 10.5a4 4 0 011 5.5" />
      <path d="M7.5 16a4 4 0 004.5 4" />
      <path d="M16.5 16a4 4 0 01-4.5 4" />
      <path d="M12 2v20" />
    </>
  ),
  lock: (
    <>
      {/* Lock/security */}
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      {/* Globe */}
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M12 3a15 15 0 014 9 15 15 0 01-4 9 15 15 0 01-4-9 15 15 0 014-9z" />
    </>
  ),
  skull: (
    <>
      {/* Skull */}
      <circle cx="12" cy="10" r="7" />
      <circle cx="9.5" cy="9.5" r="1.5" />
      <circle cx="14.5" cy="9.5" r="1.5" />
      <path d="M12 14v3" />
      <path d="M9 21h6" />
      <path d="M10 17v4" />
      <path d="M14 17v4" />
    </>
  ),
  dna: (
    <>
      {/* DNA helix */}
      <path d="M8 2c0 4 8 4 8 8s-8 4-8 8 8 4 8 8" />
      <path d="M16 2c0 4-8 4-8 8s8 4 8 8-8 4-8 8" />
      <path d="M7 7h10" />
      <path d="M7 17h10" />
    </>
  ),
  home: (
    <>
      {/* House */}
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  bone: (
    <>
      {/* Bone */}
      <path d="M17.2 3.5a2.4 2.4 0 013.3 3.3L7.8 19.5a2.4 2.4 0 01-3.3-3.3z" />
      <path d="M18 4c-.7-1.7-3.3-1.7-4 0" />
      <path d="M6 20c.7 1.7 3.3 1.7 4 0" />
    </>
  ),
  ban: (
    <>
      {/* Ban / prohibited */}
      <circle cx="12" cy="12" r="9" />
      <path d="M5.7 5.7l12.6 12.6" />
    </>
  ),
  pregnant: (
    <>
      {/* Pregnancy/maternity — person with belly */}
      <circle cx="12" cy="5" r="2.5" />
      <path d="M10 9h2a4 4 0 014 4v2" />
      <path d="M10 9v6a3 3 0 003 3h3" />
      <path d="M10 21v-3" />
      <path d="M16 21v-3" />
    </>
  ),
  "chart-down": (
    <>
      {/* Downward chart */}
      <path d="M3 3v18h18" />
      <path d="M7 12l4-3 4 4 5-6" />
      <path d="M20 7v4h-4" />
    </>
  ),
  money: (
    <>
      {/* Money/cost */}
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9.5c-.7-1-1.8-1.5-3-1.5-2.2 0-4 1.3-4 3s1.8 3 4 3c2.2 0 4 1.3 4 3s-1.8 3-4 3c-1.2 0-2.3-.5-3-1.5" />
      <path d="M12 5v2" />
      <path d="M12 17v2" />
    </>
  ),
  chicken: (
    <>
      {/* Bird/livestock */}
      <circle cx="14" cy="7" r="3" />
      <path d="M17.5 6l2-1.5" />
      <path d="M14 10c-3 2-5 5-5 8" />
      <path d="M14 10c1 2 1 5 0 8" />
      <path d="M9 18h5" />
      <path d="M10 18v3" />
      <path d="M13 18v3" />
    </>
  ),
  hospital: (
    <>
      {/* Hospital/medical */}
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </>
  ),
  neighborhood: (
    <>
      {/* Neighborhood/buildings */}
      <path d="M3 21h18" />
      <rect x="3" y="9" width="6" height="12" />
      <path d="M6 3l3 6H3z" />
      <rect x="11" y="5" width="5" height="16" />
      <path d="M18 12h3v9h-3z" />
      <rect x="13" y="8" width="1.5" height="2" fill="currentColor" stroke="none" />
      <rect x="13" y="13" width="1.5" height="2" fill="currentColor" stroke="none" />
    </>
  ),
  earth: (
    <>
      {/* Earth/planet — distinct from globe */}
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M12 3c2.5 3 4 6 4 9s-1.5 6-4 9" />
      <path d="M12 3c-2.5 3-4 6-4 9s1.5 6 4 9" />
    </>
  ),
  pain: (
    <>
      {/* Pain/suffering — heartbeat line + warning */}
      <path d="M3 12h4l2-5 3 10 2-5h7" />
      <path d="M12 3l1 3h-2z" fill="currentColor" stroke="none" />
    </>
  ),
  scope: (
    <>
      {/* Scope/scale — expanding circles */}
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  ripple: (
    <>
      {/* External cost / ripple effect */}
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8 8a6 6 0 018 0" />
      <path d="M6 6a9 9 0 0112 0" />
      <path d="M16 16a6 6 0 01-8 0" />
      <path d="M18 18a9 9 0 01-12 0" />
    </>
  ),
  abuse: (
    <>
      {/* Warning/danger — triangle */}
      <path d="M12 3L2 21h20z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  breeder: (
    <>
      {/* Factory/industry */}
      <path d="M4 20V10l4-4v6l4-4v6l4-4v6" />
      <rect x="16" y="8" width="4" height="12" />
      <path d="M18 8V4" />
      <path d="M2 20h20" />
    </>
  ),
  feeder: (
    <>
      {/* Bowl/feeding */}
      <path d="M4 15c0 3.3 3.6 6 8 6s8-2.7 8-6" />
      <path d="M2 15h20" />
      <path d="M12 3v4" />
      <path d="M8 5l4 2 4-2" />
    </>
  ),
};

export default function TechIcon({ name, size = 20, className = "" }) {
  const paths = ICONS[name];
  if (!paths) return null;

  return (
    <span
      className={`tech-icon ${className}`}
      role="img"
      aria-hidden="true"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        {paths}
      </svg>
    </span>
  );
}
