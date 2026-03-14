import React from "react";
import { Translations } from "./content";

export default function Footer({ t }: { t: Translations }) {
  return (
    <div className="foot rev">
      <div className="floral-full" style={{'marginBottom':'8px'}}>
        <svg viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="60" y1="40" x2="540" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
          <path d="M60 40 C80 40 85 24 76 18 C68 13 60 20 64 28 C68 36 78 32 80 24" stroke="#c4a882" strokeWidth=".7" fill="none" opacity=".55"/>
          <ellipse cx="70" cy="12" rx="5" ry="9" transform="rotate(-25 70 12)" fill="#c4a882" opacity=".18"/>
          <path d="M68 40 C85 36 90 20 84 14" stroke="#c4a882" strokeWidth=".55" fill="none" opacity=".45"/>
          <ellipse cx="86" cy="10" rx="4" ry="8" transform="rotate(-35 86 10)" fill="#c4a882" opacity=".14"/>
          <path d="M72 40 C76 52 70 60 62 62" stroke="#c4a882" strokeWidth=".55" fill="none" opacity=".4"/>
          <ellipse cx="60" cy="66" rx="4" ry="7" transform="rotate(10 60 66)" fill="#c4a882" opacity=".15"/>
          
          <circle cx="300" cy="40" r="28" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".4"/>
          <circle cx="300" cy="40" r="22" stroke="#c4a882" strokeWidth=".3" fill="none" opacity=".25"/>
          <circle cx="300" cy="40" r="4" fill="#c4a882" opacity=".3"/>
          <line x1="272" y1="40" x2="278" y2="40" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
          <line x1="322" y1="40" x2="328" y2="40" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
          
          <path d="M540 40 C520 40 515 24 524 18 C532 13 540 20 536 28 C532 36 522 32 520 24" stroke="#c4a882" strokeWidth=".7" fill="none" opacity=".55"/>
          <ellipse cx="530" cy="12" rx="5" ry="9" transform="rotate(25 530 12)" fill="#c4a882" opacity=".18"/>
          <path d="M532 40 C515 36 510 20 516 14" stroke="#c4a882" strokeWidth=".55" fill="none" opacity=".45"/>
          <ellipse cx="514" cy="10" rx="4" ry="8" transform="rotate(35 514 10)" fill="#c4a882" opacity=".14"/>
          <path d="M528 40 C524 52 530 60 538 62" stroke="#c4a882" strokeWidth=".55" fill="none" opacity=".4"/>
          <ellipse cx="540" cy="66" rx="4" ry="7" transform="rotate(-10 540 66)" fill="#c4a882" opacity=".15"/>
        </svg>
      </div>
      <div className="foot-mono">M &amp; D</div>
      <div className="orn-wide" style={{'margin':'4px auto 12px'}}>
        <div className="ow-line" style={{'maxWidth':'70px'}}></div>
        <div className="ow-dot"></div>
        <div className="ow-rose">✦ ✦ ✦</div>
        <div className="ow-dot"></div>
        <div className="ow-line" style={{'maxWidth':'70px'}}></div>
      </div>
      <div className="foot-date">04 · August · 2026</div>
      <div className="foot-names">Maxmudxon &amp; Dilovarxon</div>
      <div className="foot-venue" style={{'marginTop':'6px'}}>{t.venueFull}</div>
      
      <div className="floral-full" style={{'marginTop':'16px'}}>
        <svg viewBox="0 0 600 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="18" x2="500" y2="18" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
          <circle cx="300" cy="18" r="4" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".5"/>
          <circle cx="280" cy="18" r="2" fill="#c4a882" opacity=".35"/>
          <circle cx="320" cy="18" r="2" fill="#c4a882" opacity=".35"/>
          <circle cx="260" cy="18" r="1.5" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".4"/>
          <circle cx="340" cy="18" r="1.5" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".4"/>
        </svg>
      </div>
    </div>
  );
}
