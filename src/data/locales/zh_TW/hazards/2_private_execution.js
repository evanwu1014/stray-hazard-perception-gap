export const hazardData = {
    id: 2,
    name: "私自處決遊蕩貓狗",
    desc: "屬違法行為。給予單一個體短暫但劇烈的急性痛苦並剝奪生命，在結果論模型中受害規模極小；私人暴力同時帶來秩序恐慌。需指出：現行法律對不同物種保護標準不一致，禁止依據主要來自公共秩序考量而非客觀危害計量。本模型僅量化結果，不代表認可此行為，亦不主張現行法律必然合理。",
    subScores: {
      pain: 6,
      scale: 1,
      external: 1
    },
    objTotal: 8,
    condemn: 8,
    outcry: 9,
    tooltipTitle: "結果論視角下的外部性與違法性",
    tooltipContent: "此為違法暴力行為（見下方法律引用）。個體痛苦評為 6 分；在純結果論的計量上，移除單一掠食個體會減少其未來對原生野生動物造成的捕食壓力，惟私人暴力同時產生秩序恐慌，故仍具備 1 分外部社會成本。需注意：現行法規對不同物種保護標準並不一致——犬貓受《動保法》保護，野生動物、農場動物、有害生物規範各異——其禁止依據更多來自維護公共秩序與防止暴力蔓延，而非客觀危害的精確計量。本模型不鼓勵以私力手段自行裁決，亦不主張守法即正確。",
    citation: "中華民國《動物保護法》第 25 條刑事責任 / 環境犯罪學與社會安全成本 / PMC/NIH (2023) / WHO / United Against Rabies (2022) / Asian News Network (2023)",
    references: [
          {
                title: "動物保護法（民國 112 年 06 月 28 日修正）第 25 條刑事責任",
                url: "https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=M0060027&flno=25"
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
      fullDesc: "私自處決流浪動物在臺灣屬違法行為（動保法第 25 條），最高可處二年有期徒刑。在結果論框架下，移除一隻獵食個體雖會減少其未來對原生動物造成的捕食壓力，但私刑模式帶來的法律秩序破壞與社會恐慌，使其在「外部成本」面仍有負向評分。值得一並指出的是，現行法律對「殺害動物」的規範本身並不一致：犬貓受《動保法》保護，野生動物歸《野保法》，農場動物可合法屠宰，有害生物可合法撲殺；保護門檻更多反映社會情感與公共秩序考量，而非客觀痛苦的精確計量。本文不鼓勵個人以私力手段自行裁決（因其帶來秩序崩壞與暴力螺旋），亦不主張守法等於正確，也不認為現行法律必然合理；真正的出路是推動法律與管理制度向客觀危害靠攏。",
      causeAnalysis: "行為者通常是對流浪動物生態危害有所認知的農牧業者、保育人士或對鄰里安全有顧慮的居民。缺乏合法快速移除管道，是促使私刑行為發生的重要結構性因素。",
      policyImplication: "降低私刑誘因的最有效手段，是建立「可通報、快速回應」的合法移除機制。若政府無法在合理時間內回應民眾的流浪動物投訴，私刑事件將難以根絕。"
    },
    scenarios: [
      {
        name: "農牧與偏鄉地區",
        icon: "",
        riskLevel: "high",
        riskLabel: "高風險",
        desc: "農民為保護家禽牲畜免遭流浪犬攻擊，面臨「舉報無效、等待漫長」的行政失靈困境，私下處置事件頻發且難以追查。",
        actions: [
          { role: "農民/居民", action: "優先通報地方動保機關，保留書面紀錄以備不時之需" },
          { role: "地方政府", action: "建立 24 小時緊急通報管道，設定最長 48 小時回應 SLA" },
          { role: "立法機關", action: "研擬農牧損害補償機制，降低農民對私刑的經濟誘因" }
        ]
      },
      {
        name: "住宅社區",
        icon: "",
        riskLevel: "moderate",
        riskLabel: "中度風險",
        desc: "鄰里糾紛中，對流浪動物的私刑有時是居民宣洩衝突的替代行為，並造成其他居民的心理恐慌與信任崩解。",
        actions: [
          { role: "目擊民眾", action: "立即撥打 1999 或動保專線通報，留存證據協助後續調查" },
          { role: "社區管委會", action: "協調社區動物管理共識，避免鄰里對立激化" },
          { role: "動保機關", action: "加強宣導合法舉報管道，並縮短案件回應時間" }
        ]
      },
      {
        name: "生態保護區周邊",
        icon: "",
        riskLevel: "critical",
        riskLabel: "需特別關注",
        desc: "護林巡查員面臨保育動物遭流浪犬攻擊與自身執法能力不足的兩難，部分案例涉及非正式的動物移除。",
        actions: [
          { role: "護林人員", action: "向主管機關申請緊急移除授權，避免自行處置觸法" },
          { role: "林業保育署", action: "建立保育區流浪動物快速清查與移除機制，提供前線人員法律保護" },
          { role: "NGO", action: "在保育區附近設立人道捕捉與安置中繼站，提供合法替代方案" }
        ]
      }
    ]
  };
