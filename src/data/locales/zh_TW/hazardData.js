export const HAZARD_DATA = [
  {
    id: 1,
    name: "當面餵食 TNR 遊蕩犬貓",
    desc: "犬貓個體免於飢餓且無繁衍能力。但維持其街頭生命仍會產生排泄物，並讓其持續基於本能掠食原生野生動物或追咬路人。",
    subScores: {
      pain: 1,      // 痛苦深度
      scale: 2,     // 受害規模
      external: 3   // 外部成本
    },
    objTotal: 6,
    condemn: 1,     // 大眾道德直覺
    outcry: 1,      // 輿論風暴指數
    tooltipTitle: "開放空間 TNR/TNA 的限制",
    tooltipContent: "研究與數學模型顯示，流浪犬貓的年移除率必須持續達到 75% 至 85% 以上，族群總量才會開始下降，且絕育個體仍會持續獵殺野生動物或造成人車追咬衝突。",
    citation: "Longcore et al. (2009) Conservation Biology / Barrows (2004)"
  },
  {
    id: 2,
    name: "私自處決遊蕩貓狗",
    desc: "給予單一個體短暫但劇烈的急性痛苦並剝奪生命。受害規模極小，且客觀上終止了該個體對原生生態造成的捕食壓力；但私人暴力手段會造成大眾不安與法律秩序威脅。",
    subScores: {
      pain: 6,
      scale: 1,
      external: 1
    },
    objTotal: 8,
    condemn: 8,
    outcry: 9,
    tooltipTitle: "結果論淨值折抵與外部性",
    tooltipContent: "此為違法暴力行為。個體痛苦評為 6 分，但該捕食個體被移除客觀上阻止了未來被其掠食的數百隻原生野生動物的極端折磨（淨痛苦總量下降）。惟私人暴力會產生秩序恐慌，故仍具備 1 分外部社會成本。",
    citation: "動保法第 25 條刑事責任 / 環境犯罪學與社會安全成本"
  },
  {
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
    citation: "Takanosu et al. (2008) / UFAW Genetic Welfare Problems"
  },
  {
    id: 4,
    name: "虐殺遊蕩犬貓",
    desc: "將單一個體的痛苦最大化至死。畫面最為殘忍，但損害完全收斂於該單一動物身上，對社會運作與整體自然生態毫無外溢影響。",
    subScores: {
      pain: 10,
      scale: 1,
      external: 1
    },
    objTotal: 12,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "極端痛苦與危害邊界",
    tooltipContent: "視覺衝擊與社會道德譴責程度最高。在結果論模型中，其「個體痛苦深度」達滿分，但因受限於個體施暴能力，其損害被限制於極小規模，無外部生態擴散性。研究顯示其施虐動機可分為雙軌路徑：一是病理性虐待（ASPD/反社會型），以折磨生命獲取掌控感或快感；二是轉移性虐待（弱弱相殘型），施虐者將自身無力處理的心理與社會危機，向生態最底層的動物轉嫁。",
    citation: "社會心理學：反社會人格特質與暴力行為關聯性研究"
  },
  {
    id: 5,
    name: "長期虐待（單／多隻）",
    desc: "將極端折磨的時間線拉長至數月或數年。比直接虐殺製造了更多的痛苦總量，但同樣屬於封閉環境內的損害，無環境外部性。",
    subScores: {
      pain: 10,
      scale: 2,
      external: 1
    },
    objTotal: 13,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "時間維度的痛苦累積",
    tooltipContent: "將個體痛苦時間拉長，其結果論累積痛苦高於瞬間虐殺。在此類行為中存在顯著的性別分流機制：男性施虐者傾向物理暴力，而女性施虐者則高比例表現為『病態囤積（Animal Hoarding）』。後者常被『愛心拯救』的外衣包裝，社會譴責極低，但會導致數十至數百隻動物長期處於極度擁擠、營養不良、疾病蔓延與糞尿窒息中，其製造的慢性痛苦深度與生命受害規模在結果論上遠超單一物理暴力。",
    citation: "行為科學：虐待動物與家暴/社會暴力的關聯研究"
  },
  {
    id: 6,
    name: "購買極端畸變寵物",
    desc: "消費行為直接為「明確的殘疾與終身痛苦」買單。讓少數個體終身承受短吻呼吸道阻塞、摺耳軟骨劇痛、雙隕石色失明或茶杯體水腦等病痛，屬於病態審美的直接資助。",
    subScores: {
      pain: 8,
      scale: 2,
      external: 4
    },
    objTotal: 14,
    condemn: 2,
    outcry: 1,
    tooltipTitle: "病態審美的直接資助",
    tooltipContent: "消費者直接為「明確的殘疾與終身痛苦」買單。包含：短吻犬呼吸道阻塞(BOAS)、摺耳貓軟骨變形劇痛、雙隕石色失明、茶杯體水腦症。這些病理性痛苦伴隨其一生，是消費端對畸形特徵的直接資助。",
    citation: "AVMA Companion Animal Breeding Welfare guidelines"
  },
  {
    id: 7,
    name: "養殖純種貓狗販售",
    desc: "將基因缺陷與母體生育耗損「批發化」。雖然不會刻意施虐，但量產數以百計帶有遺傳病風險的生命，同時對流浪動物收容系統帶來結構性的排擠壓力。",
    subScores: {
      pain: 5,
      scale: 7,
      external: 6
    },
    objTotal: 18,
    condemn: 3,
    outcry: 2,
    tooltipTitle: "母體損耗與代際折磨的工業化",
    tooltipContent: "商業繁殖場為追求利潤，母體常處於密閉籠具、反覆生育直至生理機能崩潰，其痛苦在規模與時間上被工業化放大。",
    citation: "HSUS Puppy Mills Investigative Report"
  },
  {
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
    citation: "Veterinary Journal: Genetic welfare problems of companion animals"
  },
  {
    id: 10,
    name: "網路組織型商業虐待",
    desc: "透過加密群組進行虐殺影片販售與「客製化付費訂單」。金錢誘因驅動大量捕捉街頭動物（尤其是 TNR 親人個體）製造內容；同時對舉報者施以開盒（Doxing）與跨國網路恐嚇，社會威脅嚴重外溢至人身安全。",
    subScores: {
      pain: 10,
      scale: 5,
      external: 7
    },
    objTotal: 22,
    condemn: 10,
    outcry: 10,
    tooltipTitle: "暴力的數位資本化（類型 C）",
    tooltipContent: "加密群組內部發展出「付費客製化訂單」商業模式——買家指定物種與施虐方式，施虐者以虛擬貨幣結算影片。此犯罪創造了「同溫層認同」的群體極化機制。當民眾舉報時，組織會動用惡意開盒與跨國網路恐嚇。其危害已正式超越動物福利，升級為威脅人類社會與資訊安全的網路組織犯罪。",
    citation: "BBC World Service「Monkey Haters」調查報告, 2023 / SMACC 年度報告, 2024",
    isSupplemental: true
  },
  {
    id: 9,
    name: "大量濫餵（含放置餵食）",
    desc: "終極的生態與衛生災難。造成流浪犬貓異常聚集繁衍與高夭折率暗數，傳染病與路殺橫行；同時對原生野生動物造成巨大生存威脅（如石虎/穿山甲遭犬隻咬傷致死、原生鳥類與爬蟲類遭貓隻掠食）。",
    subScores: {
      pain: 7,
      scale: 10,
      external: 10
    },
    objTotal: 27,
    condemn: 2,
    outcry: 2,
    tooltipTitle: "繁殖創傷與傳染病爆發",
    tooltipContent: "長期餵食促使流浪犬貓高密度群聚與繁衍。尤其是流浪貓具備刺激性排卵與倒刺交配的生理創傷，且發情頻率極高，無節制餵食等同於資助這部「痛苦生育機器」幾何級膨脹。高密度繁衍進而引發貓瘟、犬細小病毒爆發，導致無數幼體在惡劣環境中失明、病死或遭路殺。",
    citation: "Loss et al. (2013) Nature Comm. / 台灣農業部林保育署野生動物犬咬與路殺數據"
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
