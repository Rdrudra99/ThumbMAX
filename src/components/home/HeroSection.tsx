"use client";

import { FormEvent } from "react";
import { Monitor, Apple, Smartphone, Terminal } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { APP_NAME } from "@/lib/constants";

interface HeroSectionProps {
  url: string;
  onUrlChange: (url: string) => void;
  onSubmit: (e: FormEvent) => void;
  isSearching: boolean;
  error: string;
}

export function HeroSection({
  url,
  onUrlChange,
  onSubmit,
  isSearching,
  error,
}: HeroSectionProps) {
  return (
    <div className="bg-linear-to-b from-zinc-50 to-white rounded-b-[3rem] sm:rounded-b-[5rem] pt-24 md:pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative SVG */}
        <div className="inline-block mb-4" aria-hidden="true">
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            className="text-red-500 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 15c2-4 8-8 15-8s13 4 15 8" />
            <path d="M10 10c2-3 6-5 10-5s8 2 10 5" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
          Online Thumbnail
          <br />
          <span className="text-zinc-800">Downloader</span>
        </h1>

        {/* Description */}
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore Our{" "}
          <span className="text-red-500 font-semibold">{APP_NAME}</span>{" "}
          Downloader, A Free Solution To Quickly Download YouTube Thumbnails
          With Just One Click!
        </p>

        {/* Search Bar */}
        <SearchBar
          url={url}
          onUrlChange={onUrlChange}
          onSubmit={onSubmit}
          isSearching={isSearching}
          error={error}
        />

        {/* Supported Platforms Badge */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 text-sm text-zinc-600 bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
            <span className="font-medium">Supported Platforms:</span>
            <div className="flex items-center gap-3">
              <Monitor className="w-4 h-4" aria-label="Desktop" />
              <div className="w-px h-4 bg-zinc-300" aria-hidden="true" />
              <Apple className="w-4 h-4" aria-label="Apple" />
              <div className="w-px h-4 bg-zinc-300" aria-hidden="true" />
              <Smartphone className="w-4 h-4" aria-label="Mobile" />
              <div className="w-px h-4 bg-zinc-300" aria-hidden="true" />
              <Terminal className="w-4 h-4" aria-label="All platforms" />
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Background Decor */}
      <div
        className="absolute top-0 right-0 -mr-32 -mt-32 opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1 className="text-[200px] md:text-[250px] font-black tracking-tighter transform rotate-12">
          YOUTUBE
        </h1>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/50 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
