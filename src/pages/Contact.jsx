import GlassCard from "../components/GlassCard";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile} from "../data/portfolio";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";


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
              href={profile.links.email}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-zinc-200"
              aria-label="Email"
            >
              <FiMail className="text-lg" />
            </a>

            <a
            href={profile.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-zinc-200"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
          </a>

            <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-zinc-200"
            aria-label="Resume"
          >
            <FiFileText className="text-lg text-zinc-200" />
          </a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
