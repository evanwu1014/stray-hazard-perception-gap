export const hazardData = {
    id: 10,
    name: "網路組織型商業虐待",
    desc: "透過加密群組進行虐殺影片販售與「客製化付費訂單」。金錢誘因驅動大量捕捉街頭動物（尤其是 TNR 親人個體）製造內容；同時對舉報者施以開盒（Doxing）與跨國網路恐嚇，社會威脅嚴重外溢至人身安全。",
    tooltipTitle: "暴力的數位資本化（類型 C）",
    tooltipContent: "加密群組內部發展出「付費客製化訂單」商業模式——買家指定物種與施虐方式，施虐者以虛擬貨幣結算影片。此犯罪創造了「同溫層認同」的群體極化機制。當民眾舉報時，組織會動用惡意開盒與跨國網路恐嚇。其危害已正式超越動物福利，升級為威脅人類社會與資訊安全的網路組織犯罪。",
    citation: "BBC World Service「Monkey Haters」調查報告, 2023 / SMACC 年度報告, 2024 / 中國 Telegram 網路組織虐殺寵物「傑克辣條」事件, 2023",
    references: [
          {
                title: "BBC World Service. (2023). The monkey haters [Documentary]. BBC Eye Investigations.",
                url: "https://www.bbc.com/news/world-us-canada-65959139"
          },
          {
                title: "Social Media Animal Cruelty Coalition (SMACC). (2024). Teaming up against animal cruelty: SMACC annual report. Asia for Animals Coalition.",
                url: "https://www.socialmediaanimalcruelty.org/"
          },
          {
                title: "中國 Telegram 網路組織虐殺寵物「傑克辣條」事件調查 (2023)",
                url: "https://www.theguardian.com/media/2023/jun/20/inside-the-global-monkey-torture-network"
          },
          {
                title: "Bakar, F. (2023, June 20). Inside the global monkey torture network. The Guardian.",
                url: "https://www.theguardian.com/media/2023/jun/20/inside-the-global-monkey-torture-network"
          },
          {
                title: "Animal Legal Defense Fund (ALDF). (n.d.). Animal cruelty issues and legal advocacy. ALDF.",
                url: "https://aldf.org/"
          },
          {
                title: "Federal Bureau of Investigation (FBI). (2016). National Incident-Based Reporting System (NIBRS): Animal cruelty offenses. U.S. Department of Justice.",
                url: "https://ucr.fbi.gov/nibrs/2016"
          },
          {
                title: "中華民國農業部動物保護資訊網及警政署刑事警察局偵查案件記錄",
                url: "https://animal.moa.gov.tw/"
          }
    ],
    detailContent: {
      fullDesc: "網路組織型商業虐待是本指數中唯一達到「跨國組織犯罪」等級的行為類型。其威脅已不限於動物福利：對舉報者的開盒恐嚇、跨國追蹤騷擾，使其成為威脅人身安全的網路暴力犯罪，並涉及洗錢（加密貨幣結算）與跨國司法管轄等複雜議題。",
      causeAnalysis: "此犯罪的驅動力是「需求端的群體認同」——內容消費者在加密社群中建立共同的扭曲世界觀，彼此強化。供應端（施虐者）受金錢誘因驅動，捕捉最易接近的 TNR 親人貓作為目標。兩端的匿名性使傳統執法極為困難。",
      policyImplication: "應建立跨國執法合作機制，將此類犯罪納入國際刑警組織的協查範疇。在國內，需修訂法規使對舉報者的開盒恐嚇成為獨立刑事罪名，以保護倡議者的人身安全。"
    },
    scenarios: [
      {
        name: "加密通訊平台（Telegram 等）",
        icon: "",
        riskLevel: "critical",
        riskLabel: "跨國犯罪",
        desc: "犯罪組織在加密群組中建立商業運作體系——付費訂閱、客製化訂單、虛擬貨幣結算。群組成員相互強化扭曲認知，形成自我封閉的極化生態圈。",
        actions: [
          { role: "民眾", action: "若無意間進入此類群組，立即截圖保存並向 SMACC 或 IFAW 等國際組織舉報，切勿自行散布" },
          { role: "平台業者", action: "建立 AI 偵測機制識別動物虐待關鍵詞組合，配合各國執法機關提供帳號資訊" },
          { role: "NBI/調查局", action: "專責單位追蹤加密貨幣金流，與 Interpol 協作鎖定組織核心成員" }
        ]
      },
      {
        name: "社群媒體的公開傳播",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "虐待影像在主流社群平台的短暫流傳，既是招募新成員的管道，也是組織展示「實力」的宣傳手段。平台的快速下架機制至關重要但往往滯後。",
        actions: [
          { role: "目擊網民", action: "使用平台檢舉功能回報，同時向動保機關提供平台連結與帳號資訊" },
          { role: "主流平台", action: "強化動物虐待影像的自動偵測，並建立跨平台的帳號黑名單共享機制" },
          { role: "動保倡議組織", action: "與平台建立直接聯絡管道，加速高危害內容的下架處理" }
        ]
      },
      {
        name: "舉報者的人身安全",
        icon: "",
        riskLevel: "critical",
        riskLabel: "人身安全威脅",
        desc: "舉報此類犯罪的個人面臨嚴重的人身安全威脅：開盒（公開個人資訊）、跨國追蹤、工作騷擾，以及對家人的威脅。此威脅嚴重抑制公民舉報意願。",
        actions: [
          { role: "舉報者", action: "優先使用匿名管道（如 SMACC 的匿名提交表單），不要以個人帳號直接接觸組織成員" },
          { role: "政府/警方", action: "提供動物犯罪舉報者的人身保護機制，並將開盒恐嚇納入刑事追訴" },
          { role: "媒體", action: "報導此議題時注意保護消息來源，避免不經意揭露舉報者身份" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "黑產施虐者（供給端）",
        note: "受虛擬貨幣暴利驅動，主動捕捉街頭動物（尤其是 TNR 親人個體）製造內容"
      },
      {
        role: "付費觀看/訂購者（需求端）",
        note: "在加密社群中建立共同的扭曲世界觀，彼此強化群體極化認同"
      },
      {
        role: "社群平台演算法（助長端）",
        note: "短暫流傳的虐待影像成為招募新成員的管道與組織「實力」展示"
      }
    ],
    transmission: "加密群組建立商業體系 → 付費訂閱與客製化虐殺訂單 → 施虐者捕捉 TNR 親人貓作為「原料」→ 極端虐殺並錄影 → 影像外流造成大規模次級心理創傷 → 對舉報者開盒恐嚇 → 危害外溢至人類人身安全與資訊安全",
    victims: [
      {
        icon: "skull",
        category: "被捕獲之動物個體",
        entities: "街頭犬貓（尤其是 TNR 親人個體被優先鎖定）",
        desc: "被商業利益驅使的施虐者主動搜捕，進行客製化、極端殘忍的虐殺與錄影，痛苦深度與生命剝奪極其慘烈。"
      },
      {
        icon: "brain",
        category: "大眾心理與未成年人",
        entities: "影像觀看者、兒少群體",
        desc: "暴力影音外溢造成創傷後壓力症（PTSD），扭曲未成年人的共情能力與生命價值觀，亦成為模仿動機的催化劑。"
      },
      {
        icon: "lock",
        category: "舉報者與公民安全",
        entities: "動保倡議者、檢舉人及其家人",
        desc: "犯罪組織對舉報者進行惡意開盒、跨國追蹤騷擾、虛假報警，嚴重威脅人身安全，抑制公民舉報意願。"
      },
      {
        icon: "globe",
        category: "網路與社會安全基礎設施",
        entities: "跨國司法合作、金融監管體系",
        desc: "涉及加密貨幣洗錢、跨國司法管轄，已升級為威脅人類社會安全的網絡組織犯罪。"
      }
    ],
    beneficiaries: [
      {
        icon: "lock",
        category: "犯罪鏈條的「暗獲益」結構（揭示性呈現）",
        entities: "加密群組施虐者（虛擬貨幣暴利）、需求端消費者（扭曲群體認同）",
        desc: "在純商業結果論計量下，施虐端獲得了虛擬貨幣形式的高額金融回報；需求端在加密社群的回聲室中獲得了扭曲的群體認同感與心理刺激。這是使此類犯罪能夠持續擴張的兩端商業驅動力。",
        caveat: "此處明確列出「暗獲益者」並非為其正當化，而是揭示此犯罪之所以難以根除的結構性根源——商業供需兩端的強烈誘因。政策意涵指向：必須同時切斷金融（追查加密貨幣）與認同滿足（打破回聲室）兩條驅動鏈，而非僅處罰施虐行為的末端執行者。"
      }
    ]
  }
};