"use client";

import Link from "next/link";
import PhotoCarousel from "@/components/PhotoCarousel";
import { useTranslation } from "react-i18next";

const C = "#112864";
const bg = (o: number) => `rgba(17,40,100,${o})`;

// ─── Add your event photos here ───────────────────────────────────────────────
// Place files in /public/events/ and list them below:
const eventPhotos: string[] = [
  "/events/5242535879090315396.jpg",
  "/events/5242535879090315397.jpg",
  "/events/5242535879090315398.jpg",
  "/events/5242535879090315399.jpg",
  "/events/5242535879090315400.jpg",
  "/events/5242535879090315402.jpg",
  "/events/5242535879090315403.jpg",
  "/events/5242535879090315404.jpg",
  "/events/5242535879090315405.jpg",
  "/events/5242535879090315396.jpg"
];

const partners = [
  "Indigo PolyChem", "Borosil", "KBTU",
  "Beyond Curriculum", "Genomix", "Ivy League Education",
];

export default function Home() {
  const { t } = useTranslation("common");

  const stats = [
    { value: "554", label: t("stats.participants") },
    { value: "20", label: t("stats.cities") },
    { value: "2", label: t("stats.stages") },
    { value: "6", label: t("stats.partners") },
    { value: "$80K+", label: t("stats.prizes") },
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingTop: "4rem" }}
      >
        {/* Photo background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/events/5242535879090315401.jpg"
            alt="NEScO 2025"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay so text stays readable over any photo */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,20,50,0.82) 0%, rgba(10,20,50,0.35) 60%, rgba(10,20,50,0.15) 100%)" }}
          />
        </div>

        {/* Content — anchored to bottom */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16 pt-32">

          <h1
            className="font-unbounded font-bold leading-[1.02] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", color: "#fff", maxWidth: "16ch" }}
            dangerouslySetInnerHTML={{ __html: t("hero.title") }}
          />

          <p
            className="font-inter text-lg leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: "34rem" }}
          >
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/register"
              className="font-raleway font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10" style={{ background: "#fff", color: C }}
            >
              {t("hero.registerBtn")}
            </Link>
            <Link
              href="/rules"
              className="font-raleway font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10" style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
            >
              {t("hero.viewRulesBtn")}
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2">
          <div className="w-8 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span className="font-raleway text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
            {t("hero.scroll")}
          </span>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section style={{ background: C, borderBottom: `1px solid ${bg(0.15)}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 py-8 flex flex-col items-center justify-center text-center min-w-[120px]"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div className="font-unbounded font-bold text-2xl md:text-3xl" style={{ color: "#fff" }}>
                  {s.value}
                </div>
                <div className="font-raleway text-xs mt-1 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: bg(0.4) }}>
                {t("about.subtitle")}
              </p>
              <h2 className="font-unbounded font-bold text-3xl md:text-4xl leading-tight mb-6" style={{ color: C }} dangerouslySetInnerHTML={{ __html: t("about.title") }} />
              <p className="font-inter leading-relaxed mb-5" style={{ color: bg(0.6) }}>
                {t("about.p1")}
              </p>
              <p className="font-inter leading-relaxed" style={{ color: bg(0.6) }}>
                {t("about.p2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: t("about.features.grant.title"), desc: t("about.features.grant.desc") },
                { title: t("about.features.prize.title"), desc: t("about.features.prize.desc") },
                { title: t("about.features.expert.title"), desc: t("about.features.expert.desc") },
                { title: t("about.features.internship.title"), desc: t("about.features.internship.desc") },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${bg(0.08)}`, backdropFilter: "blur(4px)" }}>
                  <div className="font-unbounded font-semibold text-sm mb-2" style={{ color: C }}>{c.title}</div>
                  <div className="font-inter text-sm leading-relaxed" style={{ color: bg(0.55) }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STAGES ───────────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: bg(0.4) }}>
              {t("stages.subtitle")}
            </p>
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl" style={{ color: C }}>
              {t("stages.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="rounded-3xl p-8 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5 cursor-default"
              style={{ background: C }}
            >
              <div className="font-unbounded font-bold text-5xl mb-8" style={{ color: "rgba(255,255,255,0.12)" }}>I</div>
              <div className="font-unbounded font-bold text-xl mb-1" style={{ color: "#fff" }}>{t("stages.stage1.title")}</div>
              <div className="font-raleway text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{t("stages.stage1.subtitle")}</div>
              <p className="font-inter text-sm leading-relaxed mt-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t("stages.stage1.desc")}
              </p>
            </div>

            <div
              className="rounded-3xl p-8 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg cursor-default"
              style={{ background: "rgba(255,255,255,0.6)", border: `1px solid ${bg(0.12)}`, backdropFilter: "blur(4px)" }}
            >
              <div className="font-unbounded font-bold text-5xl mb-8" style={{ color: bg(0.1) }}>II</div>
              <div className="font-unbounded font-bold text-xl mb-1" style={{ color: C }}>{t("stages.stage2.title")}</div>
              <div className="font-raleway text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: bg(0.4) }}>{t("stages.stage2.subtitle")}</div>
              <p className="font-inter text-sm leading-relaxed mt-auto" style={{ color: bg(0.6) }}>
                {t("stages.stage2.desc")}
              </p>
            </div>

            <div
              className="rounded-3xl p-8 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg cursor-default"
              style={{ background: "rgba(255,255,255,0.4)", border: `1px solid ${bg(0.08)}`, backdropFilter: "blur(4px)" }}
            >
              <div className="font-unbounded font-bold text-5xl mb-8" style={{ color: bg(0.08) }}>CS</div>
              <div className="font-unbounded font-bold text-xl mb-1" style={{ color: C }}>{t("stages.cs.title")}</div>
              <div className="font-raleway text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: bg(0.4) }}>{t("stages.cs.subtitle")}</div>
              <p className="font-inter text-sm leading-relaxed mt-auto" style={{ color: bg(0.6) }}>
                {t("stages.cs.desc")}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/rules" className="group font-raleway text-sm font-semibold pb-0.5 transition-colors inline-flex items-center gap-1 hover:opacity-80"
              style={{ color: C, borderBottom: `1px solid ${bg(0.3)}` }}>
              {t("stages.fullRules")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PHOTO CAROUSEL ───────────────────────────────────────────────── */}
      {eventPhotos.length > 0 && (
        <section>
          <PhotoCarousel photos={eventPhotos} />
        </section>
      )}

      {/* ─── PARTNERS MARQUEE ─────────────────────────────────────────────── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="font-raleway text-xs font-semibold tracking-widest uppercase" style={{ color: bg(0.4) }}>
            {t("partners.title")}
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex items-center gap-8 mx-10">
                <span className="font-unbounded font-semibold text-lg shrink-0" style={{ color: bg(0.18) }}>{p}</span>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: bg(0.12) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-8 px-6 md:px-16">
        <div className="rounded-3xl py-16 px-8 text-center" style={{ background: C }}>
          <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("cta.subtitle")}
          </p>
          <h2 className="font-unbounded font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff" }}>
            {t("cta.title")}
          </h2>
          <p className="font-inter mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            {t("cta.desc")}
          </p>
          <Link href="/register"
            className="font-raleway font-bold text-sm px-10 py-4 rounded-full inline-block transition-all"
            style={{ background: "#fff", color: C }}>
            {t("cta.registerBtn")}
          </Link>
        </div>
      </section>

      {/* bottom spacing */}
      <div className="h-16" />
    </>
  );
}
