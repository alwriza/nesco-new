import type { Metadata } from "next";
// Импортируем твои глобальные стили (проверь путь, обычно они лежат в app/globals.css)
import "./globals.css";

export const metadata: Metadata = {
  title: "NEScO — National Engineering Science Olympiad",
  description:
    "An innovative scientific competition developing analytical thinking, teamwork, and an interdisciplinary approach for students across Kazakhstan.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params?.locale || "en";

  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}