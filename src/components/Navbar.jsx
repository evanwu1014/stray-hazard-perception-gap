import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang, uiLabels } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isScenario = location.pathname === "/scenario";
  const isDetail = location.pathname.startsWith("/behavior");

  // Sync / Reset states on path change without useEffect trigger loop
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsScrolled(false);
    setActiveSection("");
  }

  const links = useMemo(() => {
    const scenarioLinks = [
      { id: "hero", label: uiLabels.nav.scenario.hero },
      { id: "intro", label: uiLabels.nav.scenario.intro },
      { id: "scenarios", label: uiLabels.nav.scenario.scenarios },
      { id: "charts", label: uiLabels.nav.scenario.charts },
      { id: "matrix", label: uiLabels.nav.scenario.matrix }
    ];

    const homeLinks = [
      { id: "methodology", label: uiLabels.nav.home.methodology },
      { id: "dimensions", label: uiLabels.nav.home.dimensions },
      { id: "ranking", label: uiLabels.nav.home.ranking },
      { id: "perception", label: uiLabels.nav.home.perception },
      { id: "insights", label: uiLabels.nav.home.insights }
    ];

    return isScenario ? scenarioLinks : homeLinks;
  }, [isScenario, uiLabels]);

  // 1. Throttled detect scroll position for header sticky state (prevents layout checks)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled((prev) => {
        const next = scrollY > 80;
        return prev !== next ? next : prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. High-performance IntersectionObserver scroll-spy (removes offsetTop layout reflows)
  useEffect(() => {
    if (isDetail) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus on middle-top area of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isDetail, links]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (isDetail) {
      navigate(isScenario ? "/scenario" : "/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isDetail ? "detail-mode" : ""}`}>
      <div className="header-inner">
        <div className="header-logo" onClick={handleLogoClick}>
          <span className="logo-abbr">P.C.H.I.</span>
          <span className="logo-full">純結果論危害指數</span>
        </div>

        {!isDetail && (
          <nav className="header-nav">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="header-actions">
          <button
            className="lang-btn"
            onClick={toggleLang}
            title={lang === "zh_TW" ? "切換至簡體中文" : "切换至繁体中文"}
          >
            <svg className="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="lang-text">{lang === "zh_TW" ? "繁中" : "簡中"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
