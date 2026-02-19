"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Youtube, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center",
        isScrolled ? "top-4 px-4 sm:px-6" : "top-0 px-0"
      )}
    >
      <div 
        className={cn(
          "w-full transition-all duration-500 ease-in-out relative",
          isScrolled 
            ? "max-w-5xl bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-200/50 rounded-full" 
            : "max-w-7xl bg-transparent border-transparent"
        )}
      >
        <nav className={cn(
          "flex justify-between items-center transition-all duration-500",
          isScrolled ? "h-16 px-6" : "h-20 px-4 sm:px-6 lg:px-8"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-red-500 p-1.5 rounded-xl text-white transition-transform duration-300 group-hover:scale-110 shadow-sm shadow-red-500/20">
              <Youtube className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900">
              Thumb<span className="text-red-500">MAX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="#how-to-use"
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                FAQ
              </Link>
            </div>
            
            {/* Divider */}
            <div className="w-px h-6 bg-zinc-200" />

            {/* Language Selector */}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100/80"
            >
              <Globe className="w-4 h-4 mr-1.5" />
              English
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-zinc-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-zinc-700 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-700 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </nav>

        {/* Floating Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="bg-white/95 backdrop-blur-xl border border-zinc-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-4 flex flex-col gap-2">
              <Link
                href="#how-to-use"
                className="text-base font-semibold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-2xl px-4 py-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-base font-semibold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-2xl px-4 py-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-base font-semibold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-2xl px-4 py-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="h-px bg-zinc-100 my-1 mx-2" />
              <Button
                variant="ghost"
                className="text-base font-semibold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 justify-start rounded-2xl px-4 py-6"
              >
                <Globe className="w-5 h-5 mr-3 text-zinc-400" />
                English
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}