'use client';

import { cn } from '@/app/components/lib/utils';

export default function LoadingSpinner({
  fullScreen = false,
  className = ''
}: {
  fullScreen?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(
      'flex items-center justify-center',
      fullScreen ? 'h-screen w-screen' : 'h-full w-full',
      className
    )}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}