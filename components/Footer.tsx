import Link from "next/link";
import { socialLinks } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl mb-3">Sharni Brar</p>
          <p className="text-sm text-white/60 max-w-xs">
            Graphic Designer, Video Creator &amp; AI Visuals — building bold
            visual identities for artists, labels and brands.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/80 mb-3">
            Get in touch
          </p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              
                href="https://wa.me/918360207029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ice transition-colors"
              >
                WhatsApp: +91 83602-07029
              </a>
            </li>
            <li>
              
                href="mailto:sharnibrar20@gmail.com"
                className="hover:text-ice transition-colors"
              >
                sharnibrar20@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/80 mb-3">Explore</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href="/portfolio" className="hover:text-ice transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-ice transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ice transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          {socialLinks.length > 0 && (
            <div className="flex gap-4 mt-5">
              {socialLinks.map((s) => (
                
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-ice transition-colors underline underline-offset-4"
                >
                  {s.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Sharni Brar. All rights reserved.
      </div>
    </footer>
  );
}
