# 網頁 UI/UX 設計規範 (UI/UX Design Specifications)

本專案採用現代暗色主題、玻璃擬態（Glassmorphism）與具動態微動效（Micro-interactions）的極簡科技風（Premium Tech Aesthetic），旨在提供嚴肅議題（野保與動保衝突、結果論量化分析）一個客觀、理性且具質感的呈現介面。

---

## 1. 核心配色系統 (Design Tokens & Color System)

> 完整的色彩系統規範（含對比度評估、使用規則與歷史調整記錄）請參閱 [COLOR_SYSTEM.md](./COLOR_SYSTEM.md)。

主要顏色皆定義於 [index.css](../src/index.css) 的 `:root` 變數中：

*   **基礎背景與表面色**
    *   主背景色 (`--bg`): `#090b10` （極深灰藍，搭配漸層放射網格）
    *   次背景色 (`--bg2`): `#0f1219`
    *   表面卡片色 (`--surface`): `rgba(17, 21, 30, 0.65)` （具玻璃透光感）
    *   邊框色 (`--surface-border`): `rgba(255, 255, 255, 0.06)`
*   **文字顏色**（三層階層系統）
    *   主文字色 (`--text`): `#e2e8f0`（高對比冷白，對比度 ~14.5:1）
    *   次文字色 (`--text-dim`): `#7a8ba7`（說明文字，對比度 ~4.6:1）
    *   淡文字色 (`--text-faint`): `#62728d`（輔助標籤，對比度 ~3.4:1）
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
*   **行內點擊展開面板 (Info Panel Card)**：原懸浮式 tooltip 於行動裝置極難觸發，且容易被頁面邊緣截斷。改版後以 click-toggle 式的行內展開面板 `.cite-panel` 取代。當點擊「📖 研究依據」文字按鈕 (`.cite-btn`) 時，以動畫向下滑動展開。面板採用深色磨砂玻璃背景與頂部藍色漸層裝飾條，包含標題、內容說明、文獻引用，並設有「查看完整情境分析」的快速導航連結。
*   **懸浮卡片位移**: 卡片（如危害維度卡片、場域卡片、角色卡片）在 Hover 時有 `translateY(-6px)` 的上浮微動效，並伴隨陰影加深與邊框亮化。

---

## 4. 獨立條目詳情頁設計規範 (Behavior Detail Page Specifications)

為提供行為危害更全面深入的分析，獨立詳情頁 ([BehaviorDetail.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/pages/BehaviorDetail.jsx)) 設計了極富視覺衝擊與學術質感的佈局：

*   **三維評分環形圖 (SVG Score Gauges)**
    *   以自訂 SVG `<circle>` 動態繪製 `strokeDasharray`。當頁面加載時，環形條從 0% 漸進加載至指定分值（`transition: stroke-dasharray 1s`）。
    *   三個維度（痛苦深度、波及規模、外部成本）分別使用對應的指標色彩，並在環形中心顯著呈現分數數值。
*   **三欄詳細說明卡片**
    *   「詳細說明」、「成因分析」、「政策啟示」三個板塊採用橫向網格（Grid）並列，小螢幕自動重疊為單欄。卡片背景採用極富質感的半透明磨砂玻璃與細緻的發光邊框。
*   **客觀與主觀認知落差 (Perception Gap Graph)**
    *   在專屬卡片中以雙長條圖並列方式展示：
        *   **大眾道德直覺分值**：使用柔和的灰色/粉色長條。
        *   **客觀危害分值**：使用對應其危害程度（低/中/高/極端）色彩的亮色長條。
        *   下方渲染一個偏離狀態標籤（如「過度反應 +X」或「認知盲區 -X」），能迅速告知讀者該議題的社會認知失真情況。
*   **多場景情境卡片 (Scenarios)**
    *   採用 `grid` 多欄自適應排版。卡片在邊框與背景上，使用客製化的 CSS 變數（如 `--sc-color`, `--sc-bg`, `--sc-border`）呈現特定的風險級別顏色（Critical ⚡ / High ⚠️ / Moderate ℹ️）。
*   **跨條目快速導航 (Linear Navigation)**
    *   頁尾設計「危害較低 ←」與「危害較高 →」的雙向導航按鈕，顯示上一名與下一名行為的名稱，供讀者線性流暢地比較不同程度的危害行為。

---

## 5. 路由切換捲動重置 (Scroll to Top)

*   **機制**：由於 React 單頁應用（SPA）預設會在路由跳轉時維持先前的滾動位置，這在列表頁滑動至底部並點擊「深入了解」後，會導致詳情頁面依然停留在最底部，破壞首屏視覺體驗。
*   **解決方式**：使用 [ScrollToTop.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/components/ScrollToTop.jsx) 元件，在 `<HashRouter>` 的頂層監聽 `pathname` 的改變。一旦路由跳轉，便調用 `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })` 強制重置滾動位置，提供流暢的瀏覽旅程。

---

## 6. 懸浮導航欄 (Floating Navbar)

*   **元件**：[Navbar.jsx](../src/components/Navbar.jsx)，CSS 類別為 `.float-nav`。
*   **捲動觸發顯示**：導航欄在頁面頂部（`scrollY ≤ 300px`）時以 `opacity: 0` + `pointer-events: none` 完全隱藏，捲動超過 300px 後以 `transition: opacity 0.4s` 平滑淡入，避免遮擋 Hero 首屏的宏大視覺動畫。
*   **Scroll Spy（滾動偵測）**：透過 `scroll` 事件監聽，比對各區塊 `offsetTop - 250px` 的閾值，自動標記當前可見區塊對應的導覽連結為 `.active` 狀態（白色文字 + 半透明底）。
*   **頁面路由差異**：
    *   首頁（`/`）：顯示 機制、維度、排名、認知落差、洞見 五個錨點連結。
    *   場域分析頁（`/scenario`）：顯示 首頁、模型理念、三大場域、危害量化、決策矩陣 五個錨點連結。
    *   條目詳情頁（`/behavior/:id`）：**不渲染導航欄**，避免無效錨點與視覺干擾。
*   **語言切換按鈕**：固定於右上角（`position: fixed; top: 20px; right: 20px; z-index: 101`），在所有頁面與路由下皆持續顯示，不受捲動高度影響。
