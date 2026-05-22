"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const C = "#112864";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" fill={C} />
        <circle cx="16" cy="4" r="2.5" fill={C} />
        <circle cx="16" cy="28" r="2.5" fill={C} />
        <circle cx="4" cy="16" r="2.5" fill={C} />
        <circle cx="28" cy="16" r="2.5" fill={C} />
        <line x1="16" y1="16" x2="16" y2="6" stroke={C} strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="16" x2="16" y2="26" stroke={C} strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="16" x2="6" y2="16" stroke={C} strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="16" x2="26" y2="16" stroke={C} strokeWidth="1" opacity="0.4" />
      </svg>
      <span className="font-unbounded font-bold text-lg tracking-tight" style={{ color: C }}>
        NES<span style={{ color: "rgba(17,40,100,0.35)" }}>cO</span>
      </span>
    </Link>
  );
}

export default function Navbar({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: `/${locale}/`, label: t("Home") },
    { href: `/${locale}/rules`, label: t("Rules") },
    { href: `/${locale}/team`, label: t("Team") },
    { href: `/${locale}/register`, label: t("Register") },
  ];

  const [open, setOpen] = useState(false);

  const handleLangClick = (newLocale: string) => {
    if (locale === newLocale) return;
    
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }
    
    // Force a full reload to ensure language state applies properly across all components
    window.location.href = newPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(17,40,100,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/images/0-15268996-drawing-o2W3rE8JEDMlZQeN32ApAg.png" style={{ width: "100px", height: "50px" }} />
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-raleway text-sm font-medium tracking-wide transition-colors"
              style={{ color: pathname.endsWith(l.href) ? C : "rgba(17,40,100,0.45)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {["kz", "en", "ru"].map((lang, i) => (
            <span key={lang} className="flex items-center gap-3">
              {i > 0 && <span style={{ color: "rgba(17,40,100,0.2)" }}>|</span>}
              <button
                onClick={() => handleLangClick(lang)}
                className="font-raleway text-xs tracking-widest uppercase"
                style={{
                  color: locale === lang ? C : "rgba(17,40,100,0.35)",
                  fontWeight: locale === lang ? 600 : 400,
                  textDecoration: locale === lang ? 'underline' : 'none',
                }}
              >
                {lang}
              </button>
            </span>
          ))}
          <Link
            href="/register"
            className="ml-4 font-raleway text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            style={{ background: C, color: "#fff" }}
          >
            {t("Register")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: C }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "#fff", borderTop: "1px solid rgba(17,40,100,0.08)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-raleway text-sm font-medium"
              style={{ color: pathname.endsWith(l.href) ? C : "rgba(17,40,100,0.5)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/register" onClick={() => setOpen(false)}
            className="font-raleway text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            style={{ background: C, color: "#fff" }}>
            {t("Register")}
          </Link>
          <div className="flex justify-center items-center gap-3 pt-4">
            {["kz", "en", "ru"].map((lang, i) => (
              <span key={lang} className="flex items-center gap-3">
                {i > 0 && <span style={{ color: "rgba(17,40,100,0.2)" }}>|</span>}
                <button
                  onClick={() => {
                    handleLangClick(lang);
                    setOpen(false);
                  }}
                  className="font-raleway text-xs tracking-widest uppercase"
                  style={{
                    color: locale === lang ? C : "rgba(17,40,100,0.35)",
                    fontWeight: locale === lang ? 600 : 400,
                    textDecoration: locale === lang ? 'underline' : 'none',
                  }}
                >
                  {lang}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
