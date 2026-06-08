export const hazardData = {
    id: 5,
    name: "長期虐待（單／多隻）",
    desc: "將極端折磨的時間線拉長至數月或數年。比直接虐殺製造了更多的痛苦總量，但同樣屬於封閉環境內的損害，無環境外部性。",
    tooltipTitle: "時間維度的痛苦累積",
    tooltipContent: "將個體痛苦時間拉長，其結果論累積痛苦高於瞬間虐殺。此類行為可粗分為兩種樣態：物理暴力型，以及常被『愛心拯救』外衣包裝的『病態囤積（Animal Hoarding）』。後者社會譴責極低，卻會導致數十至數百隻動物長期處於極度擁擠、營養不良、疾病蔓延與糞尿窒息中，其製造的慢性痛苦深度與生命受害規模在結果論上遠超單一物理暴力。（臨床統計上兩種樣態的性別分布雖有差異，但性別並非成因，個體差異遠大於群體傾向。）",
    citation: "APA (2023) Hoarding Disorder / EBSCO (2024) Animal Hoarding / 生物-心理-社會模型解構",
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
      fullDesc: "長期虐待因「痛苦持續時間」的乘數效應，在結果論累積痛苦上高於單次虐殺。此類行為最難被發現——施虐發生於私人空間，且「病態囤積」型的施虐者往往以動物救援者自居，社會辨識難度極高。",
      causeAnalysis: "施虐可分為兩種樣態：直接物理暴力（拘禁、剝奪飲食、直接毆打）；以及病態囤積——以「救援愛心」為動機，卻製造了數十至數百隻動物的系統性慢性痛苦，且主觀否認自身的危害性。兩種樣態在臨床與流行病學上的性別分布差異（如女性占囤積症患者 76%-83%），並非單一社會化所致，而是生物易感性（如催產素機制、大腦前扣帶迴神經認知損害）與社會角色期望共同作用的「生物-心理-社會」多重交織結果。",
      policyImplication: "應建立強制揭露制度：當救援組織的照養數量超過特定門檻（如 20 隻），需定期接受動保機關的實地訪查，且不得以「保護隱私」拒絕。病態囤積案例應被納入精神衛生強制評估範疇。"
    },
    scenarios: [
      {
        name: "私人住宅（物理虐待型）",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即介入",
        desc: "施虐者以鎖閉、剝奪飲水、系統性毆打等手段，對圈養動物造成持續性折磨。行為高度隱蔽，且通常與家庭暴力、藥物濫用等問題共存。",
        actions: [
          { role: "鄰居", action: "若持續聽見異常動物聲響，應通報動保專線（1959）並描述具體情況" },
          { role: "社工/家防人員", action: "在家庭暴力案件中主動評估同戶動物狀況，作為家暴程度的輔助指標" },
          { role: "動保稽查員", action: "執行突擊式訪查，並在確認虐待後協調緊急救援安置" }
        ]
      },
      {
        name: "病態囤積現場",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需立即介入",
        desc: "施虐者以「愛心救援」為名收容數十至數百隻動物，但實際上無力負擔照顧。個體在惡劣環境中忍受長期飢餓、傳染病蔓延與窒息性的糞尿環境。",
        actions: [
          { role: "民眾", action: "若認識囤積型「愛心人士」，請主動向動保機關通報，不要因為其「動機良善」而回避舉報" },
          { role: "動保機關", action: "建立囤積個案的定期追蹤資料庫，並設定照養數量上限與必要訪查機制" },
          { role: "精神衛生機關", action: "將病態囤積（Hoarding Disorder）納入社區心理衛生篩查指標" }
        ]
      },
      {
        name: "救援組織的灰色地帶",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "部分以「NGO」或「個人救援」為名的組織，實際上處於囤積與合法救援之間的灰色地帶，缺乏財務透明度與動物福利監察機制。",
        actions: [
          { role: "捐款人", action: "要求救援組織定期公開照養數量、動物健康狀況與財務報告" },
          { role: "動保主管機關", action: "對照養數量超過門檻的非法人組織實施強制登記與定期稽查" },
          { role: "獸醫師", action: "若發現客戶長期帶入大量健康狀況惡劣的動物，可考慮通報動保機關啟動調查" }
        ]
      }
    ],
  relationship: [
    {
      typeName: "樣態 A：物理暴力型",
      agents: [
        {
          role: "拘禁/虐養者",
          note: "以鎖閉、剝奪飲水、系統性毆打等手段進行持續折磨，通常與家庭暴力、藥物濫用共存"
        }
      ],
      transmission: "封閉私人空間 → 對圈養動物施以系統性長期折磨 → 痛苦持續時間乘數效應 → 累積痛苦總量高於單次虐殺",
      victims: [
        {
          icon: "💀",
          category: "受拘禁之動物個體",
          entities: "被長期圈養虐待的犬貓（單或少數隻）",
          desc: "在漫長的月至年的時間尺度內，承受飢餓、脫水、物理打擊與精神折磨的累積性痛苦。"
        }
      ]
    },
    {
      typeName: "樣態 B：病態囤積型（Animal Hoarding）",
      agents: [
        {
          role: "病態囤積者",
          note: "常以「愛心救援者」自居，其行為在臨床上與囤積障礙（DSM-5 Hoarding Disorder）相關，主觀否認自身的危害性"
        }
      ],
      transmission: "以「救援」為名不斷收容 → 照養量遠超個人能力 → 環境崩壞（極度擁擠、糞尿堆積） → 數十至數百隻動物陷入慢性飢餓、傳染病蔓延、互食 → 披著「善意」外衣而社會譴責極低",
      victims: [
        {
          icon: "🐾",
          category: "被囤積之動物群體",
          entities: "數十至數百隻犬貓",
          desc: "在極度擁擠、缺乏醫療、髒亂窒息的環境中，遭受慢性飢餓、傳染病肆虐、甚至同類互食的長期系統性折磨。其痛苦規模遠超物理暴力型。"
        },
        {
          icon: "🏘️",
          category: "社區環境與鄰里",
          entities: "周邊居民",
          desc: "承受嚴重惡臭、噪音、寄生蟲滋生與社區公衛衝突。"
        }
      ]
    }
  ]
};