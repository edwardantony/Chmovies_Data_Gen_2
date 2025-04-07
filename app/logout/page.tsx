// app/logout/page.tsx
import dynamic from 'next/dynamic';

const Logout = dynamic(() => import('@/app/components/auth/AuthSignout'), {
  ssr: true,
});

export default function LogoutPage() {
  return <Logout />;
}
