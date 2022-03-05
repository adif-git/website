import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
  const router = useRouter();

  const stylesIcon = `flex flex-row text-slate-500 hover:text-slate-50 transition ease-in-out ${
    router.pathname === '/' || router.pathname === '/contacts'
      ? 'hover:text-slate-50'
      : 'hover:text-slate-900'
  }`;

  const stylesBG = `w-screen ${
    router.pathname === '/' || router.pathname === '/contacts'
      ? 'bg-slate-900 text-slate-500 border-t-2 border-slate-800'
      : 'bg-slate-200 text-sky-900'
  }`;

  return (
    <div className={stylesBG}>
      <div
        className={`flex flex-col md:flex-row justify-between w-full h-18 px-5 py-6 max-w-7xl mx-auto`}
      >
        <div className="text-md font-bold text-center">
          Made by <span className="text-sky-500">Adif</span> with Next.js,
          Tailwind, & Strapi @ 2022
        </div>
        <div className="flex flex-row my-auto justify-center mt-5 md:m-0">
          <Link href="https://github.com/adif-git">
            <a target="_blank" rel="noopener noreferrer">
              <div className={stylesIcon}>
                <div className="mx-3">
                  <AiFillGithub size={20} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://linkedin.com/in/ladivab">
            <a target="_blank" rel="noopener noreferrer">
              <div className={stylesIcon}>
                <div className="mx-3">
                  <AiFillLinkedin size={20} />
                </div>
              </div>
            </a>
          </Link>
          <Link href="mailto:adif.ladiva@gmail.com">
            <a target="_blank" rel="noopener noreferrer">
              <div className={stylesIcon}>
                <div className="mx-3">
                  <AiOutlineMail size={20} />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
