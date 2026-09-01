import React from "react";
import {
  Bell,
  Settings,
  Cloud,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";

export interface HeaderProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isSidebarOpen = true,
  onToggleSidebar,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 w-full bg-card border-b border-border px-6 sm:px-8 flex items-center justify-between transition-colors z-20">
      {/* Left: Sidebar Toggle Button */}
      <div className="flex items-center">
        <Button
          type="button"
          variant="ghost"
          size="iconSm"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="text-primary hover:bg-muted"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="w-5 h-5" strokeWidth={2} />
          ) : (
            <PanelLeftOpen className="w-5 h-5" strokeWidth={2} />
          )}
        </Button>
      </div>

      {/* Right: Theme Toggle (Sun/Moon), Action Icons & User Avatar */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Sun/Moon Dark/Light Mode Toggle before Bell Icon */}
        <Button
          type="button"
          variant="ghost"
          size="iconSm"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "Dark (Night Bridge Ops)" : "Light"} Mode`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" strokeWidth={1.8} />
          ) : (
            <Sun className="w-5 h-5 text-accent-amber animate-spin-slow" strokeWidth={1.8} />
          )}
        </Button>

        {/* Notifications (Bell) */}
        <Button
          type="button"
          variant="ghost"
          size="iconSm"
          aria-label="Notifications"
          className="relative text-muted-foreground hover:text-primary transition-colors"
        >
          <Bell className="w-5 h-5" strokeWidth={1.8} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
        </Button>

        {/* Settings */}
        <Button
          type="button"
          variant="ghost"
          size="iconSm"
          aria-label="Settings"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Settings className="w-5 h-5" strokeWidth={1.8} />
        </Button>

        {/* Cloud Sync */}
        <Button
          type="button"
          variant="ghost"
          size="iconSm"
          aria-label="Cloud Sync"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Cloud className="w-5 h-5" strokeWidth={1.8} />
        </Button>

        {/* User Profile Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border border-border cursor-pointer hover:ring-2 hover:ring-primary/40 transition-all">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;



