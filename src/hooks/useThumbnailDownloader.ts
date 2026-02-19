"use client";

import { useState, FormEvent } from "react";
import { extractVideoID, downloadImage } from "@/lib/youtube";

export function useThumbnailDownloader() {
  const [url, setUrl] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setVideoId("");

    if (!url.trim()) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    setIsSearching(true);

    // Simulate slight delay for better UX
    setTimeout(() => {
      const id = extractVideoID(url);
      if (id) {
        setVideoId(id);
        // Smooth scroll to results
        setTimeout(() => {
          window.scrollTo({ top: 500, behavior: "smooth" });
        }, 100);
      } else {
        setError(
          "We couldn't find a video ID in that URL. Please check and try again."
        );
      }
      setIsSearching(false);
    }, 600);
  };

  const handleDownload = async (
    imageUrl: string,
    filename: string,
    id: string
  ) => {
    setDownloadingId(id);

    try {
      const downloadFilename = `thumbnail-${videoId}-${filename}`;
      await downloadImage(imageUrl, downloadFilename);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      // Keep the success state visible for a moment
      setTimeout(() => setDownloadingId(null), 1500);
    }
  };

  const resetSearch = () => {
    setUrl("");
    setVideoId("");
    setError("");
    setDownloadingId(null);
  };

  return {
    url,
    setUrl,
    videoId,
    error,
    isSearching,
    downloadingId,
    handleSubmit,
    handleDownload,
    resetSearch,
  };
}
