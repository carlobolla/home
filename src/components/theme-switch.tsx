import { useTheme } from "@heroui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme("system");
  const isLight = resolvedTheme === "light";

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-surface-hover transition-colors cursor-pointer"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {resolvedTheme ? (isLight ? <FiMoon size={18} /> : <FiSun size={18} />) : <span className="w-[18px] h-[18px]" />}
    </button>
  );
};
