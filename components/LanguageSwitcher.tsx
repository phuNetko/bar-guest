"use client";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const locales = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "jp", label: "日本語" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved && locales.some(l => l.code === saved)) {
      i18n.changeLanguage(saved);
    }
  }, []);

  const handleChange = (locale: string) => {
    localStorage.setItem("locale", locale);
    i18n.changeLanguage(locale);
  };

  return (
    <select
        onChange={(e) => handleChange(e.target.value)}
      className="border rounded px-2 py-1"
      value={i18n.language}
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
} 