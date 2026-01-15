import { NavLink } from "react-router-dom";
import { Home, Search, PlusSquare, Film, User } from "lucide-react";

const navItems = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/search", icon: Search, label: "Search" },
  { to: "/create", icon: PlusSquare, label: "Create" },
  { to: "/reels", icon: Film, label: "Reels" },
  { to: "/profile", icon: User, label: "Profile" },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            <item.icon size={24} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
