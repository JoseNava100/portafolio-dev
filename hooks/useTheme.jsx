import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("System");
  const [mounted, setMounted] = useState(false);

  const getSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "Dark";
    }
    return "Light";
  };

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "System";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let appliedTheme = theme;
    if (theme === "System") {
      appliedTheme = getSystemTheme();
    }
    if (appliedTheme === "Dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "System") {
        setTheme(getSystemTheme());
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return { theme, setTheme, mounted };
}