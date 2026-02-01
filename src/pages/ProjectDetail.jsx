import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import { projects } from "../data/portfolio";


function SectionTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );
const [activeShot, setActiveShot] = useState(null);

// Close on ESC + lock background scroll when modal is open
useEffect(() => {
  if (!activeShot) return;

  const onKeyDown = (e) => {
    if (e.key === "Escape") setActiveShot(null);
  };

  document.addEventListener("keydown", onKeyDown);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", onKeyDown);
    document.body.style.overflow = prevOverflow;
  };
}, [activeShot]);

  if (!project) {
    return (
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="text-zinc-300/80">
          That link doesn’t match any project in your portfolio data.
        </p>
        <Link className="underline text-zinc-200" to="/projects">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-5">
  <Link
    className="inline-block text-sm text-zinc-400 hover:text-white transition"
    to="/projects"
  >
    ← Back to Projects
  </Link>

  <div className="flex flex-wrap items-center gap-2 pt-1">
    {project.status && (
      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200">
        {project.status}
      </span>
    )}
    {project.role && (
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
        {project.role}
      </span>
    )}
    {project.timeline && (
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
        {project.timeline}
      </span>
    )}
  </div>

  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
    {project.name}
  </h1>

  <p className="max-w-3xl text-zinc-300/80">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-2 pt-1">
    {(project.tags || []).map((t) => (
      <span
        key={t}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
      >
        {t}
      </span>
    ))}
  </div>

  <div className="flex flex-wrap gap-3 pt-2">
    {project.demoUrl && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition"
      >
        Open Live Demo →
      </a>
    )}

    {project.repoUrl ? (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-white/5 px-4 py-2 hover:bg-white/10 transition"
      >
        View GitHub Repo
      </a>
    ) : (
      <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
        Repo: Private
      </span>
    )}
  </div>
</div>

{project.about && (
  <GlassCard className="p-6">
    <SectionTitle>About the Project</SectionTitle>
    <p className="mt-2 text-zinc-300/80">
      {project.about}
    </p>
  </GlassCard>
)}
    
    {/* Overview (Problem + Solution only when both exist) */}
{project.problem && project.solution && (
  <div className="grid gap-4 md:grid-cols-2">
    <GlassCard className="p-6">
      <SectionTitle>Problem</SectionTitle>
      <p className="mt-2 text-zinc-300/80">
        {project.problem}
      </p>
    </GlassCard>

    <GlassCard className="p-6">
      <SectionTitle>Solution</SectionTitle>
      <p className="mt-2 text-zinc-300/80">
        {project.solution}
      </p>
    </GlassCard>
  </div>
)}




      {/* Features */}
      <GlassCard className="p-6">
        <SectionTitle>Key Features</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300/85">
          {(project.features || project.highlights || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </GlassCard>

      {/* Tech */}
      <GlassCard className="p-6">
        <SectionTitle>Tech Stack</SectionTitle>
        <div className="mt-3 flex flex-wrap gap-2">
          {(project.stack || []).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              {s}
            </span>
          ))}
        </div>
      </GlassCard>

      {/* Roadmap */}
      {project.roadmap?.length > 0 && (
        <GlassCard className="p-6">
          <SectionTitle>Roadmap</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300/85">
            {project.roadmap.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </GlassCard>
      )}

      {/* Media (screenshots / demo) */}
{project.screenshots?.length > 0 && (
  <GlassCard className="p-6">
    <SectionTitle>{project.mediaLabel || "Screenshots"}</SectionTitle>

    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {project.screenshots.map((shot) => {
        const isVideo = shot.type === "video";
        const isYouTube = shot.type === "youtube";

        return (
          <div
            key={shot.src}
            className={[
              "overflow-hidden rounded-2xl border border-white/10 bg-white/5",
              isVideo || isYouTube ? "md:col-span-2" : "",
            ].join(" ")}
          >
            {isYouTube ? (
  <div className="aspect-video w-full">
    <iframe
      className="h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/Ublroq4tSNY`}
      title={shot.caption || `${project.name} demo video`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
) : isVideo ? (
  <video
    src={shot.src}
    controls
    playsInline
    preload="metadata"
    className="w-full h-auto"
  />
) : (
  <button
    type="button"
    onClick={() => setActiveShot(shot)}
    className="group w-full text-left focus:outline-none focus:ring-2 focus:ring-white/20"
    title="Click to zoom"
  >
    <img
      src={shot.src}
      alt={shot.alt || `${project.name} screenshot`}
      className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      loading="lazy"
    />
  </button>
)}


            {shot.caption && (
              <div className="px-4 py-3 text-sm text-zinc-300/80">
                {shot.caption}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </GlassCard>
)}

{/* Zoom Modal */}
{activeShot && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Screenshot preview"
  >
    {/* Backdrop */}
    <button
      type="button"
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={() => setActiveShot(null)}
      aria-label="Close preview"
    />

    {/* Modal content */}
    <div className="relative z-10 w-full max-w-5xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm text-zinc-200">
              {activeShot.caption || project.name}
            </p>
            <p className="text-xs text-zinc-500">Press Esc to close</p>
          </div>

          <button
            type="button"
            onClick={() => setActiveShot(null)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 hover:bg-white/10 transition"
          >
            Close
          </button>
        </div>

        <div className="max-h-[80vh] overflow-auto">
          <img
            src={activeShot.src}
            alt={activeShot.alt || `${project.name} screenshot`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
