"use client";

import { useState } from "react";
import { projects, categories, Project } from "@/data/projects";

export default function PortfolioGrid() {
  const [active, setActive] = useState<Project["category"] | "All">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-electric text-white"
                : "bg-paper border border-mist text-charcoal/70 hover:border-electric/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden border border-mist bg-white"
          >
            <div className="aspect-video bg-ink/5">
              {project.videoEmbed ? (
                <iframe
                  src={project.videoEmbed}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-electric font-semibold mb-1">
                {project.category}
              </p>
              <p className="font-display text-lg text-charcoal">
                {project.title}
              </p>
              {project.client && (
                <p className="text-sm text-charcoal/50 mb-2">{project.client}</p>
              )}
              {project.link && (
                
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-electric hover:underline underline-offset-4"
                >
                  View on Instagram →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal/50 mt-12">
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
