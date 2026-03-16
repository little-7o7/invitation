"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { content, Language } from "./invitation/content";
import Petals from "./invitation/Petals";
import PageDecorations from "./invitation/PageDecorations";
import Hero from "./invitation/Hero";
import Intro from "./invitation/Intro";
// import Quote from "./invitation/Quote";
import Countdown from "./invitation/Countdown";
import EventDetails from "./invitation/EventDetails";
import Gallery from "./invitation/Gallery";
import Venue from "./invitation/Venue";
import RSVP from "./invitation/RSVP";
import Gratitude from "./invitation/Gratitude";
import Footer from "./invitation/Footer";
import LanguageSelector from "./invitation/LanguageSelector";
import CrossDivider from "./invitation/CrossDivider";

interface InvitationProps {
  lang: Language;
  rawName?: string;
}

const formatName = (raw?: string) => {
  if (!raw || raw.toLowerCase() === "no") return null;
  try {
    const decoded = decodeURIComponent(raw);
    return decoded
      .split(/[_-]+/)
      .map((word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  } catch {
    return raw;
  }
};

export default function Invitation({ lang, rawName }: InvitationProps) {
  const pathname = usePathname();
  const isNoGallery = pathname?.startsWith("/no");

  // Handle cases where the language segment (e.g. in /no/[lang]) is actually a guest name
  const isInvalidLang = !content[lang];
  const effectiveLang = isInvalidLang ? "en" : lang;
  const effectiveName = isInvalidLang && !rawName ? lang : rawName;

  const t = content[effectiveLang] || content["en"];
  
  const formattedName = formatName(effectiveName);
  const displayName = formattedName ? (
    <>
      {t.prefix} <br />
      {formattedName}
    </>
  ) : (
    t.guest
  );

  const prefix = isNoGallery ? "/no" : "";
  const links = {
    ru: effectiveName ? `${prefix}/ru/${effectiveName}` : `${prefix}/ru`,
    en: effectiveName ? `${prefix}/en/${effectiveName}` : `${prefix}/en`,
    uz: effectiveName ? `${prefix}/uz/${effectiveName}` : `${prefix}/uz`,
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".rev, .rev-l, .rev-r, .rev-s")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Petals />
      <PageDecorations />

      <Hero t={t} displayName={displayName} />

      <div className="sep-full"></div>
      <CrossDivider type="a" />
      <div className="sep-full"></div>

      <Intro t={t} />

      <div className="sep-full"></div>

      {/* <Quote t={t} /> */}

      <div className="sep-full"></div>
      <CrossDivider type="b" t={t} />
      <div className="sep-full"></div>

      <Countdown t={t} />

      <div className="sep-full"></div>
      <CrossDivider type="c" />
      <div className="sep-full"></div>

      <EventDetails t={t} />

      {!isNoGallery && (
        <>
          <div className="sep-full"></div>
          <Gallery t={t} />
        </>
      )}

      <div className="sep-full"></div>
      <CrossDivider type="d" />
      <div className="sep-full"></div>

      <Venue t={t} />

      <div className="sep-full"></div>
      <CrossDivider type="e" />
      <div className="sep-full"></div>

      <Gratitude t={t} />

      <div className="sep-full"></div>
      <CrossDivider type="a" />
      <div className="sep-full"></div>

      <RSVP t={t} lang={lang} formattedName={formattedName} pathname={pathname} />

      <div className="sep-full"></div>
      <Footer t={t} />

      <LanguageSelector t={t} lang={lang} links={links} />
    </>
  );
}
