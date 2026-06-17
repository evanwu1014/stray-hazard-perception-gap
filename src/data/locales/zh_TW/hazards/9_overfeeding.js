export const hazardData = {
    id: 9,
    name: "大量濫餵（含放置餵食）",
    desc: "終極的生態與衛生災難。造成流浪犬貓異常聚集繁衍與高夭折率暗數，傳染病與路殺橫行；同時對原生野生動物造成巨大生存威脅（如石虎/穿山甲遭犬隻咬傷致死、原生鳥類與爬蟲類遭貓隻掠食）。",
    tooltipTitle: "繁殖創傷與傳染病爆發",
    tooltipContent: "長期餵食促使流浪犬貓高密度群聚與繁衍。尤其是流浪貓具備刺激性排卵與倒刺交配的生理創傷，且發情頻率極高，無節制餵食等同於資助這部「痛苦生育機器」幾何級膨脹。高密度繁衍進而引發貓瘟、犬細小病毒爆發，導致無數幼體在惡劣環境中失明、病死或遭路殺。",
    citation: "Loss et al. (2013) Nature Comm. / 中華民國農業部林業及自然保育署野生動物犬咬與路殺數據 / The Wildlife Society (2025) / USDA APHIS / 中華民國苗栗縣政府石虎報告 / ScienceDirect (2025)",
    references: [
          {
                title: "Loss, S. R., Will, T., & Marra, P. P. (2013). The impact of free-ranging domestic cats on wildlife of the United States. Nature Communications, 4, Article 1396.",
                url: "https://doi.org/10.1038/ncomms2380"
          },
          {
                title: "農業部林業及自然保育署（無日期）。《野生動物遭犬貓攻擊與路殺監測報告》。中華民國農業部。",
                url: "https://www.forest.gov.tw/"
          },
          {
                title: "The Wildlife Society (2025) - Feral and Free-Ranging Domestic Cats Issue Statement",
                url: "https://wildlife.org/tws-issue-statement-feral-and-free-ranging-domestic-cats/"
          },
          {
                title: "USDA APHIS - Free-ranging and Feral Cats (PDF)",
                url: "https://www.aphis.usda.gov/sites/default/files/free-ranging-and-feral-cats.pdf"
          },
          {
                title: "中華民國苗栗縣政府 - 石虎與保育工作報告",
                url: "https://www.miaoli.gov.tw/eng/News_Content.aspx?n=434&s=271995"
          },
          {
                title: "ScienceDirect (2025) - Incidence and prevalence of rabies virus infections in Asia",
                url: "https://www.sciencedirect.com/science/article/pii/S2352771425001387"
          }
    ],
    detailContent: {
      fullDesc: "大量濫餵在本指數中獲得最高客觀危害分數（27 分），但社會道德譴責極低（2 分），呈現最大的認知偏差。其危害機制是系統性的：餵食→族群增長→密度上升→繁殖創傷擴大→傳染病爆發→幼體高夭折→原生生態崩壞。每一環節都製造大量動物痛苦，但行為者通常以「愛心」自我定義，完全不自知。",
      causeAnalysis: "大量濫餵者往往具備真實的同理心，但欠缺生態系統的整體思維。其行為的危害完全透過間接機制產生，使行為者難以感知因果連結。「看到動物吃到飽的滿足感」遮蔽了對隱性夭折與生態破壞的認知。",
      policyImplication: "針對濫餵行為的法規化介入，需要在「愛護動物的情感訴求」與「公共衛生與生態保護的科學依據」之間建立有效溝通。單純禁止無法建立共識，需要配套的替代行為引導（如指定收容餵食點）與透明的生態監測數據公開。"
    },
    scenarios: [
      {
        name: "自然保育區與棲地邊緣",
        icon: "wildlife",
        riskLevel: "critical",
        riskLabel: "極端威脅",
        desc: "濫餵點吸引高密度流浪貓犬聚集於保育區邊緣，石虎、穿山甲、原生鳥類與爬蟲類遭受系統性獵殺壓力。每一隻在此存活的流浪貓，平均每年獵殺數十至百隻原生野生動物。",
        actions: [
          { role: "民眾", action: "嚴格遵守保育區餵食禁令，舉報違規行為，理解「讓動物餓著」有時是保護更多動物的正確選擇" },
          { role: "林業保育署", action: "設置智慧監測系統追蹤濫餵熱點，並在現場配置充足的執法人員" },
          { role: "地方政府", action: "在保育區周邊社區發展替代方案：建立合法的社區貓管理計畫，將貓從保育區邊緣遷移" }
        ]
      },
      {
        name: "都市社區大規模餵食點",
        icon: "neighborhood",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "固定的大規模餵食點造成犬貓高密度群聚，形成傳染病爆發的溫床（貓瘟、犬細小、狂犬病威脅），並因路殺、追咬事件引發公共安全問題。",
        actions: [
          { role: "餵食者", action: "若欲協助街頭動物，請在動保機關指導下建立「定點、定量、定時」的規範化管理模式" },
          { role: "社區居民", action: "向里辦公處反映，要求地方政府提供動保機關介入協調，建立社區動物管理機制" },
          { role: "動保機關", action: "提供「負責任餵食」的教育資源，並積極媒合收養，降低街頭族群基數" }
        ]
      },
      {
        name: "校園與機構內的長期餵食",
        icon: "community",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "大學校園、工廠、醫院等封閉或半封閉機構內，長年累積的「校貓族群」往往超過機構的管理能力，形成疾病傳播風險與設施衛生問題。",
        actions: [
          { role: "機構管理者", action: "建立校園/機構動物管理委員會，制定族群控制計畫，禁止未授權的個人餵食行為" },
          { role: "個別餵食者", action: "配合機構管理計畫，停止私下設置餵食點，將資源集中投入絕育與送養" },
          { role: "動保機關", action: "提供機構動物管理輔導服務，協助建立合規的動物管理 SOP" }
        ]
      }
    ]
,
  relationship: {
    agents: [
      {
        role: "大量濫餵者",
        note: "往往具備真實的同理心，但欠缺生態系統的整體思維。「看到動物吃到飽的滿足感」遮蔽了對隱性夭折與生態破壞的認知"
      },
      {
        role: "放置式餵食者",
        note: "不定點傾倒大量廚餘或飼料後離開，完全不參與後續管理"
      }
    ],
    transmission: "大量餵食 → 遊蕩犬貓異常群聚繁衍 → 高密度引爆傳染病（貓瘟、犬細小）→ 無數幼體在惡劣環境中失明、病死 → 母貓刺激性排卵與倒刺交配造成繁殖創傷 → 存活個體持續對原生野生動物進行系統性獵殺 → 石虎/穿山甲/原生鳥類族群崩壞 → 公共環境惡化",
    victims: [
      {
        icon: "wildlife",
        category: "原生野生動物",
        entities: "石虎、穿山甲、原生鳥類與爬蟲類",
        desc: "遭受系統性獵殺壓力。食物供給使掠食者數量遠超環境承載力，對原生生態形成壓倒性的捕食網。"
      },
      {
        icon: "paw",
        category: "遊蕩犬貓群體本身",
        entities: "繁殖暴增後的幼體與母體",
        desc: "高密度群聚引爆貓瘟、犬細小病毒爆發，無數幼體在惡劣環境中失明、病死或遭路殺。母貓承受刺激性排卵與倒刺交配的繁殖創傷。"
      },
      {
        icon: "earth",
        category: "公共環境與社區衛生",
        entities: "周邊居民、公共空間使用者",
        desc: "廚餘殘渣與排泄物堆積引發老鼠、蒼蠅孳生；狂犬病與寄生蟲傳播風險上升；路殺、追咬事件引發公共安全問題。"
      }
    ],
    beneficiaries: [
      {
        icon: "paw",
        category: "部分被餵食的遊蕩犬貓個體",
        entities: "能直接取得食物的強勢個體",
        desc: "部分個體的即時飢餓獲得短期緩解。",
        caveat: "此收益極度不均勻——強勢個體壟斷食物來源，弱勢個體反而被排擠。且餵食引爆的群聚繁殖效應使無數幼體在傳染病與惡劣環境中夭折，群體層面的淨痛苦總量遠超個體層面的飢餓緩解。這正是認知偏移達 -7.0 分的核心機制。"
      }
    ]
  }
};