export const hazardData = {
    id: 1,
    name: "當面餵食 TNR 遊蕩犬貓",
    desc: "犬貓個體免於飢餓且無繁衍能力。但維持其街頭生命仍會產生排泄物，並讓其持續基於本能掠食原生野生動物或追咬路人。",
    tooltipTitle: "開放空間 TNR/TNA 的限制",
    tooltipContent: "研究與數學模型顯示，流浪犬貓的年移除率必須持續達到 75% 至 85% 以上，族群總量才會開始下降，且絕育個體仍會持續獵殺野生動物或造成人車追咬衝突。",
    citation: "Longcore et al. (2009) / Barrows (2004) / PMC/NIH (2022) / IFAS (2020) / Wellbeing Intl. / 台灣石虎保育協會 / 農業部(2024) / WHO / 交通部公路局(2023) / 警政署",
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
          },
          {
                title: "交通部數據/野保團體精算 - 台灣每年遊蕩犬社會成本高達 36.4億元",
                url: "https://www.cna.com.tw/news/ahel/202604290135.aspx"
          },
          {
                title: "台中市警局 - 近2年流浪狗車禍死傷破700人",
                url: "https://udn.com/news/story/7321/8914334"
          },
          {
                title: "交通部公路局 - 撞擊動物A1/A2交通事故從2019年2204件升至2023年2634件",
                url: "https://ubrand.udn.com/ubrand/story/123659/8146183"
          },
          {
                title: "內政部警政署 - 閃避動物自摔事故研議增設統計欄位",
                url: "https://www.hpb.npa.gov.tw/ch/app/data/doc?module=govinfo&detailNo=798101581361868800&type=s"
          },
          {
                title: "WHO 世界衛生組織 - 99%人類狂犬病致死源自犬隻",
                url: "https://www.who.int/zh/news-room/fact-sheets/detail/rabies"
          },
          {
                title: "農業部 - 2024年全台遊蕩犬約14萬隻",
                url: "https://news.pts.org.tw/article/785686"
          },
          {
                title: "報導者/公視 - 遊蕩犬攻擊穿山甲、石虎、山羌等野生動物案例頻發",
                url: "https://www.twreporter.org/a/6-years-after-no-kill-policy-adopted-conflict-with-wildlife"
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
        icon: "wildlife",
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
        name: "都市社區/重劃區邊緣",
        icon: "neighborhood",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "固定餵食點造成犬貓群聚。具領域性的成群浪犬會造成居民長期的「環境精神壓力」與交通安全威脅；兒童沙坑與公園則面臨排泄物帶來的公衛風險（如弓蟲病、跳蚤）。",
        actions: [
          { role: "用路人", action: "行經餵食熱區需提高警覺，防範突發性動物衝出導致閃避自摔" },
          { role: "里辦公處", action: "建立回報機制，協調環保局與動保機關定期清查餵食點與環境清理" },
          { role: "動保機關", action: "優先移除具攻擊性或高密度聚集的遊蕩貓狗，落實社區安全防護" }
        ]
      },
      {
        name: "校園周邊",
        icon: "community",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "校犬貓族群若未有效控管，會增加學童接觸人畜共通傳染病（如狂犬病潛在威脅、寄生蟲）的風險，以及對小型野鳥的棲地壓縮效應。",
        actions: [
          { role: "學校行政", action: "制定校園動物管理辦法，明確禁止外帶食物餵食" },
          { role: "學生/家長", action: "主動反映校園遊蕩動物問題，透過正式管道尋求移送收容" },
          { role: "教育單位", action: "納入生態與公衛課程，說明流浪動物對生物多樣性與社區安全的影響" }
        ]
      }
    ],
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
        icon: "wildlife",
        category: "原生野生動物",
        entities: "穿山甲、石虎、山羌等野生動物",
        desc: "依據農業部 2024 年統計，全台遊蕩犬約 14 萬隻。龐大族群對底層生態造成極大壓力，攻擊原生動物案例頻發（如壽山山羌族群銳減 90%）。絕育不消除掠食本能，餵食延長壽命即延長獵殺時間。"
      },
      {
        icon: "community",
        category: "社區居民與用路人",
        entities: "機車騎士、一般行人、孩童、外送員",
        desc: "依據公路局統計，動物碰撞 A1/A2 交通事故逐年攀升（2023年達2,634件），單一縣市（如台中）近兩年流浪狗車禍死傷即破700人。警政署研究亦確認「閃避自摔」黑數存在，實際受害大於統計。民間團體精算連帶社會成本高達數十億元；且依據 WHO 資訊，高達 99% 的人類狂犬病致死病例源自犬隻，遊蕩族群是社區傳染病與鄰里衝突的隱患。"
      },
      {
        icon: "paw",
        category: "遊蕩犬貓個體本身",
        entities: "被餵食的 TNR 犬貓",
        desc: "免於飢餓但仍被迫滯留街頭，持續暴露於路殺、傳染病、惡劣氣候中，並非真正的動物福利終點。"
      }
    ],
    beneficiaries: [
      {
        icon: "paw",
        category: "被餵食的 TNR 犬貓個體",
        entities: "接受定期餵食的絕育犬貓",
        desc: "個體免於飢餓帶來的即時性生存痛苦，生活品質在個體層面獲得改善。",
        caveat: "此收益僅作用於「個體福利」維度。在「生態系統」與「族群動態」維度，餵食維持了掠食壓力並吸引未絕育個體聚集，淨效應在生態面為負。"
      }
    ]
  }
};