import * as THREE from 'three';
import { HeartController } from './HeartController.js';
export declare function init(): void;
type AuscultationPoint = 'aortic' | 'pulmonic' | 'tricuspid' | 'mitral';
declare global {
    interface Window {
        resetCamera: () => void;
        toggleAnimation: () => void;
        setHeartCycleDuration: (duration: number) => void;
        setHeartBPM: (bpm: number) => void;
        updateBlendshapes: (blendshapes: any) => void;
        heartController: HeartController;
        morphTargetMeshes: THREE.Mesh[];
        heartMorphTargets: any;
        switchHeartRhythm: (rhythmName: string) => void;
        setHeartSoundVolume: (volume: number) => void;
        toggleHeartSoundVariations: () => void;
        getAvailableHeartRhythms: () => string[];
        toggleMode: () => void;
        toggleAuscultationPanel: () => void;
        selectAuscultationPoint: (point: string) => void;
        setAuscultationCallback: (callback: (point: AuscultationPoint) => void) => void;
        getCurrentAuscultationPoint: () => AuscultationPoint | null;
    }
}
export {};
//# sourceMappingURL=heart.d.ts.map