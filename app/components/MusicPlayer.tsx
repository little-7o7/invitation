"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        return true;
      } catch {
        console.log("Autoplay prevented. Waiting for user interaction.");
        setIsPlaying(false);
        return false;
      }
    };

    // Try playing immediately
    playAudio();

    // Also play upon user interaction
    const handleInteraction = async () => {
      if (audio.paused) {
        const success = await playAudio();
        if (success) {
          document.removeEventListener("click", handleInteraction);
          document.removeEventListener("touchstart", handleInteraction);
          document.removeEventListener("scroll", handleInteraction);
        }
      } else {
        document.removeEventListener("click", handleInteraction);
        document.removeEventListener("touchstart", handleInteraction);
        document.removeEventListener("scroll", handleInteraction);
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" autoPlay />
      <button 
        onClick={toggleMute}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          color: "white",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 50,
          fontSize: "1.2rem",
          transition: "background 0.3s",
        }}
        aria-label="Toggle Music"
      >
        {isPlaying ? "🎵" : "🔇"}
      </button>
    </>
  );
}
