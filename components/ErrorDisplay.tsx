
import React from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg" role="alert">
      <p className="font-semibold">An Error Occurred</p>
      <p className="text-sm">{error}</p>
    </div>
  );
};
