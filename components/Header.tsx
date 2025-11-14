
import React from 'react';

const SparkleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-indigo-400">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.846.813l2.846-.813a.75.75 0 0 1 .976.976l-.813 2.846a3.75 3.75 0 0 0 .813 2.846l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-.813 2.846l.813 2.846a.75.75 0 0 1-.976.976l-2.846-.813a3.75 3.75 0 0 0-2.846.813l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.846-.813l-2.846.813a.75.75 0 0 1-.976-.976l.813-2.846a3.75 3.75 0 0 0-.813-2.846l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 .813-2.846l-.813-2.846a.75.75 0 0 1 .976-.976l2.846.813a3.75 3.75 0 0 0 2.846-.813l.813-2.846A.75.75 0 0 1 9 4.5Z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
                <SparkleIcon />
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    AzMajDigital Text-to-Speech 2.0
                </h1>
            </div>
            <p className="text-lg text-gray-400">
                Bring your text to life. Select a voice, type your message, and hit generate.
            </p>
        </header>
    );
};
