export const hazardData = {
    id: 5,
    name: "长期虐待（单／多只）",
    desc: "将极端折磨的时间线拉长至数月或数年。比直接虐杀制造了更多的痛苦总量，但同样属于封闭环境内的损害，无环境外部性。",
    tooltipTitle: "时间维度的痛苦累积",
    tooltipContent: "将个体痛苦时间拉长，其结果论累积痛苦高于瞬间虐杀。此类行为可粗分为两种样态：物理暴力型，以及常被「爱心拯救」外衣包装的「病态囤积（Animal Hoarding）」。后者社会谴责极低，却会导致数十至数百只动物长期处于极度拥挤、营养不良、疾病蔓延与粪尿窒息中，其制造的慢性痛苦深度与生命受害规模在结果论上远超单一物理暴力。（临床统计上两种样态的性别分布虽有差异，但性别并非成因，个体差异远大于群体倾向。）",
    citation: "APA (2023) Hoarding Disorder / EBSCO (2024) Animal Hoarding / 生物-心理-社会模型解构",
    references: [
          {
                title: "American Psychiatric Association (APA, 2023) - What is Hoarding Disorder?",
                url: "https://www.psychiatry.org/patients-families/hoarding-disorder/what-is-hoarding-disorder"
          },
          {
                title: "EBSCO Research Starters (2024) - Animal hoarding",
                url: "https://www.ebsco.com/research-starters/social-sciences-and-humanities/animal-hoarding"
          }
    ],
    detailContent: {
      fullDesc: "长期虐待因「痛苦持续时间」的乘数效应，在结果论累积痛苦上高于单次虐杀。此类行为最难被发现——施虐发生于私人空间，且「病态囤积」型的施虐者往往以动物救援者自居，社会辨识难度极高。",
      causeAnalysis: "施虐可分为两种样态：直接物理暴力；以及病态囤积——以「救援爱心」为动机，却制造了数十至数百只动物的系统性慢性痛苦，且主观否认自身的危害性。两种样态在临床与流行病学上的性别分布差异（如女性占囤积症患者 76%-83%），并非单一社会化所致，而是生物易感性（如催产素机制、大脑前扣带回神经认知损害）与社会角色期望共同作用的「生物-心理-社会」多重交织结果。",
      policyImplication: "应建立强制披露制度：当救援组织的照养数量超过特定门槛，需定期接受动保机关的实地访查，且不得以「保护隐私」拒绝。病态囤积案例应被纳入精神卫生强制评估范畴。"
    },
    scenarios: [
      {
        name: "私人住宅（物理虐待型）",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即介入",
        desc: "施虐者以锁闭、剥夺饮水、系统性殴打等手段，对圈养动物造成持续性折磨。行为高度隐蔽，且通常与家庭暴力、药物滥用等问题共存。",
        actions: [
          { role: "邻居", action: "若持续听见异常动物声响，应通报动保专线并描述具体情况" },
          { role: "社工/家防人员", action: "在家庭暴力案件中主动评估同户动物状况，作为家暴程度的辅助指标" },
          { role: "动保稽查员", action: "执行突击式访查，并在确认虐待后协调紧急救援安置" }
        ]
      },
      {
        name: "病态囤积现场",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即介入",
        desc: "施虐者以「爱心救援」为名收容数十至数百只动物，但实际上无力负担照顾。个体在恶劣环境中忍受长期饥饿、传染病蔓延与窒息性的粪尿环境。",
        actions: [
          { role: "民众", action: "若认识囤积型「爱心人士」，请主动向动保机关通报，不要因为其「动机良善」而回避举报" },
          { role: "动保机关", action: "建立囤积个案的定期追踪数据库，并设定照养数量上限与必要访查机制" },
          { role: "精神卫生机关", action: "将病态囤积（Hoarding Disorder）纳入社区心理卫生筛查指标" }
        ]
      },
      {
        name: "救援组织的灰色地带",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "部分以「NGO」或「个人救援」为名的组织，实际上处于囤积与合法救援之间的灰色地带，缺乏财务透明度与动物福利监察机制。",
        actions: [
          { role: "捐款人", action: "要求救援组织定期公开照养数量、动物健康状况与财务报告" },
          { role: "动保主管机关", action: "对照养数量超过门槛的非法人组织实施强制登记与定期稽查" },
          { role: "兽医师", action: "若发现客户长期带入大量健康状况恶劣的动物，可考虑通报动保机关启动调查" }
        ]
      }
    ],
  relationship: [
    {
      typeName: "样态 A：物理暴力型",
      agents: [
        {
          role: "拘禁/虐养者",
          note: "以锁闭、剥夺饮水、系统性殴打等手段进行持续折磨，通常与家庭暴力、药物滥用共存"
        }
      ],
      transmission: "封闭私人空间 → 对圈养动物施以系统性长期折磨 → 痛苦持续时间乘数效应 → 累积痛苦总量高于单次虐杀",
      victims: [
        {
          icon: "💀",
          category: "受拘禁之动物个体",
          entities: "被长期圈养虐待的犬猫（单或少数只）",
          desc: "在漫长的月至年的时间尺度内，承受饥饿、脱水、物理打击与精神折磨的累积性痛苦。"
        }
      ]
    },
    {
      typeName: "样态 B：病态囤积型（Animal Hoarding）",
      agents: [
        {
          role: "病态囤积者",
          note: "常以“爱心救援者”自居，其行为在临床上与囤积障碍（DSM-5 Hoarding Disorder）相关，主观否认自身的危害性"
        }
      ],
      transmission: "以“救援”为名不断收容 → 照养量远超个人能力 → 环境崩溃（极度拥挤、粪尿堆积） → 数十至数百只动物陷入慢性饥饿、传染病蔓延、互食 → 披着“善意”外衣而社会谴责极低",
      victims: [
        {
          icon: "🐾",
          category: "被囤积之动物群体",
          entities: "数十至数百只犬猫",
          desc: "在极度拥挤、缺乏医疗、脏乱窒息的环境中，遭受慢性饥饿、传染病肆虐、甚至同类互食的长期系统性折磨。其痛苦规模远超物理暴力型。"
        },
        {
          icon: "🏘️",
          category: "社区环境与邻里",
          entities: "周边居民",
          desc: "承受严重恶臭、噪音、寄生虫滋生与社区公卫冲突。"
        }
      ]
    }
  ]
};