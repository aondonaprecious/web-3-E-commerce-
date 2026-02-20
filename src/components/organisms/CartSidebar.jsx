/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, removeFromCart } from "../../store/slices/cartSlices";
import { FiX, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalAmount, isCartOpen } = useSelector(
    (state) => state.cart,
  );

  if (!isCartOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => dispatch(toggleCart())}
      />

      {/* Glassmorphism Sidebar Panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0F172A]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-primary w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Your Cart</h2>
          </div>
          <button
            onClick={() => dispatch(toggleCart())}
            className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
          {cartItems.length === 0 ? (
            <div className="text-center text-slate-500 mt-10 flex flex-col items-center gap-4">
              <FiShoppingBag className="w-12 h-12 opacity-20" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/5"
              >
                <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1">
                    Qty: {item.quantity}
                  </div>
                  <div className="font-bold text-primary mt-1">
                    {(item.totalPrice / 2000).toFixed(3)} ETH
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        <div className="p-6 border-t border-white/10 bg-black/20">
          <div className="flex justify-between items-center mb-6 text-lg font-bold text-white">
            <span>Total:</span>
            <span className="text-primary">
              {(Math.abs(totalAmount) / 2000).toFixed(3)} ETH
            </span>
          </div>

          <button
            className="w-full py-4 bg-gradient-to-r from-primary to-accent text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            disabled={cartItems.length === 0}
            onClick={() => {
              dispatch(toggleCart()); // Close the sidebar
              navigate("/checkout"); // Route to the checkout page!
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
