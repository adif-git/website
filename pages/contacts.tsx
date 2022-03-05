import { NextPage } from 'next';
import Link from 'next/link';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import Container from '../components/Container';
import Layout from '../components/Layout';

const Contacts: NextPage = () => {
  return (
    <div>
      <Layout title="Contacts | Adif" bgColor="bg-slate-900">
        <div className="my-auto">
          <Container>
            <div className="flex flex-col w-full">
              <div className="flex flex-col rounded-xl md:w-3/4 lg:w-2/4 mx-auto py-10 px-5 md:py-14 md:px-8">
                <div className="text-center font-bold text-5xl md:text-7xl text-blue-500 mb-5">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">
                    Get in touch!
                  </span>
                </div>
                <p className="text-center font-semibold text-xl md:text-2xl text-slate-300 mb-16">
                  Contact me if you have any further question...
                </p>
                <div className="flex flex-col">
                  <Link href="https://github.com/adif-git">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row px-5 py-2 rounded-xl border-2 border-sky-500 md:border-0 md:hover:bg-slate-50 text-slate-300 md:hover:text-slate-900 md:hover:drop-shadow-lg transition ease-in-out mb-5">
                        <div className="mr-2">
                          <AiFillGithub className="mr-3 md:mr-5 h-8 w-8 md:h-14 md:w-14" />
                        </div>
                        <div className="flex-auto font-semibold text-lg md:text-2xl my-auto">
                          adif-git
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="mailto:adif.ladiva@gmail.com">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row px-5 py-2 rounded-xl border-2 border-sky-500 md:border-0 md:hover:bg-slate-50 text-slate-300 md:hover:text-slate-900 md:hover:drop-shadow-lg transition ease-in-out mb-5">
                        <div className="mr-2">
                          <AiOutlineMail className="mr-3 md:mr-5 h-8 w-8 md:h-14 md:w-14" />
                        </div>
                        <div className="flex-auto font-semibold text-lg md:text-2xl my-auto">
                          adif.ladiva@gmail.com
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="https://linkedin.com/in/ladivab">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row px-5 py-2 rounded-xl border-2 border-sky-500 md:border-0 md:hover:bg-slate-50 text-slate-300 md:hover:text-slate-900 md:hover:drop-shadow-lg transition ease-in-out mb-5">
                        <div className="mr-2">
                          <AiFillLinkedin className="mr-3 md:mr-5 h-8 w-8 md:h-14 md:w-14" />
                        </div>
                        <div className="flex-auto font-semibold text-lg md:text-2xl my-auto">
                          ladivab
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Contacts;
