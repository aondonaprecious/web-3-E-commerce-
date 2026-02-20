/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function NavItem({ to, children, icon: Icon, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          // Base styles for all links
          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
          // Conditional styling based on whether the route is currently active
          isActive
            ? "bg-primary text-white shadow-sm" // Active state
            : "text-gray-600 hover:bg-gray-100 hover:text-primary", // Default/Hover state
          className,
        )
      }
    >
      {/* If an icon is passed as a prop, render it dynamically */}
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </NavLink>
  );
}
