"use client";
import { useTranslation } from "react-i18next";

const C = "#112864";
const bg = (o: number) => `rgba(17,40,100,${o})`;

export default function RulesPage() {
  const { t } = useTranslation("common");

  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* Header */}
      <div style={{ background: C }} className="relative overflow-hidden py-16 px-6">
        {/* Картинка-вектор строго НАД бэкграундом С и ПОД текстом */}
        <img
          src="/images/0-5913601-Vector.png"
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover pointer-events-none z-0"
        />

        {/* Контент хедера, поднятый через z-10 поверх картинки */}
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("rules.compFormat")}
          </p>
          <h1 className="font-unbounded font-bold text-4xl md:text-5xl leading-tight" style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: t("rules.title") }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Team Requirements */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: C }}>
              <span className="font-unbounded font-bold text-white text-xs">I</span>
            </div>
            <h2 className="font-unbounded font-bold text-2xl" style={{ color: C }}>{t("rules.req")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: t("rules.reqItems.t1"), desc: t("rules.reqItems.d1") },
              { title: t("rules.reqItems.t2"), desc: t("rules.reqItems.d2") },
              { title: t("rules.reqItems.t3"), desc: t("rules.reqItems.d3") },
              { title: t("rules.reqItems.t4"), desc: t("rules.reqItems.d4") },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl p-6" style={{ border: `1px solid ${bg(0.1)}` }}>
                <div className="font-unbounded font-semibold text-sm mb-2" style={{ color: C }}>{r.title}</div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: bg(0.6) }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* First Stage */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: C }}>
              <span className="font-unbounded font-bold text-white text-xs">II</span>
            </div>
            <h2 className="font-unbounded font-bold text-2xl" style={{ color: C }}>{t("rules.s1")}</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: t("rules.s1Items.l1"), title: t("rules.s1Items.t1"), desc: t("rules.s1Items.d1"), tag: t("rules.s1Items.tag1") },
              { label: t("rules.s1Items.l2"), title: t("rules.s1Items.t2"), desc: t("rules.s1Items.d2"), tag: t("rules.s1Items.tag2") },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl p-6" style={{ background: bg(0.03), border: `1px solid ${bg(0.08)}` }}>
                <div className="font-raleway text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: bg(0.4) }}>{r.label}</div>
                <div className="font-unbounded font-bold text-lg mb-1" style={{ color: C }}>{r.title}</div>
                <div className="inline-block rounded-full px-3 py-0.5 text-white font-raleway text-xs mb-3" style={{ background: C }}>{r.tag}</div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: bg(0.6) }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Second Stage */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: C }}>
              <span className="font-unbounded font-bold text-white text-xs">III</span>
            </div>
            <h2 className="font-unbounded font-bold text-2xl" style={{ color: C }}>{t("rules.s2")}</h2>
          </div>
          <div className="rounded-2xl p-6 mb-4" style={{ background: C }}>
            <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{t("rules.venue")}</p>
            <p className="font-unbounded font-bold" style={{ color: "#fff" }}>{t("rules.venueLoc")}</p>
          </div>
          <div className="space-y-4">
            {[
              { label: t("rules.s2Items.l1"), title: t("rules.s2Items.t1"), desc: t("rules.s2Items.d1"), tag: t("rules.s2Items.tag1") },
              { label: t("rules.s2Items.l2"), title: t("rules.s2Items.t2"), desc: t("rules.s2Items.d2"), tag: t("rules.s2Items.tag2") },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl p-6" style={{ background: bg(0.03), border: `1px solid ${bg(0.08)}` }}>
                <div className="font-raleway text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: bg(0.4) }}>{r.label}</div>
                <div className="font-unbounded font-bold text-lg mb-1" style={{ color: C }}>{r.title}</div>
                <div className="inline-block rounded-full px-3 py-0.5 text-white font-raleway text-xs mb-3" style={{ background: C }}>{r.tag}</div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: bg(0.6) }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: C }}>
              <span className="font-unbounded font-bold text-white text-xs">CS</span>
            </div>
            <h2 className="font-unbounded font-bold text-2xl" style={{ color: C }}>{t("rules.cs")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: t("rules.csItems.l1"), value: t("rules.csItems.v1"), desc: t("rules.csItems.d1") },
              { label: t("rules.csItems.l2"), value: t("rules.csItems.v2"), desc: t("rules.csItems.d2") },
              { label: t("rules.csItems.l3"), value: t("rules.csItems.v3"), desc: t("rules.csItems.d3") },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl p-6" style={{ border: `1px solid ${bg(0.1)}` }}>
                <div className="font-raleway text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: bg(0.4) }}>{c.label}</div>
                <div className="font-unbounded font-bold text-2xl mb-3" style={{ color: C }}>{c.value}</div>
                <p className="font-inter text-xs leading-relaxed" style={{ color: bg(0.55) }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6" style={{ background: bg(0.04), border: `1px solid ${bg(0.08)}` }}>
            <p className="font-inter text-sm leading-relaxed" style={{ color: bg(0.7) }}>
              <span className="font-semibold" style={{ color: C }}>{t("rules.csNote1")}</span>{t("rules.csNote2")}
            </p>
          </div>
        </section>
      </div>
    </div >
  );
}
