import { HAZARD_SCORES } from '../../hazardScores';

// Automatically import all hazard data modules from the ./hazards directory
const modules = import.meta.glob('./hazards/*.js', { eager: true });

export const HAZARD_DATA = Object.values(modules)
  .map(mod => mod.hazardData)
  // Ensure the items are sorted numerically by their ID
  .sort((a, b) => a.id - b.id)
  .map(item => ({
    ...item,
    ...HAZARD_SCORES[item.id]
  }));

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
