import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto mt-16 max-w-6xl px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-violet-900/30 p-6 backdrop-blur"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Speak with an engineer</h2>
            <p className="mt-2 max-w-xl text-slate-300/90">
              Tell us about your production goals and constraints. We’ll map a pragmatic path—from concept to commissioning—with clear milestones and measurable outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@smartquantum.hu?subject=Project%20inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
              >
                <Mail className="h-4 w-4" /> Email us
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" /> Schedule a call
              </a>
              <a
                href="tel:+3612345678"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> +36 1 234 5678
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
            <ul className="space-y-3 text-sm text-slate-300/90">
              <li>
                <span className="font-semibold text-white">Response time:</span> within 1 business day
              </li>
              <li>
                <span className="font-semibold text-white">Availability:</span> EU on‑site & remote
              </li>
              <li>
                <span className="font-semibold text-white">Languages:</span> EN, HU, DE
              </li>
              <li>
                <span className="font-semibold text-white">Engagements:</span> turnkey, T&M, consulting
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
