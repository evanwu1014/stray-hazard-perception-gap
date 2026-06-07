export const hazardData = {
    id: 3,
    name: "购买纯种猫狗",
    desc: "买方虽妥善照顾，但资金助长了繁殖产业。让少数个体终身承受轻至中度的人择基因缺陷（如折耳、短吻犬呼吸问题），并占据收容资源。",
    subScores: {
      pain: 4,
      scale: 2,
      external: 3
    },
    objTotal: 9,
    condemn: 1,
    outcry: 1,
    tooltipTitle: "人择基因缺陷的痛苦",
    tooltipContent: "纯种宠物（如折耳猫、短吻犬）在选育特征的过程中，常固化了严重的遗传疾病，如骨骼发育不良、短吻犬呼吸道阻塞综合征（BOAS）。",
    citation: "Asher et al. (2009) / UFAW Genetic Welfare Problems / Bellumori et al. JAVMA (2013) / PMC/NIH (2018)",
    references: [
          {
                title: "Asher, L., Diesel, G., Summers, J. F., McGreevy, P. D., & Collins, L. M. (2009). Inherited defects in pedigree dogs. Part 1: Disorders related to breed standards. The Veterinary Journal, 182(3), 402–411.",
                url: "https://doi.org/10.1016/j.tvjl.2009.08.033"
          },
          {
                title: "Universities Federation for Animal Welfare (UFAW). (n.d.). Genetic welfare problems of companion animals. UFAW.",
                url: "https://www.ufaw.org.uk/genetics"
          },
          {
                title: "Bellumori et al. JAVMA (2013) - Prevalence of inherited disorders among mixed-breed and purebred dogs (27,254 cases)",
                url: "https://pubmed.ncbi.nlm.nih.gov/23683021/"
          },
          {
                title: "PMC/NIH (2018) - Frequency and distribution of 152 genetic disease variants in over 100,000 dogs",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5945203/"
          }
    ],
    detailContent: {
      fullDesc: "购买纯种动物的消费行为，其道德成本主要透过供应链传递——消费端的需求直接驱动繁殖产业的规模。即便个别买家善待动物，其消费决策仍是对基因缺陷固化与繁殖剥削的资助。",
      causeAnalysis: "消费者通常缺乏对品种基因问题的完整认知。选择纯种动物的动机多为外观审美、可预期的个性特质，或社会认同。信息不透明使消费者难以做出知情选择。",
      policyImplication: "强制要求宠物店与繁殖业者披露基因健康筛检报告，是降低消费端伤害的有效政策工具。同时，提升「以领养代替购买」的能见度，可引导部分需求转移至收容系统。"
    },
    scenarios: [
      {
        name: "城市宠物消费市场",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "宠物店集中展示特定品种，在高人流环境中激发冲动型购买。购买行为直接驱动上游繁殖业者扩产，形成需求-供应的正向反馈循环。",
        actions: [
          { role: "消费者", action: "购买前主动询问基因健康报告，并比较同等费用的领养选项" },
          { role: "宠物店业者", action: "主动披露动物来源与健康筛检信息，配合动保法规登记制度" },
          { role: "地方政府", action: "强化宠物业者管理，定期稽查动物来源合法性" }
        ]
      },
      {
        name: "社交媒体影响圈",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "网红展示特定品种动物，引发粉丝的模仿购买热潮。热门品种的需求暴增往往超越繁殖业者的正规能力，催生品质低劣的地下繁殖场。",
        actions: [
          { role: "内容创作者", action: "在展示宠物时主动说明品种健康风险与来源，避免无意间为不当繁殖业者打广告" },
          { role: "平台", action: "对宠物销售相关内容加挂动保法规提示信息" },
          { role: "动保机关", action: "监测社交热门品种趋势，提前部署查缉资源" }
        ]
      },
      {
        name: "收容系统压力端",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "纯种宠物热潮使收容所空间被「流行品种的弃养高峰」周期性挤压，造成非热门品种的安乐死配额被压缩。",
        actions: [
          { role: "民众", action: "考虑领养收容所的成年犬猫，它们有稳定个性且等待时间长" },
          { role: "收容机构", action: "加强特定品种动物的安置媒合，并对潜在养主提供品种教育" },
          { role: "中央政府", action: "研拟纯种动物弃养的溯源追责机制，强化繁殖业者的饲主责任连结" }
        ]
      }
    ]
  };
