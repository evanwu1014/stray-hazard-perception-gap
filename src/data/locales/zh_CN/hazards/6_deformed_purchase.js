export const hazardData = {
    id: 6,
    name: "购买极端畸形宠物",
    desc: "消费行为直接为「明确的残疾与终身痛苦」买单。让少数个体终身承受短吻呼吸道阻塞、折耳软骨剧痛、双重云石色基因（double merle）致盲或茶杯体水脑症等病痛，属于病态审美的直接资助。",
    tooltipTitle: "病态审美的直接资助",
    tooltipContent: "消费者直接为「明确的残疾与终身痛苦」买单。包含：短吻犬呼吸道阻塞(BOAS)、折耳猫软骨变形剧痛、双重云石色基因（double merle）致盲、茶杯犬脑积水症。这些病理性痛苦伴随其一生，是消费端对畸形特征的直接资助。",
    citation: "AVMA Companion Animal Breeding Welfare / Bęczkowski et al. (2022) BOAS / RCVS Knowledge / UFAW Scottish Fold / Chang et al. (2007) Osteochondrodysplasia",
    references: [
          {
                title: "American Veterinary Medical Association (AVMA). (2017). Inherited disorders in responsible breeding of companion animals. AVMA Policies.",
                url: "https://www.avma.org/resources-tools/avma-policies/inherited-disorders-responsible-breeding-companion-animals"
          },
          {
                title: "Bęczkowski et al. (2022) - Brachycephalic obstructive airway syndrome: much more than a surgical problem",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9673814/"
          },
          {
                title: "RCVS Knowledge - Health and welfare of Brachycephalic dogs",
                url: "https://www.rcvsknowledge.org/resource/health-and-welfare-of-brachycephalic-dogs/"
          },
          {
                title: "UFAW - Scottish Fold – Osteochondrodysplasia",
                url: "https://www.ufaw.org.uk/cats/scottish-fold-osteochondrodysplasia"
          },
          {
                title: "Chang et al. (2007) - Osteochondrodysplasia in three Scottish Fold cats",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2868141/"
          }
    ],
    detailContent: {
      fullDesc: "极端畸变品种是「人类审美偏好凌驾动物生理健康」的最直接呈现。云石色（Merle）基因的纯合子（即双重云石色 double merle）导致耳聋与眼盲；折耳基因全身软骨异常导致持续骨骼疼痛；短吻特征使动物终身在轻度窒息状态下生活。这些痛苦是可预期、不可逆的设计结果。",
      causeAnalysis: "消费者通常不了解其购买行为所资助的生理代价。社交媒体上「可爱」的外观呈现，有效遮蔽了动物实际的痛苦状态。部分消费者甚至认为动物「天生如此」而非「被设计成如此」。",
      policyImplication: "荷兰、德国等国已禁止特定极端畸形品种的繁殖与销售。应参考国际进展，建立「禁止繁殖清单」制度，并要求所有短吻犬的买卖必须附带 BOAS 筛检报告。"
    },
    scenarios: [
      {
        name: "宠物电商与网络销售",
        icon: "globe",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "电商平台允许繁殖业者直接触达消费者，买家无法实际评估动物健康状况。带有严重遗传病的动物在镜头下以「可爱」的方式被营销，其实际痛苦完全不可见。",
        actions: [
          { role: "消费者", action: "拒绝网络冲动购买，坚持实地访视动物并要求基因健康报告" },
          { role: "电商平台", action: "对宠物销售类目强制要求卖家上传动物来源与健康检验文件" },
          { role: "农业农村部", action: "扩大特定畸形品种的繁殖限制，并推动与电商平台的联合执法" }
        ]
      },
      {
        name: "宠物展览活动",
        icon: "neighborhood",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "品种展览以「美丽标准」评选动物，公开正向化病理性特征。展览文化间接鼓励繁殖业者强化极端畸形特征以获得奖项。",
        actions: [
          { role: "参展者/观众", action: "公开质疑展览中涉及健康损害的评选标准，并向主办单位提出改革倡议" },
          { role: "动物医师协会", action: "发表公开声明，拒绝为极端畸形品种的繁殖提供健康背书" },
          { role: "主办单位", action: "修改评审标准，纳入健康指标，排除具明确遗传病的个体" }
        ]
      },
      {
        name: "高端宠物市场",
        icon: "money",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "高价畸变品种被作为身份地位象征销售，消费者的社会阶层认同强化了其购买动机，使价格信号在此市场失去纠正作用。",
        actions: [
          { role: "消费者", action: "理解「高价格」不等于「高健康品质」，深入了解品种相关的终身医疗费用" },
          { role: "兽医师", action: "在诊疗极端畸形品种时，主动告知饲主其品种特性的遗传成因" },
          { role: "政府", action: "强制要求极端畸形品种在销售时附带「健康风险声明书」，类似香烟警示标签" }
        ]
      }
    ]
,
  relationship: {
    agents: [
      {
        role: "畸形审美消费者",
        note: "受社交媒体“可爱”滤镜驱动，通常不了解购买行为所资助的生理代价，甚至认为动物“天生如此”而非“被设计成如此”"
      },
      {
        role: "品种展览文化",
        note: "以“美丽标准”评选动物，公开正向化病理性特征，间接鼓励强化畸形"
      }
    ],
    transmission: "消费者直接为“明确的残疾与终身痛苦”买单 → 市场溢价信号驱动繁殖端强化畸形特征 → 社交媒体美化遮蔽实际痛苦 → 病态审美消费价值观被正常化",
    victims: [
      {
        icon: "bone",
        category: "畸形特征个体",
        entities: "折耳猫、短吻犬（法斗/巴哥）、双重陨石色致盲犬、茶杯型水脑犬",
        desc: "终身承受不可逆的设计性痛苦：软骨遗传性发育不良的剧烈骨骼疼痛（折耳）、呼吸道阻塞的慢性缺氧与窒息（BOAS）、先天性耳聋与眼盲（double merle）、水脑症（茶杯型）。"
      },
      {
        icon: "chart-down",
        category: "动物保护价值观",
        entities: "社会整体的动物福利认知",
        desc: "助长将“动物的病理缺陷”包装为“可爱、时尚”的扭曲消费文化，使社会对畸形繁殖的道德敏感度持续钝化。"
      }
    ],
    beneficiaries: [
      {
        icon: "home",
        category: "被购入之畸变个体（个体安置层面）",
        entities: "进入家庭环境的短吻犬、折耳猫等个体",
        desc: "相较于留在繁殖场或遭弃置，被购买并获得妥善医疗照护的个体，其个体日常照护品质确实高于繁殖场环境——尽管其终身病痛本身无法消除。",
        caveat: "此收益极度有限——个体的终身结构性痛苦（BOAS、骨骼病变等）是其诞生的前提，「被妥善照顾」不等于「不在痛苦中」。且消费行为直接向繁殖业者发送市场溢价信号，驱使更多带有相同病理特征的个体被批量制造。个体安置层面的有限改善，在系统层面创造了更庞大的苦难规模。"
      }
    ]
  }
};