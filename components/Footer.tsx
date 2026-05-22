import Link from "next/link";

const C = "#112864";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(17,40,100,0.1)", background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <img src="/images/0-15268996-drawing-o2W3rE8JEDMlZQeN32ApAg.png" style={{ width: "100px", height: "50px" }} />
            <p className="font-inter text-sm leading-relaxed max-w-xs" style={{ color: "rgba(17,40,100,0.5)" }}>
              National Engineering Science Olympiad — Kazakhstan's premier interdisciplinary science competition.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(17,40,100,0.4)" }}>Navigation</p>
              <div className="flex flex-col gap-2">
                {[["Home", "/"], ["Rules", "/rules"], ["Team", "/team"], ["Register", "/register"]].map(([label, href]) => (
                  <Link key={href} href={href} className="font-inter text-sm transition-colors" style={{ color: "rgba(17,40,100,0.6)" }}>{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(17,40,100,0.4)" }}>Contact</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:info@nesco.kz" className="font-inter text-sm" style={{ color: "rgba(17,40,100,0.6)" }}>info@nesco.kz</a>
                <a href="https://www.instagram.com/nesco.kz" className="font-inter text-sm" style={{ color: "rgba(17,40,100,0.6)" }}>Instagram</a>
                <a href="https://t.me/nesco_kz" className="font-inter text-sm" style={{ color: "rgba(17,40,100,0.6)" }}>Telegram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2" style={{ borderTop: "1px solid rgba(17,40,100,0.08)" }}>
          <p className="font-inter text-xs" style={{ color: "rgba(17,40,100,0.3)" }}>© 2026 NEScO. Almaty, Kazakhstan.</p>
          <p className="font-raleway text-xs tracking-wide" style={{ color: "rgba(17,40,100,0.3)" }}>National Engineering Science Olympiad</p>
        </div>
      </div>
    </footer>
  );
}
