import Nav from './components/Nav';
import Hero from './components/Hero';
import Intro from './components/Intro';
import AIShowcase from './components/AIShowcase';
import Copy from './components/Copy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />
      <Hero />
      <main>
        <Intro />
        <AIShowcase />
        <section id="copy">
          <Copy />
        </section>
        <Contact />
      </main>
      <footer className="mx-auto mt-20 max-w-6xl px-6 py-12 text-sm text-slate-400">
        © {new Date().getFullYear()} SmartQuantum Solutions Kft. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
