import { motion } from 'framer-motion';
import { Zap, Cog, Layers, Globe2, Leaf, ShieldCheck } from 'lucide-react';

export default function Intro() {
  return (
    <section id="intro" className="relative mx-auto -mt-12 max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl md:p-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
          >
            Modern, reliable, and tailored automation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-200/90"
          >
            SmartQuantum Solutions Kft. specializes in automation and industrial machine programming for the automotive sector. We align production technology with business systems to create intelligent, efficient manufacturing—delivered with a partnership mindset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <Feature icon={Zap} title="ERP integration">
              Connect MES, PLC, and ERP in real time for traceability, scheduling, and analytics.
            </Feature>
            <Feature icon={Cog} title="Production line setup">
              From concept to commissioning—robots, vision, PLC/HMI, and safety.
            </Feature>
            <Feature icon={Layers} title="Project management">
              End‑to‑end delivery with risk control, documentation, and stakeholder alignment.
            </Feature>
            <Feature icon={ShieldCheck} title="Reliability by design">
              Robust architectures, tested fail‑safes, and secure data handling.
            </Feature>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-6"
          >
            <div className="flex items-start gap-3">
              <Globe2 className="h-5 w-5 text-sky-300" />
              <div>
                <h3 className="text-sm font-semibold text-white">International experience</h3>
                <p className="mt-1 text-sm text-slate-300/90">
                  Cross‑border delivery across EU manufacturing, supplier standards, and audits.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <Leaf className="h-5 w-5 text-emerald-300" />
              <div>
                <h3 className="text-sm font-semibold text-white">Sustainability built‑in</h3>
                <p className="mt-1 text-sm text-slate-300/90">
                  Energy‑aware controls, waste reduction, and lifecycle optimization as defaults.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/90">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-300/90">{children}</p>
        </div>
      </div>
    </div>
  );
}
