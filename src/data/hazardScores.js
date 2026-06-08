export const HAZARD_SCORES = {
  1: {
    subScores: {
      pain: 1,      // 痛苦深度
      scale: 2,     // 受害規模
      external: 3   // 外部成本
    },
    objTotal: 6,
    condemn: 1,     // 大眾道德直覺
    outcry: 1       // 輿論風暴指數
  },
  2: {
    subScores: {
      pain: 6,
      scale: 1,
      external: 1
    },
    objTotal: 8,
    condemn: 8,
    outcry: 9
  },
  3: {
    subScores: {
      pain: 4,
      scale: 2,
      external: 3
    },
    objTotal: 9,
    condemn: 1,
    outcry: 1
  },
  4: {
    subScores: {
      pain: 10,
      scale: 1,
      external: 1
    },
    objTotal: 12,
    condemn: 10,
    outcry: 10
  },
  5: {
    subScores: {
      pain: 10,
      scale: 2,
      external: 1
    },
    objTotal: 13,
    condemn: 10,
    outcry: 10
  },
  6: {
    subScores: {
      pain: 8,
      scale: 2,
      external: 4
    },
    objTotal: 14,
    condemn: 2,
    outcry: 1
  },
  7: {
    subScores: {
      pain: 5,
      scale: 7,
      external: 6
    },
    objTotal: 18,
    condemn: 3,
    outcry: 2
  },
  8: {
    subScores: {
      pain: 9,
      scale: 8,
      external: 7
    },
    objTotal: 24,
    condemn: 3,
    outcry: 3
  },
  9: {
    subScores: {
      pain: 7,
      scale: 10,
      external: 10
    },
    objTotal: 27,
    condemn: 2,
    outcry: 2
  },
  10: {
    subScores: {
      pain: 10,
      scale: 5,
      external: 7
    },
    objTotal: 22,
    condemn: 10,
    outcry: 10,
    isSupplemental: true
  }
};
