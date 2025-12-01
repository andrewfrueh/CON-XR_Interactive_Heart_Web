import { aorticNormalS1S2Rhythm } from "./Aortic/NormalS1S2.js";
import { aorticRhythms } from "./Aortic/index.js";
import { mitralRhythms } from "./Mitral/index.js";
import { pulmonicRhythms } from "./Pulmonic/index.js";
import { tricuspidRhythms } from "./Tricuspid/index.js";
export const defaultRhythm = aorticNormalS1S2Rhythm;
export const availableRhythms = [
    ...aorticRhythms,
    ...mitralRhythms,
    ...pulmonicRhythms,
    ...tricuspidRhythms,
];
//# sourceMappingURL=Rhythm.js.map