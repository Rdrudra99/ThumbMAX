"use client";

import { FormEvent } from "react";
import { Search, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  url: string;
  onUrlChange: (url: string) => void;
  onSubmit: (e: FormEvent) => void;
  isSearching: boolean;
  error: string;
}

export function SearchBar({
  url,
  onUrlChange,
  onSubmit,
  isSearching,
  error,
}: SearchBarProps) {
  return (
    <form onSubmit={onSubmit} className="relative w-full group z-20">
      <div
        className={cn(
          "flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-[1.5rem] sm:rounded-full p-2 gap-2 sm:gap-0 transition-all duration-300 border-2",
          error
            ? "border-red-300 shadow-lg shadow-red-500/10"
            : "border-zinc-200 shadow-lg hover:shadow-xl hover:border-zinc-300"
        )}
      >
        <div className="flex-1 flex items-center w-full px-4 sm:px-5 py-3 sm:py-2 min-h-[56px] sm:min-h-0">
          <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" aria-hidden="true" />
          <Input
            type="url"
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            placeholder="Insert YouTube Video Link Here..."
            className="w-full bg-transparent border-none text-zinc-800 font-medium placeholder-zinc-400/80 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base sm:text-lg px-0 h-auto"
            disabled={isSearching}
            aria-label="YouTube video URL"
            aria-invalid={!!error}
            aria-describedby={error ? "search-error" : undefined}
          />
        </div>
        <Button
          type="submit"
          disabled={isSearching || !url.trim()}
          className="w-full sm:w-auto px-8 py-6 sm:py-3.5 bg-red-500 text-white rounded-[1.5rem] sm:rounded-full font-bold text-base hover:bg-red-600 transition-all shadow-md shadow-red-500/20 disabled:opacity-70 sm:min-w-[140px] h-auto active:scale-[0.98]"
          aria-label={isSearching ? "Searching..." : "Download thumbnail"}
        >
          {isSearching ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Searching...</span>
            </span>
          ) : (
            "Download"
          )}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div
          id="search-error"
          className="absolute top-full left-0 right-0 mt-3 sm:mt-4 flex justify-center animate-in fade-in zoom-in-95 duration-200"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 sm:py-2.5 rounded-full text-sm font-semibold border border-red-100 shadow-sm mx-4 sm:mx-0">
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-center">{error}</span>
          </div>
        </div>
      )}
    </form>
  );
}