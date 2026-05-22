"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { ReactNode, useState, useEffect } from "react";

export default function I18nProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: any;
}) {
  const [i18n] = useState(() => {
    const instance = createInstance();
    instance.use(initReactI18next).init({
      lng: locale,
      fallbackLng: "en",
      resources,
      ns: namespaces,
      defaultNS: "common",
      interpolation: { escapeValue: false },
    });
    return instance;
  });

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
