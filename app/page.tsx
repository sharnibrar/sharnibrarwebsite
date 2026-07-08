import Link from "next/link";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { projects, categories } from "@/data/projects";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <ClientLogos />

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.2em] text-electric font-semibold mb-3">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-5">
              3 years turning ideas into visuals that land.
            </h2>
            <div className="ice-divider mb-5" />
            <p className="text-charcoal/60 text-base md:text-lg mb-6">
              I've spent the last three years designing posters and visuals
              for Punjabi music's biggest names — from single-artist
              releases to campaigns with T-Series, White Hill Music and Young
              Nation Studios. What started as a childhood love for making
              things has turned into a full creative practice across design,
              video and AI visuals.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold text-electric hover:underline underline-offset-4"
            >
              Read the full story →
            </Link>
          </div>
          <div className="reveal aspect-square rounded-2xl bg-ink flex items-center justify-center overflow-hidden">
            <img
              src="/logo-hero.jpg"
              alt="Sharni Brar wordmark"
              className="w-3/4 h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-white py-24 border-y border-mist">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A quick look at the categories of work I do — full case studies live in the portfolio."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="reveal group rounded-xl overflow-hidden border border-mist bg-paper"
              >
                <div className="aspect-[4/5] bg-ink/5 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-electric font-semibold mb-1">
                    {project.category}
                  </p>
                  <p className="font-display text-lg text-charcoal">
                    {project.title}
                  </p>
                  {project.client && (
                    <p className="text-sm text-charcoal/50">{project.client}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
            >
              See all {categories.length} categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="What I do"
          title="Services"
          description="From a single poster to a full video edit — here's what I can take off your plate."
          align="center"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal rounded-xl border border-mist p-6 hover:border-electric/40 transition-colors"
            >
              <p className="font-display text-lg text-charcoal mb-2">
                {service.title}
              </p>
              <p className="text-sm text-charcoal/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="reveal font-display text-3xl md:text-4xl mb-4">
            Have a release coming up?
          </h2>
          <p className="reveal text-white/60 max-w-xl mx-auto mb-8">
            Send me the details on WhatsApp and I'll get back to you with a
            price and timeline — usually within a day.
          </p>
          
            href="https://wa.me/918360207029"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold hover:bg-electric/90 transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
