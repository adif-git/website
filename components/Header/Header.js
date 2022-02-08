import Link from 'next/link';
import path from '../path';
import { useRouter } from 'next/router';
import { ChipIcon } from '@heroicons/react/outline';

export default function Header() {
  const router = useRouter();

  return (
    <nav className="w-screen z-50">
      <div className=" w-full px-5 md:px-10 py-5 md:py-10">
        <Link href={path.home}>
          <a className="flex justify-start">
            <div className="h-full flex items-center mr-5">
              <ChipIcon className="h-10 w-10 md:h-14 md:w-14 text-slate-50" />
            </div>
            <div className="flex items-center">
              <h1 className="text-slate-50 text-4xl font-bold mr-10">ADIF</h1>
              <Link href={router.pathname}>
                <a className="text-transparent md:text-slate-600 text-4xl font-bold uppercase hover:text-slate-200 ease-in duration-200">
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
