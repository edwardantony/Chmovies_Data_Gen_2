// app/dashboard/page.tsx
'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';

// Dynamically import AuthGuard with SSR and loading state
const AuthGuard = dynamic(
  () => import('@/app/components/auth/AuthGuard'),
  { 
    ssr: true,
    loading: () => <LoadingSpinner fullScreen /> 
  }
);

export default function DashboardPage() {
  return (
    <AuthGuard
      requiredRoles={['user']} // Optional role-based protection
      onUnauthenticated={() => {
        // Custom handling for unauthenticated users
        console.warn('Unauthenticated access attempt');
      }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard 🧠</h1>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Your Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dashboard content here */}
          </div>
        </section>
      </div>
    </AuthGuard>
  );
}