export const hazardData = {
    id: 3,
    name: "購買純種貓狗",
    desc: "買方雖妥善照顧，但資金助長了繁殖產業。讓少數個體終身承受輕至中度的人擇基因缺陷（如摺耳、短吻犬呼吸問題），並佔據收容資源。",
    subScores: {
      pain: 4,
      scale: 2,
      external: 3
    },
    objTotal: 9,
    condemn: 1,
    outcry: 1,
    tooltipTitle: "人擇基因缺陷的痛苦",
    tooltipContent: "純種寵物（如摺耳貓、短吻犬）在選育特徵的過程中，常固化了嚴重的遺傳疾病，如骨骼發育不良、短吻犬呼吸道阻塞綜合症（BOAS）。",
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
      fullDesc: "購買純種動物的消費行為，其道德成本主要透過供應鏈傳遞——消費端的需求直接驅動繁殖產業的規模。即便個別買家善待動物，其消費決策仍是對基因缺陷固化與繁殖剝削的資助。",
      causeAnalysis: "消費者通常缺乏對品種基因問題的完整認知。選擇純種動物的動機多為外觀審美、可預期的個性特質，或社會認同。這些動機本身合理，但資訊不透明使消費者難以做出知情選擇。",
      policyImplication: "強制要求寵物店與繁殖業者揭露基因健康篩檢報告，是降低消費端傷害的有效政策工具。同時，提升「以領養代替購買」的能見度，可在不禁止購買的前提下，引導部分需求轉移至收容系統。"
    },
    scenarios: [
      {
        name: "都市寵物消費市場",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "寵物店集中展示特定品種，在高人流環境中激發衝動型購買。購買行為直接驅動上游繁殖業者擴產，形成需求-供應的正向回饋迴路。",
        actions: [
          { role: "消費者", action: "購買前主動詢問基因健康報告，並比較同等費用的領養選項" },
          { role: "寵物店業者", action: "主動揭露動物來源與健康篩檢資訊，配合動保法規登記制度" },
          { role: "地方政府", action: "強化寵物業者管理，定期稽查動物來源合法性" }
        ]
      },
      {
        name: "社群媒體影響圈",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "網紅展示特定品種動物，引發追隨者的模仿購買熱潮。熱門品種的需求暴增往往超越繁殖業者的正規能力，催生品質低落的地下繁殖場。",
        actions: [
          { role: "內容創作者", action: "在展示寵物時主動說明品種健康風險與來源，避免無意間替不當繁殖業者打廣告" },
          { role: "平台", action: "對寵物銷售相關內容加掛動保法規提示資訊" },
          { role: "動保機關", action: "監測社群熱門品種趨勢，提前部署查緝資源" }
        ]
      },
      {
        name: "收容系統壓力端",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "純種寵物熱潮使收容所空間被「流行品種的棄養高峰」周期性擠壓，造成非熱門品種的安樂死配額被壓縮。",
        actions: [
          { role: "民眾", action: "考慮領養收容所的成犬，牠們有穩定個性且等待時間長" },
          { role: "收容機構", action: "加強特定品種動物的安置媒合，並對潛在養主提供品種教育" },
          { role: "中央政府", action: "研擬純種動物棄養的溯源追責機制，強化繁殖業者的飼主責任連結" }
        ]
      }
    ],
  relationship: {
    agents: [
      {
        role: "品種消費者",
        note: "動機為外觀審美、可預期個性或社會認同，通常缺乏對品種基因問題的完整認知"
      },
      {
        role: "繁殖業者（供給端）",
        note: "受市場需求驅動的合法或非法商業經營者"
      }
    ],
    transmission: "消費端需求 → 驅動繁殖產業規模擴張 → 種母在密閉籠具中反覆生育 → 近親繁殖固化基因缺陷 → 子代承受遺傳病終身痛苦 → 收容所動物被結構性排擠",
    victims: [
      {
        icon: "🧬",
        category: "帶遺傳缺陷之子代個體",
        entities: "摺耳貓、短吻犬等純種子代",
        desc: "終身承受輕至中度的人擇基因缺陷——骨骼發育不良、短吻呼吸問題（BOAS）、心臟病、關節退化等。"
      },
      {
        icon: "🤰",
        category: "繁殖場母體",
        entities: "種母犬貓",
        desc: "在密閉籠具中反覆發情繁殖，承受高頻率生育的生理耗損，直至生育能力耗盡被棄置。"
      },
      {
        icon: "🏠",
        category: "收容系統中的動物",
        entities: "收容所待領養犬貓",
        desc: "純種消費佔據了潛在領養家庭的需求，健康的收容所犬貓因「市場能見度低」而面臨更高的安樂死壓力。"
      }
    ]
  }
};