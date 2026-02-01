import { Link } from "react-router-dom";
import GlassCard from "./GlassCard";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <GlassCard className="p-5 hover:bg-white/10 transition">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          {project.featured && (
            <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-zinc-200">
              Featured
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-zinc-300/80">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </GlassCard>
    </Link>
  );
}
