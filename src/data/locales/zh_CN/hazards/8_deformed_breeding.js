export const hazardData = {
    id: 8,
    name: "量产极端畸形宠物",
    desc: "制度化的基因虐待。为了迎合市场，刻意将痛苦写入基因编码并批发制造。极高的母体难产率与子代夭折率，导致庞大的医疗资源消耗与最终弃养负担。",
    tooltipTitle: "制度化基因折磨与繁殖风险",
    tooltipContent: "为迎合市场，刻意将痛苦写入基因编码并批发制造。极高的母体难产率与子代夭折率，导致庞大的医疗资源消耗与最终弃养负担。育种者常使用近亲交配，刻意保留病理性矮小与特征，使子代承受不可逆的系统性折磨。",
    citation: "Asher et al. (2009) / RCVS Knowledge / Cambridge Animal Welfare (2021) / Humane World (China Meat Trade)",
    references: [
          {
                title: "Asher, L., Diesel, G., Summers, J. F., McGreevy, P. D., & Collins, L. M. (2009). Inherited defects in pedigree dogs. Part 1: Disorders related to breed standards. The Veterinary Journal, 182(3), 402–411.",
                url: "https://doi.org/10.1016/j.tvjl.2009.08.033"
          },
          {
                title: "RCVS Knowledge - Health and welfare of Brachycephalic dogs",
                url: "https://www.rcvsknowledge.org/resource/health-and-welfare-of-brachycephalic-dogs/"
          },
          {
                title: "Cambridge Animal Welfare (2021) - A follow-up study of exercise test results and severity of BOAS signs in brachycephalic dogs",
                url: "https://www.cambridge.org/core/journals/animal-welfare/article/followup-study-of-exercise-test-results-and-severity-of-brachycephalic-obstructive-airway-syndrome/699CE1C7ACF1415155760D5320A55371"
          },
          {
                title: "Humane World for Animals - Ending China's Dog and Cat Meat Trade (Asia)",
                url: "https://www.humaneworld.org/en/campaign/ending-chinas-dog-and-cat-meat-trades"
          }
    ],
    detailContent: {
      fullDesc: "量产极端畸变宠物是本指数中「社会舆论谴责最低、客观危害最高」落差最大的类别之一。其危害横跨三个维度：(1) 每只个体承受的基因性终身慢性痛苦；(2) 受影响个体数量庞大；(3) 对兽医资源、弃养安置系统的结构性消耗。",
      causeAnalysis: "繁殖业者采用近亲交配固化病理性特征，如法斗犬的短吻、茶杯型动物的极端矮小化。这些特征在市场上获得溢价，创造了强烈的经济诱因使业者持续投入。消费端的无知与平台营销的美化，共同维持了这条伤害链。",
      policyImplication: "荷兰已于 2023 年禁止短吻特征超过特定程度的犬只销售，并设计「鼻吻指数」标准。应参考此框架，由农业主管部门与兽医师协会共同订定「禁止量产畸形品种清单」，并对违规业者处以吊销执照与高额罚款。"
    },
    scenarios: [
      {
        name: "短吻犬猫量产（BOAS）",
        icon: "dna",
        riskLevel: "critical",
        riskLabel: "极端危害",
        desc: "法斗、巴哥、英斗、波斯猫等极端短吻品种，因头骨结构导致终身呼吸道阻塞（BOAS）。量产环境下母体高难产率（剖腹产率超过 90%），子代在生命早期即承受慢性呼吸窘迫。",
        actions: [
          { role: "潜在购买者", action: "了解 BOAS 的生理机制，拒绝购买需要「整形手术才能正常呼吸」的品种" },
          { role: "兽医师公会", action: "公开发表声明，拒绝协助证明具极端短吻特征的动物「健康合格」" },
          { role: "农业主管部门", action: "引入「鼻吻指数」标准，对超过阈值的短吻品种禁止繁殖场登记" }
        ]
      },
      {
        name: "茶杯型/极端矮化品种",
        icon: "bone",
        riskLevel: "critical",
        riskLabel: "极端危害",
        desc: "茶杯贵宾、迷你马尔济斯等极端矮化品种，常以近亲交配固化矮小特征，导致脑积水、低血糖症、骨骼脆化等系统性疾病，部分个体难以存活至成年。",
        actions: [
          { role: "消费者", action: "认识「茶杯型」并非正式品种登记类别，而是繁殖业者制造的营销概念" },
          { role: "动保机关", action: "在宠物买卖稽查中，将茶杯型动物的健康状况列为重点查核项目" },
          { role: "立法机关", action: "研拟「最小体型繁殖限制」法规，防止极端矮化育种继续合法进行" }
        ]
      },
      {
        name: "弃养后的系统性冲击",
        icon: "ripple",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "极端畸变品种的终身医疗费用远高于一般品种，当饲主无力负担时，弃养率显著高于均值，且因需要特殊医疗照护，在收容环境中存活率低、适养媒合困难。",
        actions: [
          { role: "收容机构", action: "建立具备特殊品种照护能力的转介网络，避免畸变品种动物在一般收容环境中恶化" },
          { role: "繁殖业者", action: "建立「弃养回收机制」，对其繁殖动物的后续命运负有责任" },
          { role: "政府", action: "建立繁殖业者连带负担部分弃养安置成本的制度，使外部成本内部化" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "以病态特征为卖点的商业繁育者",
        note: "刻意使用近亲交配固化病理性特征（短吻、矮化、折耳），因这些特征在市场上获得溢价"
      },
      {
        role: "消费端的无知与平台营销",
        note: "共同维持了“需求 → 供给”的伤害链条"
      }
    ],
    transmission: "市场对畸形特征的溢价 → 近亲交配刻意保留病理性状 → 将痛苦写入基因编码并批发制造 → 极高母体难产率（法斗剖腹产率超过 90%） → 子代出生即带不可逆的系统性生理障碍 → 高医疗支出 → 弃养率飙升 → 收容系统崩溃",
    victims: [
      {
        icon: "bone",
        category: "畸形遗传子代（大规模）",
        entities: "法斗、巴哥、英斗、波斯猫（BOAS）；茶杯贵宾、迷你马尔济斯（极端矮化）；折耳猫（骨骼病变）",
        desc: "出生即带有结构性生理障碍，注定承受漫长的病理痛苦。此类别为本指数中“社会舆论谴责最低、客观危害最高”落差最大的类别。"
      },
      {
        icon: "pregnant",
        category: "繁殖母畜",
        entities: "种母犬猫",
        desc: "被当作“畸变基因”的生产机器。极端短吻品种的母体难产率极高，被反复剖腹产直至生育能力耗尽。"
      },
      {
        icon: "hospital",
        category: "兽医资源与弃养安置系统",
        entities: "兽医体系、收容所",
        desc: "畸变品种的终身医疗费用远高于一般品种，饲主无力负担时弃养率显著高于均值；在收容环境中存活率低、适养媒介困难，形成对兽医资源与安置系统的结构性消耗。"
      }
    ],
    beneficiaries: [
      {
        icon: "money",
        category: "繁殖业者与宠物产业链（商业获利）",
        entities: "繁殖业者、宠物零售通路、相关医疗服务业",
        desc: "极端畸变品种因稀缺性与社群媒体放大的「可爱效应」，在市场上获得显著溢价。繁殖业者、宠物店、以及后端终身医疗需求（BOAS 手术、骨科治疗等）共同构成了一条因此获利的产业链。",
        caveat: "此处呈现商业获利的目的，是揭示「谁在为维持现状而获益」——商业利益的高度集中创造了强力的政治游说诱因，使管制难度远高于其他类型的动物危害。此为本指数中「社会舆论谴责最低、客观危害最高」落差最大类别之一的核心成因，而非为此获利提供正当性。"
      }
    ]
  }
};