import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* ambient glow behind the logo, echoes the brand blue */}
      <div className="absolute inset-0 bg-hero-glow animate-glowPulse" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-center text-center">
        <p className="reveal text-xs tracking-[0.3em] uppercase text-ice/80 mb-6">
          Graphic Designer · Video Creator · AI Visuals
        </p>

        <div className="reveal w-full max-w-lg mb-6">
          <Image
            src="/logo-hero.jpg"
            alt="Sharni Brar"
            width={1800}
            height={1187}
            priority
            className="w-full h-auto"
          />
        </div>

        <p className="reveal max-w-xl text-white/70 text-base md:text-lg mb-10">
          Posters, AI visuals and music video edits for artists and labels —
          trusted by T-Series, White Hill Music, Young Nation Studios and
          Apna Punjab.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold hover:bg-electric/90 transition-colors"
          >
            View Portfolio
          </Link>
          
            href="https://wa.me/918360207029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold hover:border-ice hover:text-ice transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
