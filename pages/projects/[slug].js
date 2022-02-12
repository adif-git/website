import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
export default function Project() {
  return (
    <>
      <Head>
        <title>Projects | Adif</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col relative min-w-screen min-h-screen h-full">
        <div className="flex bg-slate-900">
          <Header />
        </div>
        <div className="flex-auto bg-slate-200">
          <div className="max-w-7xl mx-auto w-full py-16 px-5">Test</div>
        </div>
        <div className="flex">
          <Footer />
        </div>
      </div>
    </>
  );
}
