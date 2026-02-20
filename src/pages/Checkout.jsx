/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FormField from "../components/molecules/FormFields";
// import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import { FiLock, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function Checkout() {
  // 1. Pull data from Redux and Web3
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const { isConnected } = useAccount(); // Wagmi hook to check if wallet is connected

  

  // 2. Local state for form handling
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 3. Security Check: Don't allow checkout if cart is empty
  if (cartItems.length === 0 && !isSuccess) {
    return <Navigate to="/shop" replace />;
  }

  // 4. Mock Smart Contract Transaction
  const handleWeb3Payment = async (e) => {
    e.preventDefault();
    if (!isConnected) return alert("Please connect your wallet first.");

    setIsProcessing(true);
    // Simulate a blockchain transaction delay (e.g., waiting for block confirmation)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Note: In a real app, you would dispatch a clearCart action here
    }, 3000);
  };

  // 5. Success State UI
  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <FiCheckCircle className="w-20 h-20 text-success mb-6" />
        <h1 className="text-4xl font-bold text-primary mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Your transaction has been verified on the blockchain. Your order is
          now being processed.
        </p>
        <Link to="/shop">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Back Link */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8 transition-colors"
      >
        <FiArrowLeft /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: Shipping & Payment Form */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Shipping Details
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  id="firstName"
                  placeholder="Satoshi"
                />
                <FormField
                  label="Last Name"
                  id="lastName"
                  placeholder="Nakamoto"
                />
              </div>
              <FormField
                label="Email Address"
                id="email"
                type="email"
                placeholder="hello@web3.com"
              />
              <FormField
                label="Delivery Address"
                id="address"
                placeholder="123 Block Chain St."
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField label="City" id="city" placeholder="Metropolis" />
                <FormField label="Postal Code" id="zip" placeholder="10001" />
              </div>
            </form>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-primary">Web3 Payment</h2>
              <FiLock className="text-success w-5 h-5" />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              This is a decentralized transaction. Please ensure your wallet is
              connected to the correct network.
            </p>

            {/* Smart Conditional Rendering: Show Connect Button OR Pay Button */}
            {!isConnected ? (
              <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4 bg-gray-50/50">
                <p className="font-medium text-gray-600">
                  Connect your wallet to proceed
                </p>
                <ConnectButton />
              </div>
            ) : (
              <Button
                variant="accent"
                size="lg"
                className="w-full text-lg shadow-xl shadow-accent/20"
                onClick={handleWeb3Payment}
                isLoading={isProcessing}
              >
                {isProcessing
                  ? "Confirming in Wallet..."
                  : `Pay $${totalAmount.toFixed(2)} via Smart Contract`}
              </Button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 rounded-2xl sticky top-24">
            <h3 className="text-lg font-bold text-primary mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 p-2 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="font-bold text-gray-900">
                    ${item.totalPrice.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Network Gas Fee (Est.)</span>
                <span>$2.50</span>
              </div>
              <div className="flex justify-between text-lg font-extrabold text-primary pt-3 border-t border-gray-100">
                <span>Total</span>
                <span>${(totalAmount + 2.5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
