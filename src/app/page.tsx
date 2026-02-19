

"use client"

import React, { useState } from "react";
import { 
  Download, 
  Search, 
  Youtube, 
  AlertCircle, 
  Monitor, 
  Apple, 
  Smartphone, 
  Terminal, 
  Check,
  PlayCircle,
  Zap,
  Infinity as InfinityIcon,
  MonitorSmartphone,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// --- Types ---
interface Quality {
  id: string;
  filename: string;
  label: string;
  desc: string;
}

// --- Constants ---
const QUALITIES: Quality[] = [
  {
    id: "maxres",
    filename: "maxresdefault.jpg",
    label: "Ultra HD (1080p)",
    desc: "Perfect for desktop wallpapers and large displays.",
  },
  {
    id: "hd",
    filename: "hq720.jpg",
    label: "HD (720p)",
    desc: "Great for blogs, articles, and general web usage.",
  },
  {
    id: "hq",
    filename: "hqdefault.jpg",
    label: "High Quality (480p)",
    desc: "Good for mobile displays and social media.",
  },
  {
    id: "mq",
    filename: "mqdefault.jpg",
    label: "Medium (360p)",
    desc: "Smallest file size. Best for placeholders.",
  },
];

const FAQS = [
  {
    question: "What is this Thumbnail Downloader?",
    answer: "It is a free online tool that allows you to instantly extract and download thumbnails from any YouTube video in various resolutions, including Ultra HD."
  },
  {
    question: "Is this service completely free?",
    answer: "Yes, our thumbnail downloader is 100% free to use with no hidden charges or limits on the number of downloads."
  },
  {
    question: "Where are the downloaded images stored?",
    answer: "The images will be saved directly to your device's default 'Downloads' folder or the location you have specified in your browser settings."
  },
  {
    question: "Can I download thumbnails unlimited times?",
    answer: "Absolutely! There are no restrictions on how many thumbnails you can download. You can use it as many times as you need."
  }
];

// --- Helper Functions ---
function extractVideoID(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export default function App() {
  const [url, setUrl] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number>(0); // Default first FAQ open

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setVideoId("");

    if (!url.trim()) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    setIsSearching(true);

    setTimeout(() => {
      const id = extractVideoID(url);
      if (id) {
        setVideoId(id);
        // Scroll to results slightly
        window.scrollTo({ top: 400, behavior: 'smooth' });
      } else {
        setError("We couldn't find a video ID in that URL. Please check and try again.");
      }
      setIsSearching(false);
    }, 600);
  };

  const handleDownload = async (imageUrl: string, filename: string, id: string) => {
    setDownloadingId(id);
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `thumbnail-${videoId}-${filename}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(imageUrl, '_blank');
    } finally {
      setTimeout(() => setDownloadingId(null), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-500/30">
      
      {/* --- HERO SECTION (Gray background with rounded bottom) --- */}
      <div className="bg-[#f4f4f5] rounded-b-[3rem] sm:rounded-b-[5rem] pt-6 pb-24 px-4 relative overflow-hidden">
        
        {/* Navbar */}
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 relative z-10">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg text-white">
              <Youtube className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Thumb<span className="text-red-500">MAX</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              English ▼
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
             <svg width="40" height="20" viewBox="0 0 40 20" className="text-red-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 15c2-4 8-8 15-8s13 4 15 8" />
                <path d="M10 10c2-3 6-5 10-5s8 2 10 5" />
             </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6 uppercase">
            Online Thumbnail<br />
            <span className="text-zinc-800">Downloader</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Do Not Look Below! Explore Our <span className="text-red-500 font-semibold">ThumbMAX</span> Downloader, A Free Solution To Quickly Download YouTube Thumbnails With Just One Click!
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto group z-20">
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-full p-2 shadow-lg border border-zinc-200 transition-shadow hover:shadow-xl">
              <div className="flex-1 flex items-center w-full px-4 py-2 sm:py-0">
                <Search className="w-5 h-5 text-zinc-400 mr-3" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Insert Youtube Video Link Here ..."
                  className="w-full bg-transparent border-none text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full sm:w-auto px-8 py-3.5 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-all shadow-md shadow-red-500/20 disabled:opacity-70 flex items-center justify-center min-w-[140px]"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Download"
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="absolute top-full left-0 right-0 mt-4 flex justify-center animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-full text-sm font-medium border border-red-100 shadow-sm">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              </div>
            )}
          </form>

          {/* Supported Platforms */}
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500 bg-zinc-800/5 inline-flex px-6 py-2.5 rounded-full border border-zinc-200/50">
            <span className="font-medium mr-2">Supported Platforms :</span>
            <Monitor className="w-4 h-4" />
            <div className="w-px h-4 bg-zinc-300"></div>
            <Apple className="w-4 h-4" />
            <div className="w-px h-4 bg-zinc-300"></div>
            <Smartphone className="w-4 h-4" />
            <div className="w-px h-4 bg-zinc-300"></div>
            <Terminal className="w-4 h-4" />
          </div>
        </div>

        {/* Abstract Background Decor (Watermark styling) */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-5 pointer-events-none select-none">
          <h1 className="text-[250px] font-black tracking-tighter transform rotate-12">YOUTUBE</h1>
        </div>
      </div>

      {/* --- RESULTS SECTION (Dynamically Rendered) --- */}
      {videoId && (
        <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-30 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-zinc-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-zinc-900">Your Download is Ready</h2>
              <p className="text-zinc-500 mt-1">Select your preferred quality below.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {QUALITIES.map((quality) => {
                const imageUrl = `https://i.ytimg.com/vi/${videoId}/${quality.filename}`;
                const isDownloading = downloadingId === quality.id;

                return (
                  <div key={quality.id} className="flex flex-col sm:flex-row bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden hover:border-red-200 transition-colors group">
                    {/* Thumbnail Preview */}
                    <div className="w-full sm:w-48 aspect-video sm:aspect-square bg-zinc-200 relative overflow-hidden flex-shrink-0">
                      <img
                        src={imageUrl}
                        alt={`${quality.label} thumbnail`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e: any) => { e.target.onerror = null; }}
                      />
                    </div>
                    {/* Details & Button */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-bold text-zinc-900 text-lg">{quality.label}</h3>
                        <p className="text-sm text-zinc-500 mt-1 leading-snug">{quality.desc}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(imageUrl, quality.filename, quality.id)}
                        className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium transition-all ${
                          isDownloading 
                            ? "bg-green-100 text-green-700 border border-green-200" 
                            : "bg-zinc-900 text-white hover:bg-red-500 shadow-md"
                        }`}
                      >
                        {isDownloading ? (
                          <>
                            <Check className="w-4 h-4" /> Downloaded
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" /> Download Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- HOW TO USE SECTION --- */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-red-500 font-semibold tracking-wider uppercase text-sm flex items-center justify-center gap-2 mb-2">
             <Youtube className="w-5 h-5"/> Free Youtube
           </span>
           <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">
              Thumbnail Downloader
           </h2>
           <p className="text-zinc-500 max-w-xl mx-auto">
              With This Platform, You Can Easily Download Any Video Thumbnail From YouTube For Free
           </p>
           <div className="flex justify-center gap-4 mt-8">
              <button className="text-sm font-semibold text-zinc-600 hover:text-red-500">Contact Us</button>
              <button className="bg-zinc-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-500 transition-colors flex items-center gap-2">
                Learn More <span>→</span>
              </button>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
          {/* Left Side: Mock Image Area */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Decorative Red Shape */}
            <div className="absolute inset-0 bg-red-500 rounded-[3rem] rounded-tl-none rounded-br-none transform rotate-3 scale-95 -z-10"></div>
            {/* Mock Image Box */}
            <div className="w-full max-w-sm aspect-[4/5] bg-zinc-200 rounded-[2rem] overflow-hidden relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80" 
                alt="Excited user" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="mb-8">
              <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-semibold mb-2">How to use</h3>
              <h2 className="text-3xl font-bold text-zinc-900">
                <span className="text-red-500">YouTube</span> Downloader
              </h2>
            </div>

            {[
              { num: "01", title: "Find Video", desc: "Find The Video You Want From Among The Videos Available On YouTube And Copy Its Link" },
              { num: "02", title: "Paste Video", desc: "Paste The Copied Link In The Desired Box And Then Wait For The System To Fetch Details." },
              { num: "03", title: "Download Image", desc: "And In The Last Step, Click On Download From The Displayed List And Save It On Your Device." },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-colors ${idx === 1 ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-red-200 text-red-500 group-hover:border-red-500'}`}>
                    {step.num}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THREE DARK CARDS SECTION --- */}
      <section className="px-4 max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-zinc-900 rounded-3xl overflow-hidden p-1 shadow-2xl">
           {[1, 2, 3].map((num) => (
              <div key={num} className="bg-zinc-800 p-8 md:p-12 hover:bg-zinc-700/50 transition-colors flex flex-col justify-center rounded-[1.5rem]">
                 <span className="text-4xl font-black text-white mb-4">0{num}</span>
                 <p className="text-zinc-400 text-sm leading-relaxed">
                   With This Platform, You Can Easily Download Any Video Thumbnail From YouTube For Free.
                 </p>
              </div>
           ))}
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-semibold mb-2">Why To Choose</h3>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
            <span className="text-red-500">ThumbMAX</span> Downloader
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: <Zap className="w-6 h-6 text-red-500" />, title: "High Quality", desc: "You Can Download All Thumbnails Without Losing Quality. High Res Images Available." },
            { icon: <PlayCircle className="w-6 h-6 text-red-500" />, title: "Fast Downloading", desc: "Using Our Downloader, Quickly Download Desired Images With Just A Few Simple Clicks." },
            { icon: <InfinityIcon className="w-6 h-6 text-red-500" />, title: "Unlimited Download", desc: "Through This Platform, You Can Download Images You Want At Any Time Without Limits." },
            { icon: <MonitorSmartphone className="w-6 h-6 text-red-500" />, title: "Support All Devices", desc: "An Online Platform That You Can Use Any Operating System, Including Windows, iOS & Android." },
          ].map((feature, idx) => (
            <div key={idx} className="text-left">
              <div className="w-14 h-14 rounded-full border border-red-200 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">{feature.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          
          {/* Decorative lines inside dark box */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="400" cy="0" r="100" stroke="white" strokeWidth="2"/>
              <circle cx="400" cy="0" r="150" stroke="white" strokeWidth="2"/>
              <circle cx="400" cy="0" r="200" stroke="white" strokeWidth="2"/>
              <circle cx="400" cy="0" r="250" stroke="white" strokeWidth="2"/>
            </svg>
          </div>

          <div className="mb-12 relative z-10">
            <h3 className="text-zinc-400 font-medium tracking-widest text-sm mb-2 uppercase">Frequently</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Asked <span className="bg-red-500 text-white px-4 py-1 rounded-xl inline-block mt-2 md:mt-0">Questions</span>
            </h2>
          </div>

          <div className="space-y-4 relative z-10">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-b border-zinc-800 pb-4 transition-all duration-300 ${isOpen ? 'bg-zinc-800/50 rounded-2xl p-6 border-transparent' : 'py-4'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                      <span className="text-red-500 mr-4">0{idx + 1}.</span> 
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-zinc-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="mt-4 pl-10 text-zinc-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-zinc-100 py-8 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2023-2024 YouTube Downloader
          </p>
          
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg text-white">
              <Youtube className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-lg tracking-tight leading-none text-zinc-900">Thumb<span className="text-red-500">MAX</span></span>
               <span className="text-[10px] text-zinc-400 uppercase tracking-widest leading-tight">Youtube Downloader</span>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms Of Services</a>
            <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
              Contact Us
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

