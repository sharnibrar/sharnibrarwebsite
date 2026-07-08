import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sharni Brar via WhatsApp or email to start a project.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 text-center">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Send a message with what you need, your timeline, and any references — I'll reply with a quote."
        align="center"
      />

      <div className="reveal grid sm:grid-cols-2 gap-6 mt-4">
        
          href="https://wa.me/918360207029"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-mist p-8 hover:border-electric/50 transition-colors"
        >
          <p className="font-display text-xl text-charcoal mb-2">WhatsApp</p>
          <p className="text-sm text-charcoal/60 mb-4">
            Fastest way to reach me — call or message.
          </p>
          <p className="text-electric font-semibold">+91 83602-07029</p>
        </a>

        
          href="mailto:sharnibrar20@gmail.com"
          className="rounded-2xl border border-mist p-8 hover:border-electric/50 transition-colors"
        >
          <p className="font-display text-xl text-charcoal mb-2">Email</p>
          <p className="text-sm text-charcoal/60 mb-4">
            For detailed briefs or file sharing.
          </p>
          <p className="text-electric font-semibold">sharnibrar20@gmail.com</p>
        </a>
      </div>
    </section>
  );
}
