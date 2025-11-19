import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden rounded-b-[2rem] bg-slate-950">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient tint for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-100 backdrop-blur">
          SmartQuantum Solutions Kft.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Intelligent automation for next‑generation manufacturing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 max-w-3xl text-base text-slate-200/90 sm:text-lg">
          We design, program, and integrate industrial systems—seamlessly connecting shop‑floor automation with ERP to unlock efficiency, quality, and agility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#intro" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md">
            Explore our approach
          </a>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Talk to an expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
