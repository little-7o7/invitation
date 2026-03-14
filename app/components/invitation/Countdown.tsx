"use client";
import React, { useEffect, useState } from "react";
import { Translations } from "./content";

export default function Countdown({ t }: { t: Translations }) {
  const [timeLeft, setTimeLeft] = useState({ d: '—', h: '—', m: '—', s: '—' });

  useEffect(() => {
    const tick = () => {
      const diff = new Date('2026-08-04T19:00:00+05:00').getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }
      setTimeLeft({
        d: String(Math.floor(diff / 864e5)).padStart(2, '0'),
        h: String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0'),
        m: String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0'),
        s: String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0')
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sec rev" style={{'background':'var(--bg2)','position':'relative'}}>
      <div className="diag-overlay" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 400 320" preserveAspectRatio="none" fill="none">
          <line x1="0"   y1="320" x2="400" y2="0"   stroke="#c4a882" strokeWidth=".4" opacity=".07"/>
          <line x1="0"   y1="260" x2="340" y2="0"   stroke="#c4a882" strokeWidth=".3" opacity=".05"/>
          <line x1="60"  y1="320" x2="400" y2="60"  stroke="#c4a882" strokeWidth=".3" opacity=".05"/>
        </svg>
      </div>
      <p className="eyebrow">{t.timeRemaining}</p>
      <h2 className="s-title">{t.untilWeSay}</h2>
      
      <div className="icon-line-row" style={{'marginBottom':'6px'}}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{'flexShrink':'0','marginRight':'6px'}}><circle cx="6" cy="6" r="4.5" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/><line x1="6" y1="1" x2="6" y2="11" stroke="#c4a882" strokeWidth=".5" opacity=".4"/><line x1="1" y1="6" x2="11" y2="6" stroke="#c4a882" strokeWidth=".5" opacity=".4"/></svg>
        <div className="ilr-line"></div>
        <div className="ilr-diag" style={{'maxWidth':'40px'}}></div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{'margin':'0 8px','flexShrink':'0'}}><rect x="1" y="1" width="6" height="6" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".55" transform="rotate(45 4 4)"/></svg>
        <div className="ilr-diag" style={{'maxWidth':'40px','transform':'scaleX(-1)'}}></div>
        <div className="ilr-line"></div>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{'flexShrink':'0','marginLeft':'6px'}}><circle cx="6" cy="6" r="4.5" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/><line x1="6" y1="1" x2="6" y2="11" stroke="#c4a882" strokeWidth=".5" opacity=".4"/><line x1="1" y1="6" x2="11" y2="6" stroke="#c4a882" strokeWidth=".5" opacity=".4"/></svg>
      </div>
      <div className="cd-frame rev">
        <div className="cd-frame-label">Samarkand · 04 August 2026</div>
        <div className="cd stagger">
          <div className="cd-b rev"><div className="cd-n" >{timeLeft.d}</div><div className="cd-l">{t.days}</div></div>
          <div className="cd-b rev"><div className="cd-n" >{timeLeft.h}</div><div className="cd-l">{t.hours}</div></div>
          <div className="cd-b rev"><div className="cd-n" >{timeLeft.m}</div><div className="cd-l">{t.mins}</div></div>
          <div className="cd-b rev"><div className="cd-n" >{timeLeft.s}</div><div className="cd-l">{t.secs}</div></div>
        </div>
      </div>
    </div>
  );
}
