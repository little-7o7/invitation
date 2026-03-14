import React from "react";
import Link from "next/link";
import { Translations, Language } from "./content";

interface LanguageSelectorProps {
  t: Translations;
  lang: Language;
  links: {
    ru: string;
    en: string;
    uz: string;
  };
}

export default function LanguageSelector({ t, lang, links }: LanguageSelectorProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#fdfaf6', paddingBottom: '40px' }}>
      <nav className="lang-selector">
        <Link href={links.ru} className={lang === "ru" ? "active" : ""}>
          {t.langRu}
        </Link>
        <Link href={links.en} className={lang === "en" ? "active" : ""}>
          {t.langEn}
        </Link>
        <Link href={links.uz} className={lang === "uz" ? "active" : ""}>
          {t.langUz}
        </Link>
      </nav>
    </div>
  );
}
