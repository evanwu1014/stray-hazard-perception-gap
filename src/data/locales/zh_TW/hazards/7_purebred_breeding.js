export const hazardData = {
    id: 7,
    name: "養殖純種貓狗販售",
    desc: "將基因缺陷與母體生育耗損「批發化」。雖然不會刻意施虐，但量產數以百計帶有遺傳病風險的生命，同時對流浪動物收容系統帶來結構性的排擠壓力。",
    tooltipTitle: "母體損耗與代際折磨的工業化",
    tooltipContent: "商業繁殖場為追求利潤，母體常處於密閉籠具、反覆生育直至生理機能崩潰，其痛苦在規模與時間上被工業化放大。",
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
      fullDesc: "商業繁殖場（俗稱「繁殖工廠」或「寵物工廠」）的核心問題在於規模化的母體剝削——種母犬貓在密閉籠具中連續發情繁殖，直至生育能力耗盡，才可能被棄置或安樂死。這是系統性的、無視動物感知的生產過程。",
      causeAnalysis: "此行為的道德譴責分極低（3 分），原因在於「繁殖業者」在法律框架下屬合法商業活動，且消費者不直接目睹母體的生活條件。供應鏈的不透明性，是此行為維持社會低譴責的結構性因素。",
      policyImplication: "強制推行「繁殖業者公開登記」制度，要求每隻出售動物均可追溯至合法登記的繁殖場，是目前最具可行性的管理手段。同時限制每隻種母的年度生育次數（如最多 2 胎），可直接降低母體的生育耗損。"
    },
    scenarios: [
      {
        name: "地下繁殖場",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即通報",
        desc: "未登記的地下繁殖場在農村或工業區租用場地，以惡劣條件大規模生產純種幼犬貓，幼體健康不佳、基因品質不穩定，卻透過網路以「自家繁殖」包裝銷售。",
        actions: [
          { role: "知情民眾", action: "向動保機關舉報可疑的大規模繁殖場所，提供地址與照片等具體資訊" },
          { role: "動保機關", action: "執行定期突擊查緝，並對未登記繁殖業者處以高額罰款" },
          { role: "農業部", action: "建立寵物繁殖場全面登記制度，設定最低飼養空間與健康標準" }
        ]
      },
      {
        name: "合法但過度繁殖的業者",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "持有合法執照的繁殖業者在法律邊緣操作——符合最低標準但仍在過度繁殖，母體在惡劣但「合法」的條件下被反覆生育。",
        actions: [
          { role: "消費者", action: "主動要求參觀繁殖場，評估母體生活環境是否符合動物基本福利" },
          { role: "立法機關", action: "提高合法繁殖場的最低標準，縮小法律允許範圍與動物福利要求之間的落差" },
          { role: "獸醫師", action: "拒絕為具明顯過度繁殖跡象的種母提供繁殖合格證明" }
        ]
      },
      {
        name: "收容系統的結構排擠",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "繁殖業者持續供給市場的同時，收容所中的混種犬貓因市場需求低落而面臨更高的安樂死壓力，形成「繁殖業繁榮、收容動物死亡」的反比關係。",
        actions: [
          { role: "潛在飼主", action: "優先考慮領養收容所動物，其個性通常比幼年純種動物更穩定可預期" },
          { role: "地方政府", action: "設計繁殖業者「回購義務」制度，要求業者對其繁殖個體的棄養負有部分責任" },
          { role: "動保NGO", action: "強化收容所動物的媒合行銷，縮小與純種動物在「需求能見度」上的差距" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "商業繁殖場經營者",
        note: "受利潤驅動的規模化量產業者，在法律框架下屬合法商業活動"
      },
      {
        role: "地下繁殖場經營者",
        note: "未登記、在農村或工業區以惡劣條件大規模生產，透過網路以「自家繁殖」包裝銷售"
      }
    ],
    transmission: "市場需求持續 → 繁殖場規模化量產 → 母體在密閉籠具中連續發情至生育能力耗盡 → 數以百計帶遺傳病風險的生命被批發製造 → 供應鏈不透明使社會低譴責 → 收容系統遭結構性排擠",
    victims: [
      {
        icon: "🤰",
        category: "種母犬貓",
        entities: "繁殖場中的母體",
        desc: "在密閉籠具中反覆生育直至生理機能崩潰，終其一生未離開過繁殖籠，其痛苦在規模與時間上被工業化放大。退役繁殖犬存在嚴重的心理創傷與行為異常。"
      },
      {
        icon: "🧬",
        category: "帶遺傳病風險之子代",
        entities: "數以百計的純種幼犬貓",
        desc: "因追求利潤而缺乏基因篩檢，遺傳性疾病風險被批發化複製至每一隻子代。"
      },
      {
        icon: "🏠",
        category: "收容系統",
        entities: "收容所中的混種犬貓",
        desc: "繁殖業持續供給市場，形成「繁殖業繁榮、收容動物死亡」的反比關係，混種犬貓因市場需求低落而面臨更高的安樂死壓力。"
      }
    ]
  }
};