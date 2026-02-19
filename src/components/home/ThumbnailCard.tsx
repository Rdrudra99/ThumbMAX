"use client";

import Image from "next/image";
import { Download, Check, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quality } from "@/types";
import { getThumbnailUrl } from "@/lib/youtube";
import { cn } from "@/lib/utils";

interface ThumbnailCardProps {
  quality: Quality;
  videoId: string;
  isDownloading: boolean;
  onDownload: (imageUrl: string, filename: string, id: string) => void;
}

export function ThumbnailCard({
  quality,
  videoId,
  isDownloading,
  onDownload,
}: ThumbnailCardProps) {
  const imageUrl = getThumbnailUrl(videoId, quality.filename);

  return (
    <Card className="overflow-hidden border-zinc-200/50 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 group rounded-2xl">
      {/* Nested extreme rounding for the image wrapper */}
      <CardHeader className="pb-0">
        <div className="w-full aspect-video bg-zinc-100 relative overflow-hidden  ring-1 ring-zinc-900/5 shadow-inner">
          <Image
            src={imageUrl}
            alt={`${quality.label} thumbnail`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle hover gradient over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6 sm:p-8 space-y-6 sm:space-y-8 flex flex-col justify-between">
        <div className="space-y-2">
          <CardTitle className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            {quality.label}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">
            {quality.desc}
          </CardDescription>
        </div>

        {/* The Big Premium SaaS Button */}
        <Button
          onClick={() => onDownload(imageUrl, quality.filename, quality.id)}
          disabled={isDownloading}
          className={cn(
            "w-full h-14 sm:h-16 text-base sm:text-lg font-bold transition-all duration-300 rounded-full group/btn active:scale-[0.98]",
            isDownloading
              ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25"
              : "bg-zinc-900 hover:bg-zinc-800 text-white shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30 hover:-translate-y-0.5"
          )}
          aria-label={`Download ${quality.label} thumbnail`}
        >
          {isDownloading ? (
            <span className="flex items-center gap-2.5 animate-in fade-in zoom-in duration-300">
              <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              Downloaded
            </span>
          ) : (
            <span className="flex items-center gap-2.5">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/btn:-translate-y-1" strokeWidth={2.5} />
              Download Now
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}