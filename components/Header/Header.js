import Link from 'next/link';
import path from '../path';
import { useRouter } from 'next/router';
import { ChipIcon } from '@heroicons/react/outline';

export default function Header() {
  const router = useRouter();

  return (
    <nav className="w-screen z-50">
      <div className=" w-full max-w-7xl mx-auto px-5 py-5 md:py-5">
        <Link href={path.home}>
          <a className="flex justify-center md:justify-start">
            <div className="h-full flex items-center mr-5">
              <ChipIcon className="h-10 w-10 md:h-14 md:w-14 text-slate-50" />
            </div>
            <div className="flex items-center">
              <h1 className="text-slate-50 text-4xl font-bold mr-5">ADIF</h1>
              <Link href={router.pathname}>
                <a className="hidden md:inline-block text-slate-600 text-4xl font-bold uppercase hover:text-slate-200 ease-in duration-200">
                  {router.pathname === '/' ? '/HOMEPAGE' : router.pathname}
                </a>
              </Link>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
}
