// app/404.tsx or app/not-found.tsx

'use client'; 

import { useEffect } from 'react';

export default function NotFoundPage() {


  useEffect(() => {
    console.log('404 page loaded');
  }, []);

  return (
    <div className="text-white text-center pt-10">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
