/**
 * Extracts a YouTube video ID from various YouTube URL formats
 * @param url - The YouTube URL to parse
 * @returns The video ID or null if not found
 */
export function extractVideoID(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const getIdFromPath = (path: string): string | null => {
    const segments = path.split("/").filter(Boolean);

    // Supports /shorts/{id}, /live/{id}, /embed/{id}, /v/{id}
    const markerIndex = segments.findIndex((segment) =>
      ["shorts", "live", "embed", "v"].includes(segment)
    );

    if (markerIndex !== -1 && segments[markerIndex + 1]) {
      const candidate = segments[markerIndex + 1];
      return candidate.length === 11 ? candidate : null;
    }

    // Supports youtu.be/{id} and fallback to last path segment
    const lastSegment = segments[segments.length - 1];
    return lastSegment && lastSegment.length === 11 ? lastSegment : null;
  };

  try {
    // Support links pasted without protocol
    const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

    // Try URL parsing first
    const urlObj = new URL(normalized);
    const host = urlObj.hostname.toLowerCase();
    
    // Handle youtu.be short URLs
    if (host === "youtu.be" || host.endsWith(".youtu.be")) {
      return getIdFromPath(urlObj.pathname);
    }
    
    // Handle youtube.com (including m./music./www.) URLs
    if (host === "youtube.com" || host.endsWith(".youtube.com")) {
      const id = urlObj.searchParams.get("v");
      if (id && id.length === 11) {
        return id;
      }

      return getIdFromPath(urlObj.pathname);
    }
  } catch {
    // If URL parsing fails, try regex
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/|live\/|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = trimmed.match(regExp);
    return match?.[1] ?? null;
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
