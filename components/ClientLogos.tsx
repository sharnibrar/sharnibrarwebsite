const clients = ["T-Series", "White Hill Music", "Young Nation Studios", "Apna Punjab"];

export default function ClientLogos() {
  return (
    <section className="border-y border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="reveal text-center text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-6">
          Trusted by
        </p>
        <div className="reveal flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <span
              key={name}
              className="font-display text-base md:text-lg text-charcoal/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
