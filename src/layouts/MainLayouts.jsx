/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
// import FloatingCart from "../components/organisms/Floating";
import CartSidebar from "../components/organisms/CartSidebar"; // <-- IMPORT IT HERE

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* The main content area where pages will render */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      {/* <FloatingCart /> */}
      <CartSidebar /> {/* <-- ADD IT HERE */}
    </div>
  );
}
