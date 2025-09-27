"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10"></div>;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-1 text-slate-400 transition-all hover:bg-slate-800 hover:text-white"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
    </button>
  );
};
