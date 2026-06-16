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

*   **全域背景網格與極簡滾動條**：
    *   於 `body` 主背景疊加細緻的 `24px * 24px` 點狀科技網格（Dotted Grid Pattern），增強層次感。
    *   客製化極簡暗色滾動條（`::-webkit-scrollbar`），懸停時呈現半透明藍色發光，保持暗色主題視覺的一致性。
*   **首屏漸層文字與按鈕流光**：
    *   為 Hero `h1` 與 `.lead-hl` 加入 6 秒循環的 `textShimmer` 位移漸層流光動畫，模擬動態金屬反光。
    *   主要按鈕（`.btn-primary`）引入虛擬元素的 hover 橫向滑動高光條，並加強半透明霓虹背光投影效果（Drop Glow）。
*   **卡片特有色發光與呼吸總分盒**：
    *   調整維度卡懸浮上浮陰影。場景卡 hover 時會投射與其危害等級（紅/黃/藍）一致的動態光暈邊框。
    *   排名列表中，危害度總分盒（`.s-box.total`）依據其四段威脅級別（`threat-1` 至 `threat-4`）套用 `threatGlow` 呼吸發光動畫。
*   **偏差圖表格線與偏差條漸層發光蓋**：
    *   [DeviationChart.jsx](../src/components/DeviationChart.jsx) 圖表背景疊加每 10% 寬度的垂直基準網格線，零偏線具有微弱發光外圈並提升 z-index。
    *   正負偏值條狀圖使用精緻的漸層填色（右向過度反應為橘紅漸層，左向認知盲區為藍青漸層），且在顯著偏移值（絕對值 >= 3.0）的長條圖最末端貼合圓角內嵌「呼吸發光蓋（Glow Cap）」，在視覺上引導注意力的同時避免了溢出出格，保持版面整潔精緻。
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
    *   **雙重裝飾外環線**：於環形圖最外圍加入細線實圈與虛線齒輪環，並綁定 `rotateGaugeDecor` 慢速旋轉動畫，打造科技儀表板的高端質感。
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

---

## 7. 行動裝置響應式適配規範 (Mobile RWD & Viewport Specifications)

為了確保在不同尺寸行動裝置（如高階大螢幕手機、小螢幕手機）上依然能完整展現「量化分析、場域對照、因果傳導、認知落差」之設計意圖，專案對 RWD 機制進行了深度重構與局部體驗優化：

### A. Viewport 彈性檢視模式 (Standard & One-Key Desktop Mode)
*   **標準響應式**：將 `index.html` 的 viewport 改為標準的 `width=device-width, initial-scale=1.0`，使行動裝置能正確渲染 RWD 排版。
*   **一鍵切換電腦版/行動版**：
    *   在手機版網頁頂部新增一個電腦/手機圖示的**檢視模式切換按鈕 (`.view-mode-btn`)**，透過 `ViewModeContext` 全域管理。
    *   **電腦版檢視模式**：動態將 `meta viewport` 的 `content` 變更為 `width=1200, initial-scale=0.3, user-scalable=yes`，強制瀏覽器以 1200px 桌機寬度渲染網頁並等比例縮小，讓使用大螢幕手機的讀者能在手機上體驗到最完整、資訊最充實的「桌機版大氣排版」，並支援雙指自由縮放。
    *   **行動版檢視模式**：一鍵還原為標準 RWD 適配版面。

### B. 網站標頭與二級滑動導覽 (Header & Inline Scroll Bar)
*   **圓形按鈕折疊**：在螢幕寬度小於 `768px` 時，將「切換語言」與「版面切換」兩個按鈕自動折疊為小巧的圓形圖標按鈕，省下視覺空間。
*   **滑動選單按鈕防擠壓**：為漢堡按鈕與各功能按鈕設定 `flex-shrink: 0`，防止在窄螢幕下因為 flex 排版寬度分配不足而被擠壓至 0 寬度而消失。
*   **長在 Bar 內部的滑動導覽 (方案一)**：
    *   手機版 scrolled 狀態下，在頂部 Bar 的 Logo 與右側 Actions 按鈕之間的中央空白區域，直接嵌入一個小型的水平滾動導覽列 (`.mobile-scroll-nav-bar`)。
    *   為內部的 a 標籤設定 `flex-shrink: 0` 確保其完整寬度不被壓縮，藉此觸發 `overflow-x: auto` 的水平溢出滑動。
    *   **Scrollspy 自動滾動置中**：當使用者往下滾動網頁時，除了自動高亮目前區段，該滑動導覽條還會透過 `scrollIntoView({ inline: 'center' })` **自動平滑橫向滾動，將目前高亮標籤對齊至中央**。

### C. 決策矩陣卡片與標籤切換 (DecisionMatrix Mobile Tab-Card)
*   **排版轉換**：在手機版（寬度小於 `768px`）時隱藏傳統 `<table>`。
*   **標籤頁切換**：改為「場域標籤切換頁 (Tab Headers)」。使用者可點擊切換「儲備區」、「都會區」與「校園區」三個 Tab。
*   **縱向卡片呈現**：下方則呈現一個縱向的卡片清單，展示管制手段的狀態（建議/強烈建議/不建議）與細節，大幅改善了橫向滑動表格的痛苦，重現了「不同場景決策指南」的對比意圖。

### D. 偏差圖表流線型上下雙層排版 (DeviationChart Mobile Layout)
*   **上下層疊排版**：在手機端（寬度小於 `700px`）隱藏原本的 Grid columns，改為垂直流線型排版。
*   **首屏對稱長條**：
    *   **第一層**：並排呈現行為名稱與最終偏差數值（如紅色的 `+X` 或青色的 `-Y`），字體清晰。
    *   **第二層**：橫跨整個螢幕寬度的**100% 寬度長條圖軌道**，左右對稱延伸，重現感知偏移的強烈對比。
    *   **第三層**：以虛線分隔，並排顯示「譴責度、輿論度、客觀危害度」的得分小字，不用折疊點擊，所有資訊一目了然。

### E. 危害關係鏈垂直連接器與微動效 (BehaviorDetail Relationship Connectors)
*   **垂直箭頭導引**：在詳情頁手機版關係鏈垂直堆疊時，於各行為節點（Agents ➔ Transmission ➔ Victims & Beneficiaries）之間，插入垂直向下的流程連接器 (`.bdetail-flow-connector`)。
*   **呼吸發光動態**：連接器內的 SVG 箭頭搭配 `bounceArrow` 貝氏曲線 CSS 動畫，在垂直位移的同時伴隨著發光強度（`drop-shadow`）的呼吸淡入淡出，重現危害從行為主體流向受害者的「傳導與因果流動感」。