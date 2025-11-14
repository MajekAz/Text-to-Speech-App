
import React from 'react';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export const TextInputArea: React.FC<TextInputAreaProps> = ({ value, onChange, disabled }) => {
  return (
    <div>
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-400 mb-2">
            Enter Text
        </label>
        <textarea
            id="text-input"
            rows={5}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            placeholder="Type your text here..."
            className="w-full bg-gray-700/50 border border-gray-600 text-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
    </div>
  );
};
