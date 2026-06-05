import { useLocation } from "react-router-dom";
import { useI18n } from "../context/I18nContext";

export default function Footer() {
  const location = useLocation();
  const { uiLabels } = useI18n();
  const isScenario = location.pathname === "/scenario";

  return (
    <footer>
      {isScenario
        ? uiLabels.footer.scenario
        : uiLabels.footer.home}
    </footer>
  );
}
