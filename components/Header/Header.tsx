import Link from 'next/link';
import { useRouter } from 'next/router';

import Dropdown from './Dropdown';
import Logo from './Logo';
import path from '@/utils/path';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="w-screen z-50 bg-slate-900 border-b-4 border-gray-800/50">
      <div className="flex flex-row w-full max-w-7xl mx-auto px-5 py-7">
        <Link href={path.home}>
          <a className="flex justify-center md:justify-start mr-3 md:mr-10">
            <Logo />
          </a>
        </Link>
        <div className="flex flex-row">
          <Dropdown route={router.pathname} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
