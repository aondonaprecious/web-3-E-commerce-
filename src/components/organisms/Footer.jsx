/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FiGlobe, FiTwitter, FiGithub, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#0F172A] py-16 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Socials (Takes up 2 columns) */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FiGlobe className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                RADIKAL
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
              The premiere marketplace for the decentralized economy. Join
              thousands of creators and collectors.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
              >
                <FiMessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
              >
                <FiGlobe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Marketplace */}
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">
              Marketplace
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  All NFTs
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Physical Goods
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Collectibles
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">
              Resources
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gas Fees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Taxes
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">
              Company
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 4: Legal */}
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">
              Legal
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Status */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} Radikal Web3 Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Network Status: Healthy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}