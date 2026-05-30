import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className="mb-12 text-center md:mb-16"
  >
    <span className="mb-3 inline-block font-mono text-sm font-medium uppercase tracking-widest text-accent-light">
      {label}
    </span>
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>}
  </motion.div>
);
