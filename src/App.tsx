import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
