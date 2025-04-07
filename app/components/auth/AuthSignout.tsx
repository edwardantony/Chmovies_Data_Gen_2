'use client';

import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/app/components/lib/amplify-client.ts';
import toast from 'react-hot-toast';

export default function Logout() {
  const router = useRouter();
  const [status, setStatus] = useState<'logging-out' | 'error' | 'success'>('logging-out');

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Clear client-side data first
        localStorage.removeItem('authSession');
        sessionStorage.clear();
        
        // Then perform Amplify sign out
        await signOut({ global: true }); // Global signout across all tabs
        
        // Clear cookies if needed
        document.cookie.split(';').forEach(cookie => {
          const [name] = cookie.split('=');
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });

        setStatus('success');
        toast.success('Logged out successfully');
        router.replace('/login');
      } catch (error) {
        console.error('Logout error:', error);
        setStatus('error');
        toast.error('Logout failed. Please try again.');
        
        // Fallback redirect after delay
        setTimeout(() => router.replace('/login'), 3000);
      }
    };

    performLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-8 rounded-lg bg-gray-800 max-w-md w-full">
        {status === 'logging-out' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white text-lg">Logging out...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="text-red-500 text-4xl mb-4">✕</div>
            <p className="text-white text-lg">Logout failed</p>
            <p className="text-gray-400 mt-2">Redirecting to login page...</p>
          </>
        )}
      </div>
    </div>
  );
}