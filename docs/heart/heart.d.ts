import * as THREE from 'three';
import { HeartController } from './HeartController.js';
import { AuscultationLocation, SelectableRhythm } from './heartRhythms/Rhythm.js';
export declare function init(): void;
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
        switchHeartRhythm: (rhythm: SelectableRhythm) => void;
        setHeartSoundVolume: (volume: number) => void;
        toggleHeartSoundVariations: () => void;
        getAvailableHeartRhythms: () => string[];
        toggleMode: () => void;
        toggleAuscultationPanel: () => void;
        selectAuscultationPoint: (point: AuscultationLocation) => void;
        setAuscultationCallback: (callback: (point: AuscultationLocation) => void) => void;
        getCurrentAuscultationPoint: () => AuscultationLocation | null;
    }
}
//# sourceMappingURL=heart.d.ts.map