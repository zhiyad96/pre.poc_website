"use client";

import React, { useState } from "react"; // Added useState

export default function AgencyHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu

  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Case Studies",
    "Portfolio",
    "Contact",
  ];

  const PreePocLogoIcon = ({ className = "w-16 h-16" }) => (
    <svg
      viewBox="0 0 100 100"
      className={`${className} group transition-transform duration-500`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="preeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <rect
        x="25"
        y="30"
        width="8"
        height="40"
        rx="4"
        fill="white"
        className="group-hover:fill-cyan-400 transition-colors duration-500"
      />
      <rect
        x="45"
        y="45"
        width="8"
        height="35"
        rx="4"
        fill="url(#preeGrad)"
        opacity="0.8"
      />
      <path
        d="M33 34C45 34 53 40 53 52C53 64 45 70 33 70"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        className="group-hover:stroke-fuchsia-500 transition-colors duration-500"
      />
      <circle cx="68" cy="52" r="5" fill="#22d3ee" filter="url(#neonGlow)">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans text-white">
      
      {/* 🔹 Background Video (fixed) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/istockphoto-1448304504-640_adpp_is.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🔹 Dark overlay (optional) */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>

      {/* 2. RESPONSIVE NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <PreePocLogoIcon className="w-10 h-10 md:w-16 md:h-16" />
          <span className="text-lg md:text-xl font-black tracking-tight">
            PRE.POC
            <br />
            <span className="text-[8px] md:text-[10px] tracking-[0.3em] opacity-70">
              TECHNOLOGIES
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              {item}{" "}
              {item !== "Contact" && item !== "Portfolio" && (
                <span className="text-[10px]">▼</span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
          <div className="w-4 h-0.5 bg-white ml-auto transition-all"></div>
        </button>

        {/* Mobile Sidebar/Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0f011d]/95 z-[60] flex flex-col items-center justify-center gap-8 text-2xl font-bold transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
        >
          <button
            className="absolute top-8 right-8 text-4xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-pink-400"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* 3. HERO CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 flex justify-center items-center min-h-[calc(100vh-200px)]">
        {/* TEXT CONTENT */}
        <div className="space-y-6 md:space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
              PRE .<span className="text-white">POC</span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white/80 uppercase">
              Technologies
            </h2>
          </div>

          <p className="text-base md:text-xl text-white/70 leading-relaxed max-w-lg">
            PRE.POC Technologies, Engineering Digital Excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-10 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-pink-100 transition-all shadow-lg active:scale-95">
              About Us
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-95">
              Get A Quote
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
