export const SCENARIOS = {
  reserve: {
    id: "reserve",
    title: "生态敏感区与离岛",
    badge: "Eco-Sensitive",
    badgeColor: "var(--red)",
    eco: 10,
    pub: 2,
    welfare: 7,
    desc: "在生态敏感区，流浪犬猫的角色属于“强势入侵性外来物种”。由于原生鸟类、爬行动物与小型哺乳动物对其缺乏演化防御机制，喂食行为会人拉高超出自然承载力数十倍的犬猫种群，导致极高概率的原生种区域灭绝（例如豹猫、穿山甲受到野外犬只攻击致死率居高不下，离岛野生海鸟面临猫只毁灭性捕食）。",
    policy: "管理红线：零容忍，严禁任何喂食并立即移除"
  },
  urban: {
    id: "urban",
    title: "城市社区与一般邻里",
    badge: "Urban Social",
    badgeColor: "var(--yellow)",
    eco: 2,
    pub: 8,
    welfare: 6,
    desc: "在人口密集的城市社区，生态环境早已高度人工化，主要危害不再是原生生态灭绝，而是环境卫生（排泄物脏乱、跳蚤滋生、翻倒垃圾箱）、噪音干扰、以及因喂食引发的邻里人际冲突。此外，流浪犬猫在城市面临高风险的车祸（路撞/路杀）、寄生虫、猫瘟流传，对动物本身也是极大的福利摧残。",
    policy: "管理方针：干净限制喂食，逐步引导收容与室内领养"
  },
  campus: {
    id: "campus",
    title: "学校与封闭型校园",
    badge: "Closed Institution",
    badgeColor: "var(--blue)",
    eco: 3,
    pub: 6,
    welfare: 5,
    desc: "学校及封闭园区拥有清晰的行政管理主体与特定边界。在此场景，最重要的矛盾是行人安全与管理责任的划分。喂食会引发犬群群聚，进而发展出领域防卫行为（如追咬摩托车、行人），给师生与校方带来高度的安全威胁与民事赔偿风险。同时，这也涉及校园环境安全教育的示范价值。",
    policy: "管理方针：建立行政责任制，校园禁止游荡与喂食"
  }
};

export const SCENARIO_LIST = [
  {
    id: "reserve",
    title: "生态敏感区与离岛",
    badge: "Eco-Sensitive",
    icon: "",
    desc: "包括国家公园、野生动物保护区、重要湿地及离岛。这些场景存在大量地面筑巢鸟类、特有种哺乳动物与爬行动物，极易受到外来捕食者毁灭性冲击。",
    metrics: {
      eco: "极高 (10/10)",
      core: "维持本地零犬猫",
      method: "禁止喂食、即刻捕捉移出"
    },
    metricColorClass: "red"
  },
  {
    id: "urban",
    title: "城市社区与一般邻里",
    badge: "Urban Social",
    icon: "",
    desc: "高密度人口居住区，如社区住宅、商业区、公园。此处危害多转化为公共卫生威胁（跳蚤、排泄物脏乱）、环境噪音以及居民间的道德与人际冲突。",
    metrics: {
      eco: "中至高 (8/10)",
      core: "消除公卫隐患与冲突",
      method: "限制喂食、严禁放置、辅导室内领养"
    },
    metricColorClass: "yellow"
  },
  {
    id: "campus",
    title: "学校与封闭型校园",
    badge: "Closed Institution",
    icon: "",
    desc: "具备行政管理权责的特定公共场景，如大专院校、政府机关、园区。涉及犬只追咬安全、行人路权，以及校园教育示范价值与管理责任的拉锯。",
    metrics: {
      eco: "清晰 (明确主体)",
      core: "保障行人安全与校方责任",
      method: "建立校方责任制、禁止校内游荡"
    },
    metricColorClass: "blue"
  }
];

export const DECISION_MATRIX = [
  {
    method: "1. 无管制喂食",
    sub: "（爱心放置/不定点投喂）",
    cols: {
      reserve: {
        status: "[✗] 灾难性",
        type: "danger",
        detail: "人拉高掠食者密度，对豹猫、穿山甲、穿山甲幼崽、海鸟等原生生态系统进行毁灭性屠杀。完全无法容忍。"
      },
      urban: {
        status: "[✗] 严重危害",
        type: "danger",
        detail: "引爆鼠患、蟑螂与环境脏乱。高密度犬猫群聚会引发严重邻里冲突、车祸，并加速猫瘟等传染病在流浪群体中传播。"
      },
      campus: {
        status: "[✗] 行政失职",
        type: "danger",
        detail: "导致犬只群聚并产生领域防卫性，发生追人、咬伤师生事件。校方面临直接法律赔偿责任，且违背校园公卫标准。"
      }
    }
  },
  {
    method: "2. TNR 配合限制喂食",
    sub: "（干净喂食、控制绝育）",
    cols: {
      reserve: {
        status: "[✗] 无效且危害",
        type: "danger",
        detail: "TNR 犬猫在野外寿命长达数年，这期间即使失去繁殖力，其生存所需的“捕食本能”并未消失，仍会继续猎杀野生动物直到自然死亡。"
      },
      urban: {
        status: "[!] 有限成效 / 权宜计",
        type: "warn",
        detail: "若能做到100%干净喂食与极高的绝育率，在密闭城市街区能延缓繁殖。但需耗费巨大志愿者人力，且无法解决车祸与传染病风险。"
      },
      campus: {
        status: "[!] 冲突拉锯",
        type: "warn",
        detail: "校园社团能协助降低繁殖，但校园属于半开放空间，外来犬猫容易补位。且追咬行为多来自地域保护，与是否绝育无关，仍具备高度校安风险。"
      }
    }
  },
  {
    method: "3. 完全移除并安置",
    sub: "（禁止喂食，即刻捕捉）",
    cols: {
      reserve: {
        status: "[✓] 唯一可行解",
        type: "success",
        detail: "通过強力切断食物源与物理移除，给予原生野生动物不受威胁的栖息地。在生态保护区这应作为最高法律强制执行。"
      },
      urban: {
        status: "[✓] 最佳终极目标",
        type: "success",
        detail: "配合流浪动物领养机制与收容所制度。使流浪犬猫回归家庭与室内饲养，从源头解决公卫威胁与人畜共患传染病，符合最优动物福利。"
      },
      campus: {
        status: "[✓] 责任制最佳解",
        type: "success",
        detail: "明确校园为无游荡动物的安全场景。由校方配合动物救助部门将流浪犬猫全数移出，转为室内领养或专业收容，确保师生安全与降低校方管理责任。"
      }
    }
  }
];
