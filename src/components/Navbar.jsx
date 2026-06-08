import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import { useViewMode } from "../context/ViewModeContext";
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang, uiLabels } = useI18n();
  const { viewMode, toggleViewMode } = useViewMode();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const isScenario = location.pathname === "/scenario";
  const isDetail = location.pathname.startsWith("/behavior");
 
  // Sync / Reset states on path change without useEffect trigger loop
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsScrolled(false);
    setActiveSection("");
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
 
  const currentLink = useMemo(() => {
    return links.find(link => link.id === activeSection);
  }, [links, activeSection]);

  // 3. 監聽 activeSection 變化，自動橫向滾動行動端導覽項目至中央對齊
  useEffect(() => {
    if (!isScrolled || !activeSection) return;
    const activeEl = document.getElementById(`nav-link-mob-${activeSection}`);
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeSection, isScrolled]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isDetail ? "detail-mode" : ""} ${isMenuOpen ? "drawer-open" : ""}`}>
      <div className="header-inner">
        <div className="header-logo" onClick={handleLogoClick}>
          <span className="logo-abbr">P.C.H.I.</span>
          <span className="logo-full">純結果論危害指數</span>
        </div>
 
        {/* 動態段落定位標籤 (方案三：暫時註解以測試方案一)
        {!isDetail && currentLink && (
          <div className={`header-active-section ${isScrolled && activeSection ? "visible" : ""}`}>
            <span className="section-dot">•</span>
            <span className="section-label">{currentLink.label}</span>
          </div>
        )}
        */}

        {/* 行動端二級水平滑動導覽列 (方案一 - 長在原本的 bar 內) */}
        {!isDetail && (
          <div className="mobile-scroll-nav-bar">
            <div className="mobile-scroll-nav-inner">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  id={`nav-link-mob-${link.id}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

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
          {/* 電腦版/行動版一鍵切換按鈕 */}
          <button
            className="view-mode-btn"
            onClick={toggleViewMode}
            title={viewMode === "mobile" ? "切換至電腦版版面" : "切換至手機版版面"}
          >
            {viewMode === "mobile" ? (
              /* 電腦圖標 */
              <svg className="view-mode-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            ) : (
              /* 手機圖標 */
              <svg className="view-mode-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            )}
            <span className="view-mode-text">{viewMode === "mobile" ? "電腦版" : "行動版"}</span>
          </button>

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
 
          {!isDetail && (
            <button 
              className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="選單開關"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </div>
 
      {/* 行動端選單抽屜 */}
      {!isDetail && (
        <div className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
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
        </div>
      )}
    </header>
  );
}
