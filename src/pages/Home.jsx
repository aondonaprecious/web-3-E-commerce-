/** @format */
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPlus,
  FiHeart,
  FiZap,
  FiCheckCircle,
  FiHexagon,
  FiBox,
  FiTriangle,
  FiCircle,
} from "react-icons/fi";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0E14] overflow-hidden flex flex-col justify-center pt-20">
      {/* Deep Background Glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center py-12">
        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT SIDE: Typography & CTA */}
          <div>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <FiCheckCircle className="w-3 h-3" />
              The Future of Ownership
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Digital Commerce
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              Experience the evolution of digital property. Trade, collect, and
              secure unique assets on the world's most advanced Web3 marketplace
              powered by Ethereum.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                to="/shop"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
              >
                Explore Marketplace <FiArrowRight />
              </Link>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-full transition-all flex items-center gap-2">
                <FiPlus /> Create Asset
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-12">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">128k+</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Items Minted
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">45k</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Active Traders
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">$1.2B</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Total Volume
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Floating 3D Card Area */}
          <div className="relative mt-10 lg:mt-0 lg:ml-auto w-full max-w-[420px]">
            {/* Cyan glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>

            {/* Main NFT Card (Slightly tilted) */}
            <div className="relative bg-[#111827] border border-cyan-500/40 rounded-[2.5rem] p-4 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Card Image */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white mb-5">
                {/* We use a minimalist Unsplash image to match the vase from your screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Neon Genesis Prime"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Details */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Neon Genesis Prime
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Created by{" "}
                      <span className="text-slate-200">@AetherArchitect</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold">2.45 ETH</p>
                    <p className="text-xs text-slate-500">~$4,820.00</p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex gap-3">
                  <button className="flex-grow py-3 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-2xl transition-colors">
                    Place a Bid
                  </button>
                  <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl transition-colors">
                    <FiHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Last Sale (Bottom Left) */}
            <div className="absolute -bottom-6 -left-8 bg-[#1E293B]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-2xl transform -rotate-3">
              <div className="bg-blue-600 rounded-full p-2.5">
                <FiZap className="text-white w-4 h-4" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Last Sale
                </p>
                <p className="text-sm font-bold text-white">1.82 ETH</p>
              </div>
            </div>

            {/* Floating Badge 2: Active Bidders (Top Right) */}
            <div className="absolute -top-6 -right-6 bg-[#1E293B]/90 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-4 flex items-center shadow-2xl transform rotate-3 z-20">
              <div className="flex -space-x-2 mr-3">
                <div className="w-7 h-7 rounded-full bg-slate-600 border-2 border-[#1E293B]"></div>
                <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-[#1E293B]"></div>
                <div className="w-7 h-7 rounded-full bg-slate-700 border-2 border-[#1E293B] flex items-center justify-center text-[9px] font-bold text-white">
                  +14
                </div>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Active Bidders
              </p>
            </div>
          </div>
        </div>

        {/* Supported Networks Footer Area */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            Supported Networks:
          </p>
          <div className="flex flex-wrap items-center gap-8 text-slate-400">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiHexagon className="w-5 h-5" />
              <span className="text-sm font-bold">Ethereum</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiBox className="w-5 h-5" />
              <span className="text-sm font-bold">Polygon</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiCircle className="w-5 h-5" />
              <span className="text-sm font-bold">Solana</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-bold">Avalanche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}