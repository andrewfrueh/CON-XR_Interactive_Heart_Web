import { aorticNormalS1S2Rhythm } from "./Aortic/NormalS1S2.js";
import { aorticRhythms } from "./Aortic/index.js";
import { mitralRhythms } from "./Mitral/index.js";
import { pulmonicRhythms } from "./Pulmonic/index.js";
import { tricuspidRhythms } from "./Tricuspid/index.js";
export const defaultRhythm = aorticNormalS1S2Rhythm;
export const SelectableRhythmName = {
    ClickLateSystolicMurmur: "Click w/ Late Systolic Murmur",
    EarlySystolicMurmur: "Early Systolic Murmur",
    LateSystolicMurmur: "Late Systolic Murmur",
    MidSystolicClick: "Mid Systolic Click",
    MidSystolicMurmur: "Mid Systolic Murmur",
    NormalS1S2: "Normal S1 S2",
    S3Gallop: "S3 Gallop",
    S4Gallop: "S4 Gallop",
};
export const availableRhythms = {
    Aortic: aorticRhythms,
    Pulmonic: pulmonicRhythms,
    Tricuspid: tricuspidRhythms,
    Mitral: mitralRhythms,
};
//# sourceMappingURL=Rhythm.js.map