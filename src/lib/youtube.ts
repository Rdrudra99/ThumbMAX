/**
 * Extracts a YouTube video ID from various YouTube URL formats
 * @param url - The YouTube URL to parse
 * @returns The video ID or null if not found
 */
export function extractVideoID(url: string): string | null {
  if (!url.trim()) return null;

  try {
    // Try URL parsing first
    const urlObj = new URL(url);
    
    // Handle youtu.be short URLs
    if (urlObj.hostname.includes("youtu.be")) {
      const id = urlObj.pathname.slice(1);
      return id.length === 11 ? id : null;
    }
    
    // Handle youtube.com URLs with v parameter
    if (urlObj.hostname.includes("youtube.com")) {
      const id = urlObj.searchParams.get("v");
      return id && id.length === 11 ? id : null;
    }
  } catch {
    // If URL parsing fails, try regex
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  }

  return null;
}

/**
 * Generates YouTube thumbnail URL for a given video ID and quality
 * @param videoId - The YouTube video ID
 * @param filename - The thumbnail filename (e.g., 'maxresdefault.jpg')
 * @returns The thumbnail URL
 */
export function getThumbnailUrl(videoId: string, filename: string): string {
  return `https://i.ytimg.com/vi/${videoId}/${filename}`;
}

/**
 * Downloads an image from a URL
 * @param imageUrl - The URL of the image to download
 * @param filename - The filename to save as
 */
export async function downloadImage(imageUrl: string, filename: string): Promise<void> {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
  } catch (error) {
    // Fallback: open in new tab
    window.open(imageUrl, '_blank');
    throw error;
  }
}
