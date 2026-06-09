export const hazardData = {
    id: 4,
    name: "虐殺遊蕩犬貓",
    desc: "將單一個體的痛苦最大化至死。畫面最為殘忍，但損害完全收斂於該單一動物身上，對社會運作與整體自然生態毫無外溢影響。",
    tooltipTitle: "極端痛苦與危害邊界",
    tooltipContent: "視覺衝擊與社會道德譴責程度最高。在結果論模型中，其「個體痛苦深度」達滿分，但因受限於個體施暴能力，其損害被限制於極小規模，無外部生態擴散性。研究顯示其施虐動機可分為雙軌路徑：一是病理性虐待（ASPD/反社會型），以折磨生命獲取掌控感或快感；二是轉移性虐待（弱弱相殘型），施虐者將自身無力處理的心理與社會危機，向生態最底層的動物轉嫁。",
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
      fullDesc: "虐殺行為在道德直覺層面引發最強烈的社會譴責，是動保倡議最易動員輿論的議題類型。然而在結果論框架下，其危害邊界完全收斂於單一個體——高度的個體痛苦，配合極低的受害規模與外部成本，使其客觀危害分數低於許多社會感知不嚴重的行為。",
      causeAnalysis: "研究識別兩類主要施虐路徑：(1) 病理性：具 ASPD 特質者以折磨作為掌控感的來源，此類人格具跨物種暴力傾向（連結家暴與殺人犯罪）；(2) 轉移性：社會弱勢者將無力宣洩的挫折，轉嫁至防禦力最低的流浪動物身上。",
      policyImplication: "對虐殺行為最有效的介入，除法律面的加重刑責外，更應強化心理衛生篩查的連結——施虐者的精神狀態處置，比單純刑事懲罰更能降低未來的人際暴力風險。"
    },
    scenarios: [
      {
        name: "社區公共空間",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即通報",
        desc: "單起虐殺事件即可引發社區恐慌，居民人身安全感受影響。施虐者若具病理性人格，可能對相關人員（如餵食志工）產生後續威脅。",
        actions: [
          { role: "目擊者", action: "立即報警並保存影像證據，切勿公開分享受害畫面以免二次傷害" },
          { role: "動保機關", action: "配合警政單位追查，提供相關法規諮詢與社工介入評估" },
          { role: "社區", action: "提供心理支持資源給受影響的動物照護者，避免創傷擴散" }
        ]
      },
      {
        name: "網路傳播環境",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "虐殺影像在社群平台的擴散造成大規模次級創傷，同時可能助長「博眼球」的模仿動機，或成為組織型商業虐待的招募素材。",
        actions: [
          { role: "一般網民", action: "不轉發、不點開虐殺影像；改以文字描述舉報，保護自身心理健康" },
          { role: "平台業者", action: "建立動物虐待影像的快速下架機制，並向執法機關提供帳號資訊" },
          { role: "動保倡議者", action: "以案件的法律進展為傳播重點，而非重複呈現受害畫面" }
        ]
      },
      {
        name: "學校或青少年群體",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "青少年施虐者的出現往往是家庭暴力或同儕壓力環境的警訊指標。學校系統的早期介入可阻斷其人際暴力的發展軌跡。",
        actions: [
          { role: "教師/輔導人員", action: "發現動物虐待行為時，啟動校園通報程序並轉介社工評估家庭環境" },
          { role: "家長", action: "關注子女對弱勢動物的態度，發現異常應主動尋求心理健康諮詢" },
          { role: "社工系統", action: "將動物虐待行為納入家庭風險評估指標，與兒少保護機制整合" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "病理性施虐者（ASPD 型）",
        note: "具反社會人格特質，以折磨作為掌控感的來源，行為具高度計畫性與殘酷性"
      },
      {
        role: "轉移性施虐者（弱弱相殘型）",
        note: "社會弱勢者將無力宣洩的結構性壓力，轉嫁至防禦力最低的流浪動物"
      }
    ],
    transmission: "人格病理或結構性壓力 → 對單一動物個體施以極端物理暴力 → 個體痛苦最大化至死亡 → 危害完全收斂於該單一個體 → 視覺衝擊引發社會恐慌",
    victims: [
      {
        icon: "💀",
        category: "被虐殺之動物個體",
        entities: "遭施虐的單一遊蕩犬貓",
        desc: "承受極端、漫長且無可逃避的肉體與精神折磨，痛苦深度達滿分，生命被以最殘忍方式剝奪。"
      },
      {
        icon: "🧠",
        category: "社會心理與安全感",
        entities: "社區居民、兒童、動物照護志工",
        desc: "虐殺畫面造成大規模次級心理創傷（PTSD）；病理性施虐者具跨物種暴力傾向，存在向人類暴力轉化的犯罪學風險。"
      }
    ],
    beneficiaries: [
      {
        icon: "🚫",
        category: "結果論框架下：無可辯護的系統性受益方",
        entities: "（此行為在所有維度均為純損害）",
        desc: "在純結果論的嚴格框架下，虐殺遊蕩犬貓不產生任何可辯護的系統性正向結果：個體痛苦達滿分，損害完全收斂於受害動物本身，無任何生態、公衛或社會面的正向外溢效應。",
        caveat: "本模型刻意呈現「無受益方」以完整揭示：此行為是本指數中在結果論下毫無任何正向計量值的條目之一。這與量產畸變寵物「市場需求被滿足」的扭曲收益截然不同。"
      }
    ]
  }
};