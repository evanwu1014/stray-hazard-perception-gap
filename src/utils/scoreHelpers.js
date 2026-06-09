/**
 * 根據客觀危害總分獲取威脅等級的 CSS 類名
 * @param {number} total 客觀危害總分
 * @returns {string} CSS 類名
 */
export const getThreatClass = (total) => {
  if (total <= 10) return "threat-1";
  if (total <= 15) return "threat-2";
  if (total <= 22) return "threat-3";
  return "threat-4";
};

/**
 * 根據評分獲取分類顏色的 CSS 類名
 * @param {number} val 評估維度分數
 * @returns {string} CSS 類名
 */
export const getColorClass = (val) => {
  if (val <= 3) return "c-lo";
  if (val <= 6) return "c-md";
  return "c-hi";
};
