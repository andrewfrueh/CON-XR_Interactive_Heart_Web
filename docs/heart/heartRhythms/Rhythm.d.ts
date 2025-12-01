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
export type Rhythm = {
    name: string;
    animation?: AnimationKeyframe[];
    sound?: SoundKeyframe[];
    location: "Aortic" | "Pulmonic" | "Tricuspid" | "Mitral";
};
export declare const defaultRhythm: Rhythm;
export declare const availableRhythms: Rhythm[];
//# sourceMappingURL=Rhythm.d.ts.map