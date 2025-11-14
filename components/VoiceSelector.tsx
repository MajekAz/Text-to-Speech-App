
import React from 'react';
import { VoiceName, VOICES } from '../types';

interface VoiceSelectorProps {
  selectedVoice: VoiceName;
  onVoiceChange: (voice: VoiceName) => void;
  disabled: boolean;
}

export const VoiceSelector: React.FC<VoiceSelectorProps> = ({ selectedVoice, onVoiceChange, disabled }) => {
  return (
    <div>
        <label htmlFor="voice-selector" className="block text-sm font-medium text-gray-400 mb-2">
            Select a Voice
        </label>
        <div className="relative">
            <select
                id="voice-selector"
                value={selectedVoice}
                onChange={(e) => onVoiceChange(e.target.value as VoiceName)}
                disabled={disabled}
                className="w-full appearance-none bg-gray-700 border border-gray-600 text-white py-3 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {VOICES.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                        {voice.displayName}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    </div>
  );
};
