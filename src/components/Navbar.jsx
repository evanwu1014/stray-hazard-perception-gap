import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../context/I18nContext";

export default function Navbar() {
  const { lang, toggleLang, uiLabels } = useI18n();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isScenario = location.pathname === "/scenario";

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

  const links = isScenario ? scenarioLinks : homeLinks;

  useEffect(() => {
    // Reset state asynchronously on path change safely
    const timer = setTimeout(() => {
      setShow(false);
      setActiveSection("");
    }, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Determine if we should show the nav
      setShow(scrollY > 300);

      // Scroll Spy
      let current = "";
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && scrollY >= el.offsetTop - 250) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load/mount
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, links]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Update hash in address bar without jumping
      window.history.pushState(null, null, `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav className={`float-nav ${show ? "show" : ""}`} id="floatNav">
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

      <button
        className="lang-switch-btn"
        onClick={toggleLang}
        title={lang === "zh_TW" ? "切換至簡體中文" : "切换至繁体中文"}
      >
        <span className="lang-icon">🌐</span>
        <span className="lang-text">{lang === "zh_TW" ? "繁中" : "简中"}</span>
      </button>
    </>
  );
}
