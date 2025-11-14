
import React from 'react';

const SpeakerWaveIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.536 3.536 3.536 9.213 0 12.749a.75.75 0 1 1-1.06-1.06c2.953-2.953 2.953-7.737 0-10.638a.75.75 0 0 1 0-1.061ZM16.464 7.225a.75.75 0 0 1 1.06 0 6 6 0 0 1 0 8.486.75.75 0 1 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
  
const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
  
interface GenerateButtonProps {
    isLoading: boolean;
    isPlaying: boolean;
    onClick: () => void;
}
  
export const GenerateButton: React.FC<GenerateButtonProps> = ({ isLoading, isPlaying, onClick }) => {
    const disabled = isLoading || isPlaying;
    const buttonText = isLoading ? 'Generating...' : isPlaying ? 'Playing...' : 'Generate Speech';
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:bg-indigo-400/50 disabled:cursor-not-allowed shadow-lg disabled:shadow-none"
        >
            {isLoading ? <LoadingSpinner /> : <SpeakerWaveIcon />}
            <span>{buttonText}</span>
        </button>
    );
};
