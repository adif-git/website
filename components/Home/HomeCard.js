import React from 'react';

export default function HomeCard({ content }) {
  return (
    <div className="flex justify-center">
      <div className="flex grow flex-row md:flex-col justify-center m-5 md:m-2 px-2 py-5 md:p-10 border-4 border-slate-700 md:hover:border-0 rounded-2xl md:hover:scale-110 md:hover:bg-slate-50 text-slate-600 md:hover:animate-pulse ease-in duration-300">
        <div className="mx-3 md:mb-10">{content.image}</div>
        <div className="mx-3 text-4xl font-bold text-center uppercase">
          {content.title}
        </div>
      </div>
    </div>
  );
}
