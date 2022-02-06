import React from 'react';

export default function Header() {
  return (
    <nav className="fixed w-screen z-50 transition duration-300 ease-in-out opacity-95">
      <div className="w-full px-10 py-10 sm:px-12">
        <h1 className="text-slate-50 text-3xl font-bold">ADIF.</h1>
      </div>
    </nav>
  );
}
