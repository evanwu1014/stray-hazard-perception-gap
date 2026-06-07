export const hazardData = {
    id: 1,
    name: "當面餵食 TNR 遊蕩犬貓",
    desc: "犬貓個體免於飢餓且無繁衍能力。但維持其街頭生命仍會產生排泄物，並讓其持續基於本能掠食原生野生動物或追咬路人。",
    subScores: {
      pain: 1,      // 痛苦深度
      scale: 2,     // 受害規模
      external: 3   // 外部成本
    },
    objTotal: 6,
    condemn: 1,     // 大眾道德直覺
    outcry: 1,      // 輿論風暴指數
    tooltipTitle: "開放空間 TNR/TNA 的限制",
    tooltipContent: "研究與數學模型顯示，流浪犬貓的年移除率必須持續達到 75% 至 85% 以上，族群總量才會開始下降，且絕育個體仍會持續獵殺野生動物或造成人車追咬衝突。",
    citation: "Longcore et al. (2009) / Barrows (2004) / PMC/NIH (2022) / IFAS (2020) / Wellbeing Intl. / Duke Space (2023) / JASV / 台灣石虎保育協會 / PMC/NIH (2023)",
    references: [
          {
                title: "Longcore, T., Rich, C., & Sullivan, L. M. (2009). Critical assessment of claims regarding management of feral cats by trap–neuter–return. Conservation Biology, 23(4), 887–894.",
                url: "https://doi.org/10.1111/j.1523-1739.2009.01174.x"
          },
          {
                title: "Barrows, P. L. (2004). Professional, ethical, and legal dilemmas of trap-neuter-release. Journal of the American Veterinary Medical Association, 225(9), 1365–1369.",
                url: "https://doi.org/10.2460/javma.2004.225.1365"
          },
          {
                title: "PMC/NIH (2022) - High-intensity TNR required to reduce free-roaming cat population",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9169806/"
          },
          {
                title: "University of Florida IFAS (2020) - How Effective and Humane Is Trap-Neuter-Release?",
                url: "https://ask.ifas.ufl.edu/publication/UW468"
          },
          {
                title: "Wellbeing International - Why Trap-Neuter-Return is Not an Ethical Solution (Australia perspective)",
                url: "https://www.wellbeingintlstudiesrepository.org/cgi/viewcontent.cgi?article=1009&context=aw_comp_globalcats_managementtnr"
          },
          {
                title: "Duke University Space (2023) - Citizens perceptions toward Hangzhou TNR Program (Asia)",
                url: "https://dukespace.lib.duke.edu/items/bbbf3445-70a3-425f-948e-5501a94edc80"
          },
          {
                title: "JASV - Successful Control of Feral Cat Populations Through Trap-Neuter (Asia islands)",
                url: "https://jsmcah.org/index.php/jasv/article/view/125/287"
          },
          {
                title: "台灣石虎保育協會 (Leopard Cat Association of Taiwan)（中華民國）- 石虎保育數據",
                url: "https://www.twlcat.org/en/"
          },
          {
                title: "PMC/NIH (2023) - Fine-Scaled Selection of Resting and Hunting Habitat by Leopard Cats",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9854813/"
          },
          {
                title: "AmCham Taiwan (2016) - Protecting Taiwan's Endangered Leopard Cats",
                url: "https://topics.amcham.com.tw/2016/07/protecting-endangered-leopard-cats/"
          }
    ],
    detailContent: {
      fullDesc: "TNR（誘捕、絕育、回置）作為人道管理手段，在個體福利面確實減少了痛苦，但在族群控制面的成效受數學模型嚴格質疑。「當面餵食」使 TNR 個體持續存活於街頭生境，維持其對原生生態的掠食壓力，並強化流浪動物對特定公共空間的佔據。",
      causeAnalysis: "餵食者通常具有高度同理心，但其行為導致非預期的系統性後果：吸引未絕育個體聚集、增加族群密度、強化地域性造成衝突，以及使收容系統接收壓力的評估失真。",
      policyImplication: "有效的流浪犬貓管理必須結合快速移除（安置或人道處理）、高覆蓋率絕育，以及針對餵食行為的法規配套，三者缺一不可。單純 TNR 加餵食的模型，在生態敏感區域尤其應當被重新評估。"
    },
    scenarios: [
      {
        name: "自然保育緩衝區",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "TNR 個體棲息於保育區邊緣，持續以石虎幼獸、穿山甲、原生鳥類為獵物。絕育不影響其狩獵本能，餵食延長其壽命即延長獵殺時間。",
        actions: [
          { role: "民眾", action: "停止在保育區緩衝帶餵食，支持合法移除計畫" },
          { role: "地方政府", action: "劃定禁止餵食範圍，設置清楚告示並執行裁罰" },
          { role: "NGO/動保團體", action: "將 TNR 資源轉移至都市密集區，而非生態脆弱帶" }
        ]
      },
      {
        name: "都市社區公園",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "固定餵食點造成犬貓群聚，排泄物污染兒童遊憩區，引發鄰里投訴與管理衝突。餵食習慣吸引未絕育個體持續加入族群。",
        actions: [
          { role: "民眾", action: "若欲餵食，請在指定區域並主動配合捕捉新進個體送往絕育" },
          { role: "里辦公處", action: "建立回報機制，協調動保機關定期清查餵食點" },
          { role: "動保機關", action: "提供合法收養媒合管道，降低民眾「原地餵養」的動機" }
        ]
      },
      {
        name: "校園周邊",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "校貓族群若未有效控管，會對接觸過多貓的學童造成過敏風險，以及對小型野鳥（麻雀、白頭翁）的棲地壓縮效應。",
        actions: [
          { role: "學校行政", action: "制定校園動物管理辦法，明確禁止外帶食物餵食" },
          { role: "學生/家長", action: "主動反映校貓問題，透過正式管道尋求移送收容" },
          { role: "教育單位", action: "納入生態保育課程，說明流浪動物對生物多樣性的衝擊" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "餵食者",
        note: "出於同理心，希望個體免於飢餓"
      },
      {
        role: "無完整配套之 TNR 執行者",
        note: "絕育個體但仍回置至街頭環境"
      }
    ],
    transmission: "餵食維持個體街頭存活 → 絕育不影響狩獵本能 → 持續對原生動物施加掠食壓力 → 餵食點吸引未絕育個體聚集 → 族群密度失控 → 排泄物與人犬衝突外溢",
    victims: [
      {
        icon: "🦁",
        category: "原生野生動物",
        entities: "石虎幼獸、穿山甲、原生鳥類、爬蟲類",
        desc: "承受遊蕩犬貓不間斷的本能獵捕與棲地壓迫。絕育不消除掠食行為，餵食延長壽命即延長獵殺時間。"
      },
      {
        icon: "👥",
        category: "社區居民與用路人",
        entities: "一般行人、孩童、外送員",
        desc: "面臨人犬追咬衝突、排泄物污染兒童遊憩區、交通安全風險。"
      },
      {
        icon: "🐾",
        category: "遊蕩犬貓個體本身",
        entities: "被餵食的 TNR 犬貓",
        desc: "免於飢餓但仍被迫滯留街頭，持續暴露於路殺、傳染病、惡劣氣候中，並非真正的動物福利終點。"
      }
    ]
  }
};