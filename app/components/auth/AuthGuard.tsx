// components/auth/AuthGuard.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, type AuthUser, fetchAuthSession } from 'aws-amplify/auth';
import toast from 'react-hot-toast';
import LoadingSpinner from '../ui/LoadingSpinner';

type AuthGuardProps = {
  children: React.ReactNode;
  requiredRoles?: string[];
  onUnauthenticated?: () => void;
};

export default function AuthGuard({ 
  children, 
  requiredRoles = [], 
  onUnauthenticated 
}: AuthGuardProps) {
  const router = useRouter();
  const [authState, setAuthState] = useState<'loading' | 'authenticated' | 'unauthorized'>('loading');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        
        // If no roles required, just verify authentication
        if (requiredRoles.length === 0) {
          setAuthState('authenticated');
          return;
        }

        // For role checking, you'll need to implement your own logic
        const hasRequiredRole = await checkUserRoles(user, requiredRoles);
        
        if (hasRequiredRole) {
          setAuthState('authenticated');
        } else {
          setAuthState('unauthorized');
          onUnauthenticated?.();
          toast.error('You do not have permission to access this page');
          router.replace('/');
        }

      } catch (error) {
        console.error('Authentication check failed:', error);
        setAuthState('unauthorized');
        onUnauthenticated?.();
        toast.error('Please login to access this page');
        router.replace('/login');
      }
    };

    checkAuth();
  }, [router, requiredRoles, onUnauthenticated]);

  if (authState === 'loading') {
    return <LoadingSpinner fullScreen />;
  }

  if (authState === 'unauthorized') {
    return null; // or a custom unauthorized component
  }

  return <>{children}</>;
}

// Implement your own role checking logic
async function checkUserRoles(user: AuthUser, requiredRoles: string[]): Promise<boolean> {
  // You would typically call an API endpoint that checks the user's groups
  const response = await fetch('/api/check-roles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await fetchAuthSession()).tokens?.accessToken}`
    },
    body: JSON.stringify({ requiredRoles })
  });
  
  const data = await response.json();
  return data.hasAccess;
}