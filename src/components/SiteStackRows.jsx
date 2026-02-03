export default function SiteStackRows() {
  const rows = [
    { label: "Built with", name: "React", icon: "/logos/react.png" },
    { label: "Styled with", name: "TailwindCSS", icon: "/logos/css.png" },
    { label: "Deployed on", name: "Vercel", icon: "/logos/vercel.png" },
  ];

  return (
    <div className="space-y-1">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[140px_1fr] items-center gap-0">
          <div className="text-zinc-500 text-lg">{r.label}</div>

          <div className="flex items-center gap-3">
            <img
              src={r.icon}
              alt={r.name}
              className="h-6 w-6 opacity-60 grayscale brightness-125"
              loading="lazy"
            />
            <div className="text-zinc-400 text-lg">{r.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
