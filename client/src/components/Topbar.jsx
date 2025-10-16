import React, { useEffect, useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Topbar() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-card text-card-foreground border-b border-border shadow-sm backdrop-blur-md transition-colors duration-300">
      
      {/* Logo/Text */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <span>📊</span>
        <span className="text-foreground">TRADE DB</span>
      </div>

      {/* Search Bar currently dummy not wokring */}
      <div className="flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-muted text-foreground placeholder-muted-foreground rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
          />
        </div>
      </div>

      {/* Actions btn not wokring currently except theme toggle swicth*/}
      <div className="flex items-center gap-4">
        {/* Deposit */}
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-secondary hover:text-secondary-foreground transition">
          Deposit
        </button>

        {/* Notifications */}
        <button className="relative text-muted-foreground hover:text-foreground transition">
          <FiBell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold cursor-pointer hover:ring-2 hover:ring-primary transition">
          <span>A</span>
        </div>
      </div>
    </header>
  );
}
