import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-mist">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-charcoal hover:text-electric transition-colors"
        >
          Sharni Brar
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-electric transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
          href="https://wa.me/918360207029"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-electric px-5 py-2 text-sm font-semibold text-white hover:bg-electric/90 transition-colors"
        >
          Let's talk
        </a>
        {/* Mobile: simple link fallback, no JS menu needed for a 5-page site */}
        
          href="https://wa.me/918360207029"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center rounded-full bg-electric px-4 py-2 text-xs font-semibold text-white"
        >
          Contact
        </a>
      </div>
      <nav className="md:hidden flex gap-6 overflow-x-auto px-6 pb-3 -mt-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-charcoal/70 hover:text-electric transition-colors whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
