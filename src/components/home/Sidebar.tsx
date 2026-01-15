import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User,
  Menu,
  Settings
} from "lucide-react";
import { KiranagraemLogo } from "@/components/KiranagraemLogo";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  badge?: number;
}

const NavItem = ({ to, icon, label, badge }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 group ${
        isActive 
          ? "bg-secondary font-semibold" 
          : "hover:bg-secondary/50"
      }`
    }
  >
    <span className="relative">
      {icon}
      {badge && badge > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </span>
    <span className="text-sm">{label}</span>
  </NavLink>
);

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-[220px] border-r border-border bg-background flex flex-col py-6 px-3 z-50"
    >
      {/* Logo */}
      <div className="px-3 mb-8">
        <KiranagraemLogo size="md" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <NavItem to="/home" icon={<Home size={24} />} label="Home" />
        <NavItem to="/search" icon={<Search size={24} />} label="Search" />
        <NavItem to="/explore" icon={<Compass size={24} />} label="Explore" />
        <NavItem to="/reels" icon={<Film size={24} />} label="Reels" />
        <NavItem to="/messages" icon={<MessageCircle size={24} />} label="Messages" badge={3} />
        <NavItem to="/notifications" icon={<Heart size={24} />} label="Notifications" />
        <NavItem to="/create" icon={<PlusSquare size={24} />} label="Create" />
        <NavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </nav>

      {/* Bottom section */}
      <div className="space-y-1 pt-4 border-t border-border">
        <NavItem to="/settings" icon={<Settings size={24} />} label="Settings" />
        <NavItem to="/more" icon={<Menu size={24} />} label="More" />
      </div>
    </motion.aside>
  );
}
