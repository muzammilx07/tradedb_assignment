import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // <-- import icons

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-[--color-accent] text-[--color-accent-foreground] hover:bg-[--color-primary] shadow-md"
      aria-label="Toggle theme"
    >
      {/* Sun (light mode icon) */}
      <Sun
        className={`absolute w-6 h-6 transition-transform duration-500 ${
          dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      {/* Moon (dark mode icon) */}
      <Moon
        className={`absolute w-6 h-6 transition-transform duration-500 ${
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
