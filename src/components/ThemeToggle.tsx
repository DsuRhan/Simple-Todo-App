import React from "react";

interface Props {
  dark: boolean;
  setDark: (val: boolean) => void;
}

export default function ThemeToggle({ dark, setDark }: Props) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`px-3 py-1.5 rounded-lg font-medium transition-colors duration-300
        ${dark
          ? "bg-slate-700 hover:bg-slate-600 text-slate-100 border border-slate-500"
          : "bg-amber-300 hover:bg-amber-400 text-amber-900 border border-amber-400 shadow-sm"
        }`}
    >
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
