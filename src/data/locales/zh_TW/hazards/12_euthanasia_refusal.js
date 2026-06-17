export const hazardData = {
    id: 12,
    name: "拒絕人道安樂死（情感性延命）",
    desc: "善意悖論在生命末端的具體展現。飼主或救援者出於不捨，對已陷入末期病痛（晚期癌症、器官衰竭、重大創傷、神經退化）且生活品質崩潰的動物拒絕或無限延後人道安樂死，以『延命』之名延長其無法逆轉的痛苦過程。在『生命至上』教條下，這種行為常被讚揚為有愛心，實則是高強度、長時程的個體折磨。",
    tooltipTitle: "被讚揚的痛苦延長",
    tooltipContent: "當醫療已無法改善預後、動物只剩持續惡化的疼痛、呼吸困難、無法進食與失禁等狀態時，人道安樂死是終止痛苦的福利選項。然而情感性依附、罪惡感、對『放棄』的恐懼，以及『活著就是好』的教條，會驅使飼主反覆進行無效醫療並延後決定。結果是個體承受長達數週甚至數月的高強度痛苦——這份痛苦因為被包裝在『不放棄的愛』之下，幾乎不會受到任何道德譴責。",
    citation: "VCA Animal Hospitals / VCA Canada / Lap of Love 生活品質評估表。相關資料說明 Dr. Alice Villalobos 之 HHHHHMM 量表，以 Hurt、Hunger、Hydration、Hygiene、Happiness、Mobility、More good days than bad 七項指標，協助判斷末期動物之安寧照護與人道安樂死時點。",
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
      fullDesc: "本條目客觀總分 11 分，主要來自極高的『個體痛苦深度（9）』，受害規模與外部成本皆低（屬封閉性的個體事件）。道德直覺與輿論皆僅 1 分，呈現負向偏移（-2.7）——因為延命被社會理解為愛與責任的展現，痛苦本身則因缺乏血腥畫面、發生在私密的醫療情境而完全隱形。這是本指數核心命題『沒有邊界的善意是最可怕的武器』在個體尺度的精確例證：與生態尺度的濫餵相對應，此處的善意悖論作用在單一生命的末端。",
      causeAnalysis: "拒絕安樂死的心理機制包含：對失去的預期性哀傷與否認、把安樂死等同於『殺死』或『放棄』的道德框架、以及將自身的不捨投射為動物的求生意願。社會層面則有『生命至上／絕對 no-kill』論述的推波助瀾，使『讓牠自然走完』被建構為唯一道德正確的選項，反而剝奪了動物免於無謂痛苦的權益。經濟誘因（部分情境下的持續醫療消費）亦可能強化延命傾向。",
      policyImplication: "政策應建立『以動物福利為核心』的末期決策框架，而非單純的延命崇拜。具體包含：推廣標準化的生活品質評估量表（如疼痛、進食、活動、尊嚴等指標）作為安樂死決策依據、強化獸醫於末期溝通與安寧療護的訓練、在公共論述中區分『放棄治療』與『終止痛苦』的本質差異，並對『絕對 no-kill』教條可能造成的福利傷害保持批判性檢視。",
      comparisonCaveat: "本條目與『私自處決(2)』『虐殺(4)』有本質差異：後兩者是外加於健康動物的暴力；本條目則是對『已無法挽回的末期病痛個體』未能及時終止痛苦。前者是『不該殺而殺』，後者是『該止痛而不止』，方向相反但同樣造成可避免的痛苦。"
    },
    scenarios: [
      {
        name: "末期重症的居家延命",
        icon: "hospital",
        riskLevel: "critical",
        riskLabel: "極端痛苦",
        desc: "晚期癌症、腎衰竭、心衰竭等末期動物，已出現持續疼痛、呼吸困難、無法進食、失禁與意識惡化，預後明確不可逆。飼主因不捨反覆進行無效的延命醫療，使動物在高強度痛苦中拖延數週至數月。",
        actions: [
          { role: "飼主", action: "以動物的生活品質而非自身不捨為決策核心，與獸醫坦誠討論預後，必要時選擇人道安樂死終止無謂痛苦" },
          { role: "獸醫師", action: "主動提供客觀的生活品質評估與安寧／安樂選項，避免僅迎合飼主延命意願而持續無效醫療" },
          { role: "家屬", action: "支持主要照顧者面對哀傷與罪惡感，協助其做出以動物福利為依歸的決定" }
        ]
      },
      {
        name: "收容／救援機構的 no-kill 教條",
        icon: "home",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "部分標榜『絕對零安樂死』的收容或救援單位，為維持 no-kill 形象，對重病、重傷或極度痛苦且無復原可能的動物仍拒絕人道處置，使其在籠舍中長期受苦至自然死亡，將機構聲譽置於動物福利之上。",
        actions: [
          { role: "機構管理者", action: "建立以福利為核心的醫療與安樂死準則，區分『可救援』與『該止痛』，不以零安樂死口號犧牲個體福利" },
          { role: "捐款人／支持者", action: "理解負責任的安樂死是動物福利的一環，避免以『零撲殺』為唯一道德標準施壓機構" },
          { role: "主管機關", action: "制定收容末期動物的人道處置指引與稽核標準，防止教條化延命造成的隱性受苦" }
        ]
      },
      {
        name: "高齡退化動物的長期失能",
        icon: "paw",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "高齡犬貓因認知退化、嚴重關節退化或長期臥床而喪失基本生活品質（慢性疼痛、無法自主進食排泄）。照顧者在情感與罪惡感下反覆延後決定，使動物在尊嚴與舒適持續流失的狀態下延長存活。",
        actions: [
          { role: "照顧者", action: "定期以客觀量表評估生活品質，將『有尊嚴地善終』納入照護目標，而非單純追求存活天數" },
          { role: "獸醫師", action: "協助建立可量化的福利惡化指標與決策時點，提供安寧療護與疼痛控制方案" },
          { role: "動保教育單位", action: "推廣『善終也是善待』的觀念，破除延命即等於有愛的單一框架" }
        ]
      }
    ]
,
  relationship: {
    agents: [
      {
        role: "情感性延命的飼主／照顧者",
        note: "出於不捨、罪惡感與對『放棄』的恐懼，將自身的哀傷投射為動物的求生意願，延後終止痛苦的決定"
      },
      {
        role: "教條化的 no-kill 機構",
        note: "為維持『絕對零安樂死』形象，對無復原可能的重症個體拒絕人道處置，將聲譽置於福利之上"
      }
    ],
    transmission: "末期／重症個體出現不可逆的痛苦 → 情感依附或 no-kill 教條驅動拒絕安樂死 → 反覆無效醫療或籠舍久候 → 個體承受長時程高強度痛苦 → 因被包裝為『愛』與『不放棄』而完全免於社會譴責 → 痛苦在私密醫療情境中隱形運轉",
    victims: [
      {
        icon: "pain",
        category: "末期與重症動物個體",
        entities: "晚期癌症、器官衰竭、重大創傷與神經退化個體",
        desc: "在預後明確不可逆的狀態下，被迫延長承受持續疼痛、呼吸困難、無法進食與失禁的高強度痛苦，喪失善終的福利。"
      },
      {
        icon: "brain",
        category: "照顧者本身的心理耗損",
        entities: "主要照顧者與家屬",
        desc: "長期目睹動物受苦、反覆無效醫療帶來的精神與經濟耗損，以及延後決定所累積的內疚與創傷。"
      }
    ],
    beneficiaries: [
      {
        icon: "paw",
        category: "情感上獲得緩衝的照顧者",
        entities: "不捨放手的飼主與重視形象的機構",
        desc: "短期內延後了面對失去的哀傷，或維持了『從不放棄』的道德形象。",
        caveat: "此『收益』是以動物延長的痛苦為代價換來的情感緩衝或聲譽。當『活著』本身已不再對動物有益、只剩痛苦時，延命便不是善待而是傷害——這正是負向偏移所揭示的善意盲區。"
      }
    ]
  }
};
