import { useLocation } from "react-router-dom";
import { UI_LABELS } from "../data/uiLabels";

export default function Footer() {
  const location = useLocation();
  const isScenario = location.pathname === "/scenario";

  return (
    <footer>
      {isScenario
        ? UI_LABELS.footer.scenario
        : UI_LABELS.footer.home}
    </footer>
  );
}
