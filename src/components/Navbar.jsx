import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UI_LABELS } from "../data/uiLabels";

const SCENARIO_LINKS = [
  { id: "hero", label: UI_LABELS.nav.scenario.hero },
  { id: "intro", label: UI_LABELS.nav.scenario.intro },
  { id: "scenarios", label: UI_LABELS.nav.scenario.scenarios },
  { id: "charts", label: UI_LABELS.nav.scenario.charts },
  { id: "matrix", label: UI_LABELS.nav.scenario.matrix }
];

const HOME_LINKS = [
  { id: "methodology", label: UI_LABELS.nav.home.methodology },
  { id: "dimensions", label: UI_LABELS.nav.home.dimensions },
  { id: "ranking", label: UI_LABELS.nav.home.ranking },
  { id: "perception", label: UI_LABELS.nav.home.perception },
  { id: "insights", label: UI_LABELS.nav.home.insights }
];

export default function Navbar() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isScenario = location.pathname === "/scenario";
  const links = isScenario ? SCENARIO_LINKS : HOME_LINKS;

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
  );
}
