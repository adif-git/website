import React from 'react';
import Link from 'next/link';
import path from '../path';
export default function Header() {
  return (
    <nav className="h-28 w-screen z-50">
      <div className=" w-full px-20">
        <Link href={path.home}>
          <a className="flex justify-start h-28">
            <div className="h-full flex items-center mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-slate-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="h-full flex items-center">
              <h1 className="text-slate-50 text-4xl font-bold">ADIF.</h1>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
}
