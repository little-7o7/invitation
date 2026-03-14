import React from "react";
import { Translations } from "./content";

interface HeroProps {
  t: Translations;
  displayName: React.ReactNode;
}

export default function Hero({ t, displayName }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-mesh"></div>

      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>

      <svg className="corner-svg c-tl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 96 Q4 4 96 4" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M4 80 Q20 4 80 4" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".5"/>
        <circle cx="4" cy="4" r="3" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M14 4 C14 4 22 8 18 18 C14 28 4 24 4 14" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
        <path d="M4 14 L4 4 L14 4" stroke="#c4a882" strokeWidth=".8" fill="none"/>
      </svg>
      <svg className="corner-svg c-tr" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 96 Q4 4 96 4" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M4 80 Q20 4 80 4" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".5"/>
        <circle cx="4" cy="4" r="3" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M14 4 C14 4 22 8 18 18 C14 28 4 24 4 14" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
        <path d="M4 14 L4 4 L14 4" stroke="#c4a882" strokeWidth=".8" fill="none"/>
      </svg>
      <svg className="corner-svg c-bl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 96 Q4 4 96 4" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M4 80 Q20 4 80 4" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".5"/>
        <circle cx="4" cy="4" r="3" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M14 4 C14 4 22 8 18 18 C14 28 4 24 4 14" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
        <path d="M4 14 L4 4 L14 4" stroke="#c4a882" strokeWidth=".8" fill="none"/>
      </svg>
      <svg className="corner-svg c-br" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 96 Q4 4 96 4" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M4 80 Q20 4 80 4" stroke="#c4a882" strokeWidth=".4" fill="none" opacity=".5"/>
        <circle cx="4" cy="4" r="3" stroke="#c4a882" strokeWidth=".6" fill="none"/>
        <path d="M14 4 C14 4 22 8 18 18 C14 28 4 24 4 14" stroke="#c4a882" strokeWidth=".5" fill="none" opacity=".6"/>
        <path d="M4 14 L4 4 L14 4" stroke="#c4a882" strokeWidth=".8" fill="none"/>
      </svg>

      <svg className="bota" style={{'top':'8%','left':'5%','width':'70px','height':'90px','animationDelay':'.3s,.3s'}} viewBox="0 0 70 90" fill="none">
        <path d="M35 85 C35 85 5 60 8 30 C11 5 35 2 35 2 C35 2 59 5 62 30 C65 60 35 85 35 85Z" fill="#c4a882" opacity=".25"/>
        <line x1="35" y1="85" x2="35" y2="2" stroke="#c4a882" strokeWidth=".8" opacity=".4"/>
        <path d="M35 30 C25 24 14 26 8 30" stroke="#c4a882" strokeWidth=".6" opacity=".35" fill="none"/>
        <path d="M35 50 C45 44 56 46 62 50" stroke="#c4a882" strokeWidth=".6" opacity=".35" fill="none"/>
      </svg>
      <svg className="bota" style={{'top':'10%','right':'6%','width':'55px','height':'75px','animationDelay':'1.2s,1.2s','transform':'scaleX(-1)'}} viewBox="0 0 70 90" fill="none">
        <path d="M35 85 C35 85 5 60 8 30 C11 5 35 2 35 2 C35 2 59 5 62 30 C65 60 35 85 35 85Z" fill="#c4a882" opacity=".2"/>
        <line x1="35" y1="85" x2="35" y2="2" stroke="#c4a882" strokeWidth=".8" opacity=".35"/>
        <path d="M35 40 C25 34 14 36 8 40" stroke="#c4a882" strokeWidth=".6" opacity=".3" fill="none"/>
      </svg>
      <svg className="bota" style={{'bottom':'14%','left':'4%','width':'48px','height':'64px','animationDelay':'2s,2s'}} viewBox="0 0 70 90" fill="none">
        <path d="M35 85 C35 85 5 60 8 30 C11 5 35 2 35 2 C35 2 59 5 62 30 C65 60 35 85 35 85Z" fill="#c4a882" opacity=".18"/>
        <line x1="35" y1="85" x2="35" y2="2" stroke="#c4a882" strokeWidth=".8" opacity=".3"/>
      </svg>
      <svg className="bota" style={{'bottom':'12%','right':'5%','width':'60px','height':'80px','animationDelay':'.8s,.8s','transform':'scaleX(-1)'}} viewBox="0 0 70 90" fill="none">
        <path d="M35 85 C35 85 5 60 8 30 C11 5 35 2 35 2 C35 2 59 5 62 30 C65 60 35 85 35 85Z" fill="#c4a882" opacity=".22"/>
        <line x1="35" y1="85" x2="35" y2="2" stroke="#c4a882" strokeWidth=".8" opacity=".38"/>
        <path d="M35 55 C45 49 56 51 62 55" stroke="#c4a882" strokeWidth=".6" opacity=".3" fill="none"/>
      </svg>

      <p className="h-tag">{t.weddingInvitation}</p>
      <p className="h-dear" id="dear-line">{displayName}</p>
      <h2 className="h-guest" id="guest-name">{t.invited}</h2>

      <div className="h-div">
        <div className="hl"></div>
        <div className="hd" style={{'position':'relative'}}></div>
        <div className="hl"></div>
      </div>

      <span className="h-name1">Maxmudxon</span>
      <span className="h-amp">&</span>
      <span className="h-name2">Dilovarxon</span>

      <div className="h-date-block">
        <div className="h-date-big">04 August 2026</div>
        <div className="h-date-sub">{t.day} &nbsp;·&nbsp; 19:00 &nbsp;·&nbsp; {t.locationSub}</div>
      </div>

      <div className="scroll-hint">
        <span>{t.scrollDown}</span>
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
}
