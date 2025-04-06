// app/videos/category/page.tsx
import Subscribers from "@/app/components/users/subscribers";
import ClientLayout from '../../ClientLayout';

export default function SubscribersList() {
  return (
    <ClientLayout>
       <Subscribers />
    </ClientLayout>
  );
  
}