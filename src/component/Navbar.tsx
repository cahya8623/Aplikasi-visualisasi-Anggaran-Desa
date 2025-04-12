"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BarChart2, Home, Info, Phone } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0055cc] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <BarChart2 className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Menu</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/tentang"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/kontak"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            >
              Kontak
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#0066ee] focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Buka menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0055cc] border-t border-[#0066ee]">
          <Link
            href="/"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            <Home className="mr-2 h-5 w-5" />
            Beranda
          </Link>
          <Link
            href="/tentang"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            <Info className="mr-2 h-5 w-5" />
            Tentang
          </Link>
          <Link
            href="/kontak"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-[#0066ee] hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            <Phone className="mr-2 h-5 w-5" />
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
