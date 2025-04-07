'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      await getCurrentUser();
    } catch {
      router.push('/login');
    }
  }

  return <>{children}</>;
}