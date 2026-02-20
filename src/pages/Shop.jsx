/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/ProductSlice";
import ProductCard from "../components/molecules/ProductCard";
import ProductSkeleton from "../components/molecules/ProductSkeleton";


export default function Shop() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header & Filter Pills exactly from the template */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Latest Marketplace Items
        </h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm">
            All
          </button>
          <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-700">
            Art
          </button>
          <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-700">
            Collectibles
          </button>
          <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-700">
            Utility
          </button>
          <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-700">
            Physical
          </button>
        </div>
      </div>

      {/* Grid Layout strictly matching the 4-column desktop layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {status === "loading" &&
          Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
        {status === "succeeded" &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* Load More Button */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all text-slate-700">
          Load More Items
        </button>
      </div>
    </div>
  );
}
