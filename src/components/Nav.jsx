import { Menu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow-lg shadow-sky-500/20"
            >
              <Sparkles className="h-5 w-5" />
            </motion.span>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-white">SmartQuantum</span>
            <span className="block text-[11px] text-slate-300">Solutions Kft.</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#intro" className="hover:text-white">Services</a>
          <a href="#ai" className="hover:text-white">AI</a>
          <a href="#copy" className="hover:text-white">About</a>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur hover:bg-white/20">Talk to us</a>
        </nav>
        <button className="md:hidden rounded-lg border border-white/15 p-2 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
