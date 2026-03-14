import React from "react";
import { Translations } from "./content";

export default function Gratitude({ t }: { t: Translations }) {
  return (
    <div className="wishes rev" style={{'position':'relative'}}>
      <div className="diag-overlay" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 400 380" preserveAspectRatio="none" fill="none">
          <line x1="0"   y1="0"   x2="400" y2="380" stroke="#c4a882" strokeWidth=".4" opacity=".05"/>
          <line x1="400" y1="0"   x2="0"   y2="380" stroke="#c4a882" strokeWidth=".4" opacity=".05"/>
          <line x1="0"   y1="0"   x2="60"  y2="60"  stroke="#c4a882" strokeWidth=".5" opacity=".1"/>
          <line x1="400" y1="0"   x2="340" y2="60"  stroke="#c4a882" strokeWidth=".5" opacity=".1"/>
          <line x1="0"   y1="380" x2="60"  y2="320" stroke="#c4a882" strokeWidth=".5" opacity=".1"/>
          <line x1="400" y1="380" x2="340" y2="320" stroke="#c4a882" strokeWidth=".5" opacity=".1"/>
        </svg>
      </div>
      <div className="gold-stripe-top" style={{'position':'absolute','top':'0','left':'0','right':'0'}}></div>
      <p className="eyebrow" style={{'marginBottom':'14px','position':'relative','zIndex':'1'}}>{t.ourGratitude}</p>
      
      <div className="icon-line-row" style={{'marginBottom':'22px'}}>
        <div className="ilr-diag" style={{'maxWidth':'50px'}}></div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{'margin':'0 6px','flexShrink':'0'}}><circle cx="7" cy="7" r="6" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".55"/><circle cx="7" cy="7" r="2" fill="#c4a882" opacity=".4"/></svg>
        <div className="ilr-line"></div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{'margin':'0 8px','flexShrink':'0'}}><polygon points="5,0 10,5 5,10 0,5" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".6"/><circle cx="5" cy="5" r="1.5" fill="#c4a882" opacity=".4"/></svg>
        <div className="ilr-line"></div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{'margin':'0 6px','flexShrink':'0'}}><circle cx="7" cy="7" r="6" stroke="#c4a882" strokeWidth=".6" fill="none" opacity=".55"/><circle cx="7" cy="7" r="2" fill="#c4a882" opacity=".4"/></svg>
        <div className="ilr-diag" style={{'maxWidth':'50px','transform':'scaleX(-1)'}}></div>
      </div>
      <div className="branch-deco" style={{'marginBottom':'24px'}}>
        <div className="bd-line" style={{'width':'60px','flex':'none'}}></div>
        <div className="bd-center" style={{'fontSize':'clamp(18px,4vw,26px)'}}>❦</div>
        <div className="bd-line r" style={{'width':'60px','flex':'none'}}></div>
      </div>
      <p className="wishes-txt">{t.wishes}</p>
      <div className="branch-deco" style={{'marginTop':'28px','marginBottom':'0'}}>
        <div className="bd-line" style={{'width':'60px','flex':'none'}}></div>
        <div className="bd-center" style={{'fontSize':'clamp(18px,4vw,26px)'}}>❦</div>
        <div className="bd-line r" style={{'width':'60px','flex':'none'}}></div>
      </div>
      <div className="gold-stripe-bot" style={{'position':'absolute','bottom':'0','left':'0','right':'0'}}></div>
    </div>
  );
}
