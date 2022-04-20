import Image from 'next/image';
import style from '@/styles/loading.module.css';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-sky-800 to-blue-800 w-screen h-screen">
      <div className="animate-bounce opacity-80">
        <Image
          src="/White-TP.svg"
          alt="..."
          width={200}
          height={200}
          objectFit="scale-down"
        />
      </div>
      <p className="pt-3 md:pt-5 opacity-80 text-center text-5xl font-bold text-slate-50 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
