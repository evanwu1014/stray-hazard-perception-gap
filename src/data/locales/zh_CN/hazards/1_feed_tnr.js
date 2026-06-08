export const hazardData = {
    id: 1,
    name: "当面喂食 TNR 流浪犬猫",
    desc: "犬猫个体免于饥饿且无繁殖能力。但维持其街头生命仍会产生排泄物，并让其持续基于本能掠食原生野生动物或追咬路人。",
    tooltipTitle: "开放空间 TNR/TNA 的局限",
    tooltipContent: "研究与数学模型显示，流浪犬猫的年移除率必须持续达到 75% 至 85% 以上，种群总量才会开始下降，且绝育个体仍会持续猎杀野生动物或造成人车追咬冲突。",
    citation: "Longcore et al. (2009) / Barrows (2004) / PMC/NIH (2022) / IFAS (2020) / Wellbeing Intl. / Duke Space (2023) / JASV / 台湾石虎保育协会 / PMC/NIH (2023)",
    references: [
          {
                title: "Longcore, T., Rich, C., & Sullivan, L. M. (2009). Critical assessment of claims regarding management of feral cats by trap–neuter–return. Conservation Biology, 23(4), 887–894.",
                url: "https://doi.org/10.1111/j.1523-1739.2009.01174.x"
          },
          {
                title: "Barrows, P. L. (2004). Professional, ethical, and legal dilemmas of trap-neuter-release. Journal of the American Veterinary Medical Association, 225(9), 1365–1369.",
                url: "https://doi.org/10.2460/javma.2004.225.1365"
          },
          {
                title: "PMC/NIH (2022) - High-intensity TNR required to reduce free-roaming cat population",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9169806/"
          },
          {
                title: "University of Florida IFAS (2020) - How Effective and Humane Is Trap-Neuter-Release?",
                url: "https://ask.ifas.ufl.edu/publication/UW468"
          },
          {
                title: "Wellbeing International - Why Trap-Neuter-Return is Not an Ethical Solution (Australia perspective)",
                url: "https://www.wellbeingintlstudiesrepository.org/cgi/viewcontent.cgi?article=1009&context=aw_comp_globalcats_managementtnr"
          },
          {
                title: "Duke University Space (2023) - Citizens perceptions toward Hangzhou TNR Program (Asia)",
                url: "https://dukespace.lib.duke.edu/items/bbbf3445-70a3-425f-948e-5501a94edc80"
          },
          {
                title: "JASV - Successful Control of Feral Cat Populations Through Trap-Neuter (Asia islands)",
                url: "https://jsmcah.org/index.php/jasv/article/view/125/287"
          },
          {
                title: "台湾石虎保育协会 (Leopard Cat Association of Taiwan) - 豹猫保育数据 (台湾地区)",
                url: "https://www.twlcat.org/en/"
          },
          {
                title: "PMC/NIH (2023) - Fine-Scaled Selection of Resting and Hunting Habitat by Leopard Cats (Taiwan)",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9854813/"
          },
          {
                title: "AmCham Taiwan (2016) - Protecting Taiwan's Endangered Leopard Cats (Taiwan)",
                url: "https://topics.amcham.com.tw/2016/07/protecting-endangered-leopard-cats/"
          }
    ],
    detailContent: {
      fullDesc: "TNR（诱捕、绝育、回置）作为人道管理手段，在个体福利面确实减少了痛苦，但在种群控制面的成效受数学模型严格质疑。「当面喂食」使 TNR 个体持续存活于街头生境，维持其对原生生态的掠食压力，并强化流浪动物对特定公共空间的占据。",
      causeAnalysis: "喂食者通常具有高度同理心，但其行为导致非预期的系统性后果：吸引未绝育个体聚集、增加种群密度、强化地域性造成冲突，以及使收容系统接收压力的评估失真。",
      policyImplication: "有效的流浪犬猫管理必须结合快速移除（安置或人道处理）、高覆盖率绝育，以及针对喂食行为的法规配套，三者缺一不可。"
    },
    scenarios: [
      {
        name: "自然保育缓冲区",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "TNR 个体栖息于保育区边缘，持续以豹猫幼兽、穿山甲、原生鸟类为猎物。绝育不影响其狩猎本能，喂食延长其寿命即延长猎杀时间。",
        actions: [
          { role: "民众", action: "停止在保育区缓冲带喂食，支持合法移除计划" },
          { role: "地方政府", action: "划定禁止喂食范围，设置明确告示并执行处罚" },
          { role: "NGO/动保团体", action: "将 TNR 资源转移至城市密集区，而非生态脆弱带" }
        ]
      },
      {
        name: "城市社区公园",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "固定喂食点造成犬猫群聚，排泄物污染儿童游乐区，引发邻里投诉与管理冲突。喂食习惯吸引未绝育个体持续加入种群。",
        actions: [
          { role: "民众", action: "若欲喂食，请在指定区域并主动配合捕捉新进个体送往绝育" },
          { role: "居委会", action: "建立回报机制，协调动保机关定期清查喂食点" },
          { role: "动保机关", action: "提供合法收养媒合渠道，降低民众「原地喂养」的动机" }
        ]
      },
      {
        name: "校园周边",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "校猫种群若未有效控管，会对接触过多猫的学生造成过敏风险，以及对小型野鸟的栖地压缩效应。",
        actions: [
          { role: "学校行政", action: "制定校园动物管理办法，明确禁止外带食物喂食" },
          { role: "学生/家长", action: "主动反映校猫问题，透过正式渠道寻求移送收容" },
          { role: "教育单位", action: "纳入生态保育课程，说明流浪动物对生物多样性的冲击" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "喂食者",
        note: "出于同理心，希望个体免于饥饿"
      },
      {
        role: "无完整配套之 TNR 执行者",
        note: "绝育个体但仍回置至街头环境"
      }
    ],
    transmission: "喂食维持个体街头存活 → 绝育不影响狩猎本能 → 持续对原生动物施加掠食压力 → 喂食点吸引未绝育个体聚集 → 族群密度失控 → 排泄物与人犬冲突外溢",
    victims: [
      {
        icon: "🦁",
        category: "原生野生动物",
        entities: "石虎幼兽、穿山甲、原生鸟类、爬虫类",
        desc: "承受游荡犬猫不间断的本能猎捕与栖地压迫。绝育不消除掠食行为，喂食延长寿命即延长猎杀时间。"
      },
      {
        icon: "👥",
        category: "社区居民与路人",
        entities: "一般行人、孩童、外卖员",
        desc: "面临人犬追咬冲突、排泄物污染儿童游乐区、交通安全风险。"
      },
      {
        icon: "🐾",
        category: "游荡犬猫个体本身",
        entities: "被喂食的 TNR 犬猫",
        desc: "免于饥饿但仍被迫滞留街头，持续暴露于路杀、传染病、恶劣气候中，并非真正的动物福利终点。"
      }
    ],
    beneficiaries: [
      {
        icon: "🐾",
        category: "被喂食的 TNR 犬猫个体",
        entities: "接受定期喂食的绝育犬猫",
        desc: "个体免于饥饿带来的即时性生存痛苦，生活质量在个体层面获得改善。",
        caveat: "此收益仅作用于「个体福利」维度。在「生态系统」与「种群动态」维度，喂食维持了掠食压力并吸引未绝育个体聚集，净效应在生态面为负。"
      }
    ]
  }
};