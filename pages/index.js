import Head from 'next/head';
import Header from '../components/Header/Header';
import HomeCard from '../components/Home/HomeCard';
import content from '../components/Home/content-card';
import Link from 'next/link';
import path from '../components/path';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage | Adif</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex flex-col relative bg-slate-900 w-screen h-screen">
        <div className="flex">
          <Header />
        </div>
        <div className="flex-1 px-20 py-10">
          <div className="flex items-center h-full">
            <div className="flex flex-row justify-around w-full">
              <Link href={path.profile}>
                <a className="flex">
                  <HomeCard content={content.profile} />
                </a>
              </Link>
              <Link href={path.projects}>
                <a className="flex">
                  <HomeCard content={content.projects} />
                </a>
              </Link>
              <Link href={path.contact}>
                <a className="flex">
                  <HomeCard content={content.contact} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <Footer />
        </div>
      </main>
    </div>
  );
}
