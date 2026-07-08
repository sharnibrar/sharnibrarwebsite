import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Poster design, AI visuals, music video editing, reels, logo design and album art by Sharni Brar.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <SectionHeading
        eyebrow="Services"
        title="What I offer"
        description="Every project starts with a conversation — message me for a custom quote based on your scope and timeline."
        align="center"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="reveal rounded-xl border border-mist p-7 hover:border-electric/40 transition-colors"
          >
            <p className="font-display text-xl text-charcoal mb-3">
              {service.title}
            </p>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="reveal text-center mt-16 rounded-2xl bg-ink text-white py-14 px-6">
        <p className="font-display text-2xl md:text-3xl mb-3">
          Contact for pricing
        </p>
        <p className="text-white/60 mb-7 max-w-lg mx-auto">
          Every project is quoted based on scope, timeline and deliverables —
          message me on WhatsApp or email for a quote.
        </p>
        
          href="https://wa.me/918360207029"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold hover:bg-electric/90 transition-colors"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}
