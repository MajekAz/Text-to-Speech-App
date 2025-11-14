
export enum VoiceName {
  Zephyr = 'Zephyr',
  Puck = 'Puck',
  Charon = 'Charon',
  Kore = 'Kore',
  Fenrir = 'Fenrir',
}

export interface Voice {
  id: VoiceName;
  displayName: string;
}

export const VOICES: Voice[] = [
  { id: VoiceName.Zephyr, displayName: 'Zephyr (Friendly)' },
  { id: VoiceName.Puck, displayName: 'Puck (Playful)' },
  { id: VoiceName.Charon, displayName: 'Charon (Deep)' },
  { id: VoiceName.Kore, displayName: 'Kore (Clear)' },
  { id: VoiceName.Fenrir, displayName: 'Fenrir (Strong)' },
];
