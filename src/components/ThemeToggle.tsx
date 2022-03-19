import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const THEMES_MODE = {
  light: <SunIcon className="h-6 w-6 text-red-400" />,
  dark: <MoonIcon className="h-6 w-6 text-yellow-300" />,
};

const ThemeToggle = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const handleThemeChange = () =>
    setCurrentTheme((prev) => {
      // If the current theme is dark, switch to light
      const nextTheme = prev === "dark" ? "light" : "dark";

      // Switching theme
      localStorage.setItem("theme", nextTheme);
      nextTheme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");

      return nextTheme;
    });

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }

    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="mt-2">
      <button onClick={handleThemeChange}>{THEMES_MODE[currentTheme]}</button>
    </div>
  );
};

export default ThemeToggle;
