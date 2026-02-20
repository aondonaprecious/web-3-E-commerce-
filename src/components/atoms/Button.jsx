/** @format */

import React from "react";
import { cn } from "../../utils/cn";

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    // Base styles applied to all buttons
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none";

    // Variant configurations
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
      accent: "bg-accent text-white hover:bg-accent-hover shadow-sm",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-100 text-primary",
      ghost: "bg-transparent hover:bg-gray-100 text-primary",
    };

    // Size configurations
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
        ) : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
