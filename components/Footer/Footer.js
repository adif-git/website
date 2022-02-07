import React from 'react';
import { useRouter } from 'next/router';
export default function Footer() {
  const router = useRouter();

  return (
    <div
      className={`w-full h-18 px-20 py-7 ${
        router.pathname === '/'
          ? 'bg-slate-900 text-slate-500 border-t-2 border-slate-800'
          : 'bg-slate-300 text-slate-500'
      }`}
    >
      <p className="font-bold text-lg text-right">Created by: Adif, 2022</p>
    </div>
  );
}
