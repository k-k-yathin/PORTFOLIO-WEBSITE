import { SkillCategory } from '@/types';

export const profile = {
  name: 'K K YATHIN',
  shortName: 'YATHIN',
  role: 'Full-Stack Developer & CS Student',
  university: 'VIT-AP University',
  degree: 'B.Tech Computer Science & Engineering',
  tagline:
    'I build scalable web applications, solve complex problems with DSA, and explore the frontiers of machine learning.',
  email: 'yathin.kk@example.com',
  location: 'Andhra Pradesh, India',
  social: {
    github: 'https://github.com/k-k-yathin',
    linkedin: 'https://linkedin.com/in/yathin-kk',
    leetcode: 'https://leetcode.com/u/k_k_yathin/',
  },
  about: [
    "I'm a Computer Science Engineering student at VIT-AP University with a deep passion for building software that makes a real impact. From architecting full-stack systems to grinding LeetCode problems, I thrive at the intersection of engineering craft and algorithmic thinking.",
    'My journey spans building DeckForge—a production-grade deck management platform with Go, React, TypeScript, PostgreSQL, and Docker—and crafting a Discipline Tracker that helps students build lasting habits with React and local-first storage.',
    'Beyond web development, I invest heavily in data structures & algorithms, computer science fundamentals, and machine learning. I believe great engineers combine strong theory with hands-on building—and that mindset drives everything I ship.',
  ],
  highlights: [
    { label: 'Focus', value: 'Full-Stack & Systems' },
    { label: 'Strength', value: 'DSA & Problem Solving' },
    { label: 'Exploring', value: 'ML & CS Theory' },
    { label: 'Status', value: 'Open to Opportunities' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    title: 'Backend & DevOps',
    skills: ['Node.js', 'Express', 'Go (Gin)', 'Docker', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'CS & ML',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'scikit-learn', 'NumPy'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'MongoDB', 'Mongoose', 'Postman', 'VS Code', 'Linux'],
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
