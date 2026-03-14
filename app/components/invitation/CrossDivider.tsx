import React from "react";
import { Translations } from "./content";

interface CrossDividerProps {
  type: "a" | "b" | "c" | "d" | "e";
  t?: Translations;
}

export default function CrossDivider({ type, t }: CrossDividerProps) {
  const renderSVG = () => {
    switch (type) {
      case "a":
        return (
          <svg className="cross-div-svg" viewBox="0 0 640 48" fill="none" preserveAspectRatio="none">
            <line x1="0" y1="14" x2="640" y2="14" stroke="#c4a882" strokeWidth=".4" opacity=".3"/>
            <line x1="0" y1="34" x2="640" y2="34" stroke="#c4a882" strokeWidth=".4" opacity=".3"/>
            <line x1="0"   y1="48" x2="120" y2="0"  stroke="#c4a882" strokeWidth=".5" opacity=".35"/>
            <line x1="80"  y1="48" x2="200" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="160" y1="48" x2="280" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="640" y1="48" x2="520" y2="0"  stroke="#c4a882" strokeWidth=".5" opacity=".35"/>
            <line x1="560" y1="48" x2="440" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="480" y1="48" x2="360" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <circle cx="320" cy="24" r="10" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
            <circle cx="320" cy="24" r="3"  fill="#c4a882" opacity=".4"/>
            <line x1="280" y1="24" x2="308" y2="24" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <line x1="332" y1="24" x2="360" y2="24" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <line x1="100" y1="10" x2="100" y2="18" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="200" y1="10" x2="200" y2="18" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="540" y1="10" x2="540" y2="18" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="440" y1="10" x2="440" y2="18" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="100" y1="30" x2="100" y2="38" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="540" y1="30" x2="540" y2="38" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <polygon points="8,24 14,18 20,24 14,30"  stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".5"/>
            <polygon points="620,24 626,18 632,24 626,30" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".5"/>
          </svg>
        );
      case "b":
        return (
          <svg className="cross-div-svg" viewBox="0 0 640 52" fill="none" preserveAspectRatio="none">
            <line x1="0"   y1="0"   x2="80"  y2="52" stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="40"  y1="0"   x2="120" y2="52" stroke="#c4a882" strokeWidth=".35" opacity=".2"/>
            <line x1="120" y1="0"   x2="200" y2="52" stroke="#c4a882" strokeWidth=".35" opacity=".2"/>
            <line x1="640" y1="0"   x2="560" y2="52" stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="600" y1="0"   x2="520" y2="52" stroke="#c4a882" strokeWidth=".35" opacity=".2"/>
            <line x1="520" y1="0"   x2="440" y2="52" stroke="#c4a882" strokeWidth=".35" opacity=".2"/>
            <line x1="240" y1="0"   x2="320" y2="52" stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="400" y1="0"   x2="320" y2="52" stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="0"   y1="26"  x2="640" y2="26" stroke="#c4a882" strokeWidth=".35" opacity=".25"/>
            <line x1="140" y1="20"  x2="140" y2="32" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="260" y1="20"  x2="260" y2="32" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="380" y1="20"  x2="380" y2="32" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <line x1="500" y1="20"  x2="500" y2="32" stroke="#c4a882" strokeWidth=".5" opacity=".4"/>
            <circle cx="320" cy="26" r="16" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".55"/>
            <text x="320" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6" fill="#a07e55" letterSpacing="3" opacity=".75">{t?.time}</text>
            <polygon points="90,22  94,26  90,30  86,26"  stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
            <polygon points="550,22 554,26 550,30 546,26" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
            <circle cx="190" cy="26" r="3" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".4"/>
            <circle cx="450" cy="26" r="3" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".4"/>
          </svg>
        );
      case "c":
        return (
          <svg className="cross-div-svg" viewBox="0 0 640 44" fill="none" preserveAspectRatio="none">
            <line x1="0" y1="22" x2="640" y2="22" stroke="#c4a882" strokeWidth=".4" opacity=".3"/>
            <line x1="0"  y1="0"  x2="44" y2="44" stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="22" y1="0"  x2="66" y2="44" stroke="#c4a882" strokeWidth=".3" opacity=".18"/>
            <line x1="0"  y1="44" x2="44" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="22" y1="44" x2="66" y2="0"  stroke="#c4a882" strokeWidth=".3" opacity=".18"/>
            <line x1="640" y1="0"  x2="596" y2="44" stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="618" y1="0"  x2="574" y2="44" stroke="#c4a882" strokeWidth=".3" opacity=".18"/>
            <line x1="640" y1="44" x2="596" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".25"/>
            <line x1="618" y1="44" x2="574" y2="0"  stroke="#c4a882" strokeWidth=".3" opacity=".18"/>
            <polygon points="160,18 166,22 160,26 154,22" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
            <polygon points="480,18 486,22 480,26 474,22" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
            <circle cx="260" cy="22" r="4" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".4"/>
            <circle cx="380" cy="22" r="4" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".4"/>
            <circle cx="320" cy="22" r="8"  stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".55"/>
            <line x1="312" y1="22" x2="328" y2="22" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <line x1="320" y1="14" x2="320" y2="30" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <line x1="314" y1="16" x2="326" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".4"/>
            <line x1="326" y1="16" x2="314" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".4"/>
          </svg>
        );
      case "d":
        return (
          <svg className="cross-div-svg" viewBox="0 0 640 56" fill="none" preserveAspectRatio="none">
            <line x1="0"  y1="28" x2="130" y2="0"  stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="0"  y1="28" x2="110" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".22"/>
            <line x1="0"  y1="28" x2="150" y2="56" stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="0"  y1="28" x2="170" y2="56" stroke="#c4a882" strokeWidth=".4" opacity=".22"/>
            <line x1="0"  y1="28" x2="160" y2="28" stroke="#c4a882" strokeWidth=".5" opacity=".35"/>
            <line x1="640" y1="28" x2="510" y2="0"  stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="640" y1="28" x2="530" y2="0"  stroke="#c4a882" strokeWidth=".4" opacity=".22"/>
            <line x1="640" y1="28" x2="490" y2="56" stroke="#c4a882" strokeWidth=".5" opacity=".3"/>
            <line x1="640" y1="28" x2="470" y2="56" stroke="#c4a882" strokeWidth=".4" opacity=".22"/>
            <line x1="640" y1="28" x2="480" y2="28" stroke="#c4a882" strokeWidth=".5" opacity=".35"/>
            <circle cx="200" cy="28" r="4" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
            <line x1="204" y1="28" x2="228" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <polygon points="234,23 240,28 234,33 228,28" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".5"/>
            <line x1="240" y1="28" x2="270" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <rect x="274" y="20" width="16" height="16" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45" transform="rotate(15 282 28)"/>
            <line x1="294" y1="28" x2="316" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <circle cx="320" cy="28" r="7" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
            <circle cx="320" cy="28" r="2" fill="#c4a882" opacity=".45"/>
            <line x1="327" y1="28" x2="346" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <rect x="350" y="20" width="16" height="16" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45" transform="rotate(-15 358 28)"/>
            <line x1="366" y1="28" x2="396" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <polygon points="400,23 406,28 400,33 394,28" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".5"/>
            <line x1="406" y1="28" x2="430" y2="28" stroke="#c4a882" strokeWidth=".4" opacity=".35"/>
            <circle cx="436" cy="28" r="4" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".45"/>
          </svg>
        );
      case "e":
        return (
          <svg className="cross-div-svg" viewBox="0 0 640 40" fill="none" preserveAspectRatio="none">
            <line x1="0"   y1="0"  x2="40"  y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="40"  y1="0"  x2="80"  y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="80"  y1="0"  x2="120" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="120" y1="0"  x2="160" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="160" y1="0"  x2="200" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="200" y1="0"  x2="240" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="40"  y1="0"  x2="0"   y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="80"  y1="0"  x2="40"  y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="120" y1="0"  x2="80"  y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="160" y1="0"  x2="120" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="200" y1="0"  x2="160" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="240" y1="0"  x2="200" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="400" y1="0"  x2="440" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="440" y1="0"  x2="480" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="480" y1="0"  x2="520" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="520" y1="0"  x2="560" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="560" y1="0"  x2="600" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="600" y1="0"  x2="640" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="440" y1="0"  x2="400" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="480" y1="0"  x2="440" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="520" y1="0"  x2="480" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="560" y1="0"  x2="520" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="600" y1="0"  x2="560" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            <line x1="640" y1="0"  x2="600" y2="40" stroke="#c4a882" strokeWidth=".4" opacity=".2"/>
            
            <rect x="256" y="0" width="128" height="40" fill="#fdfaf6"/>
            
            <line x1="256" y1="20" x2="280" y2="20" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <line x1="360" y1="20" x2="384" y2="20" stroke="#c4a882" strokeWidth=".5" opacity=".5"/>
            <polygon points="286,14 294,20 286,26 278,20" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".55"/>
            <polygon points="354,14 362,20 354,26 346,20" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".55"/>
            <circle cx="320" cy="20" r="12" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".55"/>
            <circle cx="320" cy="20" r="5"  stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".35"/>
            <circle cx="320" cy="20" r="1.5" fill="#c4a882" opacity=".5"/>
            <line x1="302" y1="20" x2="313" y2="20" stroke="#c4a882" strokeWidth=".4" opacity=".4"/>
            <line x1="327" y1="20" x2="338" y2="20" stroke="#c4a882" strokeWidth=".4" opacity=".4"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cross-div rev">
      {renderSVG()}
    </div>
  );
}
