import { motion } from "framer-motion";
import { profile, projects } from "../data/portfolio";
import GlassCard from "../components/GlassCard";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-5"
      >
        <p className="text-sm text-zinc-400">{profile.location}</p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-zinc-200/90">{profile.title}</p>
        <p className="max-w-2xl text-zinc-300/80">{profile.tagline}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          {/* <a className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition" href={profile.links.github}>
            GitHub
          </a> */}
          <a className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition" href={profile.links.linkedin}>
            LinkedIn
          </a>
          <a className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition" href={profile.links.email}>
            Email
          </a>
        </div>
      </motion.section>

      <section className="grid gap-4 md:grid-cols-2">
        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold">About</h2>
           <p className="mt-2 max-w-xl text-zinc-300/80">
            Full-stack developer with experience building web applications across frontend and backend, with experience translating requirements into system features, data models, and user flows through academic and personal projects.
          </p>




        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </GlassCard>
      </section>

      {featured.length > 0 && (
        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold">Featured</h2>
            <Link className="text-sm text-zinc-300 hover:text-white transition" to="/projects">
              View all →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
