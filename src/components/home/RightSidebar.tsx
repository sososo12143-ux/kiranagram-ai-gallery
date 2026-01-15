import { motion } from "framer-motion";
import { TrendingUp, Activity, Settings, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface Suggestion {
  id: string;
  username: string;
  avatar: string;
  subtitle: string;
}

const suggestions: Suggestion[] = [
  { id: "1", username: "ai_visionary", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100", subtitle: "Suggested for you" },
  { id: "2", username: "dream_maker", avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100", subtitle: "Followed by ai_art" },
  { id: "3", username: "ghibli_studio", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100", subtitle: "Suggested for you" },
  { id: "4", username: "pixel_dreams", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100", subtitle: "New to Kiranagraem" },
];

const liveActivity = [
  { id: "1", username: "cyber_art", action: "created", time: "Just now" },
  { id: "2", username: "dream_ai", action: "generated", time: "2m ago" },
  { id: "3", username: "pixel_fx", action: "liked", time: "5m ago" },
];

const trending = [
  "#GhibliStyle",
  "#AIArtwork",
  "#DigitalDreams",
  "#CyberPunk2025",
];

export function RightSidebar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.aside
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-[320px] space-y-6"
    >
      {/* Suggestions */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground">Suggested for you</h3>
          <span className="text-xs font-semibold text-foreground cursor-pointer hover:opacity-70">
            See All
          </span>
        </div>
        <div className="space-y-3">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{user.username}</p>
                  <p className="text-xs text-muted-foreground">{user.subtitle}</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-foreground hover:opacity-70 transition-opacity">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Activity */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={16} className="text-foreground" />
          <h3 className="text-sm font-semibold text-foreground">Live Activity</h3>
        </div>
        <div className="space-y-3">
          {liveActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{activity.username}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings size={16} className="text-foreground" />
          <h3 className="text-sm font-semibold text-foreground">Settings</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Dark Mode</span>
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative w-12 h-6 rounded-full bg-secondary transition-colors"
          >
            <motion.div
              animate={{ x: isDark ? 24 : 2 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-foreground flex items-center justify-center"
            >
              {isDark ? <Moon size={10} className="text-background" /> : <Sun size={10} className="text-background" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Trending */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-foreground" />
          <h3 className="text-sm font-semibold text-foreground">Trending Now</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trending.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary text-foreground px-3 py-1.5 rounded-full cursor-pointer hover:bg-secondary/80 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-muted-foreground space-y-2">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">Press</span>
          <span className="hover:underline cursor-pointer">API</span>
          <span className="hover:underline cursor-pointer">Jobs</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
        </div>
        <p>© 2026 KIRANAGRAEM</p>
      </div>
    </motion.aside>
  );
}
