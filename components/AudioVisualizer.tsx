
import React from 'react';

export const AudioVisualizer: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-1.5 h-10">
      <span className="text-sm text-gray-400 mr-2">Playing</span>
      <div className="w-1 h-3 bg-indigo-400 rounded-full animate-[pulsate_1s_ease-in-out_infinite_0s]" />
      <div className="w-1 h-5 bg-indigo-400 rounded-full animate-[pulsate_1s_ease-in-out_infinite_0.2s]" />
      <div className="w-1 h-8 bg-indigo-400 rounded-full animate-[pulsate_1s_ease-in-out_infinite_0.4s]" />
      <div className="w-1 h-5 bg-indigo-400 rounded-full animate-[pulsate_1s_ease-in-out_infinite_0.6s]" />
      <div className="w-1 h-3 bg-indigo-400 rounded-full animate-[pulsate_1s_ease-in-out_infinite_0.8s]" />
      <style>{`
        @keyframes pulsate {
          0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
