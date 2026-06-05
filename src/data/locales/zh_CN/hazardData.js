export const HAZARD_DATA = [
  {
    id: 1,
    name: "当面喂食 TNR 流浪犬猫",
    desc: "犬猫个体免于饥饿且无繁殖能力。但维持其街头生命仍会产生排泄物，并让其持续基于本能掠食原生野生动物或追咬路人。",
    subScores: {
      pain: 1,      // 痛苦深度
      scale: 2,     // 受害规模
      external: 3   // 外部成本
    },
    objTotal: 6,
    condemn: 1,     // 大众道德直觉
    outcry: 1,      // 舆论风暴指数
    tooltipTitle: "开放空间 TNR/TNA 的局限",
    tooltipContent: "研究与数学模型显示，流浪犬猫的年移除率必须持续达到 75% 至 85% 以上，种群总量才会开始下降，且绝育个体仍会持续猎杀野生动物或造成人车追咬冲突。",
    citation: "Longcore et al. (2009) Conservation Biology / Barrows (2004)"
  },
  {
    id: 2,
    name: "私自处决流浪猫狗",
    desc: "给予单个个体短暂但剧烈的急性痛苦并剥夺生命。受害规模极小，且客观上终止了该个体对原生生态造成的捕食压力；但私人暴力手段会造成大众不安与法律秩序威胁。",
    subScores: {
      pain: 6,
      scale: 1,
      external: 1
    },
    objTotal: 8,
    condemn: 8,
    outcry: 9,
    tooltipTitle: "结果论净值折抵与外部性",
    tooltipContent: "此为违法暴力行为。个体痛苦评为 6 分，但该捕食个体被移除客观上阻止了未来被其掠食的数百只原生野生动物的极端折磨（净痛苦总量下降）。惟私人暴力会产生秩序恐慌，故仍具备 1 分外部社会成本。",
    citation: "动物保护相关法规刑事责任 / 环境犯罪学与社会安全成本"
  },
  {
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
    citation: "Takanosu et al. (2008) / UFAW Genetic Welfare Problems"
  },
  {
    id: 4,
    name: "虐杀流浪犬猫",
    desc: "将单个个体的痛苦最大化至死。画面最为残忍，但损害完全收敛于该单一动物身上，对社会运作与整体自然生态毫无外溢影响。",
    subScores: {
      pain: 10,
      scale: 1,
      external: 1
    },
    objTotal: 12,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "极端痛苦与危害边界",
    tooltipContent: "视觉冲击与社会道德谴责程度最高。在结果论模型中，其“个体痛苦深度”达满分，但因受限于个体施暴能力，其损害被限制于极小规模，无外部生态扩散性。研究显示其施虐动机可分为双轨路径：一是病理性虐待（ASPD/反社会型），以折磨生命获取掌控感或快感；二是转移性虐待（弱弱相残型），施虐者将自身无力处理的心理与社会危机，向生态最底层的动物转嫁。",
    citation: "社会心理学：反社会人格特质与暴力行为关联性研究"
  },
  {
    id: 5,
    name: "长期虐待（单／多只）",
    desc: "将极端折磨的时间线拉长至数月或数年。比直接虐杀制造了更多的痛苦总量，但同样属于封闭环境内的损害，无环境外部性。",
    subScores: {
      pain: 10,
      scale: 2,
      external: 1
    },
    objTotal: 13,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "时间维度的痛苦累积",
    tooltipContent: "将个体痛苦时间拉长，其结果论累积痛苦高于瞬间虐杀。在此类行为中存在显著的性别分流机制：男性施虐者倾向物理暴力，而女性施虐者则高比例表现为“病态囤积（Animal Hoarding）”。后者常被“爱心拯救”的外衣包装，社会谴责极低，但会导致数十至数百只动物长期处于极度拥挤、营养不良、疾病蔓延与粪尿窒息中，其制造的慢性痛苦深度与生命受害规模在结果论上远超单一物理暴力。",
    citation: "行为科学：虐待动物与家暴/社会暴力的关联研究"
  },
  {
    id: 6,
    name: "购买极端畸形宠物",
    desc: "消费行为直接为“明确的残疾与终身痛苦”买单。让少数个体终身承受短吻呼吸道阻塞、折耳软骨剧痛、双陨石色失明或茶杯体脑积水等病痛，属于病态审美的直接资助。",
    subScores: {
      pain: 8,
      scale: 2,
      external: 4
    },
    objTotal: 14,
    condemn: 2,
    outcry: 1,
    tooltipTitle: "病态审美的直接资助",
    tooltipContent: "消费者直接为“明确的残疾与终身痛苦”买单。包含：短吻犬呼吸道阻塞(BOAS)、折耳猫软骨变形剧痛、双陨石色失明、茶杯犬水脑症。这些病理性痛苦伴随其一生，是消费端对畸形特征的直接资助。",
    citation: "AVMA Companion Animal Breeding Welfare guidelines"
  },
  {
    id: 7,
    name: "养殖纯种猫狗贩卖",
    desc: "将基因缺陷与母体生育耗损“批发化”。虽然不会刻意施虐，但量产数以百计带有遗传病风险的生命，同时对流浪动物收容系统带来结构性的排挤压力。",
    subScores: {
      pain: 5,
      scale: 7,
      external: 6
    },
    objTotal: 18,
    condemn: 3,
    outcry: 2,
    tooltipTitle: "母体损耗与代际折磨的工业化",
    tooltipContent: "商业繁殖场为追求利润，母体常处于密闭笼具、反复生育直至生理机能崩溃，其痛苦在规模与时间上被工业化放大。",
    citation: "HSUS Puppy Mills Investigative Report"
  },
  {
    id: 8,
    name: "量产极端畸形宠物",
    desc: "制度化的基因虐待。为了迎合市场，刻意将痛苦写入基因编码并批发制造。极高的母体难产率与子代夭折率，导致庞大的医疗资源消耗与最终弃养负担。",
    subScores: {
      pain: 9,
      scale: 8,
      external: 7
    },
    objTotal: 24,
    condemn: 3,
    outcry: 3,
    tooltipTitle: "制度化基因折磨与繁殖风险",
    tooltipContent: "为迎合市场，刻意将痛苦写入基因编码并批发制造。极高的母体难产率与子代夭折率，导致庞大的医疗资源消耗与最终弃养负担。育种者常使用近亲交配，刻意保留病理性矮小与特征，使子代承受不可逆的系统性折磨。",
    citation: "Veterinary Journal: Genetic welfare problems of companion animals"
  },
  {
    id: 10,
    name: "网络组织型商业虐待",
    desc: "通过加密群组进行虐杀视频贩售与“定制付费订单”。金钱诱因驱动大量捕捉街头动物（尤其是 TNR 亲人个体）制造内容；同时对举报者施以开盒（Doxing）与跨国网络恐吓，社会威胁严重外溢至人身安全。",
    subScores: {
      pain: 10,
      scale: 5,
      external: 7
    },
    objTotal: 22,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "暴力的数字化资本化（类型 C）",
    tooltipContent: "加密群组内部发展出“付费定制订单”商业模式——买家指定物种与施虐方式，施虐者以虚拟货币结算视频。此犯罪创造了“同温层认同”的群体极化机制。当民众举报时，组织会动用恶意开盒与跨国网络恐吓。其危害已正式超越动物福利，升级为威胁人类社会与信息安全的网络组织犯罪。",
    citation: "BBC World Service「Monkey Haters」调查报告, 2023 / SMACC 年度报告, 2024",
    isSupplemental: true
  },
  {
    id: 9,
    name: "大量滥喂（含放置喂食）",
    desc: "终极的生态与卫生灾难。造成流浪犬猫异常聚集繁殖与高夭折率暗数，传染病与路杀横行；同时对原生野生动物造成巨大生存威胁（如豹猫/穿山甲遭犬只咬伤致死、原生鸟类与爬行动物遭猫只掠食）。",
    subScores: {
      pain: 7,
      scale: 10,
      external: 10
    },
    objTotal: 27,
    condemn: 2,
    outcry: 2,
    tooltipTitle: "繁殖创伤与传染病爆发",
    tooltipContent: "长期喂食促使流浪犬猫高密度群聚与繁殖。尤其是流浪猫具备刺激性排卵与倒刺交配的生理创伤，且发情频率极高，无节制喂食等同于资助这部“痛苦生育机器”几何级膨胀。高密度繁殖进而引发猫瘟、犬细小病毒爆发，导致无数幼体在恶劣环境中失明、病死或遭路杀。",
    citation: "Loss et al. (2013) Nature Comm. / 中国相关生态研究与路杀数据"
  }
];

// Helper function to calculate deviation for each item
export const getProcessedHazardData = () => {
  return HAZARD_DATA.map(item => {
    const perception = (item.condemn + item.outcry) / 2;
    const objNorm = item.objTotal / 3;
    const deviation = +(perception - objNorm).toFixed(1);
    return {
      ...item,
      perception,
      objNorm,
      deviation
    };
  });
};
