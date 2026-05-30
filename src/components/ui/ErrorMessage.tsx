import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => (
  <div className="glass-card flex flex-col items-center gap-4 p-8 text-center">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
      <AlertCircle className="h-7 w-7 text-red-400" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">Failed to load</h3>
      <p className="mt-2 max-w-md text-sm text-gray-400">{message}</p>
    </div>
    {onRetry && (
      <Button variant="secondary" onClick={onRetry}>
        <RefreshCw className="h-4 w-4" />
        Try Again
      </Button>
    )}
  </div>
);
