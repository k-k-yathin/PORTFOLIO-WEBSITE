import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent to-indigo-600 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40',
  secondary:
    'border border-white/10 bg-dark-800/80 text-gray-200 hover:border-accent/50 hover:bg-dark-700',
  ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
};

export const Button = ({
  children,
  variant = 'primary',
  href,
  external,
  className = '',
  ...props
}: ButtonProps) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} {...props}>
      {children}
    </motion.button>
  );
};
