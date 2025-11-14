
import { useState, useRef, useCallback, useEffect } from 'react';
import { decode, decodeAudioData } from '../utils/audioUtils';

const SAMPLE_RATE = 24000;
const NUM_CHANNELS = 1;

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
     // Create AudioContext only on the client side
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
      sampleRate: SAMPLE_RATE,
    });
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const play = useCallback(async (base64Audio: string) => {
    if (!audioContextRef.current) return;
    if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
    }
    
    // Ensure context is running
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    try {
      const decodedData = decode(base64Audio);
      const audioBuffer = await decodeAudioData(decodedData, audioContextRef.current, SAMPLE_RATE, NUM_CHANNELS);
      
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        sourceNodeRef.current = null;
      };
      
      source.start();
      sourceNodeRef.current = source;
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  }, []);
  
  const stop = useCallback(() => {
    if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  return { play, isPlaying, stop };
};
