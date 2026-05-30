import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

export const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading
        label="About Me"
        title="Engineering Mindset, Builder's Heart"
        subtitle="Turning ideas into production-ready software"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-4 pt-4">
            <span className="inline-flex items-center gap-2 rounded-lg bg-dark-800 px-4 py-2 text-sm text-gray-300">
              <GraduationCap className="h-4 w-4 text-accent" />
              {profile.university}
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-dark-800 px-4 py-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {profile.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <Sparkles className="mb-3 h-5 w-5 text-cyan-glow" />
              <p className="font-mono text-xs uppercase tracking-wider text-gray-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-2 glass-card p-6 font-mono text-sm"
          >
            <p className="text-gray-500">// current_focus</p>
            <p className="mt-2 text-accent-light">
              const passion = [&apos;DSA&apos;, &apos;Full-Stack&apos;, &apos;ML&apos;, &apos;Systems&apos;];
            </p>
            <p className="mt-1 text-gray-400">passion.forEach(skill =&gt; master(skill));</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
