export const hazardData = {
    id: 2,
    name: "私自处决流浪猫狗",
    desc: "属违法行为。给予单个个体短暂但剧烈的急性痛苦并剥夺生命，在结果论模型中受害规模极小；私人暴力同时带来秩序恐慌。需指出：现行法律对不同物种保护标准不一致，禁止依据主要来自公共秩序考量而非客观危害计量。本模型仅量化结果，不代表认可此行为，亦不主张现行法律必然合理。",
    tooltipTitle: "结果论视角下的外部性与违法性",
    tooltipContent: "此为违法暴力行为（见下方法律引用）。个体痛苦评为 6 分；在纯结果论的计量上，移除单个掠食个体会减少其未来对原生野生动物造成的捕食压力，惟私人暴力同时产生秩序恐慌，故仍具备 1 分外部社会成本。需注意：现行法规对不同物种保护标准并不一致——伴侣动物受保护，野生动物、农场动物、有害生物规范各异——其禁止依据更多来自维护公共秩序与防止暴力蔓延，而非客观危害的精确计量。本模型不鼓励以私力手段自行裁决，亦不主张守法即正确。",
    citation: "《中华人民共和国治安管理处罚法》及地方养犬管理条例 / 环境犯罪学与社会安全成本 / PMC/NIH (2023) / WHO / United Against Rabies (2022) / Asian News Network (2023)",
    references: [
          {
                title: "《中华人民共和国治安管理处罚法》及地方养犬管理条例",
                url: null
          },
          {
                title: "PMC/NIH (2023) - Progress towards dog-mediated rabies elimination in PR China (Asia)",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10077633/"
          },
          {
                title: "WHO - Strategic Framework for Elimination of Human Rabies Transmitted by Dogs",
                url: "https://iris.who.int/bitstreams/18d3fd7b-0c76-4284-b714-0b7650d015ad/download"
          },
          {
                title: "United Against Rabies / WHO (2022) - Rabies prevention and control – lessons from Chongqing, China (Asia)",
                url: "https://unitedagainstrabies.org/news/rabies-prevention-and-control-lessons-from-chongqing-china/"
          },
          {
                title: "Asian News Network (2023) - China's crackdown on stray dogs sparks public outcry (Asia)",
                url: "https://asianews.network/chinas-crackdown-on-stray-dogs-sparks-public-outcry/"
          }
    ],
    detailContent: {
      fullDesc: "私自处决流浪动物在法律框架下属违法行为。在结果论框架下，移除一只猎食个体虽会减少其未来对原生动物造成的捕食压力，但私刑模式带来的法律秩序破坏与社会恐慌，使其在「外部成本」面仍有负向评分。值得指出的是，现行法律对「杀害动物」的规范本身并不一致：伴侣动物受法律保护，野生动物、农场动物、有害生物则分属不同规范或可合法处置，保护门槛更多反映社会情感与公共秩序考量，而非客观痛苦的精确计量。本文不鼓励个人以私力手段自行裁决（因其带来秩序崩坏与暴力螺旋），亦不主张守法等于正确，也不认为现行法律必然合理；真正的出路是推动法律与管理制度向客观危害靠拢。",
      causeAnalysis: "行为者通常是对流浪动物生态危害有所认知的农牧业者、保育人士或对邻里安全有顾虑的居民。缺乏合法快速移除渠道，是促使私刑行为发生的重要结构性因素。",
      policyImplication: "降低私刑诱因的最有效手段，是建立「可通报、快速响应」的合法移除机制。若政府无法在合理时间内响应民众的流浪动物投诉，私刑事件将难以根绝。"
    },
    scenarios: [
      {
        name: "农牧与偏远地区",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "农民为保护家禽牲畜免遭流浪犬攻击，面临「举报无效、等待漫长」的行政失灵困境，私下处置事件频发且难以追查。",
        actions: [
          { role: "农民/居民", action: "优先通报地方动保机关，保留书面记录以备不时之需" },
          { role: "地方政府", action: "建立 24 小时紧急通报渠道，设定最长 48 小时响应标准" },
          { role: "立法机关", action: "研拟农牧损害补偿机制，降低农民对私刑的经济诱因" }
        ]
      },
      {
        name: "住宅社区",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "邻里纠纷中，对流浪动物的私刑有时是居民宣泄冲突的替代行为，并造成其他居民的心理恐慌与信任崩解。",
        actions: [
          { role: "目击市民", action: "立即拨打动保专线通报，留存证据协助后续调查" },
          { role: "社区管委会", action: "协调社区动物管理共识，避免邻里对立激化" },
          { role: "动保机关", action: "加强宣导合法举报渠道，并缩短案件响应时间" }
        ]
      },
      {
        name: "生态保护区周边",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需特别关注",
        desc: "护林巡查员面临保育动物遭流浪犬攻击与自身执法能力不足的两难，部分案例涉及非正式的动物移除。",
        actions: [
          { role: "护林人员", action: "向主管机关申请紧急移除授权，避免自行处置触法" },
          { role: "林业主管机关", action: "建立保育区流浪动物快速清查与移除机制，提供前线人员法律保护" },
          { role: "NGO", action: "在保育区附近设立人道捕捉与安置中转站，提供合法替代方案" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "私刑执行者（农牧业型）",
        note: "面临家禽牲畜遭流浪犬攻击的农损困境，行政举报渠道失灵"
      },
      {
        role: "私刑执行者（居民安全型）",
        note: "受邻里安全威胁驱使，对流浪动物的投诉长期无回应"
      },
      {
        role: "私刑执行者（报复冲动型）",
        note: "出于个人冲突或宣泄情绪"
      }
    ],
    transmission: "合法移除渠道缺位/回应过慢 → 结构性行政失灵 → 个人以私力手段自行裁决 → 动物承受急性剧烈痛苦 → 社会秩序恐慌与暴力螺旋风险",
    victims: [
      {
        icon: "🐾",
        category: "被处决之犬猫个体",
        entities: "遭私刑的游荡犬猫",
        desc: "承受毒杀、捕兽夹、物理殴打等手段造成的急性剧烈痛苦，生命被剥夺。"
      },
      {
        icon: "⚖️",
        category: "社会法治秩序",
        entities: "社区居民、公权力信任基础",
        desc: "私刑行为破坏法治信任，引发邻里恐慌与“以暴制暴”的暴力螺旋风险，公权力正当性受损。"
      }
    ]
  }
};