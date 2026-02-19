"use client";

import { ThumbnailCard } from "./ThumbnailCard";
import { QUALITIES } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react"; // Ensure you have lucide-react installed

interface ResultsSectionProps {
  videoId: string;
  downloadingId: string | null;
  onDownload: (imageUrl: string, filename: string, id: string) => void;
}

export function ResultsSection({
  videoId,
  downloadingId,
  onDownload,
}: ResultsSectionProps) {
  if (!videoId) return null;

  return (
    <section 
      aria-label="Download Results"
      className="max-w-5xl mx-auto px-4 sm:px-6 -mt-20 relative z-30 mb-24 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out"
    >
      {/* Premium Card Container with extreme rounded corners */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-zinc-200/60 ring-1 ring-zinc-950/5 relative overflow-hidden">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-zinc-50 to-transparent -z-10" />

        {/* Header / Success State */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 space-y-5">
          {/* Icon Badge */}
          <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm ring-8 ring-green-50 animate-in zoom-in duration-500 delay-150">
            <CheckCircle2 className="w-8 h-8" strokeWidth={2.5} />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Your Download is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                Ready
              </span>
            </h2>
            <p className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto font-medium">
              We've successfully processed your video. Choose your preferred quality below to save the thumbnail.
            </p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {QUALITIES.map((quality, index) => (
            <div 
              key={quality.id} 
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ThumbnailCard
                quality={quality}
                videoId={videoId}
                isDownloading={downloadingId === quality.id}
                onDownload={onDownload}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}