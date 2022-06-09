import Link from "next/link";
import Github from "../GitHub";
import ThemeButton from "../ThemeButton";
import { useTheme } from "next-themes";

export const Header = () => {
  const { resolvedTheme } = useTheme();
  const svgFillColor = resolvedTheme === "dark" ? "#D8D8D8" : "black";
  const btnBgColor =
    resolvedTheme === "dark"
      ? "dark-button-w-gradient-border"
      : "light-button-w-gradient-border";

  return (
    <header className="flex flex-col sm:flex-row sm:justify-between w-full pt-4 pb-8 px-2">
      <Link href="/" className="flex flex-col">
        <h1 className="font-mono sm:text-xl tracking-tight">sqlTranslate</h1>
        <p className="font-mono font-bold text-gray-600">
          Human Language to SQL Translator
        </p>
      </Link>
      <div className="flex items-center gap-3 pt-4">
        
        <a
          className="rounded-full text-gray-500 dark:text-gray-400"
          href="https://github.com/Vishukk1503?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div
            className={`flex items-center justify-center space-x-2 py-2 px-6 rounded-full ${btnBgColor} text-black dark:text-[#D8D8D8] text-sm font-medium`}
          >
            <Github />
            <p>Star on GitHub</p>
          </div>
        </a>

      </div>
    </header>
  );
};

