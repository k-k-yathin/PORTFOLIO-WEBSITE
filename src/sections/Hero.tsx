import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

export const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
  >
    <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
    <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[128px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-glow/10 blur-[100px] animate-pulse-slow" />

    <div className="section-container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent-light">
          <Terminal className="h-3.5 w-3.5" />
          {profile.degree} @ {profile.university}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 text-center text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span className="block text-gray-400 text-lg sm:text-xl font-medium mb-4 font-mono">
          Hi, I&apos;m
        </span>
        <span className="gradient-text">{profile.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-400 sm:text-xl"
      >
        {profile.role}
        <span className="mt-2 block text-base text-gray-500">{profile.tagline}</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </Button>
        <Button
          variant="secondary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex justify-center gap-6"
      >
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors hover:text-accent-light"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors hover:text-accent-light"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 0.8, y: { repeat: Infinity, duration: 2 } }}
        className="mt-20 flex justify-center"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-accent-light"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </div>
  </section>
);
