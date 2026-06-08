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

    let title = "";
    let description = "";

    if (pathname === "/") {
      title = isTW
        ? "純結果論危害指數 — Pure Consequentialist Hazard Index"
        : "纯结果论危害指数 — Pure Consequentialist Hazard Index";
      description = isTW
        ? "排除主觀情感，以科學量化衡量行為造成的真實損害。一套將行為拆解為三個獨立量化指標的純結果論評分機制。"
        : "排除主观情感，以科学量化衡量行为造成的真实损害。一套将行为拆解为三个独立量化指标的纯结果论评分机制。";
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
        ? "純結果論危害指數 — Pure Consequentialist Hazard Index"
        : "纯结果论危害指数 — Pure Consequentialist Hazard Index";
      description = isTW
        ? "排除主觀情感，以科學量化衡量行為造成的真實損害。"
        : "排除主观情感，以科学量化衡量行为造成的真实损害。";
    }

    // 更新瀏覽器 Title
    document.title = title;
    
    // 更新 Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }
  }, [location.pathname, lang, hazardData]);

  return null;
}
