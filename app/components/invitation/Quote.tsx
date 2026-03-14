import React from "react";
import { Translations } from "./content";

export default function Quote({ t }: { t: Translations }) {
  return (
    <div className="quote-wrap rev" style={{ position: "relative" }}>
      <div
        className="gold-stripe-top"
        style={{ position: "absolute", top: "0", left: "0", right: "0" }}
      ></div>
      <div className="qm">&quot;</div>
      <p className="qt">{t.quote}</p>
      <div
        className="branch-deco"
        style={{ marginTop: "28px", marginBottom: "0" }}
      >
        <div className="bd-line"></div>
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          opacity=".5"
        >
          <path
            d="M16 2 C10 2 4 8 4 14 C4 17 7 19 10 17 C13 15 13 11 16 10 C19 11 19 15 22 17 C25 19 28 17 28 14 C28 8 22 2 16 2Z"
            fill="#c4a882"
          />
        </svg>
        <div className="bd-line r"></div>
      </div>
      <div
        className="gold-stripe-bot"
        style={{ position: "absolute", bottom: "0", left: "0", right: "0" }}
      ></div>
    </div>
  );
}
