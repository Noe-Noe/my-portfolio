import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GlassCard from "./GlassCard";
import { profile } from "../data/portfolio";
import { FiMenu, FiX } from "react-icons/fi";

const base = "rounded-xl px-3 py-2 text-sm transition hover:bg-white/10";
const active = "bg-white/10 text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close menu when you change route (click link)
  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-50 pt-3 sm:pt-5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <GlassCard className="px-3 py-3">
          <div className="flex items-center justify-between gap-3">
            <NavLink
              to="/"
              onClick={close}
              className="px-3 py-2 font-semibold tracking-tight shrink-0"
            >
              Thet<span className="text-zinc-400">.portfolio</span>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-2">
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

              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="
                  px-3 py-1.5 rounded-lg
                  text-sm font-medium
                  bg-emerald-500/10 text-emerald-400
                  border border-emerald-500/20
                  hover:bg-emerald-500/20 hover:text-emerald-300
                  transition
                "
              >
                Resume
              </a>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-200 hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="sm:hidden mt-3 border-t border-white/10 pt-3">
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  end
                  onClick={close}
                  className={({ isActive }) =>
                    `${base} ${isActive ? active : "text-zinc-300"}`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/projects"
                  onClick={close}
                  className={({ isActive }) =>
                    `${base} ${isActive ? active : "text-zinc-300"}`
                  }
                >
                  Projects
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={close}
                  className={({ isActive }) =>
                    `${base} ${isActive ? active : "text-zinc-300"}`
                  }
                >
                  Contact
                </NavLink>

                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="
                    mt-1
                    rounded-xl px-3 py-2 text-sm font-medium
                    bg-emerald-500/10 text-emerald-400
                    border border-emerald-500/20
                    hover:bg-emerald-500/20 hover:text-emerald-300
                    transition
                  "
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
