export const hazardData = {
    id: 10,
    name: "网络组织型商业虐待",
    desc: "通过加密群组进行虐杀视频贩售与「定制付费订单」。金钱诱因驱动大量捕捉街头动物（尤其是 TNR 亲人个体）制造内容；同时对举报者施以开盒（Doxing）与跨国网络恐吓，社会威胁严重外溢至人身安全。",
    tooltipTitle: "暴力的数字化资本化（类型 C）",
    tooltipContent: "加密群组内部发展出「付费定制订单」商业模式——买家指定物种与施虐方式，施虐者以虚拟货币结算视频。此犯罪创造了「同温层认同」的群体极化机制。当民众举报时，组织会动用恶意开盒与跨国网络恐吓。其危害已正式超越动物福利，升级为威胁人类社会与信息安全的网络组织犯罪。",
    citation: "BBC World Service「Monkey Haters」调查报告, 2023 / SMACC 年度报告, 2024 / 中国 Telegram 网络组织虐杀宠物「杰克辣条」事件, 2023",
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
                title: "中国 Telegram 网络组织虐杀宠物「杰克辣条」事件调查 (2023)",
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
                title: "中华民国农业部动物保护资讯网及警政署刑事警察局侦查案件记录",
                url: "https://animal.moa.gov.tw/"
          }
    ],
    detailContent: {
      fullDesc: "网络组织型商业虐待是本指数中唯一达到「跨国组织犯罪」等级的行为类型。其威胁已不限于动物福利：对举报者的开盒恐吓、跨国追踪骚扰，使其成为威胁人身安全的网络暴力犯罪，并涉及洗钱（加密货币结算）与跨国司法管辖等复杂议题。",
      causeAnalysis: "此犯罪的驱动力是「需求端的群体认同」——内容消费者在加密社群中建立共同的扭曲世界观，彼此强化。供应端（施虐者）受金钱诱因驱动，捕捉最易接近的 TNR 亲人猫作为目标。两端的匿名性使传统执法极为困难。",
      policyImplication: "应建立跨国执法合作机制，将此类犯罪纳入国际刑警组织的协查范畴。在国内，需修订法规使对举报者的开盒恐吓成为独立刑事罪名，以保护倡议者的人身安全。"
    },
    scenarios: [
      {
        name: "加密通讯平台（Telegram 等）",
        icon: "",
        riskLevel: "critical",
        riskLabel: "跨国犯罪",
        desc: "犯罪组织在加密群组中建立商业运作体系——付费订阅、定制订单、虚拟货币结算。群组成员相互强化扭曲认知，形成自我封闭的极化生态圈。",
        actions: [
          { role: "民众", action: "若无意间进入此类群组，立即截图保存并向 SMACC 或 IFAW 等国际组织举报，切勿自行散布" },
          { role: "平台业者", action: "建立 AI 侦测机制识别动物虐待关键词组合，配合各国执法机关提供账号信息" },
          { role: "NBI/调查局", action: "专责单位追踪加密货币金流，与 Interpol 协作锁定组织核心成员" }
        ]
      },
      {
        name: "社交媒体的公开传播",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "虐待影像在主流社交平台的短暂流传，既是招募新成员的渠道，也是组织展示「实力」的宣传手段。平台的快速下架机制至关重要但往往滞后。",
        actions: [
          { role: "目击网民", action: "使用平台举报功能回报，同时向动保机关提供平台链接与账号信息" },
          { role: "主流平台", action: "强化动物虐待影像的自动侦测，并建立跨平台的账号黑名单共享机制" },
          { role: "动保倡议组织", action: "与平台建立直接联络渠道，加速高危害内容的下架处理" }
        ]
      },
      {
        name: "举报者的人身安全",
        icon: "",
        riskLevel: "critical",
        riskLabel: "人身安全威胁",
        desc: "举报此类犯罪的个人面临严重的人身安全威胁：开盒（公开个人信息）、跨国追踪、工作骚扰，以及对家人的威胁。此威胁严重抑制公民举报意愿。",
        actions: [
          { role: "举报者", action: "优先使用匿名渠道（如 SMACC 的匿名提交表单），不要以个人账号直接接触组织成员" },
          { role: "政府/警方", action: "提供动物犯罪举报者的人身保护机制，并将开盒恐吓纳入刑事追诉" },
          { role: "媒体", action: "报道此议题时注意保护消息来源，避免不经意揭露举报者身份" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "黑产施虐者（供给端）",
        note: "受虚拟货币暴利驱动，主动捕捉街头动物（尤其是 TNR 亲人个体）制造内容"
      },
      {
        role: "付费观看/订购者（需求端）",
        note: "在加密社群中建立共同的扭曲世界观，彼此强化群体极化认同"
      },
      {
        role: "社群平台算法（助长端）",
        note: "短暂流传的虐待影像成为招募新成员的渠道与组织“实力”展示"
      }
    ],
    transmission: "加密群组建立商业体系 → 付费订阅与定制化虐杀订单 → 施虐者捕捉 TNR 亲人猫作为“原料” → 极端虐杀并录像 → 影像外流造成大规模次级心理创傷 → 对举报者开盒恐吓 → 危害外溢至人类人身安全与信息安全",
    victims: [
      {
        icon: "💀",
        category: "被捕获之动物个体",
        entities: "街头犬猫（尤其是 TNR 亲人个体被优先锁定）",
        desc: "被商业利益驱使的施虐者主动搜捕，进行定制化、极端残忍的虐杀与录像，痛苦深度与生命剥夺极其惨烈。"
      },
      {
        icon: "🧠",
        category: "大众心理与未成年人",
        entities: "影像观看者、儿少群体",
        desc: "暴力影音外溢造成创伤后压力症（PTSD），扭曲未成年人的共情能力与生命价值观，亦成为模仿动机的催化剂。"
      },
      {
        icon: "🔐",
        category: "举报者与公民安全",
        entities: "动保倡议者、检举人及其家人",
        desc: "犯罪组织对举报者进行恶意开盒、跨国追踪骚扰、虚假报警，严重威胁人身安全，抑制公民举报意愿。"
      },
      {
        icon: "🌐",
        category: "网络与社会安全基础设施",
        entities: "跨国司法合作、金融监管体系",
        desc: "涉及加密货币洗钱、跨国司法管辖，已升级为威胁人类社会安全的网络组织犯罪。"
      }
    ],
    beneficiaries: [
      {
        icon: "🔐",
        category: "犯罪链条的「暗获益」结构（揭示性呈现）",
        entities: "加密群组施虐者（虚拟货币暴利）、需求端消费者（扭曲群体认同）",
        desc: "在纯商业结果论计量下，施虐端获得了虚拟货币形式的高额金融回报；需求端在加密社群的回声室中获得了扭曲的群体认同感与心理刺激。这是使此类犯罪能够持续扩张的两端商业驱动力。",
        caveat: "此处明确列出「暗获益者」并非为其正当化，而是揭示此犯罪之所以难以根除的结构性根源——商业供需两端的强烈诱因。政策意涵指向：必须同时切断金融（追查加密货币）与认同满足（打破回声室）两条驱动链，而非仅处罚施虐行为的末端执行者。"
      }
    ]
  }
};