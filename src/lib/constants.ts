import { Quality, FAQ, Step, Feature } from "@/types";

export const APP_NAME = "ThumbMAX";
export const APP_DESCRIPTION = "Download YouTube Thumbnails in High Quality - Free & Fast";

export const QUALITIES: Quality[] = [
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

export const FAQS: FAQ[] = [
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

export const HOW_TO_USE_STEPS: Step[] = [
  { 
    num: "01", 
    title: "Find Video", 
    desc: "Find The Video You Want From Among The Videos Available On YouTube And Copy Its Link" 
  },
  { 
    num: "02", 
    title: "Paste Video", 
    desc: "Paste The Copied Link In The Desired Box And Then Wait For The System To Fetch Details." 
  },
  { 
    num: "03", 
    title: "Download Image", 
    desc: "And In The Last Step, Click On Download From The Displayed List And Save It On Your Device." 
  },
];

export const FEATURES: Feature[] = [
  { 
    icon: "zap", 
    title: "High Quality", 
    desc: "You Can Download All Thumbnails Without Losing Quality. High Res Images Available." 
  },
  { 
    icon: "play-circle", 
    title: "Fast Downloading", 
    desc: "Using Our Downloader, Quickly Download Desired Images With Just A Few Simple Clicks." 
  },
  { 
    icon: "infinity", 
    title: "Unlimited Download", 
    desc: "Through This Platform, You Can Download Images You Want At Any Time Without Limits." 
  },
  { 
    icon: "monitor-smartphone", 
    title: "Support All Devices", 
    desc: "An Online Platform That You Can Use Any Operating System, Including Windows, iOS & Android." 
  },
];

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-to-use" },
  { label: "FAQ", href: "#faq" },
];

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms Of Services", href: "#" },
  { label: "Contact Us", href: "#", badge: true },
];
