export const hazardData = {
    id: 9,
    name: "大量滥喂（含放置喂食）",
    desc: "终极的生态与卫生灾难。造成流浪犬猫异常聚集繁殖与高夭折率暗数，传染病与路杀横行；同时对原生野生动物造成巨大生存威胁（如豹猫/穿山甲遭犬只咬伤致死、原生鸟类与爬行动物遭猫只掠食）。",
    tooltipTitle: "繁殖创伤与传染病爆发",
    tooltipContent: "长期喂食促使流浪犬猫高密度群聚与繁殖。尤其是流浪猫具备刺激性排卵与倒刺交配的生理创伤，且发情频率极高，无节制喂食等同于资助这部「痛苦生育机器」几何级膨胀。高密度繁殖进而引发猫瘟、犬细小病毒爆发，导致无数幼体在恶劣环境中失明、病死或遭路杀。",
    citation: "Loss et al. (2013) Nature Comm. / 中华人民共和国国家林业和草原局相关生态数据 / The Wildlife Society (2025) / USDA APHIS / 中华民国苗栗县政府石虎报告 / ScienceDirect (2025)",
    references: [
          {
                title: "Loss, S. R., Will, T., & Marra, P. P. (2013). The impact of free-ranging domestic cats on wildlife of the United States. Nature Communications, 4, Article 1396.",
                url: "https://doi.org/10.1038/ncomms2380"
          },
          {
                title: "中华人民共和国国家林业和草原局 - 野生动物管理相关数据",
                url: "http://www.forestry.gov.cn/"
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
                title: "中华人民共和国台湾地区苗栗县政府 - 豹猫保育与管理工作报告",
                url: "https://www.miaoli.gov.tw/eng/News_Content.aspx?n=434&s=271995"
          },
          {
                title: "ScienceDirect (2025) - Incidence and prevalence of rabies virus infections in Asia",
                url: "https://www.sciencedirect.com/science/article/pii/S2352771425001387"
          }
    ],
    detailContent: {
      fullDesc: "大量滥喂在本指数中获得最高客观危害分数（27 分），但社会道德谴责极低（2 分），呈现最大的认知偏差。其危害机制是系统性的：喂食→种群增长→密度上升→繁殖创伤扩大→传染病爆发→幼体高夭折→原生生态崩坏。每一环节都制造大量动物痛苦，但行为者通常以「爱心」自我定义，完全不自知。",
      causeAnalysis: "大量滥喂者往往具备真实的同理心，但欠缺生态系统的整体思维。其行为的危害完全透过间接机制产生，使行为者难以感知因果连结。「看到动物吃到饱的满足感」遮蔽了对隐性夭折与生态破坏的认知。",
      policyImplication: "针对滥喂行为的法规化介入，需要在「爱护动物的情感诉求」与「公共卫生与生态保护的科学依据」之间建立有效沟通。单纯禁止无法建立共识，需要配套的替代行为引导（如指定收容喂食点）与透明的生态监测数据公开。"
    },
    scenarios: [
      {
        name: "自然保育区与栖地边缘",
        icon: "",
        riskLevel: "critical",
        riskLabel: "极端威胁",
        desc: "滥喂点吸引高密度流浪猫犬聚集于保育区边缘，豹猫、穿山甲、原生鸟类与爬行类遭受系统性猎杀压力。每一只在此存活的流浪猫，平均每年猎杀数十至百只原生野生动物。",
        actions: [
          { role: "民众", action: "严格遵守保育区喂食禁令，举报违规行为，理解「让动物饿着」有时是保护更多动物的正确选择" },
          { role: "林业主管机关", action: "设置智慧监测系统追踪滥喂热点，并在现场配置充足的执法人员" },
          { role: "地方政府", action: "在保育区周边社区发展替代方案：建立合法的社区猫管理计划，将猫从保育区边缘迁移" }
        ]
      },
      {
        name: "城市社区大规模喂食点",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "固定的大规模喂食点造成犬猫高密度群聚，形成传染病爆发的温床（猫瘟、犬细小、狂犬病威胁），并因路杀、追咬事件引发公共安全问题。",
        actions: [
          { role: "喂食者", action: "若欲协助街头动物，请在动保机关指导下建立「定点、定量、定时」的规范化管理模式" },
          { role: "社区居民", action: "向居委会反映，要求地方政府提供动保机关介入协调，建立社区动物管理机制" },
          { role: "动保机关", action: "提供「负责任喂食」的教育资源，并积极媒合收养，降低街头种群基数" }
        ]
      },
      {
        name: "校园与机构内的长期喂食",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "大学校园、工厂、医院等封闭或半封闭机构内，长年累积的「校猫种群」往往超过机构的管理能力，形成疾病传播风险与设施卫生问题。",
        actions: [
          { role: "机构管理者", action: "建立校园/机构动物管理委员会，制定种群控制计划，禁止未授权的个人喂食行为" },
          { role: "个别喂食者", action: "配合机构管理计划，停止私下设置喂食点，将资源集中投入绝育与送养" },
          { role: "动保机关", action: "提供机构动物管理辅导服务，协助建立合规的动物管理 SOP" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "大量滥喂者",
        note: "往往具备真实的同理心，但欠缺生态系统的整体思维。“看到动物吃到饱的满足感”遮蔽了对隐性夭折与生态破坏的认知"
      },
      {
        role: "放置式喂食者",
        note: "不定点倾倒大量厨余或饲料后离开，完全不参与后续管理"
      }
    ],
    transmission: "大量喂食 → 游荡犬猫异常群聚繁衍 → 高密度引爆传染病（猫瘟、犬细小） → 无数幼体在恶劣环境中失明、病死 → 母猫刺激性排卵与倒刺交配造成繁殖创伤 → 存活个体持续对原生野生动物进行系统性猎杀 → 石虎/穿山甲/原生鸟类族群崩溃 → 公共环境恶化",
    victims: [
      {
        icon: "🦁",
        category: "原生野生动物",
        entities: "石虎、穿山甲、原生鸟类与爬虫类",
        desc: "遭受系统性猎杀压力。食物供给使掠食者数量远超环境承载力，对原生生态形成压倒性的捕食网。"
      },
      {
        icon: "🐾",
        category: "游荡犬猫群体本身",
        entities: "繁殖暴增后的幼体与母体",
        desc: "高密度群聚引爆猫瘟、犬细小病毒爆发，无数游退在恶劣环境中失明、病死或遭路杀。母猫承受刺激性排卵与倒刺交配的繁殖创伤。"
      },
      {
        icon: "🌍",
        category: "公共环境与社区卫生",
        entities: "周边居民、公共空间使用者",
        desc: "厨余残渣与排泄物堆积引发老鼠、苍蝇孳生；狂犬病与寄生虫传播风险上升；路杀、追咬事件引发公共安全问题。"
      }
    ],
    beneficiaries: [
      {
        icon: "🐾",
        category: "部分被喂食的游荡犬猫个体",
        entities: "能直接取得食物的强势个体",
        desc: "部分个体的即时饥饿获得短期缓解。",
        caveat: "此收益极度不均——强势个体垄断食物来源，弱势个体反而被排挤。且喂食引爆的群聚繁殖效应使无数幼体在传染病与恶劣环境中夭折，群体层面的净痛苦总量远超个体层面的饥饿缓解。这正是认知偏差达 -7.0 分的核心机制。"
      }
    ]
  }
};