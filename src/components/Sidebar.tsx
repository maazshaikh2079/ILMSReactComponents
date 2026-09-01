import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Archive,
  Network,
  Users,
  Menu as MenuIcon,
  SlidersHorizontal,
  CircleUser,
  FlaskConical,
} from "lucide-react";

export interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/", icon: LayoutGrid },
  { name: "Demand Window", path: "/demand-window", icon: Archive },
  { name: "Projects", path: "/projects", icon: Network },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Requests", path: "/requests", icon: MenuIcon },
  { name: "System Change Logs", path: "/change-logs", icon: SlidersHorizontal },
  { name: "Component Lab", path: "/components", icon: FlaskConical },
];

export interface SidebarProps {
  isOpen?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true }) => {
  return (
    <aside
      className={`h-full bg-card border-r border-border flex flex-col justify-between select-none transition-all duration-300 ease-in-out shrink-0 overflow-hidden ${
        isOpen ? "w-64 opacity-100" : "w-0 opacity-0 border-r-0 pointer-events-none"
      }`}
    >
      <div className="w-64 flex flex-col justify-between h-full">
        {/* Top Section: Brand & Navigation */}
        <div>
          {/* Brand Header */}
          <div className="px-6 py-5">
            <h1 className="text-lg font-bold text-foreground tracking-tight">
              Naval Logistics
            </h1>
            <p className="text-xs text-muted-foreground font-mono font-medium mt-0.5">
              Command Ops // ILMS
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="px-3 space-y-1 mt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-nav-active-bg text-nav-active-text font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                      strokeWidth={isActive ? 2.2 : 1.8}
                    />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Profile Settings */}
        <div className="p-4 border-t border-border">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded text-sm font-medium transition-colors ${
                isActive
                  ? "bg-nav-active-bg text-nav-active-text font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <CircleUser className="w-5 h-5 text-muted-foreground" strokeWidth={1.8} />
            <span>Profile Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


