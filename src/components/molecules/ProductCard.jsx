/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlices";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all group">
      {/* 4/5 Aspect Ratio Image Area exactly like the template */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 flex items-center justify-center p-4">
        <img
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
          src={product.image}
        />
        {/* React Icon Heart */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:text-red-500 transition-colors">
          <FiHeart className="w-5 h-5" />
        </button>
      </div>

      {/* Details Area */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1 text-slate-900">
            {product.title}
          </h3>
          <span className="text-primary font-bold whitespace-nowrap ml-2">
            {(product.price / 2000).toFixed(3)} ETH
          </span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>

        {/* Full width dark Add to Cart button with React Icon */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
        >
          <FiShoppingBag className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}