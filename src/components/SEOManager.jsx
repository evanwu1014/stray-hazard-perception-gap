import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../context/I18nContext";

/**
 * SEOManager 元件用於監聽路由與語系的變化，
 * 並動態地更新瀏覽器分頁標題（document.title）與頁面描述標籤（meta description）。
 */
export default function SEOManager() {
  const location = useLocation();
  const { lang, hazardData } = useI18n();

  useEffect(() => {
    const isTW = lang === "zh_TW";
    const pathname = location.pathname;

    let title;
    let description;

    if (pathname === "/") {
      title = isTW
        ? "純結果論危害指數：遊蕩犬貓議題與客觀危害量化評估"
        : "纯结果论危害指数：流浪犬猫议题与客观危害量化评估";
      description = isTW
        ? "排除主觀情感，以科學量化評估遊蕩犬貓（流浪貓狗）相關行為對野生動物與生態環境造成的真實損害，並分析社會道德直覺與客觀危害的認知落差。"
        : "排除主观情感，以科学量化评估流浪犬猫相关行为对野生动物与生态环境造成的真实损害，并分析社会道德直觉与客观危害的认知偏差。";
    } else if (pathname === "/scenario") {
      title = isTW
        ? "特定場域危害與管理決策模型 — Pure Consequentialist Hazard Index"
        : "特定场域危害与管理决策模型 — Pure Consequentialist Hazard Index";
      description = isTW
        ? "拒認一刀切的道德定罪，將流浪犬貓的環境影響條件化與場域化。透過生態脆弱度與社會機能的雙重審視，為不同情境提供更精確、更可辯護的風險對策。"
        : "拒认一刀切的道德定罪，将流浪犬猫的环境影响条件化与场域化。透过生态脆弱度与社会机能的双重审视，为不同情境提供更精确、更可辩护的风险对策。";
    } else if (pathname.startsWith("/behavior/")) {
      const idStr = pathname.split("/behavior/")[1];
      const id = parseInt(idStr, 10);
      
      const item = hazardData.find((i) => i.id === id);
      if (item) {
        title = isTW
          ? `${item.name} - 危害評估與分析 | 純結果論危害指數`
          : `${item.name} - 危害评估与分析 | 纯结果论危害指数`;
        description = isTW
          ? `${item.name}的結果論危害量化評估與分析：${item.desc}`
          : `${item.name}的结果论危害量化评估与分析：${item.desc}`;
      } else {
        title = isTW
          ? "找不到此條目 | 純結果論危害指數"
          : "找不到此条目 | 纯结果论危害指数";
        description = isTW
          ? "找不到此條目的詳細資訊。"
          : "找不到此条目的详细信息。";
      }
    } else {
      title = isTW
        ? "純結果論危害指數：遊蕩犬貓議題與客觀危害量化評估"
        : "纯结果论危害指数：流浪犬猫议题与客观危害量化评估";
      description = isTW
        ? "排除主觀情感，以科學量化評估遊蕩犬貓（流浪貓狗）相關行為對野生動物與生態環境造成的真實損害。"
        : "排除主观情感，以科学量化评估流浪犬猫相关行为对野生动物与生态环境造成的真实损害。";
    }

    // 更新瀏覽器 Title
    document.title = title;
    
    // 輔助函式：動態更新或建立 Meta 標籤
    const setMetaTag = (selector, attrName, attrVal, contentVal) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", contentVal);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        element.setAttribute("content", contentVal);
        document.head.appendChild(element);
      }
    };

    // 更新 Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // 更新 Open Graph 標籤
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    
    const canonicalUrl = `https://stray-hazard-perception-gap.web.app/#${location.pathname}`;
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    
    const ogLocale = isTW ? "zh_TW" : "zh_CN";
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', ogLocale);

    // 更新 Twitter Card 標籤
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [location.pathname, lang, hazardData]);

  return null;
}
