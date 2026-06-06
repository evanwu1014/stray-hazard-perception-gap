import { createContext, useContext, useState, useEffect } from "react";

// Import Traditional Chinese (Taiwanese usage)
import { UI_LABELS as labelsTW } from "../data/locales/zh_TW/uiLabels";
import { HAZARD_TEXT as textTW, SCENARIO_TEXT as scenarioTextTW } from "../data/locales/zh_TW/textContent";
import { HAZARD_DATA as dataTW, getProcessedHazardData as getProcessedTW } from "../data/locales/zh_TW/hazardData";
import { SCENARIOS as scenariosTW, SCENARIO_LIST as scenarioListTW, DECISION_MATRIX as matrixTW } from "../data/locales/zh_TW/scenarioData";

// Import Simplified Chinese (Chinese usage)
import { UI_LABELS as labelsCN } from "../data/locales/zh_CN/uiLabels";
import { HAZARD_TEXT as textCN, SCENARIO_TEXT as scenarioTextCN } from "../data/locales/zh_CN/textContent";
import { HAZARD_DATA as dataCN, getProcessedHazardData as getProcessedCN } from "../data/locales/zh_CN/hazardData";
import { SCENARIOS as scenariosCN, SCENARIO_LIST as scenarioListCN, DECISION_MATRIX as matrixCN } from "../data/locales/zh_CN/scenarioData";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("app_lang");
    if (saved === "zh_CN" || saved === "zh_TW") {
      return saved;
    }
    
    // No saved preference, detect browser/system language
    const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (browserLang.includes("zh-cn") || browserLang.includes("zh-sg") || browserLang.includes("zh-hans")) {
      return "zh_CN";
    }
    return "zh_TW";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    // Set html lang attribute for accessibility / styling
    document.documentElement.lang = lang === "zh_TW" ? "zh-TW" : "zh-CN";
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "zh_TW" ? "zh_CN" : "zh_TW"));
  };

  const isTW = lang === "zh_TW";
  const uiLabels = isTW ? labelsTW : labelsCN;
  const hazardText = isTW ? textTW : textCN;
  const scenarioText = isTW ? scenarioTextTW : scenarioTextCN;
  const hazardData = isTW ? dataTW : dataCN;
  const scenarios = isTW ? scenariosTW : scenariosCN;
  const scenarioList = isTW ? scenarioListTW : scenarioListCN;
  const decisionMatrix = isTW ? matrixTW : matrixCN;
  const getProcessedData = isTW ? getProcessedTW : getProcessedCN;

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        uiLabels,
        hazardText,
        scenarioText,
        hazardData,
        scenarios,
        scenarioList,
        decisionMatrix,
        getProcessedData
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
