import GlassCard from "../components/GlassCard";

export default function Contact() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="text-zinc-300/80">
          Want to collaborate or hire? Reach out directly.
        </p>
      </div>

      {/* Contact card */}
      <GlassCard className="p-6">
        <div className="space-y-5">
          {/* Email */}
          <div>
            <div className="text-sm text-zinc-400">Email</div>
            <a
              href="mailto:thetmyatnoe.jp@gmail.com"
              className="text-lg text-white hover:underline"
            >
              thetmyatnoe.jp@gmail.com
            </a>
          </div>


          {/* Phone */}
          <div>
            <div className="text-sm text-zinc-400">Phone</div>
            <div className="space-y-1">
              <a
                href="tel:+6590252944"
                className="block text-lg hover:underline"
              >
                +65 9025 2944
              </a>
              <a
                href="tel:+95445044805"
                className="block text-lg hover:underline"
              >
                +95 4450 44805
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="thetmyatnoe.jp@gmail.com"
              className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition"
            >
              Email me
            </a>

            <a
              href="https://wa.me/6590252944"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-500/15 px-4 py-2 text-emerald-300 hover:bg-emerald-500/25 transition"
            >
              WhatsApp
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/5 px-4 py-2 hover:bg-white/10 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
