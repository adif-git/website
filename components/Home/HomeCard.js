import React from 'react';

export default function HomeCard({ content }) {
  return (
    <div className="flex justify-center px-10">
      <div className="p-14 border-4 border-slate-700 hover:border-0 rounded-lg hover:scale-110 hover:bg-slate-50 text-slate-600 hover:animate-pulse ease-in duration-300">
        <div className="mb-10">{content.image}</div>
        <div className="text-4xl font-bold text-center uppercase">
          {content.title}
        </div>
      </div>
    </div>
  );
}
