"use client";

import Link from "next/link";
import { Youtube, Heart } from "lucide-react";
import { APP_NAME, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 px-4 sm:px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-red-500 p-2 rounded-xl text-white transition-transform group-hover:scale-110 shadow-md shadow-red-500/20">
                <Youtube className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xl tracking-tight leading-none text-zinc-900">
                  Thumb<span className="text-red-500">MAX</span>
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest leading-tight mt-0.5">
                  Youtube Downloader
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Download YouTube thumbnails in high quality. Free, fast, and unlimited downloads directly to your device.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-zinc-900 mb-5 text-base">Quick Links</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <Link
                href="#how-to-use"
                className="text-sm font-medium text-zinc-500 hover:text-red-500 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-zinc-500 hover:text-red-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-zinc-500 hover:text-red-500 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-zinc-900 mb-5 text-base">Legal</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-zinc-500 hover:text-red-500 transition-colors inline-flex items-center gap-2"
                >
                  {link.label}
                  {link.badge && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-600">
                © {currentYear} {APP_NAME}. All rights reserved.
              </p>
              <p className="text-xs text-zinc-400 max-w-md mx-auto md:mx-0">
                This is an independent tool and is not affiliated with YouTube.
              </p>
            </div>
            
            {/* Developer Credit */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-zinc-50 rounded-full border border-zinc-100">
              <span className="text-sm text-zinc-500 font-medium">Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-sm text-zinc-500 font-medium">by</span>
              <a 
                href="#" 
                className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-80 transition-opacity"
              >
                Rdrudra99
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}