import dynamic from 'next/dynamic';
const AuthGuard = dynamic(() => import('@/app/components/auth/AuthGuard'), { ssr: false });

export default function Dashboard() {
  return (
    <AuthGuard>
      <div className="p-4">
        <h1>Dashboard 🧠</h1>
      </div>
    </AuthGuard>
  );
}
