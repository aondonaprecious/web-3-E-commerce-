/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiGlobe,
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/slices/cartSlices";
import NavItem from "../molecules/NavItems";
import CartSidebar from "./CartSidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with React Icon */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiGlobe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              RADIKAL
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors text-white cursor-pointer"
            >
              <FiShoppingCart className="w-6 h-6" />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-slate-900 text-xs font-bold rounded-full flex items-center justify-center border border-white">
                  {totalQuantity}
                </span>
              )}
            </button>

            <div className="hidden sm:block">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}