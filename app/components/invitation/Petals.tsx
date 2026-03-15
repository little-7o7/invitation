"use client";
import React, { useEffect, useState, useRef } from "react";

const COLS = [
  "#f5d4b8",
  "#f0c8b0",
  "#ead4c0",
  "#f5e0d0",
  "#e8ccb8",
  "#f2dcd0",
  "#fae8dc",
];

type Petal = {
  id: number;
  type: "heart" | "petal";
  left: string;
  width: string;
  height: string;
  color: string;
  animationDuration: string;
  animationDelay: string;
  rotate?: string;
  borderRadius?: string;
};

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const nextPetalId = useRef(0);

  useEffect(() => {
    const mkPetal = () => {
      const dur = 10 + Math.random() * 16;
      const del = Math.random() * 22;
      const sz = 8 + Math.random() * 10;
      const type = Math.random() > 0.5 ? "heart" : "petal";

      const newPetal: Petal = {
        id: nextPetalId.current++,
        type,
        left: `${Math.random() * 92}vw`,
        width: `${sz}px`,
        height: type === "heart" ? `${sz}px` : `${sz * 1.6}px`,
        color:
          type === "heart"
            ? "#ffb7b7"
            : COLS[Math.floor(Math.random() * COLS.length)],
        animationDuration: `${dur}s`,
        animationDelay: `${del}s`,
        ...(type === "heart"
          ? { rotate: `${Math.random() * 360}deg` }
          : {
              borderRadius:
                Math.random() > 0.5 ? "50% 0 50% 0" : "0 50% 0 50%",
            }),
      };

      setPetals((prev) => [...prev, newPetal]);

      setTimeout(
        () => {
          setPetals((prev) => prev.filter((p) => p.id !== newPetal.id));
        },
        (dur + del) * 1000 + 600,
      );
    };

    for (let i = 0; i < 24; i++) mkPetal();
    const petalInterval = setInterval(mkPetal, 700);

    return () => clearInterval(petalInterval);
  }, []);

  return (
    <div id="petals">
      {petals.map(
        ({ id, type, rotate, color, borderRadius, ...styleProps }) => {
          if (type === "heart") {
            return (
              <svg
                key={id}
                className="petal"
                viewBox="0 0 24 24"
                style={{
                  ...styleProps,
                  fill: color,
                  transform: `rotate(${rotate})`,
                }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            );
          }
          return (
            <div
              key={id}
              className="petal"
              style={{
                ...styleProps,
                background: color,
                borderRadius: borderRadius,
              }}
            ></div>
          );
        },
      )}
    </div>
  );
}
