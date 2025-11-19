import { motion } from 'framer-motion';

export default function Copy() {
  return (
    <section className="relative mx-auto mt-16 max-w-5xl px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="prose prose-invert max-w-none"
      >
        <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">Corporate introduction</h2>
        <p className="text-slate-300/95">
          At SmartQuantum Solutions Kft., we help automotive manufacturers turn complex production into a competitive advantage. Our team blends control engineering, software, and data to program machines, orchestrate production lines, and integrate ERP—so every station communicates, adapts, and improves.
        </p>
        <p className="text-slate-300/95">
          Whether you are launching a new line or upgrading legacy equipment, we deliver customized solutions that fit your standards and timelines. We speak PLC, MES, and cloud—and translate that into reliable, maintainable systems with clear documentation and measurable KPIs.
        </p>
        <p className="text-slate-300/95">
          Innovation is practical for us: modular architectures, reusable libraries, and modern DevOps for the factory floor. Combined with disciplined project management, this ensures on‑time commissioning, safe ramp‑up, and predictable performance.
        </p>
        <p className="text-slate-300/95">
          With international project experience and a commitment to sustainability, we design automation that saves energy, reduces waste, and scales with your ambitions. Let’s build the next generation of intelligent, efficient manufacturing—together.
        </p>
      </motion.div>
    </section>
  );
}
