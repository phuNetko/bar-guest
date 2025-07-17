"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { useEffect } from "react";

export default function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved) {
      i18n.changeLanguage(saved);
    }
  }, []);
  
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}