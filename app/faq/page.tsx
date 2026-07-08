import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about pricing, turnaround time, and how to work with Sharni Brar.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        align="center"
      />
      <FaqAccordion />
    </section>
  );
}
