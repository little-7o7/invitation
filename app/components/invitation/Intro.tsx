import React from "react";
import { Translations } from "./content";

export default function Intro({ t }: { t: Translations }) {
  return (
    <>
      <div
        className="sec sec-framed bg-white rev"
        style={{
          paddingTop: "clamp(52px,9vw,80px)",
          paddingBottom: "clamp(52px,9vw,80px)",
          position: "relative",
        }}
      >
        <div className="diag-overlay" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            fill="none"
          >
            <line
              x1="0"
              y1="0"
              x2="60"
              y2="60"
              stroke="#c4a882"
              strokeWidth=".6"
              opacity=".14"
            />
            <line
              x1="0"
              y1="20"
              x2="40"
              y2="60"
              stroke="#c4a882"
              strokeWidth=".4"
              opacity=".1"
            />
            <line
              x1="400"
              y1="0"
              x2="340"
              y2="60"
              stroke="#c4a882"
              strokeWidth=".6"
              opacity=".14"
            />
            <line
              x1="400"
              y1="20"
              x2="360"
              y2="60"
              stroke="#c4a882"
              strokeWidth=".4"
              opacity=".1"
            />
            <line
              x1="0"
              y1="300"
              x2="60"
              y2="240"
              stroke="#c4a882"
              strokeWidth=".6"
              opacity=".14"
            />
            <line
              x1="400"
              y1="300"
              x2="340"
              y2="240"
              stroke="#c4a882"
              strokeWidth=".6"
              opacity=".14"
            />

            <line
              x1="0"
              y1="0"
              x2="400"
              y2="300"
              stroke="#c4a882"
              strokeWidth=".3"
              opacity=".05"
            />
            <line
              x1="400"
              y1="0"
              x2="0"
              y2="300"
              stroke="#c4a882"
              strokeWidth=".3"
              opacity=".05"
            />
          </svg>
        </div>
        <div className="wm-text">Love</div>
        <p className="eyebrow">{t.withJoy}</p>
        <h2 className="s-title-script">{t.specialMoment}</h2>

        <div className="icon-line-row" style={{ margin: "0 0 18px" }}>
          <div className="ilr-line-g"></div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{ margin: "0 6px" }}
          >
            <polygon
              points="5,0 10,5 5,10 0,5"
              stroke="#c4a882"
              strokeWidth=".7"
              fill="none"
              opacity=".7"
            />
          </svg>
          <div className="ilr-diag" style={{ maxWidth: "60px" }}></div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{ margin: "0 6px" }}
          >
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="#c4a882"
              strokeWidth=".7"
              fill="none"
              opacity=".6"
            />
            <circle cx="7" cy="7" r="2" fill="#c4a882" opacity=".35" />
          </svg>
          <div
            className="ilr-diag"
            style={{ maxWidth: "60px", transform: "scaleX(-1)" }}
          ></div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{ margin: "0 6px" }}
          >
            <polygon
              points="5,0 10,5 5,10 0,5"
              stroke="#c4a882"
              strokeWidth=".7"
              fill="none"
              opacity=".7"
            />
          </svg>
          <div
            className="ilr-line-g"
            style={{
              background: "linear-gradient(90deg,var(--gold),transparent)",
            }}
          ></div>
        </div>
        <p className="body-txt">{t.inviteText}</p>
        <div className="branch-deco" style={{ marginTop: "24px" }}>
          <div className="bd-line"></div>
          <div className="bd-center">❧</div>
          <div className="bd-line r"></div>
        </div>
      </div>
      <div className="gold-stripe-bot"></div>
    </>
  );
}
