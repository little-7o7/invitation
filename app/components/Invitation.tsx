import Link from 'next/link';
import React from 'react';

interface InvitationProps {
  lang: 'ru' | 'en' | 'uz';
  rawName?: string;
}

const content = {
  ru: {
    guest: 'Уважаемый гость',
    title: 'Приглашаем Вас на нашу свадьбу',
    description: 'Мы будем рады разделить этот счастливый день вместе с вами.',
    langRu: 'Русский',
    langEn: 'English',
    langUz: "O'zbek",
  },
  en: {
    guest: 'Dear Guest',
    title: 'You are invited to our wedding',
    description: 'We would be honored to share this happy day with you.',
    langRu: 'Русский',
    langEn: 'English',
    langUz: "O'zbek",
  },
  uz: {
    guest: 'Hurmatli mehmon',
    title: "Sizni to'yimizga taklif etamiz",
    description: "Ushbu baxtli kunimizda sizni kutib qolamiz.",
    langRu: 'Русский',
    langEn: 'English',
    langUz: "O'zbek",
  }
};

const formatName = (raw?: string) => {
  if (!raw) return null;
  try {
    const decoded = decodeURIComponent(raw);
    return decoded
      .split('_')
      .map(word => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  } catch {
    return raw;
  }
};

export default function Invitation({ lang, rawName }: InvitationProps) {
  const t = content[lang];
  const formattedName = formatName(rawName);
  const displayName = formattedName ? formattedName : t.guest;

  const links = {
    ru: rawName ? `/${rawName}` : '/',
    en: rawName ? `/en/${rawName}` : '/en',
    uz: rawName ? `/uz/${rawName}` : '/uz',
  };

  return (
    <main className="container">
      <div className="card">
        <div className="inner-border">
          <h2 className="greeting">{displayName},</h2>
          <h1 className="title">{t.title}</h1>
          <p className="description">{t.description}</p>
          <div className="divider">♥</div>
          <nav className="langs">
            <Link href={links.ru} className={lang === 'ru' ? 'active' : ''}>{t.langRu}</Link>
            <Link href={links.en} className={lang === 'en' ? 'active' : ''}>{t.langEn}</Link>
            <Link href={links.uz} className={lang === 'uz' ? 'active' : ''}>{t.langUz}</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
