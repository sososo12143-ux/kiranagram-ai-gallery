import { motion } from "framer-motion";
import { Search, Bell, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function DesktopHeader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-[72px] right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 hidden md:block"
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            KIRANAGRAM
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search Creators assets, or inspiration"
              className="w-full bg-secondary border border-border rounded-full py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-secondary rounded-full transition-colors">
            <Bell size={22} className="text-foreground" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="relative p-2 hover:bg-secondary rounded-full transition-colors"
          >
            {isDark ? (
              <Sun size={22} className="text-foreground" />
            ) : (
              <Moon size={22} className="text-foreground" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
