import { useState } from "react";

const ITEMS = [
  {
    title: "Web Development",
    bullets: [
      "Single Page Applications",
      "landing pages and business websites",
      "Portfolio websites",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    bullets: [
      "Wireframing and prototyping",
      "User flows and interaction design",
      "Usability-focused layouts",
    ],
  },
  {
    title: "Business Analysis",
    bullets: [
      "Translate requirements into system features",
      "Data models and basic process flows",
      "Supporting documentation and analysis",
      "Bridge business needs and technical work",
    ],
  },
];

function Arrow({ open }) {
  return (
    <span
      className={[
        "text-zinc-400 transition-transform duration-200",
        open ? "rotate-90" : "rotate-0",
      ].join(" ")}
      aria-hidden="true"
    >
      ▸
    </span>
  );
}

export default function WhatIDo() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="h-full">
      <h3 className="mb-4 text-sm font-semibold text-zinc-200">
        What I do ?
      </h3>

      <div className="space-y-3">
        {ITEMS.map((item, idx) => {
          const open = idx === openIndex;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-white/5 transition"
              >
                <Arrow open={open} />
                <span className="text-sm font-medium text-zinc-100">
                  {item.title}
                </span>
              </button>

              {open && (
                <div className="px-5 pb-4">
                  <ul className="mt-1 list-disc pl-5 space-y-1.5 text-sm text-zinc-300/90">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
