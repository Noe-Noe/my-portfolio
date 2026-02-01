import { useMemo, useState } from "react";
import GlassCard from "../components/GlassCard";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      const matchesTag = tag === "All" || p.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [q, tag]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-zinc-300/80">
          A small museum of things I’ve built. Search, filter, click around.
        </p>
      </div>

      <GlassCard className="p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects (name, tags, description)…"
            className="w-full md:w-[58%] rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-white/20"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full md:w-[40%] rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-white/20"
          >
            {allTags.map((t) => (
              <option key={t} value={t} className="bg-zinc-950">
                {t}
              </option>
            ))}
          </select>
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-sm text-zinc-400">No projects match that search.</div>
      )}
    </div>
  );
}
