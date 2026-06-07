export const hazardData = {
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
    tooltipContent: "视觉冲击与社会道德谴责程度最高。在结果论模型中，其「个体痛苦深度」达满分，但因受限于个体施暴能力，其损害被限制于极小规模，无外部生态扩散性。研究显示其施虐动机可分为双轨路径：一是病理性虐待（ASPD/反社会型），以折磨生命获取掌控感或快感；二是转移性虐待（弱弱相残型），施虐者将自身无力处理的心理与社会危机，向生态最底层的动物转嫁。",
    citation: "Psychology Today (2025) / PMC/NIH (2022) / Oxford Animal Ethics / Faunalytics (2020)",
    references: [
          {
                title: "Psychology Today (2025) - The Violence Link",
                url: "https://www.psychologytoday.com/us/blog/the-human-equation/202503/the-violence-link"
          },
          {
                title: "PMC/NIH (2022) - Animal Abuse as an Indicator of Domestic Violence",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9024712/"
          },
          {
                title: "Oxford Animal Ethics - The Link between Animal Abuse and Human Violence (Monograph)",
                url: "https://www.oxfordanimalethics.com/what-we-do/publication/the-link-between-animal-abuse-and-human-violence/"
          },
          {
                title: "Faunalytics (2020) - The Development of an Animal Protection Regime in China (Asia)",
                url: "https://faunalytics.org/the-development-of-an-animal-protection-regime-in-china/"
          }
    ],
    detailContent: {
      fullDesc: "虐杀行为在道德直觉层面引发最强烈的社会谴责，是动保倡议最易动员舆论的议题类型。然而在结果论框架下，其危害边界完全收敛于单一个体——高度的个体痛苦，配合极低的受害规模与外部成本，使其客观危害分数低于许多社会感知不严重的行为。",
      causeAnalysis: "研究识别两类主要施虐路径：(1) 病理性：具 ASPD 特质者以折磨作为掌控感的来源，此类人格具跨物种暴力倾向（连结家暴与杀人犯罪）；(2) 转移性：社会弱势者将无力宣泄的挫折，转嫁至防御力最低的流浪动物身上。",
      policyImplication: "对虐杀行为最有效的介入，除法律面的加重刑责外，更应强化心理卫生筛查的连结——施虐者的精神状态处置，比单纯刑事惩罚更能降低未来的人际暴力风险。"
    },
    scenarios: [
      {
        name: "社区公共空间",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即通报",
        desc: "单起虐杀事件即可引发社区恐慌，居民人身安全感受影响。施虐者若具病理性人格，可能对相关人员（如喂食志愿者）产生后续威胁。",
        actions: [
          { role: "目击者", action: "立即报警并保存影像证据，切勿公开分享受害画面以免二次伤害" },
          { role: "动保机关", action: "配合警政单位追查，提供相关法规咨询与社工介入评估" },
          { role: "社区", action: "提供心理支持资源给受影响的动物照护者，避免创伤扩散" }
        ]
      },
      {
        name: "网络传播环境",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "虐杀影像在社交平台的扩散造成大规模次级创伤，同时可能助长「博眼球」的模仿动机，或成为组织型商业虐待的招募素材。",
        actions: [
          { role: "一般网民", action: "不转发、不点开虐杀影像；改以文字描述举报，保护自身心理健康" },
          { role: "平台业者", action: "建立动物虐待影像的快速下架机制，并向执法机关提供账号信息" },
          { role: "动保倡议者", action: "以案件的法律进展为传播重点，而非重复呈现受害画面" }
        ]
      },
      {
        name: "学校或青少年群体",
        icon: "",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "青少年施虐者的出现往往是家庭暴力或同伴压力环境的警示指标。学校系统的早期介入可阻断其人际暴力的发展轨迹。",
        actions: [
          { role: "教师/辅导人员", action: "发现动物虐待行为时，启动校园通报程序并转介社工评估家庭环境" },
          { role: "家长", action: "关注子女对弱势动物的态度，发现异常应主动寻求心理健康咨询" },
          { role: "社工系统", action: "将动物虐待行为纳入家庭风险评估指标，与儿少保护机制整合" }
        ]
      }
    ]
  };
