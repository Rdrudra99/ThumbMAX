"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { HowToUseSection } from "@/components/home/HowToUseSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { useThumbnailDownloader } from "@/hooks/useThumbnailDownloader";

export default function Home() {
  const {
    url,
    setUrl,
    videoId,
    error,
    isSearching,
    downloadingId,
    handleSubmit,
    handleDownload,
  } = useThumbnailDownloader();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-500/30">
      <Header />

      <main>
        <HeroSection
          url={url}
          onUrlChange={setUrl}
          onSubmit={handleSubmit}
          isSearching={isSearching}
          error={error}
        />

        <ResultsSection
          videoId={videoId}
          downloadingId={downloadingId}
          onDownload={handleDownload}
        />

        <HowToUseSection />

        <StatsSection />

        <FeaturesSection />

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
