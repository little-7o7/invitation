import React from "react";
import Image from "next/image";
import { Translations } from "./content";

export default function Venue({ t }: { t: Translations }) {
  return (
    <>
      <div className="venue-wrap rev-s">
        <Image
          src="https://avatars.mds.yandex.net/get-altay/16557473/2a00000198bce33083c304f31d32ee619c96/orig"
          alt="Fotima Sultan Restaurant"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className="venue-grad"></div>
        <div className="venue-cap">
          <div className="venue-cap-n">Fotima Sultan Restaurant</div>
          <div className="venue-cap-c">Samarkand, Uzbekistan</div>
        </div>
      </div>

      <div className="sec sec-framed rev bg-white" style={{'paddingTop':'clamp(44px,8vw,68px)','paddingBottom':'clamp(44px,8vw,68px)'}}>
        <p className="eyebrow">{t.theVenue}</p>
        <h2 className="s-title-script">Fotima Sultan</h2>
        <div className="orn-wide">
          <div className="ow-line"></div><div className="ow-dot"></div>
          <div className="ow-rose">✦</div>
          <div className="ow-dot"></div><div className="ow-line"></div>
        </div>
        <p className="body-txt" style={{'fontSize':'clamp(18px,4vw,23px)'}}>{t.venueDesc}</p>
        <div className="map-btns">
          <a href="https://maps.app.goo.gl/Kv1Av1VrrCjRkbJC7" target="_blank" rel="noopener noreferrer" className="map-btn rev-l">
            <svg width="20" height="26" viewBox="0 0 36 46" fill="none"><path d="M18 2C10.3 2 4 8.3 4 16c0 11.5 14 28 14 28S32 27.5 32 16C32 8.3 25.7 2 18 2z" fill="#ecdecf" stroke="#c4a882" strokeWidth="1.4"/><circle cx="18" cy="16" r="5" stroke="#c4a882" strokeWidth="1.2" fill="none"/></svg>
            <div className="map-btn-lbl">{t.googleMaps}</div>
            <div className="map-btn-cta">{t.open}</div>
          </a>
          <a href="https://yandex.uz/maps/-/CPA5BNKu" target="_blank" rel="noopener noreferrer" className="map-btn rev-r">
            <svg width="20" height="26" viewBox="0 0 36 46" fill="none"><path d="M18 2C10.3 2 4 8.3 4 16c0 11.5 14 28 14 28S32 27.5 32 16C32 8.3 25.7 2 18 2z" fill="#ecdecf" stroke="#c4a882" strokeWidth="1.4"/><circle cx="18" cy="16" r="5" stroke="#c4a882" strokeWidth="1.2" fill="none"/></svg>
            <div className="map-btn-lbl">{t.yandexMaps}</div>
            <div className="map-btn-cta">{t.open}</div>
          </a>
        </div>
      </div>
      <div className="gold-stripe-bot"></div>
    </>
  );
}
