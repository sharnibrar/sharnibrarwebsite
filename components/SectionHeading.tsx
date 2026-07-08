export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-electric font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
        {title}
      </h2>
      <div className={`ice-divider mb-4 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className="text-charcoal/60 text-base md:text-lg">{description}</p>
      )}
    </div>
  );
}
