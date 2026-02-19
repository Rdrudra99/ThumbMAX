"use client";

import Image from "next/image";
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HOW_TO_USE_STEPS, APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <Youtube className="w-5 h-5 text-red-500" aria-hidden="true" />
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm">
            Free Youtube
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">
          Thumbnail Downloader
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          With This Platform, You Can Easily Download Any Video Thumbnail From
          YouTube For Free
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#faq" 
            className="inline-flex items-center justify-center text-sm font-semibold text-zinc-600 hover:text-red-500 hover:bg-zinc-100 px-6 py-3 rounded-full transition-colors border border-zinc-200"
          >
            Contact Us
          </a>
          <a 
            href="#features"
            className="inline-flex items-center justify-center bg-zinc-900 text-white text-sm font-semibold hover:bg-red-500 transition-colors px-6 py-3 rounded-full shadow-md"
          >
            Learn More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* How To Use Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center px-4 sm:px-0">
          {/* Decorative Red Shape */}
          <div
            className="absolute inset-0 bg-red-500 rounded-[3rem] rounded-tl-none rounded-br-none transform rotate-3 scale-95 -z-10 hidden sm:block"
            aria-hidden="true"
          />
          {/* Image Box */}
          <div className="w-full max-w-xs sm:max-w-md aspect-4/5 bg-zinc-200 rounded-[2rem] overflow-hidden relative shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80"
              alt="Excited user using ThumbMAX"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side: Steps */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-xs">
              HOW TO USE
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900">
              <span className="text-red-500">YouTube</span> Downloader
            </h3>
          </div>

          {HOW_TO_USE_STEPS.map((step, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div
                  className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-all duration-300",
                    idx === 1
                      ? "bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white border-red-200 text-red-500 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/20"
                  )}
                >
                  {step.num}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-zinc-500 leading-relaxed text-sm max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
