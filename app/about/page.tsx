import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ClientLogos from "@/components/ClientLogos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sharni Brar's story — 3 years designing posters, AI visuals and video edits for Punjabi music artists and labels.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
        <SectionHeading eyebrow="About" title="Hi, I'm Sharni." />
        <div className="reveal space-y-5 text-charcoal/70 text-base md:text-lg leading-relaxed">
          <p>
            I've been a graphic designer and video creator for over three
            years now, and it started long before that — I was always the
            kid who loved making things, and that love for creativity and
            design never really left.
          </p>
          <p>
            Today I design posters, AI visuals, and edit music videos for
            artists and labels in the Punjabi music industry. My work has
            appeared in releases for artists like{" "}
            <strong className="text-charcoal">Varinder Brar</strong> (
            <em>911</em>), <strong className="text-charcoal">The Landers</strong> (
            <em>Fire Hasdi</em> — AI visuals), and{" "}
            <strong className="text-charcoal">Sabhi Bhinder</strong> (
            <em>Jatt Nahi Dekhya</em>), and I've collaborated with labels
            including T-Series, White Hill Music, Young Nation Studios, and
            Apna Punjab.
          </p>
          <p>
            What I care about most is making visuals that actually match the
            energy of the track or the artist — not just something that
            looks nice in isolation. That means paying close attention to
            typography, color, and pacing, and increasingly, exploring what's
            possible with AI-assisted visuals as a new tool in that process.
          </p>
        </div>
      </section>
      <ClientLogos />
    </>
  );
}
