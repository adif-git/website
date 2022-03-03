import { AiOutlineQuestion } from 'react-icons/ai';
import { NextPage } from 'next';

import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container'
import path from '../components/path';

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Page Not Found | Adif">
      <Container>
        <div className="flex flex-col justify-center text-center items-center">
          <AiOutlineQuestion className="h-48 w-48 text-blue-500" />
          <h1 className="uppercase font-black text-xl md:text-3xl">
            Oops! Page Not Found
          </h1>
          <span className="text-5xl md:text-9xl font-black mb-2 md:mb-5">
            404
          </span>
          <p className="font-semibold text-md md:text-xl text-slate-500">
            Page you requested was not found
          </p>
          <Link href={path.home}>
            <a className="text-sm md:text-xl px-7 py-2 my-3 md:my-10 font-bold uppercase bg-gradient-to-r from-blue-500 to-sky-500 inline-flex mx-auto rounded-full text-slate-50 text-lg ease-in duration-100 shadow-lg hover:scale-110">
              Go back home
            </a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}

export default NotFoundPage
