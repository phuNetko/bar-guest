"use client";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-xl font-bold">KEG Guest</h1>
      <LanguageSwitcher />
    </header>
  );
}
