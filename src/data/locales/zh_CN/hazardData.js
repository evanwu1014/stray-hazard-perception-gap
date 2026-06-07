import { hazardData as hazard1 } from './hazards/1_feed_tnr';
import { hazardData as hazard2 } from './hazards/2_private_execution';
import { hazardData as hazard3 } from './hazards/3_purebred_purchase';
import { hazardData as hazard4 } from './hazards/4_abuse_kill';
import { hazardData as hazard5 } from './hazards/5_chronic_abuse';
import { hazardData as hazard6 } from './hazards/6_deformed_purchase';
import { hazardData as hazard7 } from './hazards/7_purebred_breeding';
import { hazardData as hazard8 } from './hazards/8_deformed_breeding';
import { hazardData as hazard10 } from './hazards/10_network_abuse';
import { hazardData as hazard9 } from './hazards/9_overfeeding';

export const HAZARD_DATA = [
  hazard1,
  hazard2,
  hazard3,
  hazard4,
  hazard5,
  hazard6,
  hazard7,
  hazard8,
  hazard10,
  hazard9
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
