# SEO 規格與配置說明文件 (SEO Specifications & Configurations)

本專案採用 Vite + React 設計，並透過 `vite-plugin-singlefile` 打包為單一 HTML 網頁應用程式（SPA），且路由架構使用 `HashRouter`（以 `#` 片段識別路由）。為克服傳統單頁式應用程式在搜尋引擎收錄與社群分享上的限制，本專案實作了一套兼顧「靜態標記預覽」與「客戶端動態更新」的輕量級 SEO 方案。

---

## 1. 系統設計架構與限制

由於所有程式碼與樣式皆內嵌於單一 HTML 檔案中，且頁面跳轉皆發生在客戶端，因此我們採取雙軌 SEO 策略：

1.  **靜態 Meta 與預覽（Static Metadata）**：
    *   在 HTML 構建時直接載入預設的 Open Graph (OG)、Twitter Card、JSON-LD 與 Canonical 連結。
    *   社群媒體爬蟲（如 Facebook, LINE, Slack, Discord 等，通常不執行 JavaScript）在抓取任何專案連結時，會直接讀取 HTML 內的靜態預設值，呈現美觀的專案封面與預設簡介。
2.  **動態更新機制（Dynamic Client-Side Updates）**：
    *   在客戶端引入無渲染的 `SEOManager` 元件，藉由 React 元件生命週期監聽路由與語系變化。
    *   搜尋引擎爬蟲（如 Googlebot，具備執行 JavaScript 之能力）在爬取不同路由時，能正確解析並收錄由 JavaScript 動態寫入的頁面標題（Title）與描述（Meta Description）。

---

## 2. 靜態 HTML SEO 配置

配置於 [index.html](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/index.html) 的 `<head>` 區段中，內容包含：

### 規範連結 (Canonical Link)
*   **標籤**：`<link rel="canonical" href="https://stray-hazard-perception-gap.web.app/" />`
*   **用途**：防止搜尋引擎將不同的子網域或 URL 參數視為重複內容，集中權重於官方域名。

### 搜尋引擎所有權驗證 (Search Console Verification)
*   **標籤**：`<meta name="google-site-verification" content="52ap-mgFlb7dCU1FxyslfFRv_FyxuqoD5TRr9gFjD8E" />`
*   **用途**：向 Google Search Console 證明網站所有權，啟用網站檢索狀態與關鍵字曝光的追蹤管理。

### 開放圖譜協定 (Open Graph Protocol)
為社交平台分享網址時提供富媒體預覽資訊：
*   `og:title`：專案核心標題。
*   `og:description`：專案核心簡介（量化善意與暴力背後的真實代價）。
*   `og:type`：`website`。
*   `og:url`：`https://stray-hazard-perception-gap.web.app/`。
*   `og:image`：指定為 `https://stray-hazard-perception-gap.web.app/og-image.png` （1200x630px）。
*   `og:locale`：`zh_TW`（預設繁體中文），並設定 `og:locale:alternate` 為 `zh_CN`。

### Twitter Card
優化在 Twitter (X) 上的分享版面：
*   `twitter:card`：`summary_large_image`（呈現大圖分享卡片）。
*   `twitter:image`：指定為相同的社群分享預覽圖。

### JSON-LD 結構化資料
使用 `<script type="application/ld+json">` 宣告 Schema.org 資料，有助於搜尋引擎精確理解網站屬性：
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "純結果論危害指數",
  "alternateName": "Pure Consequentialist Hazard Index",
  "url": "https://stray-hazard-perception-gap.web.app/",
  "description": "排除主觀情感，以科學量化衡量行為造成的真實損害。一套將行為拆解為三個獨立量化指標的純結果論評分機制。",
  "inLanguage": ["zh-TW", "zh-CN"]
}
```

---

## 3. 客戶端動態 Metadata 控制器

### 元件實作：[SEOManager.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/components/SEOManager.jsx)
`SEOManager` 是一個輕量、無 DOM 渲染的 React 元件，透過 `useLocation` 與 `useI18n` 訂閱以下狀態變化：
1.  **路徑變更 (Route Path)**：監聽當前的網址路徑。
2.  **語系變更 (Active Language)**：監聽切換繁體中文 (`zh_TW`) 與簡體中文 (`zh_CN`) 的行為。

### 路由與語系對應規則

| 路由路徑 (Path) | 語系 (Language) | 網頁標題 (document.title) | 描述 (Meta Description) |
| :--- | :--- | :--- | :--- |
| **首頁 (`/`)** | 繁體中文 | 純結果論危害指數：遊蕩犬貓議題與客觀危害量化評估 | 排除主觀情感，以科學量化評估遊蕩犬貓（流浪貓狗）相關行為對野生動物與生態環境造成的真實損害，並分析社會道德直覺與客觀危害的認知落差。 |
| | 簡體中文 | 纯结果论危害指数：流浪犬猫议题与客观危害量化评估 | 排除主观情感，以科学量化评估流浪犬猫相关行为对野生动物与生态环境造成的真实损害，并分析社会道德直觉与客观危害的认知偏差。 |
| **場域分析 (`/scenario`)** | 繁體中文 | 特定場域危害與管理決策模型 — Pure Consequentialist Hazard Index | 拒認一刀切的道德定罪，將流浪犬貓的環境影響條件化與場域化。透過生態脆弱度與社會機能的雙重審視，為不同情境提供更精確、更可辯護的風險對策。 |
| | 簡體中文 | 特定场域危害与管理决策模型 — Pure Consequentialist Hazard Index | 拒认一刀切的道德定罪，将流浪犬猫的环境影响条件化与场域化。透过生态脆弱度与社会机能的双重审视，为不同情境提供更精确、更可辩护的风险对策。 |
| **條目詳情 (`/behavior/:id`)** | 繁體中文 | `{行為名稱} - 危害評估與分析 \| 純結果論危害指數` | `{行為名稱}的結果論危害量化評估與分析：{行為摘要}` |
| | 簡體中文 | `{行为名称} - 危害评估与分析 \| 纯结果论危害指数` | `{行为名称}的结果论危害量化评估与分析：{行为摘要}` |

### 掛載位置
必須掛載於 `<HashRouter>` 內部的最上層（見 [App.jsx](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/src/App.jsx)），確保能正確存取 React Router 提供的上下文物件：
```jsx
<I18nProvider>
  <HashRouter>
    <SEOManager /> {/* 掛載於此，自動監聽路由 */}
    <ScrollToTop />
    <Navbar />
    ...
  </HashRouter>
</I18nProvider>
```

---

## 4. 爬蟲控制與站點地圖

為了引導搜尋引擎發現 Hash 路由，專案在 [public/](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/public) 目錄中配置了靜態檢索輔助檔案：

### Robots 配置 ([robots.txt](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/public/robots.txt))
聲明允許所有爬蟲抓取，並明確指定 XML 站點地圖的 URL，利於搜尋引擎快速索引：
```text
User-agent: *
Allow: /

Sitemap: https://stray-hazard-perception-gap.web.app/sitemap.xml
```

### Sitemap 配置 ([sitemap.xml](file:///C:/Users/Lung/Documents/antigravity/agitated-fermi/public/sitemap.xml))
針對 Hash 路由特別編寫，列出了所有可供爬取的客戶端路徑，包含主頁、場域頁與 1~10 號行為條目詳情頁：
*   **首頁**：`https://stray-hazard-perception-gap.web.app/` (權重: 1.0)
*   **場域頁**：`https://stray-hazard-perception-gap.web.app/#/scenario` (權重: 0.8)
*   **行為詳情頁**：`https://stray-hazard-perception-gap.web.app/#/behavior/{1~10}` (權重: 0.6)

---

## 5. 構建與部署相容性

*   **靜態檔案複製**：Vite 構建時會將 `public/` 目錄下的 `robots.txt`、`sitemap.xml` 與 `og-image.png` 自動複製至 `dist/` 輸出目錄。
*   **Firebase 部署**：在進行 `firebase deploy` 時，上述檔案皆會隨 `dist/index.html` 一起部署至根目錄，確保爬蟲與社群平台可以正確通過 `https://stray-hazard-perception-gap.web.app/` 網域名稱進行訪問。
