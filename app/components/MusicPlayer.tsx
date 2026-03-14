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
        return false;
      }
    };

    // Try autoplay immediately (works in some browsers)
    playAudio();

    // Start music on first scroll
    const handleScroll = async () => {
      if (audio.paused) {
        const success = await playAudio();
        if (success) {
          window.removeEventListener("scroll", handleScroll);
        }
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Also start on click or touch as fallback
    const handleInteraction = async () => {
      if (audio.paused) {
        await playAudio();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
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
