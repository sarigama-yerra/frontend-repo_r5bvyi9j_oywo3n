import { motion } from 'framer-motion';
import { Brain, Network, Sparkles, LineChart, Bot, Cpu } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'AI‑assisted quality',
    desc: 'Vision + ML to detect defects, trends, and drift in real time.'
  },
  {
    icon: Network,
    title: 'Predictive orchestration',
    desc: 'Schedule and balance lines using demand, WIP, and constraint signals.'
  },
  {
    icon: Bot,
    title: 'Cobot intelligence',
    desc: 'Safer, smarter collaboration with force sensing and adaptive paths.'
  },
  {
    icon: LineChart,
    title: 'KPI copilots',
    desc: 'Natural‑language insights on throughput, scrap, and OEE.'
  },
  {
    icon: Cpu,
    title: 'Edge inference',
    desc: 'Deploy tiny models to PLC gateways for low‑latency decisions.'
  },
  {
    icon: Sparkles,
    title: 'Automation templates',
    desc: 'Reusable blocks accelerate commissioning without lock‑in.'
  }
];

export default function AIShowcase() {
  return (
    <section id="ai" className="mx-auto mt-16 max-w-6xl px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-b from-violet-700/10 via-slate-900/60 to-slate-900/80 p-6 backdrop-blur"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">AI, built for the factory floor</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300/90">We pair proven automation with practical AI to make every station smarter—without adding complexity for operators or maintenance.</p>
          </div>
          <div className="text-sm text-slate-400">Private by design · On‑prem or cloud · PLC‑friendly</div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-violet-300">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/90">{it.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
