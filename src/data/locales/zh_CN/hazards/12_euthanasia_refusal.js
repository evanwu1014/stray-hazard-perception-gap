export const hazardData = {
    id: 12,
    name: "拒绝人道安乐死（情感性延命）",
    desc: "善意悖论在生命末端的具体展现。饲主或救援者出于不舍，对已陷入末期病痛（晚期癌症、器官衰竭、重大创伤、神经退化）且生活品质崩溃的动物拒绝或无限延后人道安乐死，以『延命』之名延长其无法逆转的痛苦过程。在『生命至上』教条下，这种行为常被赞扬为有爱心，实则是高强度、长时程的个体折磨。",
    tooltipTitle: "被赞扬的痛苦延长",
    tooltipContent: "当医疗已无法改善预后、动物只剩持续恶化的疼痛、呼吸困难、无法进食与失禁等状态时，人道安乐死是终止痛苦的福利选项。然而情感性依附、罪恶感、对『放弃』的恐惧，以及『活着就是好』的教条，会驱使饲主反复进行无效医疗并延后决定。结果是个体承受长达数周甚至数月的高强度痛苦——这份痛苦因为被包装在『不放弃的爱』之下，几乎不会受到任何道德谴责。",
    citation: "VCA Animal Hospitals / VCA Canada / Lap of Love 生活品质评估表。相关资料说明 Dr. Alice Villalobos 之 HHHHHMM 量表，以 Hurt、Hunger、Hydration、Hygiene、Happiness、Mobility、More good days than bad 七项指标，协助判断末期动物之安宁照护与人道安乐死时点。",
    references: [
      {
        title: "VCA Animal Hospitals。Quality of Life at the End of Life for Your Cat：Dr. Villalobos' quality-of-life scale。",
        url: "https://vcahospitals.com/st-marys/know-your-pet/quality-of-life-at-the-end-of-life-for-your-cat"
      },
      {
        title: "VCA Canada Animal Hospitals。Quality of Life at the End of Life for Your Dog：HHHHHMM categories and >35 threshold。",
        url: "https://vcacanada.com/know-your-pet/quality-of-life-at-the-end-of-life-for-your-dog"
      },
      {
        title: "Lap of Love。Quality of Life Scale PDF。",
        url: "https://www.lapoflove.com/how-will-i-know-it-is-time/lap-of-love-quality-of-life-scale.pdf"
      }
    ],
    detailContent: {
      fullDesc: "本条目客观总分 11 分，主要来自极高的『个体痛苦深度（9）』，受害规模与外部成本皆低（属封闭性的个体事件）。道德直觉与舆论皆仅 1 分，呈现负向偏移（-2.7）——因为延命被社会理解为爱与责任的展现，痛苦本身则因缺乏血腥画面、发生在私密的医疗情境而完全隐形。这是本指数核心命题『没有边界的善意是最可怕的武器』在个体尺度的精确例证：与生态尺度的滥喂相对应，此处的善意悖论作用在单一生命的末端。",
      causeAnalysis: "拒绝安乐死的心理机制包含：对失去的预期性哀伤与否认、把安乐死等同于『杀死』或『放弃』的道德框架、以及将自身的不舍投射为动物的求生意愿。社会层面则有『生命至上／绝对 no-kill』论述的推波助澜，使『让它自然走完』被建构为唯一道德正确的选项，反而剥夺了动物免于无谓痛苦的权益。经济诱因（部分情境下的持续医疗消费）亦可能强化延命倾向。",
      policyImplication: "政策应建立『以动物福利为核心』的末期决策框架，而非单纯的延命崇拜。具体包含：推广标准化的生活品质评估量表（如疼痛、进食、活动、尊严等指标）作为安乐死决策依据、强化兽医于末期沟通与安宁疗护的训练、在公共论述中区分『放弃治疗』与『终止痛苦』的本质差异，并对『绝对 no-kill』教条可能造成的福利伤害保持批判性检视。",
      comparisonCaveat: "本条目与『私自处决(2)』『虐杀(4)』有本质差异：后两者是外加于健康动物的暴力；本条目则是对『已无法挽回的末期病痛个体』未能及时终止痛苦。前者是『不该杀而杀』，后者是『该止痛而不止』，方向相反但同样造成可避免的痛苦。"
    },
    scenarios: [
      {
        name: "末期重症的居家延命",
        icon: "hospital",
        riskLevel: "critical",
        riskLabel: "极端痛苦",
        desc: "晚期癌症、肾衰竭、心衰竭等末期动物，已出现持续疼痛、呼吸困难、无法进食、失禁与意识恶化，预后明确不可逆。饲主因不舍反复进行无效的延命医疗，使动物在高强度痛苦中拖延数周至数月。",
        actions: [
          { role: "饲主", action: "以动物的生活品质而非自身不舍为决策核心，与兽医坦诚讨论预后，必要时选择人道安乐死终止无谓痛苦" },
          { role: "兽医师", action: "主动提供客观的生活品质评估与安宁／安乐选项，避免仅迎合饲主延命意愿而持续无效医疗" },
          { role: "家属", action: "支持主要照顾者面对哀伤与罪恶感，协助其做出以动物福利为依归的决定" }
        ]
      },
      {
        name: "收容／救援机构的 no-kill 教条",
        icon: "home",
        riskLevel: "high",
        riskLabel: "高风险",
        desc: "部分标榜『绝对零安乐死』的收容或救援单位，为维持 no-kill 形象，对重病、重伤或极度痛苦且无复原可能的动物仍拒绝人道处置，使其在笼舍中长期受苦至自然死亡，将机构声誉置于动物福利之上。",
        actions: [
          { role: "机构管理者", action: "建立以福利为核心的医疗与安乐死准则，区分『可救援』与『该止痛』，不以零安乐死口号牺牲个体福利" },
          { role: "捐款人／支持者", action: "理解负责任的安乐死是动物福利的一环，避免以『零扑杀』为唯一道德标准施压机构" },
          { role: "主管机关", action: "制定收容末期动物的人道处置指引与稽核标准，防止教条化延命造成的隐性受苦" }
        ]
      },
      {
        name: "高龄退化动物的长期失能",
        icon: "paw",
        riskLevel: "moderate",
        riskLabel: "中度风险",
        desc: "高龄犬猫因认知退化、严重关节退化或长期卧床而丧失基本生活品质（慢性疼痛、无法自主进食排泄）。照顾者在情感与罪恶感下反复延后决定，使动物在尊严与舒适持续流失的状态下延长存活。",
        actions: [
          { role: "照顾者", action: "定期以客观量表评估生活品质，将『有尊严地善终』纳入照护目标，而非单纯追求存活天数" },
          { role: "兽医师", action: "协助建立可量化的福利恶化指标与决策时点，提供安宁疗护与疼痛控制方案" },
          { role: "动保教育单位", action: "推广『善终也是善待』的观念，破除延命即等于有爱的单一框架" }
        ]
      }
    ]
,
  relationship: {
    agents: [
      {
        role: "情感性延命的饲主／照顾者",
        note: "出于不舍、罪恶感与对『放弃』的恐惧，将自身的哀伤投射为动物的求生意愿，延后终止痛苦的决定"
      },
      {
        role: "教条化的 no-kill 机构",
        note: "为维持『绝对零安乐死』形象，对无复原可能的重症个体拒绝人道处置，将声誉置于福利之上"
      }
    ],
    transmission: "末期／重症个体出现不可逆的痛苦 → 情感依附或 no-kill 教条驱动拒绝安乐死 → 反复无效医疗或笼舍久候 → 个体承受长时程高强度痛苦 → 因被包装为『爱』与『不放弃』而完全免于社会谴责 → 痛苦在私密医疗情境中隐形运转",
    victims: [
      {
        icon: "pain",
        category: "末期与重症动物个体",
        entities: "晚期癌症、器官衰竭、重大创伤与神经退化个体",
        desc: "在预后明确不可逆的状态下，被迫延长承受持续疼痛、呼吸困难、无法进食与失禁的高强度痛苦，丧失善终的福利。"
      },
      {
        icon: "brain",
        category: "照顾者本身的心理耗损",
        entities: "主要照顾者与家属",
        desc: "长期目睹动物受苦、反复无效医疗带来的精神与经济耗损，以及延后决定所累积的内疚与创伤。"
      }
    ],
    beneficiaries: [
      {
        icon: "paw",
        category: "情感上获得缓冲的照顾者",
        entities: "不舍放手的饲主与重视形象的机构",
        desc: "短期内延后了面对失去的哀伤，或维持了『从不放弃』的道德形象。",
        caveat: "此『收益』是以动物延长的痛苦为代价换来的情感缓冲或声誉。当『活着』本身已不再对动物有益、只剩痛苦时，延命便不是善待而是伤害——这正是负向偏移所揭示的善意盲区。"
      }
    ]
  }
};
