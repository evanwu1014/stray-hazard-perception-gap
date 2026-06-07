export const hazardData = {
    id: 8,
    name: "量產極端畸變寵物",
    desc: "制度化的基因虐待。為了迎合市場，刻意將痛苦寫入基因編碼並批發製造。極高的母體難產率與子代夭折率，導致龐大的醫療資源消耗與最終棄養負擔。",
    subScores: {
      pain: 9,
      scale: 8,
      external: 7
    },
    objTotal: 24,
    condemn: 3,
    outcry: 3,
    tooltipTitle: "制度化基因折磨與繁殖風險",
    tooltipContent: "為迎合市場，刻意將痛苦寫入基因編碼並批發製造。極高的母體難產率與子代夭折率，導致龐大的醫療資源消耗與最終棄養負擔。育種者常使用近親交配，刻意保留病理性矮小與特徵，使子代承受不可逆的系統性折磨。",
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
      fullDesc: "量產極端畸變寵物是本指數中「社會輿論譴責最低、客觀危害最高」落差最大的類別之一。其危害橫跨三個維度：(1) 每隻個體承受的基因性終身慢性痛苦（高痛苦深度）；(2) 受影響個體數量龐大（高規模）；(3) 對獸醫資源、棄養安置系統的結構性消耗（高外部成本）。",
      causeAnalysis: "繁殖業者採用近親交配固化病理性特徵，如法鬥犬（BullDog）的短吻、茶杯型（Teacup）動物的極端矮小化。這些特徵在市場上獲得溢價，創造了強烈的經濟誘因使業者持續投入。消費端的無知與平台行銷的美化，共同維持了這條傷害鏈。",
      policyImplication: "荷蘭已於 2023 年禁止短吻特徵超過特定程度的犬隻銷售，並設計「鼻吻指數」標準。臺灣應參考此框架，由農業部與獸醫師公會共同訂定「禁止量產畸形品種清單」，並對違規業者處以吊照與高額罰款。"
    },
    scenarios: [
      {
        name: "短吻犬貓量產（BOAS）",
        icon: "",
        riskLevel: "critical",
        riskLabel: "極端危害",
        desc: "法鬥、巴哥、英鬥、波斯貓等極端短吻品種，因頭骨結構導致終身呼吸道阻塞（BOAS）。量產環境下母體高難產率（剖腹產率超過 90%），子代在生命早期即承受慢性呼吸窘迫。",
        actions: [
          { role: "潛在購買者", action: "了解 BOAS 的生理機制，拒絕購買需要「整形手術才能正常呼吸」的品種" },
          { role: "獸醫師公會", action: "公開發表聲明，拒絕協助證明具極端短吻特徵的動物「健康合格」" },
          { role: "農業部", action: "引入「鼻吻指數」標準，對超過閾值的短吻品種禁止繁殖場登記" }
        ]
      },
      {
        name: "茶杯型/極端矮化品種",
        icon: "",
        riskLevel: "critical",
        riskLabel: "極端危害",
        desc: "茶杯貴賓、迷你馬爾濟斯等極端矮化品種，常以近親交配固化矮小特徵，導致腦積水（水腦症）、低血糖症、骨骼脆化等系統性疾病，部分個體難以存活至成年。",
        actions: [
          { role: "消費者", action: "認識「茶杯型」並非正式品種登記類別，而是繁殖業者製造的行銷概念" },
          { role: "動保機關", action: "在寵物買賣稽查中，將茶杯型動物的健康狀況列為重點查核項目" },
          { role: "立法機關", action: "研擬「最小體型繁殖限制」法規，防止極端矮化育種繼續合法進行" }
        ]
      },
      {
        name: "棄養後的系統性衝擊",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "極端畸變品種的終身醫療費用遠高於一般品種，當飼主無力負擔時，棄養率顯著高於均值，且因需要特殊醫療照護，在收容環境中存活率低、適養媒合困難。",
        actions: [
          { role: "收容機構", action: "建立具備特殊品種照護能力的轉介網絡，避免畸變品種動物在一般收容環境中惡化" },
          { role: "繁殖業者", action: "建立「棄養回收機制」，對其繁殖動物的後續命運負有責任" },
          { role: "政府", action: "建立繁殖業者連帶負擔部分棄養安置成本的制度，使外部成本內部化" }
        ]
      }
    ]
  };
