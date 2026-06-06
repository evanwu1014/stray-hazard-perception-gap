export const HAZARD_DATA = [
  {
    id: 1,
    name: "当面喂食 TNR 流浪犬猫",
    desc: "犬猫个体免于饥饿且无繁殖能力。但维持其街头生命仍会产生排泄物，并让其持续基于本能掠食原生野生动物或追咬路人。",
    subScores: {
      pain: 1,
      scale: 2,
      external: 3
    },
    objTotal: 6,
    condemn: 1,
    outcry: 1,
    tooltipTitle: "开放空间 TNR/TNA 的局限",
    tooltipContent: "研究与数学模型显示，流浪犬猫的年移除率必须持续达到 75% 至 85% 以上，种群总量才会开始下降，且绝育个体仍会持续猎杀野生动物或造成人车追咬冲突。",
    citation: "Longcore et al. (2009) Conservation Biology / Barrows (2004) / PMC/NIH (2022) / IFAS (2020) / Wellbeing Intl. / Duke Space (2023) / JASV / 台湾石虎保育协会 / PMC/NIH (2023)",
    references: [
          {
                title: "Longcore et al. (2009) Conservation Biology - TNR Claims Critical Assessment",
                url: null
          },
          {
                title: "Barrows (2004) - Professional Ethics and Stray Cat Management",
                url: null
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
        icon: "🌿",
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
        icon: "🏙️",
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
        icon: "🎓",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "校猫种群若未有效控管，会对接触过多猫的学生造成过敏风险，以及对小型野鸟的栖地压缩效应。",
        actions: [
          { role: "学校行政", action: "制定校园动物管理办法，明确禁止外带食物喂食" },
          { role: "学生/家长", action: "主动反映校猫问题，透过正式渠道寻求移送收容" },
          { role: "教育单位", action: "纳入生态保育课程，说明流浪动物对生物多样性的冲击" }
        ]
      }
    ]
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
      fullDesc: "私自处决流浪动物在法律框架下属违法行为。尽管在结果论框架下，移除一只猎食个体可客观减少未来发生的动物痛苦，但私刑模式带来的法律秩序破坏与社会恐慌，使其在「外部成本」面仍有负向评分。",
      causeAnalysis: "行为者通常是对流浪动物生态危害有所认知的农牧业者、保育人士或对邻里安全有顾虑的居民。缺乏合法快速移除渠道，是促使私刑行为发生的重要结构性因素。",
      policyImplication: "降低私刑诱因的最有效手段，是建立「可通报、快速响应」的合法移除机制。若政府无法在合理时间内响应民众的流浪动物投诉，私刑事件将难以根绝。"
    },
    scenarios: [
      {
        name: "农牧与偏远地区",
        icon: "🌾",
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
        icon: "🏘️",
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
        icon: "🦌",
        riskLevel: "critical",
        riskLabel: "需特别关注",
        desc: "护林巡查员面临保育动物遭流浪犬攻击与自身执法能力不足的两难，部分案例涉及非正式的动物移除。",
        actions: [
          { role: "护林人员", action: "向主管机关申请紧急移除授权，避免自行处置触法" },
          { role: "林业主管机关", action: "建立保育区流浪动物快速清查与移除机制，提供前线人员法律保护" },
          { role: "NGO", action: "在保育区附近设立人道捕捉与安置中转站，提供合法替代方案" }
        ]
      }
    ]
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
    citation: "Takanosu et al. (2008) / UFAW Genetic Welfare Problems / Bellumori et al. JAVMA (2013) / PMC/NIH (2018)",
    references: [
          {
                title: "Takanosu et al. (2008) - Inherited Disorders in Dogs",
                url: null
          },
          {
                title: "UFAW - Genetic Welfare Problems of Companion Animals",
                url: null
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
        icon: "🏪",
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
        icon: "📱",
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
        icon: "🏚️",
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
        icon: "🏘️",
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
        icon: "🌐",
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
        icon: "🎒",
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
    tooltipContent: "将个体痛苦时间拉长，其结果论累积痛苦高于瞬间虐杀。在此类行为中存在显著的性别分流机制：男性施虐者倾向物理暴力，而女性施虐者则高比例表现为「病态囤积（Animal Hoarding）」。后者常被「爱心拯救」的外衣包装，社会谴责极低，但会导致数十至数百只动物长期处于极度拥挤、营养不良、疾病蔓延与粪尿窒息中，其制造的慢性痛苦深度与生命受害规模在结果论上远超单一物理暴力。",
    citation: "APA (2023) Hoarding Disorder / EBSCO (2024) Animal Hoarding / 社会学与犯罪学解构",
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
      causeAnalysis: "性别分流现象显著：男性施虐倾向直接物理暴力；女性施虐者高比例呈现病态囤积——以「救援爱心」为动机，但实际上制造了数十至数百只动物的系统性慢性痛苦，且主观否认自身的危害性。",
      policyImplication: "应建立强制披露制度：当救援组织的照养数量超过特定门槛，需定期接受动保机关的实地访查，且不得以「保护隐私」拒绝。病态囤积案例应被纳入精神卫生强制评估范畴。"
    },
    scenarios: [
      {
        name: "私人住宅（物理虐待型）",
        icon: "🏠",
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
        icon: "📦",
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
        icon: "⚠️",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "部分以「NGO」或「个人救援」为名的组织，实际上处于囤积与合法救援之间的灰色地带，缺乏财务透明度与动物福利监察机制。",
        actions: [
          { role: "捐款人", action: "要求救援组织定期公开照养数量、动物健康状况与财务报告" },
          { role: "动保主管机关", action: "对照养数量超过门槛的非法人组织实施强制登记与定期稽查" },
          { role: "兽医师", action: "若发现客户长期带入大量健康状况恶劣的动物，可考虑通报动保机关启动调查" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "购买极端畸形宠物",
    desc: "消费行为直接为「明确的残疾与终身痛苦」买单。让少数个体终身承受短吻呼吸道阻塞、折耳软骨剧痛、双陨石色失明或茶杯体水脑症等病痛，属于病态审美的直接资助。",
    subScores: {
      pain: 8,
      scale: 2,
      external: 4
    },
    objTotal: 14,
    condemn: 2,
    outcry: 1,
    tooltipTitle: "病态审美的直接资助",
    tooltipContent: "消费者直接为「明确的残疾与终身痛苦」买单。包含：短吻犬呼吸道阻塞(BOAS)、折耳猫软骨变形剧痛、双陨石色失明、茶杯犬脑积水症。这些病理性痛苦伴随其一生，是消费端对畸形特征的直接资助。",
    citation: "AVMA Companion Animal Breeding Welfare / PMC/NIH (2022) BOAS / RCVS Knowledge (2026) / UFAW Scottish Fold / PMC/NIH (2007) Osteochondrodysplasia",
    references: [
          {
                title: "AVMA - Companion Animal Breeding Welfare guidelines",
                url: null
          },
          {
                title: "PMC/NIH (2022) - BOAS: much more than a respiratory problem",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9673814/"
          },
          {
                title: "RCVS Knowledge (2026) - Health and welfare of Brachycephalic dogs",
                url: "https://www.rcvsknowledge.org/resource/health-and-welfare-of-brachycephalic-dogs/"
          },
          {
                title: "UFAW - Scottish Fold – Osteochondrodysplasia",
                url: "https://www.ufaw.org.uk/cats/scottish-fold-osteochondrodysplasia"
          },
          {
                title: "PMC/NIH (2007) - Osteochondrodysplasia in three Scottish Fold cats",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2868141/"
          }
    ],
    detailContent: {
      fullDesc: "极端畸变品种是「人类审美偏好凌驾动物生理健康」的最直接呈现。双色（Merle）基因的纯合子导致耳聋与眼盲；折耳基因全身软骨异常导致持续骨骼疼痛；短吻特征使动物终身在轻度窒息状态下生活。这些痛苦是可预期、不可逆的设计结果。",
      causeAnalysis: "消费者通常不了解其购买行为所资助的生理代价。社交媒体上「可爱」的外观呈现，有效遮蔽了动物实际的痛苦状态。部分消费者甚至认为动物「天生如此」而非「被设计成如此」。",
      policyImplication: "荷兰、德国等国已禁止特定极端畸形品种的繁殖与销售。应参考国际进展，建立「禁止繁殖清单」制度，并要求所有短吻犬的买卖必须附带 BOAS 筛检报告。"
    },
    scenarios: [
      {
        name: "宠物电商与网络销售",
        icon: "🛍️",
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
        icon: "🐾",
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
        icon: "💎",
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
  },
  {
    id: 7,
    name: "养殖纯种猫狗贩卖",
    desc: "将基因缺陷与母体生育耗损「批发化」。虽然不会刻意施虐，但量产数以百计带有遗传病风险的生命，同时对流浪动物收容系统带来结构性的排挤压力。",
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
    citation: "HSUS Puppy Mills Investigative Report / Applied Animal Behaviour Science (2011) / HSVMA Veterinary Report / ASPCA (2026)",
    references: [
          {
                title: "HSUS - Puppy Mills Investigative Report",
                url: null
          },
          {
                title: "Applied Animal Behaviour Science (2011) - Mental health of dogs formerly used as breeding stock",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0168159111003005"
          },
          {
                title: "HSVMA - Veterinary Report on Puppy Mills",
                url: "https://www.humanevma.org/assets/pdfs/hsvma_veterinary_report_puppy_mills.pdf"
          },
          {
                title: "ASPCA (2026) - Report on Puppy Mill Cruelty reveals USDA failure",
                url: "https://www.aspca.org/about-us/press-releases/aspca-report-puppy-mill-cruelty-reveals-usdas-continued-failure-protect"
          }
    ],
    detailContent: {
      fullDesc: "商业繁殖场（俗称「繁殖工厂」或「宠物工厂」）的核心问题在于规模化的母体剥削——种母犬猫在密闭笼具中连续发情繁殖，直至生育能力耗尽才可能被弃置或安乐死。这是系统性的、无视动物感知的生产过程。",
      causeAnalysis: "此行为的道德谴责分极低（3 分），原因在于「繁殖业者」在法律框架下属合法商业活动，且消费者不直接目睹母体的生活条件。供应链的不透明性，是此行为维持社会低谴责的结构性因素。",
      policyImplication: "强制推行「繁殖业者公开登记」制度，要求每只出售动物均可追溯至合法登记的繁殖场，是目前最具可行性的管理手段。同时限制每只种母的年度生育次数（如最多 2 胎），可直接降低母体的生育耗损。"
    },
    scenarios: [
      {
        name: "地下繁殖场",
        icon: "🏭",
        riskLevel: "critical",
        riskLabel: "需立即通报",
        desc: "未登记的地下繁殖场在农村或工业区租用场地，以恶劣条件大规模生产纯种幼犬猫，幼体健康不佳、基因品质不稳定，却透过网络以「自家繁殖」包装销售。",
        actions: [
          { role: "知情民众", action: "向动保机关举报可疑的大规模繁殖场所，提供地址与照片等具体信息" },
          { role: "动保机关", action: "执行定期突击查缉，并对未登记繁殖业者处以高额罚款" },
          { role: "农业农村部", action: "建立宠物繁殖场全面登记制度，设定最低饲养空间与健康标准" }
        ]
      },
      {
        name: "合法但过度繁殖的业者",
        icon: "📋",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "持有合法执照的繁殖业者在法律边缘操作——符合最低标准但仍在过度繁殖，母体在恶劣但「合法」的条件下被反复生育。",
        actions: [
          { role: "消费者", action: "主动要求参观繁殖场，评估母体生活环境是否符合动物基本福利" },
          { role: "立法机关", action: "提高合法繁殖场的最低标准，缩小法律允许范围与动物福利要求之间的落差" },
          { role: "兽医师", action: "拒绝为具明显过度繁殖迹象的种母提供繁殖合格证明" }
        ]
      },
      {
        name: "收容系统的结构排挤",
        icon: "🐕",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "繁殖业者持续供给市场的同时，收容所中的混种犬猫因市场需求低落而面临更高的安乐死压力，形成「繁殖业繁荣、收容动物死亡」的反比关系。",
        actions: [
          { role: "潜在饲主", action: "优先考虑领养收容所动物，其个性通常比幼年纯种动物更稳定可预期" },
          { role: "地方政府", action: "设计繁殖业者「回购义务」制度，要求业者对其繁殖个体的弃养负有部分责任" },
          { role: "动保NGO", action: "强化收容所动物的媒合营销，缩小与纯种动物在「需求能见度」上的差距" }
        ]
      }
    ]
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
    citation: "Veterinary Journal: Genetic welfare problems / RCVS Knowledge (2026) / Cambridge Animal Welfare (2021) / Humane World (China Meat Trade)",
    references: [
          {
                title: "Veterinary Journal - Genetic welfare problems of companion animals",
                url: null
          },
          {
                title: "RCVS Knowledge (2026) - Health and welfare of Brachycephalic dogs",
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
        icon: "😿",
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
        icon: "🫖",
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
        icon: "💔",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "极端畸变品种的终身医疗费用远高于一般品种，当饲主无力负担时，弃养率显著高于均值，且因需要特殊医疗照护，在收容环境中存活率低、适养媒合困难。",
        actions: [
          { role: "收容机构", action: "建立具备特殊品种照护能力的转介网络，避免畸变品种动物在一般收容环境中恶化" },
          { role: "繁殖业者", action: "建立「弃养回收机制」，对其繁殖动物的后续命运负有责任" },
          { role: "政府", action: "建立繁殖业者连带负担部分弃养安置成本的制度，使外部成本内部化" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "网络组织型商业虐待",
    desc: "通过加密群组进行虐杀视频贩售与「定制付费订单」。金钱诱因驱动大量捕捉街头动物（尤其是 TNR 亲人个体）制造内容；同时对举报者施以开盒（Doxing）与跨国网络恐吓，社会威胁严重外溢至人身安全。",
    subScores: {
      pain: 10,
      scale: 5,
      external: 7
    },
    objTotal: 22,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "暴力的数字化资本化（类型 C）",
    tooltipContent: "加密群组内部发展出「付费定制订单」商业模式——买家指定物种与施虐方式，施虐者以虚拟货币结算视频。此犯罪创造了「同温层认同」的群体极化机制。当民众举报时，组织会动用恶意开盒与跨国网络恐吓。其危害已正式超越动物福利，升级为威胁人类社会与信息安全的网络组织犯罪。",
    citation: "BBC World Service「Monkey Haters」调查报告, 2023 / SMACC 年度报告, 2024 / 中国 Telegram 网络组织虐杀宠物「杰克辣条」事件, 2023",
    references: [
          {
                title: "BBC World Service (2023) - 'Monkey Haters' investigative report on cyber abuse (Asia)",
                url: null
          },
          {
                title: "SMACC (Social Media Animal Cruelty Coalition, 2024) - Annual Report on online animal abuse",
                url: null
          },
          {
                title: "中国 Telegram 网络组织虐杀宠物「杰克条」事件调查 (2023) (Asia)",
                url: null
          },
          {
                title: "新闻媒体调查报道 (VICE / The Guardian / Reuters) 网络动物虐待组织与群组",
                url: null
          },
          {
                title: "Animal Legal Defense Fund (ALDF.org) - 网络虐待倡议与法律分析",
                url: null
          },
          {
                title: "FBI NIBRS - 动物虐待一级重罪追踪数据 (自 2016 年起)",
                url: null
          },
          {
                title: "中华人民共和国台湾地区相关农业动保部门及警政刑事部门侦查案件记录",
                url: null
          }
    ],
    isSupplemental: true,
    detailContent: {
      fullDesc: "网络组织型商业虐待是本指数中唯一达到「跨国组织犯罪」等级的行为类型。其威胁已不限于动物福利：对举报者的开盒恐吓、跨国追踪骚扰，使其成为威胁人身安全的网络暴力犯罪，并涉及洗钱（加密货币结算）与跨国司法管辖等复杂议题。",
      causeAnalysis: "此犯罪的驱动力是「需求端的群体认同」——内容消费者在加密社群中建立共同的扭曲世界观，彼此强化。供应端（施虐者）受金钱诱因驱动，捕捉最易接近的 TNR 亲人猫作为目标。两端的匿名性使传统执法极为困难。",
      policyImplication: "应建立跨国执法合作机制，将此类犯罪纳入国际刑警组织的协查范畴。在国内，需修订法规使对举报者的开盒恐吓成为独立刑事罪名，以保护倡议者的人身安全。"
    },
    scenarios: [
      {
        name: "加密通讯平台（Telegram 等）",
        icon: "🔐",
        riskLevel: "critical",
        riskLabel: "跨国犯罪",
        desc: "犯罪组织在加密群组中建立商业运作体系——付费订阅、定制订单、虚拟货币结算。群组成员相互强化扭曲认知，形成自我封闭的极化生态圈。",
        actions: [
          { role: "民众", action: "若无意间进入此类群组，立即截图保存并向 SMACC 或 IFAW 等国际组织举报" },
          { role: "平台业者", action: "建立 AI 侦测机制识别动物虐待关键词组合，配合各国执法机关提供账号信息" },
          { role: "公安机关", action: "专责单位追踪加密货币金流，与 Interpol 协作锁定组织核心成员" }
        ]
      },
      {
        name: "社交媒体的公开传播",
        icon: "📡",
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
        icon: "🛡️",
        riskLevel: "critical",
        riskLabel: "人身安全威胁",
        desc: "举报此类犯罪的个人面临严重的人身安全威胁：开盒（公开个人信息）、跨国追踪、工作骚扰，以及对家人的威胁。此威胁严重抑制公民举报意愿。",
        actions: [
          { role: "举报者", action: "优先使用匿名渠道（如 SMACC 的匿名提交表单），不要以个人账号直接接触组织成员" },
          { role: "政府/警方", action: "提供动物犯罪举报者的人身保护机制，并将开盒恐吓纳入刑事追诉" },
          { role: "媒体", action: "报道此议题时注意保护消息来源，避免不经意揭露举报者身份" }
        ]
      }
    ]
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
    tooltipContent: "长期喂食促使流浪犬猫高密度群聚与繁殖。尤其是流浪猫具备刺激性排卵与倒刺交配的生理创伤，且发情频率极高，无节制喂食等同于资助这部「痛苦生育机器」几何级膨胀。高密度繁殖进而引发猫瘟、犬细小病毒爆发，导致无数幼体在恶劣环境中失明、病死或遭路杀。",
    citation: "Loss et al. (2013) Nature Comm. / 中华人民共和国国家林业和草原局相关生态数据 / The Wildlife Society (2025) / USDA APHIS / 中华民国苗栗县政府石虎报告 / ScienceDirect (2025)",
    references: [
          {
                title: "Loss et al. (2013) Nature Comm. - Impact of free-ranging domestic cats on wildlife",
                url: null
          },
          {
                title: "中华人民共和国国家林业和草原局 - 野生动物管理相关数据",
                url: null
          },
          {
                title: "The Wildlife Society (2025) - Feral and Free-Ranging Domestic Cats Issue Statement",
                url: "https://wildlife.org/tws-issue-statement-feral-and-free-ranging-domestic-cats/"
          },
          {
                title: "USDA APHIS - Free-ranging and Feral Cats (PDF)",
                url: "https://www.aphis.usda.gov/sites/default/files/free-ranging-and-feral-cats.pdf"
          },
          {
                title: "中华人民共和国台湾地区苗栗县政府 - 豹猫保育与管理工作报告",
                url: "https://www.miaoli.gov.tw/eng/News_Content.aspx?n=434&s=271995"
          },
          {
                title: "ScienceDirect (2025) - Incidence and prevalence of rabies virus infections in Asia",
                url: "https://www.sciencedirect.com/science/article/pii/S2352771425001387"
          }
    ],
    detailContent: {
      fullDesc: "大量滥喂在本指数中获得最高客观危害分数（27 分），但社会道德谴责极低（2 分），呈现最大的认知偏差。其危害机制是系统性的：喂食→种群增长→密度上升→繁殖创伤扩大→传染病爆发→幼体高夭折→原生生态崩坏。每一环节都制造大量动物痛苦，但行为者通常以「爱心」自我定义，完全不自知。",
      causeAnalysis: "大量滥喂者往往具备真实的同理心，但欠缺生态系统的整体思维。其行为的危害完全透过间接机制产生，使行为者难以感知因果连结。「看到动物吃到饱的满足感」遮蔽了对隐性夭折与生态破坏的认知。",
      policyImplication: "针对滥喂行为的法规化介入，需要在「爱护动物的情感诉求」与「公共卫生与生态保护的科学依据」之间建立有效沟通。单纯禁止无法建立共识，需要配套的替代行为引导（如指定收容喂食点）与透明的生态监测数据公开。"
    },
    scenarios: [
      {
        name: "自然保育区与栖地边缘",
        icon: "🌲",
        riskLevel: "critical",
        riskLabel: "极端威胁",
        desc: "滥喂点吸引高密度流浪猫犬聚集于保育区边缘，豹猫、穿山甲、原生鸟类与爬行类遭受系统性猎杀压力。每一只在此存活的流浪猫，平均每年猎杀数十至百只原生野生动物。",
        actions: [
          { role: "民众", action: "严格遵守保育区喂食禁令，举报违规行为，理解「让动物饿着」有时是保护更多动物的正确选择" },
          { role: "林业主管机关", action: "设置智慧监测系统追踪滥喂热点，并在现场配置充足的执法人员" },
          { role: "地方政府", action: "在保育区周边社区发展替代方案：建立合法的社区猫管理计划，将猫从保育区边缘迁移" }
        ]
      },
      {
        name: "城市社区大规模喂食点",
        icon: "🏙️",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "固定的大规模喂食点造成犬猫高密度群聚，形成传染病爆发的温床（猫瘟、犬细小、狂犬病威胁），并因路杀、追咬事件引发公共安全问题。",
        actions: [
          { role: "喂食者", action: "若欲协助街头动物，请在动保机关指导下建立「定点、定量、定时」的规范化管理模式" },
          { role: "社区居民", action: "向居委会反映，要求地方政府提供动保机关介入协调，建立社区动物管理机制" },
          { role: "动保机关", action: "提供「负责任喂食」的教育资源，并积极媒合收养，降低街头种群基数" }
        ]
      },
      {
        name: "校园与机构内的长期喂食",
        icon: "🏫",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "大学校园、工厂、医院等封闭或半封闭机构内，长年累积的「校猫种群」往往超过机构的管理能力，形成疾病传播风险与设施卫生问题。",
        actions: [
          { role: "机构管理者", action: "建立校园/机构动物管理委员会，制定种群控制计划，禁止未授权的个人喂食行为" },
          { role: "个别喂食者", action: "配合机构管理计划，停止私下设置喂食点，将资源集中投入绝育与送养" },
          { role: "动保机关", action: "提供机构动物管理辅导服务，协助建立合规的动物管理 SOP" }
        ]
      }
    ]
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
