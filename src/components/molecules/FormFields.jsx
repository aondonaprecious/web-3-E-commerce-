/** @format */

import React from "react";
import Input from "../atoms/Input";
import { cn } from "../../utils/cn";

export default function FormField({
  label,
  id,
  error,
  className,
  ...inputProps
}) {
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <Input id={id} error={!!error} {...inputProps} />

      {/* Reserve space for error to prevent layout shift */}
      <span className="text-xs text-error min-h-[16px]">{error}</span>
    </div>
  );
}
