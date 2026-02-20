/** @format */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to conditionally merge Tailwind classes without style conflicts.
 * Industry standard, popularized by libraries like shadcn/ui.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
