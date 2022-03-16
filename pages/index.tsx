import Link from 'next/link';
import { NextPage } from 'next';
import { FiCode, FiMail, FiUser } from 'react-icons/fi';

import HomeCard from '@/components/Home/HomeCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import path from '@/utils/path';

const Home: NextPage = () => {
  return (
    <div className="font-mono">
      <Layout title="Homepage | Adif" bgColor="bg-slate-900">
        <div className="my-auto">
          <Container>
            <div className="flex flex-col md:flex-row justify-around w-full">
              <Link href={path.profile}>
                <a>
                  <HomeCard title="Profile" Icon={FiUser} />
                </a>
              </Link>
              <Link href={path.projects}>
                <a>
                  <HomeCard title="Projects" Icon={FiCode} />
                </a>
              </Link>
              <Link href={path.contacts}>
                <a>
                  <HomeCard title="Contacts" Icon={FiMail} />
                </a>
              </Link>
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
