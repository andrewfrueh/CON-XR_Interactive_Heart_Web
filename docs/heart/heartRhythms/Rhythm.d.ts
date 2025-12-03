import { CurveFunction } from "../../utils/curves.js";
export type AnimationKeyframe = {
    time: number;
    animationEnd: number;
    blendshape: ("LA" | "RA" | "LV" | "RV")[];
    value: number;
    curveFunction: CurveFunction;
};
export type SoundKeyframe = {
    time: number;
    soundPath: string;
    volume?: number;
    pitch?: number;
};
export type AuscultationLocation = "Aortic" | "Pulmonic" | "Tricuspid" | "Mitral";
export type Rhythm = {
    animation?: AnimationKeyframe[];
    sound?: SoundKeyframe[];
    location: AuscultationLocation;
};
export declare const defaultRhythm: Rhythm;
export type SelectableRhythm = "ClickLateSystolicMurmur" | "EarlySystolicMurmur" | "LateSystolicMurmur" | "MidSystolicClick" | "MidSystolicMurmur" | "NormalS1S2" | "S3Gallop" | "S4Gallop";
export declare const SelectableRhythmName: Record<SelectableRhythm, string>;
export type AuscultationRhythms = {
    [key in SelectableRhythm]: Rhythm;
};
export declare const availableRhythms: Record<AuscultationLocation, AuscultationRhythms>;
//# sourceMappingURL=Rhythm.d.ts.map