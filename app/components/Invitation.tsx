import Link from "next/link";
import React from "react";

interface InvitationProps {
  lang: "ru" | "en" | "uz";
  rawName?: string;
}

const content = {
  ru: {
    guest: "Дорогой Гость",
    prefix: "Дорогой(ая)",
    title: "Приглашаем Вас на нашу свадьбу",
    description:
      "Мы будем рады разделить этот счастливый день вместе с вами. Ваше присутствие наполнит наш праздник особым теплом.",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zbek",
  },
  en: {
    guest: "Dear Guest",
    prefix: "Dear",
    title: "You are invited to our wedding",
    description:
      "We would be honored to share this happy day with you. Your presence will fill our celebration with special warmth.",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zbek",
  },
  uz: {
    guest: "Hurmatli Mehmon",
    prefix: "Hurmatli",
    title: "Sizni to'yimizga taklif etamiz",
    description:
      "Ushbu baxtli kunimizda sizni kutib qolamiz. Tashrifingiz to'yimizni yanada fayzli qiladi.",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zbek",
  },
};

const formatName = (raw?: string) => {
  if (!raw) return null;
  try {
    const decoded = decodeURIComponent(raw);
    return decoded
      .split("_")
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
  const t = content[lang];
  const formattedName = formatName(rawName);
  const displayName = formattedName ? (
    <>
      {t.prefix} <br />
      {formattedName}
    </>
  ) : (
    t.guest
  );

  const links = {
    ru: rawName ? `/${rawName}` : "/",
    en: rawName ? `/en/${rawName}` : "/en",
    uz: rawName ? `/uz/${rawName}` : "/uz",
  };

  return (
    <main className="container">
      <h2 className="greeting-cursive">{displayName}</h2>

      <div className="names-cursive">Maxmudxon & Dilovarxon</div>

      <nav className="langs">
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
    </main>
  );
}
