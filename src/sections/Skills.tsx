import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/profile';

export const Skills = () => (
  <section id="skills" className="border-y border-white/5 bg-dark-900/30 py-24 md:py-32">
    <div className="section-container">
      <SectionHeading
        label="Skills"
        title="Tech Stack & Expertise"
        subtitle="Tools and technologies I use to ship real-world applications"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-card group p-6 transition-colors hover:border-accent/20"
          >
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-accent-light">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default rounded-lg bg-dark-700 px-3 py-1.5 text-sm text-gray-300 transition-colors group-hover:bg-dark-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
