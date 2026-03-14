import React from "react";
import { Translations } from "./content";

export default function EventDetails({ t }: { t: Translations }) {
  return (
    <div className="sec rev bg-white" style={{'paddingBottom':'clamp(44px,8vw,68px)','position':'relative'}}>
      <div className="diag-overlay" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 400 280" preserveAspectRatio="none" fill="none">
          <line x1="0"   y1="0"   x2="50"  y2="50"  stroke="#c4a882" strokeWidth=".5" opacity=".12"/>
          <line x1="400" y1="0"   x2="350" y2="50"  stroke="#c4a882" strokeWidth=".5" opacity=".12"/>
          <line x1="0"   y1="280" x2="50"  y2="230" stroke="#c4a882" strokeWidth=".5" opacity=".12"/>
          <line x1="400" y1="280" x2="350" y2="230" stroke="#c4a882" strokeWidth=".5" opacity=".12"/>
          <line x1="20"  y1="0"   x2="20"  y2="280" stroke="#c4a882" strokeWidth=".3" opacity=".06"/>
          <line x1="380" y1="0"   x2="380" y2="280" stroke="#c4a882" strokeWidth=".3" opacity=".06"/>
        </svg>
      </div>
      <p className="eyebrow">{t.eventDetails}</p>
      <h2 className="s-title">{t.saveTheDate}</h2>
      
      <div className="icon-line-row" style={{'marginBottom':'20px'}}>
        <div className="ilr-line"></div>
        <div className="ilr-diag" style={{'maxWidth':'36px'}}></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{'margin':'0 8px','flexShrink':'0'}}>
          <rect x="1" y="1" width="14" height="14" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/>
          <rect x="4" y="4" width="8" height="8"   stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".4"/>
          <circle cx="8" cy="8" r="1.5" fill="#c4a882" opacity=".5"/>
        </svg>
        <div className="ilr-diag" style={{'maxWidth':'36px','transform':'scaleX(-1)'}}></div>
        <div className="ilr-line"></div>
      </div>
      <div className="info-grid-wrap">
        <div className="info-grid stagger">
          <div className="ic rev"><div className="ic-icon">◈</div><div className="ic-l">{t.date}</div><div className="ic-v">{t.dateValue}</div><div className="ic-s">{t.dateSub}</div></div>
          <div className="ic rev"><div className="ic-icon">◎</div><div className="ic-l">{t.timeLabel}</div><div className="ic-v">{t.timeValue}</div><div className="ic-s">{t.timeSub}</div></div>
          <div className="ic rev"><div className="ic-icon">◇</div><div className="ic-l">{t.location}</div><div className="ic-v" style={{'fontSize':'clamp(15px,3.5vw,20px)'}}>Fotima Sultan</div><div className="ic-s">Samarkand</div></div>
        </div>
      </div>
    </div>
  );
}
