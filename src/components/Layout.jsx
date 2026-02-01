import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-40 -right-35 h-105 w-105 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-5xl px-6 pb-16 pt-10">
        {children}
      </main>

      <footer id="contact" className="relative mx-auto max-w-5xl px-6 pb-14">
        <div className="border-t border-white/10 pt-8 text-sm text-zinc-400">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Thet Myat Noe</span>
            <span className="text-zinc-500">Built with React + Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
