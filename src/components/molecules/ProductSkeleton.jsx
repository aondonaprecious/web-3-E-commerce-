/** @format */

import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg shadow-sm animate-pulse w-full max-w-sm">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-md"></div>

      {/* Title placeholder */}
      <div className="h-5 bg-gray-200 rounded w-3/4 mt-2"></div>

      {/* Price placeholder */}
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>

      {/* Button placeholder */}
      <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
    </div>
  );
}
