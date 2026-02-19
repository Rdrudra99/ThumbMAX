"use client";

import { 
  Zap, 
  PlayCircle, 
  Infinity as InfinityIcon, 
  MonitorSmartphone 
} from "lucide-react";
import { FEATURES, APP_NAME } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  "zap": Zap,
  "play-circle": PlayCircle,
  "infinity": InfinityIcon,
  "monitor-smartphone": MonitorSmartphone,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-zinc-500 uppercase tracking-widest text-sm font-semibold mb-2">
          Why To Choose
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
          <span className="text-red-500">{APP_NAME}</span> Downloader
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, idx) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap;
          
          return (
            <Card
              key={idx}
              className="border-zinc-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full border-2 border-red-200 flex items-center justify-center mb-4 group-hover:bg-red-50 group-hover:border-red-300 transition-all">
                  <IconComponent className="w-6 h-6 text-red-500" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-bold text-zinc-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-zinc-500">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
