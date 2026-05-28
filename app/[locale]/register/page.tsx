"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const C = "#112864";
const bg = (o: number) => `rgba(17,40,100,${o})`;

interface Participant {
  fullName: string;
  grade: string;
  email: string;
  phone: string;
  school: string;
}

const empty = (): Participant => ({ fullName: "", grade: "", email: "", phone: "", school: "" });

export default function RegisterPage() {
  const { t } = useTranslation("common");
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState<Participant[]>([empty(), empty(), empty(), empty()]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (i: number, field: keyof Participant, val: string) => {
    setParticipants((prev) => { const n = [...prev]; n[i] = { ...n[i], [field]: val }; return n; });
  };

  const handleSubmit = async () => {
    if (!teamName.trim()) { setErrorMsg(t("register.errTeamName", "Please enter a team name.")); setStatus("error"); return; }
    if (!consent) { setErrorMsg(t("register.errConsent", "Please accept the data processing consent.")); setStatus("error"); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    for (let i = 0; i < participants.length; i++) {
      const p = participants[i];
      if (!p.fullName || !p.grade || !p.email || !p.phone || !p.school) {
        setErrorMsg(t("register.errFields", "Please fill in all fields for Participant {{num}}.").replace("{{num}}", (i + 1).toString())); setStatus("error"); return;
      }
      if (!emailRegex.test(p.email)) {
        setErrorMsg(t("register.errEmail", "Please enter a valid email for Participant {{num}}.").replace("{{num}}", (i + 1).toString())); setStatus("error"); return;
      }
      if (!phoneRegex.test(p.phone)) {
        setErrorMsg(t("register.errPhone", "Please enter a valid phone number (digits only) for Participant {{num}}.").replace("{{num}}", (i + 1).toString())); setStatus("error"); return;
      }
    }
    setStatus("loading"); setErrorMsg("");
    try {
      const payload: any = { team_name: teamName };
      participants.forEach((p, i) => {
        const num = i + 1;
        payload[`p${num}_name`] = p.fullName;
        payload[`p${num}_grade`] = p.grade;
        payload[`p${num}_email`] = p.email;
        payload[`p${num}_phone`] = p.phone;
        payload[`p${num}_school`] = p.school;
      });

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || t("register.errFail", "Registration failed.")); setStatus("error"); }
      else { setStatus("success"); }
    } catch { setErrorMsg(t("register.errNet", "Network error. Please try again.")); setStatus("error"); }
  };

  const inputCls = "w-full rounded-xl px-4 py-3 font-inter text-sm outline-none transition-colors";
  const inputStyle = { border: `1px solid ${bg(0.15)}`, color: C };

  if (status === "success") {
    return (
      <div style={{ paddingTop: "4rem" }} className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: bg(0.08) }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16L13 23L26 9" stroke={C} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="font-unbounded font-bold text-2xl mb-3" style={{ color: C }}>{t("register.successTitle")}</h1>
          <p className="font-inter leading-relaxed mb-8" style={{ color: bg(0.6) }}>
            {t("register.successDesc1")} <strong style={{ color: C }}>{teamName}</strong> {t("register.successDesc2")}
          </p>
          <button
            onClick={() => { setStatus("idle"); setTeamName(""); setParticipants([empty(), empty(), empty(), empty()]); setConsent(false); }}
            className="font-raleway text-sm font-semibold pb-0.5"
            style={{ color: C, borderBottom: `1px solid ${bg(0.3)}` }}
          >
            {t("register.regAnother")}
          </button>
        </div>
      </div>
    );
  }

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
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{t("register.subtitle")}</p>
          <h1 className="font-unbounded font-bold text-3xl md:text-4xl mb-3" style={{ color: "#fff" }}>{t("register.title")}</h1>
          <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {t("register.desc")}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Team name */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center font-unbounded font-bold text-xs shrink-0" style={{ background: C, color: "#fff" }}>1</div>
            <h2 className="font-unbounded font-bold text-lg" style={{ color: C }}>{t("register.teamInfo")}</h2>
          </div>
          <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.teamNameLabel")}</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder={t("register.teamNamePlh")}
            className={inputCls}
            style={inputStyle}
          />
        </div>

        {/* Participants */}
        {participants.map((p, i) => (
          <div key={i} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-unbounded font-bold text-xs shrink-0" style={{ background: C, color: "#fff" }}>{i + 2}</div>
              <h2 className="font-unbounded font-bold text-lg" style={{ color: C }}>
                {t("register.part")} {i + 1}{" "}
                {i === 0 && <span className="font-inter font-normal text-sm" style={{ color: bg(0.4) }}>{t("register.capt")}</span>}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.nameLabel")}</label>
                <input type="text" value={p.fullName} onChange={(e) => update(i, "fullName", e.target.value)} placeholder={t("register.namePlh")} className={inputCls} style={inputStyle} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.gradeLabel")}</label>
                <select value={p.grade} onChange={(e) => update(i, "grade", e.target.value)} className={inputCls} style={{ ...inputStyle, background: "#fff" }}>
                  <option value="">{t("register.gradeSelect")}</option>
                  {["9", "10", "11", "12"].map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.emailLabel")}</label>
                <input type="email" value={p.email} onChange={(e) => update(i, "email", e.target.value)} placeholder={t("register.emailPlh")} className={inputCls} style={inputStyle} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.phoneLabel")}</label>
                <input type="tel" value={p.phone} onChange={(e) => update(i, "phone", e.target.value)} placeholder={t("register.phonePlh")} className={inputCls} style={inputStyle} />
              </div>
              <div className="col-span-2">
                <label className="block font-raleway text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: bg(0.5) }}>{t("register.schoolLabel")}</label>
                <input type="text" value={p.school} onChange={(e) => update(i, "school", e.target.value)} placeholder={t("register.schoolPlh")} className={inputCls} style={inputStyle} />
              </div>
            </div>

            {i < participants.length - 1 && <div className="mt-8" style={{ borderBottom: `1px solid ${bg(0.08)}` }} />}
          </div>
        ))}

        {/* Add 5th participant */}
        {participants.length < 5 && (
          <button
            onClick={() => setParticipants([...participants, empty()])}
            className="w-full rounded-2xl py-4 flex items-center justify-center gap-2 font-raleway text-sm font-semibold mb-10 transition-colors"
            style={{ border: `2px dashed ${bg(0.2)}`, color: bg(0.5) }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {t("register.addPart")}
          </button>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex items-start gap-3 rounded-xl p-4 mb-6" style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
              <circle cx="8" cy="8" r="7" stroke="#dc2626" strokeWidth="1.5" />
              <path d="M8 5v4M8 11v.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="font-inter text-sm" style={{ color: "#b91c1c" }}>{errorMsg}</p>
          </div>
        )}

        {/* Consent */}
        <div className="flex items-start gap-3 mb-8">
          <div
            onClick={() => setConsent(!consent)}
            className="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 cursor-pointer transition-all"
            style={{ background: consent ? C : "transparent", border: `2px solid ${consent ? C : bg(0.3)}` }}
          >
            {consent && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </div>
          <p className="font-inter text-sm leading-relaxed" style={{ color: bg(0.55) }}>
            {t("register.consent1")}
            <a href="https://bc-pf.org/docs/personaldata/list1-matomo.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#112864' }}>
              {t("register.consentLink1")}
            </a>
            {t("register.consent2")}
            <a href="https://bc-pf.org/personaldata" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#112864' }}>
              {t("register.consentLink2")}
            </a>
            {t("register.consent3")}
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full font-raleway font-bold text-sm py-4 rounded-full transition-all disabled:opacity-60"
          style={{ background: C, color: "#fff" }}
        >
          {status === "loading" ? t("register.btnLoading") : t("register.btnSubmit")}
        </button>
      </div>
    </div>
  );
}
