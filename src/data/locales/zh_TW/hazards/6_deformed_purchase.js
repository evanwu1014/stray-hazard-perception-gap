export const hazardData = {
    id: 6,
    name: "購買極端畸變寵物",
    desc: "消費行為直接為「明確的殘疾與終身痛苦」買單。讓少數個體終身承受短吻呼吸道阻塞、摺耳軟骨劇痛、雙重雲石色基因（double merle）致盲或茶杯體水腦等病痛，屬於病態審美的直接資助。",
    subScores: {
      pain: 8,
      scale: 2,
      external: 4
    },
    objTotal: 14,
    condemn: 2,
    outcry: 1,
    tooltipTitle: "病態審美的直接資助",
    tooltipContent: "消費者直接為「明確的殘疾與終身痛苦」買單。包含：短吻犬呼吸道阻塞(BOAS)、摺耳貓軟骨變形劇痛、雙重雲石色基因（double merle）致盲、茶杯體水腦症。這些病理性痛苦伴隨其一生，是消費端對畸形特徵的直接資助。",
    citation: "AVMA Companion Animal Breeding Welfare / PMC/NIH (2022) BOAS / RCVS Knowledge / UFAW Scottish Fold / PMC/NIH (2007) Osteochondrodysplasia",
    references: [
          {
                title: "American Veterinary Medical Association (AVMA). (2017). Inherited disorders in responsible breeding of companion animals. AVMA Policies.",
                url: "https://www.avma.org/resources-tools/avma-policies/inherited-disorders-responsible-breeding-companion-animals"
          },
          {
                title: "PMC/NIH (2022) - BOAS: much more than a respiratory problem",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9673814/"
          },
          {
                title: "RCVS Knowledge - Health and welfare of Brachycephalic dogs",
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
      fullDesc: "極端畸變品種是「人類審美偏好凌駕動物生理健康」的最直接呈現。雲石色（Merle）基因的純合子（即雙重雲石色 double merle）導致耳聾與眼盲；摺耳基因（Folded-ear）全身軟骨異常導致持續骨骼疼痛；短吻特徵（Brachycephaly）使動物終身在輕度窒息狀態下生活。這些痛苦是可預期、不可逆的設計結果。",
      causeAnalysis: "消費者通常不了解其購買行為所資助的生理代價。社群媒體上「可愛」的外觀呈現，有效遮蔽了動物實際的痛苦狀態。部分消費者甚至認為動物「天生如此」而非「被設計成如此」。",
      policyImplication: "荷蘭、德國等國已禁止特定極端畸形品種的繁殖與銷售（如摺耳貓）。臺灣應參考國際進展，建立「禁止繁殖清單」制度，並要求所有短吻犬的買賣必須附帶 BOAS 篩檢報告。"
    },
    scenarios: [
      {
        name: "寵物電商與網路販售",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "電商平台允許繁殖業者直接觸達消費者，買家無法實際評估動物健康狀況。帶有嚴重遺傳病的動物在鏡頭下以「可愛」的方式被行銷，其實際痛苦完全不可見。",
        actions: [
          { role: "消費者", action: "拒絕網路衝動購買，堅持實地訪視動物並要求基因健康報告" },
          { role: "電商平台", action: "對寵物銷售類目強制要求賣家上傳動物來源與健康檢驗文件" },
          { role: "農業部", action: "擴大特定畸形品種的繁殖限制，並推動與電商平台的聯合執法" }
        ]
      },
      {
        name: "寵物展覽活動",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "品種展覽以「美麗標準」評選動物，公開正向化病理性特徵。展覽文化間接鼓勵繁殖業者強化極端畸形特徵以獲得獎項，形成以「得獎」為導向的惡化循環。",
        actions: [
          { role: "參展者/觀眾", action: "公開質疑展覽中涉及健康損害的評選標準，並向主辦單位提出改革倡議" },
          { role: "動物醫師協會", action: "發表公開聲明，拒絕為極端畸形品種的繁殖提供健康背書" },
          { role: "主辦單位", action: "修改評審標準，納入健康指標，排除具明確遺傳病的個體" }
        ]
      },
      {
        name: "高端寵物市場",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "高價畸變品種被作為身分地位象徵販售，消費者的社會階層認同強化了其購買動機，使價格訊號在此市場失去糾正作用。",
        actions: [
          { role: "消費者", action: "理解「高價格」不等於「高健康品質」，深入了解品種相關的終身醫療費用" },
          { role: "獸醫師", action: "在診療極端畸形品種時，主動告知飼主其品種特性的遺傳成因" },
          { role: "政府", action: "強制要求極端畸形品種在銷售時附帶「健康風險聲明書」，類似香菸警示標籤" }
        ]
      }
    ]
  };
