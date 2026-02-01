import { NavLink } from "react-router-dom";
import GlassCard from "./GlassCard";

const base =
  "rounded-xl px-3 py-2 text-sm transition hover:bg-white/10";
const active = "bg-white/10 text-white";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 pt-5">
      <div className="mx-auto max-w-5xl px-6">
        <GlassCard className="px-3 py-3">
          <div className="flex items-center justify-between gap-4">
            <NavLink to="/" className="px-3 py-2 font-semibold tracking-tight">
              Thet<span className="text-zinc-400">.portfolio</span>
            </NavLink>

            <div className="flex items-center gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "text-zinc-300"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "text-zinc-300"}`
                }
              >
                Projects
              </NavLink>
               <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `${base} ${isActive ? active : "text-zinc-300"}`
            }
            >
                Contact
            </NavLink>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
