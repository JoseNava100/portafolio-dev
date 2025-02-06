"use client";

import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const themes = ["Light", "Dark", "System"];

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!mounted) return null;

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Elige el tema</span>
        {theme === "Light" && <Sun className="size-5 transition-all" />}
        {theme === "Dark" && <Moon className="size-5 transition-all" />}
        {theme === "System" && <Monitor className="size-5 transition-all" />}
      </button>
      {menuOpen && (
        <div className="absolute scale-100 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-lg backdrop-blur-md">
          <ul>
            {themes.map((t) => (
              <li
                key={t}
                className={`px-2 py-1.5 cursor-pointer rounded-sm hover:bg-red-400/40 dark:hover:bg-red-500/50 ${theme === t ? "font-bold" : ""
                  }`}
                onClick={() => {
                  setTheme(t);
                  setMenuOpen(false);
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}