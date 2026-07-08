export type Project = {
  id: string;
  title: string;
  client?: string;
  category: "Posters" | "AI Visuals" | "Video Edits" | "Logos";
  // For posters/logos: an Instagram post link + image.
  // For videos: a YouTube/Instagram video link, embedded directly.
  link?: string;
  image?: string; // path in /public or external URL
  videoEmbed?: string; // YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
};

/**
 * HOW TO UPDATE THIS FILE:
 * 1. Add a new object to the array below for each project.
 * 2. category must be exactly one of: "Posters" | "AI Visuals" | "Video Edits" | "Logos"
 * 3. For a poster: set `image` (upload the file to /public/portfolio/ and reference it,
 *    e.g. "/portfolio/911-poster.jpg") and `link` to the Instagram post.
 * 4. For a video: set `videoEmbed` to the YouTube embed link, or `link` to the Instagram reel.
 * 5. Save the file, push to GitHub — Vercel updates the live site automatically.
 */
export const projects: Project[] = [
  {
    id: "varinder-brar-911",
    title: "911 — Poster & Graphics",
    client: "Varinder Brar",
    category: "Posters",
    image: "/portfolio/placeholder-poster.jpg",
    link: "https://www.instagram.com/sharnibrar20/",
  },
  {
    id: "landers-fire-hasdi",
    title: "Fire Hasdi — AI Visuals",
    client: "The Landers",
    category: "AI Visuals",
    image: "/portfolio/placeholder-poster.jpg",
    link: "https://www.instagram.com/sharnibrar20/",
  },
  {
    id: "sabhi-bhinder-jatt-nahi-dekhya",
    title: "Jatt Nahi Dekhya — Poster",
    client: "Sabhi Bhinder",
    category: "Posters",
    image: "/portfolio/placeholder-poster.jpg",
    link: "https://www.instagram.com/sharnibrar20/",
  },
  {
    id: "placeholder-video-edit",
    title: "Music Video Edit — sample project",
    category: "Video Edits",
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "placeholder-logo",
    title: "Artist Logo — sample project",
    category: "Logos",
    image: "/portfolio/placeholder-poster.jpg",
  },
];

export const categories: Project["category"][] = [
  "Posters",
  "AI Visuals",
  "Video Edits",
  "Logos",
];
