import { useLocation } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const { uiLabels } = useI18n();
  const isScenario = location.pathname === "/scenario";

  // 讀取 Vite 在建置時寫入 HTML head 的 Meta 標籤資訊
  const buildInfo = typeof document !== 'undefined'
    ? document.querySelector('meta[name="build-info"]')?.getAttribute('content') || ''
    : '';

  return (
    <footer>
      <div>
        {isScenario
          ? uiLabels.footer.scenario
          : uiLabels.footer.home}
      </div>
      {buildInfo && (
        <div style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '6px' }}>
          最後更新: {buildInfo}
        </div>
      )}
    </footer>
  );
}
