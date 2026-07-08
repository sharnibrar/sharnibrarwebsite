import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Posters, AI visuals, video edits and logo design by Sharni Brar — for artists and labels including T-Series and White Hill Music.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work"
        description="Filter by category to browse posters, AI visuals, video edits and logo design."
        align="center"
      />
      <PortfolioGrid />
    </section>
  );
}
