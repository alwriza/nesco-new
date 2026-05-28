"use client";
import { useTranslation } from "react-i18next";

const C = "#112864";
const bg = (o: number) => `rgba(17,40,100,${o})`;

export default function TeamPage() {
  const { t } = useTranslation("common");

  const teamMembers = [
    // --- Organizers ---
    { role: t("team.roles.organizer"), credential: "", name: "Жүкеш Ғалымжан", photo: "/images/1024-15290798-5-AbI4cfUUwQ0HSKdi9I6g.png" },
    { role: t("team.roles.organizer"), credential: "", name: "Бақытбекова Еңлік", photo: "/images/1024-15290894-_EEPlzAC2-5zOSLaE-cd-Q.png" },
    { role: t("team.roles.organizer"), credential: "", name: "Габдуллин Дариан", photo: "/images/1024-15290888-zTMGQAWwUA2cTZcruHkbPg.png" },
    { role: t("team.roles.organizer"), credential: "", name: "Некрюков Кирилл", photo: "/images/1024-15290882-4_thsP1xTZMEKYtiknnzNg.png" },
    // --- Head Designer ---
    { role: t("team.roles.designer"), credential: "", name: "Мукашева Саадат", photo: "/images/1024-15522230-xZZGvbySkYT5Tmwfnj2VRg.png" },
    // --- Task Authors ---
    { role: t("team.roles.author"), credential: "", name: "Амирбеков Мирас", photo: "/images/1024-15291928-Y-G0NZxUrJ4t9hVDara1wg.png" },
    { role: t("team.roles.author"), credential: "", name: "Елубай Бекасыл", photo: "/images/1024-15291195-4-C5hSlOJHyya3S9AHc61Q.png" },
    { role: t("team.roles.author"), credential: "", name: "Рахимбаева Тамила", photo: "/images/1024-15291293-H4ITPro6A_c-nEi8SPlP1A.png" },
    { role: t("team.roles.author"), credential: "", name: "Илюсизов Ринат", photo: "/images/1024-15291323-qEwseoAh29suEso69g2F1A.png" },
    { role: t("team.roles.author"), credential: "", name: "Молдагул Адильжан", photo: "/images/1024-15291344-3ny_7Ng99k7uT3dAaNJ5MQ.png" },
    { role: t("team.roles.author"), credential: "", name: "Ержанұлы Батыр", photo: "/images/1024-15291194-Zl-j6YEfFxM5ltVvk8gUBw.png" },
    { role: t("team.roles.author"), credential: "", name: "Алтай Аян", photo: "/images/1024-15291421-AJTnTjFn4tGg-GOc2RYjvQ.png" },
    { role: t("team.roles.author"), credential: "", name: "Ануарбек Рамазан", photo: "/images/1024-15291432-ivbqImGdBo_xVEIY7PUYhg.png" },
    { role: t("team.roles.author"), credential: "", name: "Тұралы Алиби", photo: "/images/1024-15291419-zvIHSQKMEi5NnblLG619xA.png" },
    { role: t("team.roles.author"), credential: "", name: "Каракулов Дархан", photo: "/images/1024-15291479-_kH_XyqQgPkWI1R5dauZaw.png" },
    // --- Academic Committee ---
    { role: t("team.roles.ac_chem"), credential: "", name: "Мұғалім Әліби", photo: "/images/1024-15291192-UYrT-bh2I5vT9gC8GgVtPA.png" },
    { role: t("team.roles.ac_bio"), credential: "", name: "Ержанұлы Батыр", photo: "/images/1024-15291194-Zl-j6YEfFxM5ltVvk8gUBw.png" },
    { role: t("team.roles.ac_phys"), credential: "", name: "Елубай Бекасыл", photo: "/images/1024-15291195-4-C5hSlOJHyya3S9AHc61Q.png" },
    // --- Jury ---
    { role: t("team.roles.jury"), credential: "", name: "Нұрлыбек Тамерлан", photo: "/images/1024-15291494-fNDHghLiZ_X9tfavexb4Bw.png" },
    { role: t("team.roles.jury"), credential: "", name: "Ержанұлы Батыр", photo: "/images/1024-15291194-Zl-j6YEfFxM5ltVvk8gUBw.png" },
    { role: t("team.roles.jury"), credential: "", name: "Амирбеков Мирас", photo: "/images/1024-15291928-Y-G0NZxUrJ4t9hVDara1wg.png" },
    { role: t("team.roles.jury"), credential: "", name: "Елубай Бекасыл", photo: "/images/1024-15291195-4-C5hSlOJHyya3S9AHc61Q.png" },
    { role: t("team.roles.jury"), credential: "", name: "Мұғалім Әліби", photo: "/images/1024-15291192-UYrT-bh2I5vT9gC8GgVtPA.png" }
  ];

  const partners = [
    { name: "Indigo PolyChem", role: t("team.partnerRoles.partner") },
    { name: "Borosil", role: t("team.partnerRoles.partner") },
    { name: "Kazakh-British Technical University", role: t("team.partnerRoles.venue") },
    { name: "Beyond Curriculum", role: t("team.partnerRoles.edu") },
    { name: "Genomix", role: t("team.partnerRoles.science") },
    { name: "Ivy League Education", role: t("team.partnerRoles.edu") },
  ];
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div style={{ background: C }} className="relative overflow-hidden py-16 px-6">
        <img
          src="/images/0-5913601-Vector.png"
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover pointer-events-none z-0"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("team.subtitle")}
          </p>
          <h1 className="font-unbounded font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ color: "#fff" }}>
            {t("team.title")}
          </h1>
          <p className="font-inter text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
            {t("team.desc")}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">


        <h2 className="font-unbounded font-bold text-xl mb-8" style={{ color: C }}>{t("team.orgTeam")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {teamMembers.map((m, i) => (
            <div key={i}>
              <div className="rounded-full mb-3 flex items-center justify-center overflow-hidden" style={{ background: bg(0.04), border: `1px solid ${bg(0.08)}` }}>
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.role} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: bg(0.1) }}>
                      <span className="font-unbounded font-bold text-xs" style={{ color: bg(0.3) }}>{i + 1}</span>
                    </div>
                    <p className="font-raleway text-xs" style={{ color: bg(0.3) }}>Photo</p>
                  </div>
                )}
              </div>
              <div className="font-raleway text-xs font-semibold tracking-widest uppercase mb-0.5 text-center" style={{ color: bg(0.4) }}>{m.name}</div>
              <div className="font-unbounded font-semibold text-sm mb-0.5 text-center" style={{ color: C }}>{m.role}</div>
            </div>
          ))}
        </div>

        <h2 className="font-unbounded font-bold text-xl mb-2" style={{ color: C }}>{t("team.partnersTitle")}</h2>
        <p className="font-inter text-sm mb-8" style={{ color: bg(0.5) }}>{t("team.partnersDesc")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-4 rounded-2xl px-6 py-4" style={{ border: `1px solid ${bg(0.1)}` }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: bg(0.05) }}>
                <span className="font-unbounded font-bold text-xs" style={{ color: bg(0.25) }}>{p.name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-unbounded font-semibold text-sm" style={{ color: C }}>{p.name}</div>
                <div className="font-raleway text-xs" style={{ color: bg(0.4) }}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
