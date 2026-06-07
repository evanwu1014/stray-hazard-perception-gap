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
*   **行內點擊展開面板 (Info Panel Card)**：原懸浮式 tooltip 於行動裝置極難觸發，且容易被頁面邊緣截斷。改版後以 click-toggle 式的行內展開面板 `.cite-panel` 取代。當點擊「研究依據」文字按鈕 (`.cite-btn`) 時，以動畫向下滑動展開。面板採用深色磨砂玻璃背景與頂部藍色漸層裝飾條，包含標題、內容說明、文獻引用，並設有「查看完整情境分析」的快速導航連結。
*   **懸浮卡片位移**: 卡片（如危害維度卡片、場域卡片、角色卡片）在 Hover 時有 `translateY(-6px)` 的上浮微動效，並伴隨陰影加深與邊框亮化。

---

## 4. 獨立條目詳情頁設計規範 (Behavior Detail Page Specifications)

為提供行為危害更全面深入的分析，獨立詳情頁 ([BehaviorDetail.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/pages/BehaviorDetail.jsx)) 設計了極富視覺衝擊與學術質感的佈局：

*   **三維評分環形圖與總分卡 (SVG Score Gauges & Total Score Card)**
    *   以自訂 SVG `<circle>` 動態繪製 `strokeDasharray`。當頁面加載時，環形條從 0% 漸進加載至指定分值（`transition: stroke-dasharray 1s`）。
    *   三個維度（個體痛苦深度、受害生命規模、外部成本外溢）分別使用對應的指標色彩，並在環形中心顯著呈現分數數值。各維度儀表板不再使用 emoji 圖示。
    *   **四欄網格佈局**（`grid-template-columns: repeat(4, 1fr)`）：將客觀危害總分卡作為第四個網格項目，與三個維度儀表板並排顯示。小螢幕自動調整為兩欄或單欄。
    *   **總分卡重新設計**：總分卡從橫向長條改為垂直卡片形式，具備頂部漸層裝飾條（`::before`）、底部進度條（以 CSS 變數 `--score-pct` 動態控制寬度）、hover 上浮與文字發光效果，字體加大至 `3.5rem`。
*   **三欄詳細說明卡片**
    *   「詳細說明」、「成因分析」、「政策啟示」三個板塊採用橫向網格（Grid）並列，小螢幕自動重疊為單欄。卡片背景採用極富質感的半透明磨砂玻璃與細緻的發光邊框。不再使用 emoji 圖示。
*   **客觀與主觀認知落差 (Perception Gap Graph)**
    *   在專屬卡片中以雙長條圖並列方式展示：
        *   **大眾道德直覺分值**：使用柔和的灰色/粉色長條。
        *   **客觀危害分值**：使用對應其危害程度（低/中/高/極端）色彩的亮色長條。
        *   下方渲染一個偏離狀態標籤（如「過度反應 +X」或「認知盲區 -X」），能迅速告知讀者該議題的社會認知失真情況。
*   **多場景情境卡片 (Scenarios)**
    *   採用 `grid` 多欄自適應排版。卡片在邊框與背景上，使用客製化的 CSS 變數（如 `--sc-color`, `--sc-bg`, `--sc-border`）呈現特定的風險級別顏色（Critical / High / Moderate）。
    *   情境圖示 (`sc.icon`) 改為條件式渲染，當資料未提供圖示時不顯示。
*   **跨條目快速導航 (Linear Navigation)**
    *   頁尾設計「危害較低 ←」與「危害較高 →」的雙向導航按鈕，顯示上一名與下一名行為的名稱，供讀者線性流暢地比較不同程度的危害行為。

---

## 5. 路由切換捲動重置 (Scroll to Top)

*   **機制**：由於 React 單頁應用（SPA）預設會在路由跳轉時維持先前的滾動位置，這在列表頁滑動至底部並點擊「深入了解」後，會導致詳情頁面依然停留在最底部，破壞首屏視覺體驗。
*   **解決方式**：使用 [ScrollToTop.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/components/ScrollToTop.jsx) 元件，在 `<HashRouter>` 的頂層監聽 `pathname` 的改變。一旦路由跳轉，便調用 `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })` 強制重置滾動位置，提供流暢的瀏覽旅程。

---

## 6. 網站標頭 (Site Header)

*   **元件**：[Navbar.jsx](../src/components/Navbar.jsx)，CSS 類別為 `.site-header`。
*   **設計概念**：採用雙狀態設計，頁面頂部時為絕對定位的透明標頭，捲動後轉為固定玻璃擬態 pill 形式。
*   **狀態切換**：
    *   **初始狀態**：`position: absolute`，透明背景，包含 logo、導航連結、語言切換按鈕的完整佈局。
    *   **捲動狀態**（`scrollY > 80px`）：轉為 `position: fixed`，變為玻璃擬態 pill（圓角 40px），背景為 `rgba(15, 18, 25, 0.78)` 配合 `backdrop-filter: blur(20px)`，從頂部滑入動畫（`headerSlideIn`）。
*   **Scroll Spy（滾動偵測）**：使用高效能的 `IntersectionObserver` API 取代傳統 `offsetTop` 檢測，避免 layout reflow。設定 `rootMargin: "-25% 0px -55% 0px"` 聚焦於螢幕中上區域，當區塊進入此範圍時自動標記對應導覽連結為 `.active` 狀態。
*   **效能優化**：
    *   Scroll position 檢測使用 throttling 機制，僅在狀態變化時更新。
    *   使用 `will-change: transform, opacity` 啟用 GPU 加速。
    *   `IntersectionObserver` 取代同步 `offsetTop` 計算，消除滾動時的 layout reflow。
*   **頁面路由差異**：
    *   首頁（`/`）：顯示 機制、維度、排名、認知落差、洞見 五個錨點連結。
    *   場域分析頁（`/scenario`）：顯示 首頁、模型理念、三大場域、危害量化、決策矩陣 五個錨點連結。
    *   條目詳情頁（`/behavior/:id`）：進入 `detail-mode`，隱藏導航連結，僅保留 logo 與語言切換按鈕。
*   **互動功能**：
    *   **Logo 點擊**：在首頁時捲動至頂部，在其他頁面時導航回首頁。
    *   **導航連結點擊**：在詳情頁點擊時會導航回首頁並捲動至對應區塊（透過 `navigate` 的 `state.scrollTo`）。
    *   **語言切換按鈕**：整合於 header 右側，類別為 `.lang-btn`，在所有頁面持續顯示。使用 SVG 向量地球圖示取代 emoji。