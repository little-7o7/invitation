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
  left: string;
  width: string;
  height: string;
  background: string;
  animationDuration: string;
  animationDelay: string;
  borderRadius: string;
};

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const nextPetalId = useRef(0);

  useEffect(() => {
    const mkPetal = () => {
      const dur = 10 + Math.random() * 16;
      const del = Math.random() * 22;
      const sz = 5 + Math.random() * 9;

      const newPetal = {
        id: nextPetalId.current++,
        left: `${Math.random() * 100}vw`,
        width: `${sz}px`,
        height: `${sz * 1.6}px`,
        background: COLS[Math.floor(Math.random() * COLS.length)],
        animationDuration: `${dur}s`,
        animationDelay: `${del}s`,
        borderRadius: Math.random() > 0.5 ? "50% 0 50% 0" : "0 50% 0 50%",
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
      {petals.map(({ id, ...styleProps }) => (
        <div key={id} className="petal" style={styleProps}></div>
      ))}
    </div>
  );
}
