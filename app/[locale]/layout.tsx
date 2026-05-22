import type { Metadata } from "next";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "./../i18n-provider";

import commonEn from "@/public/locales/en/common.json";
import commonRu from "@/public/locales/ru/common.json";
import commonKz from "@/public/locales/kz/common.json";

const resources = {
  en: { common: commonEn },
  ru: { common: commonRu },
  kz: { common: commonKz },
};

export const metadata: Metadata = {
  title: "NEScO — National Engineering Science Olympiad",
  description:
    "An innovative scientific competition developing analytical thinking, teamwork, and an interdisciplinary approach for students across Kazakhstan.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <I18nProvider locale={locale} namespaces={["common"]} resources={resources}>
          <Navbar locale={locale} />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
