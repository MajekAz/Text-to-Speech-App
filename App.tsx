
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { VOICES, VoiceName } from './types';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { Header } from './components/Header';
import { VoiceSelector } from './components/VoiceSelector';
import { TextInputArea } from './components/TextInputArea';
import { GenerateButton } from './components/GenerateButton';
import { ErrorDisplay } from './components/ErrorDisplay';
import { AudioVisualizer } from './components/AudioVisualizer';

const App: React.FC = () => {
  const [text, setText] = useState<string>('Hello! I am a friendly AI assistant. You can type any text here and I will read it aloud for you.');
  const [selectedVoice, setSelectedVoice] = useState<VoiceName>(VoiceName.Zephyr);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [audioData, setAudioData] = useState<string | null>(null);

  const { play, isPlaying, stop } = useAudioPlayer();

  useEffect(() => {
    if (audioData) {
      play(audioData);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioData]);

  const generateSpeech = async (inputText: string, voiceName: VoiceName) => {
    if (!process.env.API_KEY) {
      setError("API key not found. Please make sure it is set in your environment variables.");
      return;
    }
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text: inputText }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voiceName },
            },
          },
        },
      });
      
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        setAudioData(base64Audio);
      } else {
        throw new Error('No audio data received from the API.');
      }
    } catch (e: any) {
      console.error(e);
      setError(`An error occurred: ${e.message}`);
    }
  };


  const handleGenerateSpeech = useCallback(async () => {
    if (!text.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setAudioData(null);
    if(isPlaying) stop();

    await generateSpeech(text, selectedVoice);

    setIsLoading(false);
  }, [text, selectedVoice, isLoading, isPlaying, stop]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <Header />
        
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl space-y-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <VoiceSelector
                selectedVoice={selectedVoice}
                onVoiceChange={setSelectedVoice}
                disabled={isLoading || isPlaying}
              />
            </div>
            <div className="flex items-center justify-center h-full">
              {isPlaying && <AudioVisualizer />}
            </div>
          </div>
          
          <TextInputArea
            value={text}
            onChange={setText}
            disabled={isLoading || isPlaying}
          />
          
          <ErrorDisplay error={error} />
          
          <GenerateButton
            isLoading={isLoading}
            isPlaying={isPlaying}
            onClick={handleGenerateSpeech}
          />
        </div>
        <footer className="text-center text-gray-500 text-sm">
            <p>Powered by Gemini. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
