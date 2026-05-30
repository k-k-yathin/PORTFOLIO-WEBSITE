import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({ message = 'Loading...' }: LoadingSpinnerProps) => (
  <div className="flex flex-col items-center justify-center gap-4 py-16">
    <motion.div
      className="h-12 w-12 rounded-full border-2 border-dark-600 border-t-accent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
    <p className="font-mono text-sm text-gray-500">{message}</p>
  </div>
);
