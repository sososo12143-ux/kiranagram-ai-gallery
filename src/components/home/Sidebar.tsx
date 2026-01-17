import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Compass, 
  Film, 
  PlusCircle, 
  User,
  Settings
} from "lucide-react";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group justify-center hover:bg-secondary ${
        isActive 
          ? "bg-secondary text-foreground" 
          : "text-muted-foreground hover:text-foreground"
      }`
    }
  >
    <span className="flex-shrink-0">
      {icon}
    </span>
    <span className="text-sm font-medium whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto overflow-hidden transition-all duration-300">
      {label}
    </span>
  </NavLink>
);

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-[72px] hover:w-[180px] border-r border-border bg-background flex-col py-6 px-3 z-50 hidden md:flex transition-all duration-300 group/sidebar"
    >
      {/* Navigation - centered vertically */}
      <nav className="flex-1 flex flex-col justify-center space-y-2">
        <NavItem to="/home" icon={<Home size={24} />} label="Home" />
        <NavItem to="/explore" icon={<Compass size={24} />} label="Explore" />
        <NavItem to="/reels" icon={<Film size={24} />} label="Reels" />
        <NavItem to="/create" icon={<PlusCircle size={24} />} label="Create" />
        <NavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </nav>

      {/* Bottom section */}
      <div className="pt-4 border-t border-border">
        <NavItem to="/settings" icon={<Settings size={24} />} label="Settings" />
      </div>
    </motion.aside>
  );
}
