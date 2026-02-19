"use client";

import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  const stats = [
    {
      num: "01",
      text: "With This Platform, You Can Easily Download Any Video Thumbnail From YouTube For Free.",
    },
    {
      num: "02",
      text: "High quality images available in multiple resolutions for all your needs and projects.",
    },
    {
      num: "03",
      text: "Instant downloads with no registration required. Simple, fast, and secure process.",
    },
  ];

  return (
    <section className="px-4 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-3xl overflow-hidden p-1 shadow-2xl">
        {stats.map((stat, idx) => (
          <Card
            key={idx}
            className="bg-zinc-800 border-0 hover:bg-zinc-700/80 transition-all duration-300 rounded-[1.5rem] group"
          >
            <CardContent className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-red-500 transition-colors">
                {stat.num}
              </span>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {stat.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
