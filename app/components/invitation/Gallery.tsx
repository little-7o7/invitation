import React from "react";
import { Translations } from "./content";

export default function Gallery({ t }: { t: Translations }) {
  return (
    <div className="gal-sec" style={{'background':'var(--bg2)'}}>
      <div className="gold-stripe-top" style={{'width':'100%'}}></div>
      <div className="gal-head rev" style={{'paddingTop':'clamp(44px,8vw,68px)'}}>
        <p className="eyebrow">{t.ourStory}</p>
        <h2 className="s-title-script">{t.momentsTogether}</h2>
        
        <div className="icon-line-row" style={{'marginTop':'4px'}}>
          <div className="ilr-line-g"></div>
          <div className="ilr-diag" style={{'maxWidth':'44px'}}></div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{'margin':'0 6px','flexShrink':'0'}}><circle cx="6" cy="6" r="5" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/><line x1="1" y1="6" x2="11" y2="6" stroke="#c4a882" strokeWidth=".4" opacity=".5"/><line x1="6" y1="1" x2="6" y2="11" stroke="#c4a882" strokeWidth=".4" opacity=".5"/></svg>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{'margin':'0 5px','flexShrink':'0'}}><polygon points="4,0 8,4 4,8 0,4" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".55"/></svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{'margin':'0 6px','flexShrink':'0'}}><circle cx="6" cy="6" r="5" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/><line x1="1" y1="6" x2="11" y2="6" stroke="#c4a882" strokeWidth=".4" opacity=".5"/><line x1="6" y1="1" x2="6" y2="11" stroke="#c4a882" strokeWidth=".4" opacity=".5"/></svg>
          <div className="ilr-diag" style={{'maxWidth':'44px','transform':'scaleX(-1)'}}></div>
          <div className="ilr-line-g" style={{'background':'linear-gradient(90deg,var(--gold),transparent)'}}></div>
        </div>
      </div>
      <div className="gal-grid">
        <div className="gc gc-1 rev-s">
          <img src="https://i.pinimg.com/736x/0d/b5/39/0db5390dcc385c689c2b3fcc8860e971.jpg" alt="Wedding couple" loading="lazy" onError={() => {}}/>
        </div>
        <div className="gc gc-2 rev-l">
          <img src="https://i.pinimg.com/736x/e6/21/e7/e621e771b8533e97ae626bfa3f3ce648.jpg" alt="Bride" loading="lazy" onError={() => {}}/>
        </div>
        <div className="gc gc-3 rev-r">
          <img src="https://i.pinimg.com/736x/b6/58/b1/b658b1fc11fa0969da8814fa2e07ec71.jpg" alt="Groom" loading="lazy" onError={() => {}}/>
        </div>
        <div className="gc gc-4 rev-s">
          <img src="https://i.pinimg.com/736x/e6/21/e7/e621e771b8533e97ae626bfa3f3ce648.jpg" alt="Couple" loading="lazy" onError={() => {}}/>
        </div>
      </div>
      <div className="gal-strip rev">
        <div className="gal-strip-line"></div>
        <p className="gal-strip-text">Maxmudxon &amp; Dilovarxon · 2026</p>
        <div className="gal-strip-line"></div>
      </div>
      <div className="gold-stripe-bot" style={{'width':'100%'}}></div>
    </div>
  );
}
