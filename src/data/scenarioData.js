export const SCENARIOS = {
  reserve: {
    id: "reserve",
    title: "生態敏感區與離島",
    badge: "Eco-Sensitive",
    badgeColor: "var(--red)",
    eco: 10,
    pub: 2,
    welfare: 7,
    desc: "在生態敏感區，流浪犬貓的角色屬於「強勢侵入性外來物種」。由於原生鳥類、爬蟲類與小型哺乳動物對其缺乏演化防禦機制，餵食行為會人為維持超出自然承載力數十倍的犬貓族群，導致極高機率的原生種區域滅絕（例如石虎、穿山甲受到野外犬隻攻擊致死率居高不下，離島野生海鳥面臨貓隻毀滅性捕食）。",
    policy: "📢 管理紅線：零容忍，嚴禁任何餵食並立即移除"
  },
  urban: {
    id: "urban",
    title: "都市社區與一般鄰里",
    badge: "Urban Social",
    badgeColor: "var(--yellow)",
    eco: 2,
    pub: 8,
    welfare: 6,
    desc: "在人口密集的都市社區，生態環境早已高度人工化，主要危害不再是原生生態滅絕，而是環境衛生（排泄物髒亂、跳蚤滋生、垃圾箱翻倒）、噪音干擾、以及因餵食引發的鄰里人際衝突。此外，流浪犬貓在都市面臨高風險的車禍（路殺）、寄生蟲、貓瘟流傳，對動物本身也是極大的福利摧殘。",
    policy: "📢 管理方針：乾淨限制餵食，逐步導引收容與室內認養"
  },
  campus: {
    id: "campus",
    title: "學校與封閉型校園",
    badge: "Closed Institution",
    badgeColor: "var(--blue)",
    eco: 3,
    pub: 6,
    welfare: 5,
    desc: "學校及封閉園區擁有清晰的行政管理主體與特定邊界。在此場域，最重要的矛盾是行人安全與管理責任的劃分。餵食會引發犬群群聚，進而發展出領域防衛行為（如追咬機車、行人），給師生與校方帶來高度的安全威脅與民事賠償風險。同時，這也涉及校園環境安全教育的示範價值。",
    policy: "📢 管理方針：建立行政責任制，校園禁止遊蕩與餵食"
  }
};

export const SCENARIO_LIST = [
  {
    id: "reserve",
    title: "生態敏感區與離島",
    badge: "Eco-Sensitive",
    icon: "🌲",
    desc: "包括國家公園、野生動物保護區、重要濕地及離島。這些場域存在大量地面築巢鳥類、特有種哺乳動物與爬蟲類，極易受到外來捕食者毀滅性衝擊。",
    metrics: {
      eco: "極高 (10/10)",
      core: "維持本地零犬貓",
      method: "禁止餵食、即刻捕捉移出"
    },
    metricColorClass: "red"
  },
  {
    id: "urban",
    title: "都市社區與一般鄰里",
    badge: "Urban Social",
    icon: "🏙️",
    desc: "高密度人口居住區，如社區住宅、商業區、公園。此處危害多轉化為公共衛生威脅（跳蚤、排泄物髒亂）、環境噪音以及居民間的道德與人際衝突。",
    metrics: {
      eco: "中至高 (8/10)",
      core: "消除公衛隱患與衝突",
      method: "限制餵食、嚴禁放置、輔導室內收容"
    },
    metricColorClass: "yellow"
  },
  {
    id: "campus",
    title: "學校與封閉型校園",
    badge: "Closed Institution",
    icon: "🏫",
    desc: "具備行政管理權責的特定公共場域，如大專院校、政府機關、園區。涉及犬隻追咬安全、行人路權，以及校園教育示範價值與管理責任的拉鋸。",
    metrics: {
      eco: "清晰 (明確主體)",
      core: "保障行人安全與校方責任",
      method: "建立校方責任制、禁止校內遊蕩"
    },
    metricColorClass: "blue"
  }
];

export const DECISION_MATRIX = [
  {
    method: "1. 無管制餵食",
    sub: "（愛心放置/不定點投餵）",
    cols: {
      reserve: {
        status: "❌ 災難性",
        type: "danger",
        detail: "人為拉高掠食者密度，對石虎、穿山甲、穿山甲幼體、海鳥等原生生態系進行毀滅性屠殺。完全無法容忍。"
      },
      urban: {
        status: "❌ 嚴重危害",
        type: "danger",
        detail: "引爆鼠患、蟑螂與環境髒亂。高密度犬貓群聚會引發嚴重鄰里衝突、路殺车禍，並加速貓瘟等傳染病在流浪群體中傳播。"
      },
      campus: {
        status: "❌ 行政失職",
        type: "danger",
        detail: "導致犬隻群聚並產生領域防衛性，發生追人、咬傷師生事件。校方面臨直接法律賠償責任，且違背校園公衛標準。"
      }
    }
  },
  {
    method: "2. TNR 配合限制餵食",
    sub: "（乾淨餵食、控制絕育）",
    cols: {
      reserve: {
        status: "❌ 無效且危害",
        type: "danger",
        detail: "TNR 犬貓在野外壽命長達數年，這期間即使失去繁殖力，其生存所需的「捕食本能」並未消失，仍會繼續獵殺野生動物直到自然死亡。"
      },
      urban: {
        status: "⚠️ 有限成效 / 權宜計",
        type: "warn",
        detail: "若能做到100%乾淨餵食與極高的絕育率，在密閉都市街廓能延緩繁衍。但需耗費巨大志工人力，且無法解決路殺與傳染病風險。"
      },
      campus: {
        status: "⚠️ 衝突拉鋸",
        type: "warn",
        detail: "校園社團能協助降低繁衍，但校園屬於半開放空間，外來犬貓容易補位。且追咬行為多來自地域保護，與是否絕育無關，仍具備高度校安風險。"
      }
    }
  },
  {
    method: "3. 完全移除並安置",
    sub: "（禁止餵食，即刻捕捉）",
    cols: {
      reserve: {
        status: "✅ 唯一可行解",
        type: "success",
        detail: "透過強力切斷食物源與物理移除，給予原生野生動物不受威脅的棲地。在生態保護區這應作為最高法律強制執行。"
      },
      urban: {
        status: "✅ 最佳終極目標",
        type: "success",
        detail: "配合流浪動物認領養機制與收容所制度。使流浪犬貓回歸家庭與室內飼養，從源頭解決公衛威脅與人畜共通傳染病，符合最優動物福利。"
      },
      campus: {
        status: "✅ 責任制最佳解",
        type: "success",
        detail: "明確校園為無遊蕩動物的安全場域。由校方配合動保處將遊蕩犬貓全數移出，轉為室內認養或專業收容，確保師生安全與降低校方管理責任。"
      }
    }
  }
];
