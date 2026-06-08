export const hazardData = {
    id: 7,
    name: "养殖纯种猫狗贩卖",
    desc: "将基因缺陷与母体生育耗损「批发化」。虽然不会刻意施虐，但量产数以百计带有遗传病风险的生命，同时对流浪动物收容系统带来结构性的排挤压力。",
    tooltipTitle: "母体损耗与代际折磨的工业化",
    tooltipContent: "商业繁殖场为追求利润，母体常处于密闭笼具、反复生育直至生理机能崩溃，其痛苦在规模与时间上被工业化放大。",
    citation: "HSUS Puppy Mills Investigative Report / Applied Animal Behaviour Science (2011) / HSVMA Veterinary Report / ASPCA",
    references: [
          {
                title: "Humane Society of the United States (HSUS). (n.d.). Puppy mills: Research and investigative reports. HSUS.",
                url: "https://www.humanesociety.org/puppy-mills"
          },
          {
                title: "Applied Animal Behaviour Science (2011) - Mental health of dogs formerly used as breeding stock",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0168159111003005"
          },
          {
                title: "HSVMA - Veterinary Report on Puppy Mills",
                url: "https://www.humanevma.org/assets/pdfs/hsvma_veterinary_report_puppy_mills.pdf"
          },
          {
                title: "ASPCA - Report on Puppy Mill Cruelty reveals USDA failure",
                url: "https://www.aspca.org/about-us/press-releases/aspca-report-puppy-mill-cruelty-reveals-usdas-continued-failure-protect"
          }
    ],
    detailContent: {
      fullDesc: "商业繁殖场（俗称「繁殖工厂」或「宠物工厂」）的核心问题在于规模化的母体剥削——种母犬猫在密闭笼具中连续发情繁殖，直至生育能力耗尽才可能被弃置或安乐死。这是系统性的、无视动物感知的生产过程。",
      causeAnalysis: "此行为的道德谴责分极低（3 分），原因在于「繁殖业者」在法律框架下属合法商业活动，且消费者不直接目睹母体的生活条件。供应链的不透明性，是此行为维持社会低谴责的结构性因素。",
      policyImplication: "强制推行「繁殖业者公开登记」制度，要求每只出售动物均可追溯至合法登记的繁殖场，是目前最具可行性的管理手段。同时限制每只种母的年度生育次数（如最多 2 胎），可直接降低母体的生育耗损。"
    },
    scenarios: [
      {
        name: "地下繁殖场",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即通报",
        desc: "未登记的地下繁殖场在农村或工业区租用场地，以恶劣条件大规模生产纯种幼犬猫，幼体健康不佳、基因品质不稳定，却透过网络以「自家繁殖」包装销售。",
        actions: [
          { role: "知情民众", action: "向动保机关举报可疑的大规模繁殖场所，提供地址与照片等具体信息" },
          { role: "动保机关", action: "执行定期突击查缉，并对未登记繁殖业者处以高额罚款" },
          { role: "农业农村部", action: "建立宠物繁殖场全面登记制度，设定最低饲养空间与健康标准" }
        ]
      },
      {
        name: "合法但过度繁殖的业者",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "持有合法执照的繁殖业者在法律边缘操作——符合最低标准但仍在过度繁殖，母体在恶劣但「合法」的条件下被反复生育。",
        actions: [
          { role: "消费者", action: "主动要求参观繁殖场，评估母体生活环境是否符合动物基本福利" },
          { role: "立法机关", action: "提高合法繁殖场的最低标准，缩小法律允许范围与动物福利要求之间的落差" },
          { role: "兽医师", action: "拒绝为具明显过度繁殖迹象的种母提供繁殖合格证明" }
        ]
      },
      {
        name: "收容系统的结构排挤",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "繁殖业者持续供给市场的同时，收容所中的混种犬猫因市场需求低落而面临更高的安乐死压力，形成「繁殖业繁荣、收容动物死亡」的反比关系。",
        actions: [
          { role: "潜在饲主", action: "优先考虑领养收容所动物，其个性通常比幼年纯种动物更稳定可预期" },
          { role: "地方政府", action: "设计繁殖业者「回购义务」制度，要求业者对其繁殖个体的弃养负有部分责任" },
          { role: "动保NGO", action: "强化收容所动物的媒合营销，缩小与纯种动物在「需求能见度」上的差距" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "商业繁殖场经营者",
        note: "受利润驱动的规模化量产业主，在法律框架下属合法商业活动"
      },
      {
        role: "地下繁殖场经营者",
        note: "未登记、在农村或工业区以恶劣条件大规模生产，通过网络以“自家繁殖”包装销售"
      }
    ],
    transmission: "市场需求持续 → 繁殖场规模化量产 → 母体在密闭笼具中连续发情至生育能力耗尽 → 数以百计带遗传病风险的生命被批发制造 → 供应链不透明使社会低谴责 → 收容系统遭结构性排挤",
    victims: [
      {
        icon: "🤰",
        category: "种母犬猫",
        entities: "繁殖场中的母体",
        desc: "在密闭笼具中反复生育直至生理机能崩溃，终其一生未离开过繁殖笼，其痛苦在规模与时间上被工业化放大。退役繁殖犬存在严重的心理创伤与行为异常。"
      },
      {
        icon: "🧬",
        category: "带遗传病风险之子代",
        entities: "数以百计的纯种幼犬猫",
        desc: "因追求利润按缺乏基因筛查，遗传性疾病风险被批发化复制至每一只子代。"
      },
      {
        icon: "🏠",
        category: "收容系统",
        entities: "收容所中的混种犬猫",
        desc: "繁殖业持续供给市场，形成“繁殖业繁荣、收容动物死亡”的反比关系，混种犬猫因市场需求低落而面临更高的安乐死压力。"
      }
    ]
  }
};