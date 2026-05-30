import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Code2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="border-t border-white/5 bg-dark-900/30 py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          subtitle="Open to internships, collaborations, and interesting problem spaces"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-400 leading-relaxed">
              Whether you want to discuss a project, DSA strategies, or opportunities at VIT-AP and
              beyond—I&apos;d love to hear from you. Drop a message or connect on socials.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="glass-card flex items-center gap-4 p-6 transition-colors hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Mail className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-white">{profile.email}</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex flex-1 items-center justify-center gap-2 p-4 transition-colors hover:border-accent/30"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex flex-1 items-center justify-center gap-2 p-4 transition-colors hover:border-accent/30"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={profile.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex flex-1 items-center justify-center gap-2 p-4 transition-colors hover:border-accent/30"
              >
                <Code2 className="h-5 w-5" />
                LeetCode
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-dark-900 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-dark-900 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-dark-900 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent/50"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <Button type="submit" className="w-full">
              {submitted ? 'Message Sent!' : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
            {submitted && (
              <p className="text-center text-sm text-green-400">
                Thanks! This demo form doesn&apos;t send email yet—connect via mail or LinkedIn.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
