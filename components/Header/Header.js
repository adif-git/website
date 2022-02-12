import Link from 'next/link';
import path from '../path';
import { useRouter } from 'next/router';
import { ChipIcon } from '@heroicons/react/outline';

export default function Header() {
  const router = useRouter();

  return (
    <nav className="w-screen z-50">
      <div className="flex flex-row w-full max-w-7xl mx-auto px-5 py-5 md:py-5">
        <Link href={path.home}>
          <a className="flex justify-center md:justify-start">
            <div className="h-full flex items-center mr-5">
              <ChipIcon className="h-10 w-10 md:h-14 md:w-14 text-slate-50" />
            </div>
            <div className="flex items-center">
              <h1 className="text-slate-50 text-4xl font-bold mr-10">ADIF</h1>
            </div>
          </a>
        </Link>
        <h1 className="hidden md:inline-block text-slate-600 text-4xl font-bold uppercase my-auto">
          {' '}
          {router.pathname === '/' ? 'homepage' : router.pathname.split('/')[1]}
        </h1>
      </div>
    </nav>
  );
}
