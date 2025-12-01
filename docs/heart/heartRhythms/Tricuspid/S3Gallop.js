// Apex, Left Ducubitus, Bell - S3 Gallop - Both Normal and Cardiomyopathy
export const tricuspidS3GallopRhythm = {
    name: "Tricuspid S3 Gallop",
    location: "Tricuspid",
    sound: [
        // S1 sound
        {
            time: 0.32,
            soundPath: "assets/sounds/heart-normal-S1.wav",
            volume: .7
        },
        // S2 sound
        {
            time: 0.62,
            soundPath: "assets/sounds/heart-normal-S2.wav",
            volume: .7
        },
        // S3 sound
        {
            time: 0.72,
            soundPath: "assets/sounds/s3.wav",
            volume: .7
        },
    ]
};
//# sourceMappingURL=S3Gallop.js.map