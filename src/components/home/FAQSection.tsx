"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section id="faq" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none" aria-hidden="true">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="400" cy="0" r="100" stroke="white" strokeWidth="2" />
            <circle cx="400" cy="0" r="150" stroke="white" strokeWidth="2" />
            <circle cx="400" cy="0" r="200" stroke="white" strokeWidth="2" />
            <circle cx="400" cy="0" r="250" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        {/* Header */}
        <div className="mb-12 relative z-10">
          <p className="text-zinc-400 font-medium tracking-widest text-sm mb-3 uppercase">
            Frequently
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white flex flex-wrap items-center gap-3">
            Asked{" "}
            <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-3xl md:text-5xl font-black rounded-xl">
              Questions
            </Badge>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 relative z-10" role="list">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "border-b border-zinc-800 transition-all duration-300",
                  isOpen
                    ? "bg-zinc-800/50 rounded-2xl p-6 border-transparent"
                    : "py-4"
                )}
                role="listitem"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full flex justify-between items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-lg group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className={cn(
                      "font-semibold text-lg transition-colors flex-1 pr-4",
                      isOpen
                        ? "text-white"
                        : "text-zinc-300 group-hover:text-white"
                    )}
                  >
                    <span className="text-red-500 mr-4">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 transition-all duration-300",
                      isOpen
                        ? "text-red-500 rotate-180"
                        : "text-zinc-500 group-hover:text-white"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-4 pl-10 text-zinc-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2"
                    role="region"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
