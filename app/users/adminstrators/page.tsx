// app/videos/category/page.tsx
import Adminstrators from "@/app/components/users/adminstrators";
import ClientLayout from '../../ClientLayout';

export default function AdminstratorLists() {
  return (
    <ClientLayout>
      <Adminstrators />
    </ClientLayout>
  );
}