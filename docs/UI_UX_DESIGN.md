# 網頁 UI/UX 設計規範 (UI/UX Design Specifications)

本專案採用現代暗色主題、玻璃擬態（Glassmorphism）與具動態微動效（Micro-interactions）的極簡科技風（Premium Tech Aesthetic），旨在提供嚴肅議題（野保與動保衝突、結果論量化分析）一個客觀、理性且具質感的呈現介面。

---

## 1. 核心配色系統 (Design Tokens & Color System)

主要顏色皆定義於 [index.css](../src/index.css) 的 `:root` 變數中：

*   **基礎背景與表面色**
    *   主背景色 (`--bg`): `#090b10` （極深灰藍，搭配漸層放射網格）
    *   次背景色 (`--bg2`): `#0f1219`
    *   表面卡片色 (`--surface`): `rgba(17, 21, 30, 0.65)` （具玻璃透光感）
    *   邊框色 (`--surface-border`): `rgba(255, 255, 255, 0.06)`
*   **文字顏色**
    *   主文字色 (`--text`): `#e2e8f0` (高對比冷白)
    *   次文字色 (`--text-dim`): `#7a8ba7` (低對比藍灰)
    *   淡文字色 (`--text-faint`): `#4a5568`
*   **客觀危害分級 (Objective Hazard Levels)**
    *   低痛苦/危害 (`--d-lo`): `#34d399` (翠綠色)
    *   中痛苦/危害 (`--d-md`): `#f5a623` (橙黃色)
    *   高痛苦/危害 (`--d-hi`): `#ff5c5c` (鮮紅色)
*   **威脅等級 (Threat Level Color Scale for RankList)**
    *   低度威脅 (`--t-1`): `#5ea8ff` (藍) — 總分 $\le$ 10 分
    *   中度威脅 (`--t-2`): `#ffc845` (金黃) — 總分 11 - 15 分
    *   高度威脅 (`--t-3`): `#ff8a50` (亮橘) — 總分 16 - 22 分
    *   極端威脅 (`--t-4`): `#ff2d55` (桃紅) — 總分 23 分以上
*   **認知偏差指示色 (Perception Deviation)**
    *   社會過度反應偏誤 (`--d-hi`): `#ff5c5c` (紅色柱狀圖，正偏值)
    *   社會認知盲區偏誤 (`--cyan`): `#22d3ee` (青色柱狀圖，負偏值)

---

## 2. 字體與排版 (Typography)

*   **中文字型**: `'Noto Sans TC', sans-serif`
*   **英數字型**: `'Inter', sans-serif`
*   **階層比例**:
    *   Hero 標題 (`h1`): `clamp(2.4rem, 5vw, 4rem)`，字重 900，採用漸層填色（藍至紫至粉）。
    *   區塊標題 (`h2`): `clamp(1.6rem, 3.5vw, 2.4rem)`，字重 800。
    *   卡片/行標題 (`h3` / `h4`): `1.1rem` 至 `1.2rem`，字重 700。

---

## 3. 互動與動畫效果 (Micro-interactions & Animations)

*   **捲動顯現機制**: 使用 [Reveal.jsx](../src/components/Reveal.jsx) 包裹區塊，當視窗捲動至該區塊時，觸發 `opacity` 與 `translateY(36px -> 0px)` 的貝氏曲線動畫。
*   **動態進度條與偏差條**:
    *   [RankList.jsx](../src/components/RankList.jsx) 中的危害強度橫條，在元素進入可視範圍後以 `transition: width 1.2s` 漸進填滿。
    *   [DeviationChart.jsx](../src/components/DeviationChart.jsx) 的認知偏移條，從中線雙向延伸（向右紅色代表過度反應，向左青色代表認知盲區）。
*   **懸浮資訊提示 (Tooltips)**: 基於 CSS 選擇器與純樣式定位，在註釋標記 (`.cite-ref`) 懸浮時顯示帶有毛玻璃背景的詳細文獻來源與詮釋文字。
*   **懸浮卡片位移**: 卡片（如危害維度卡片、場域卡片、角色卡片）在 Hover 時有 `translateY(-6px)` 的上浮微動效，並伴隨陰影加深與邊框亮化。
