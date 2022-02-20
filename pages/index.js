import Link from 'next/link';

import HomeCard from '../components/Home/HomeCard';
import content from '../components/Home/content-card';
import path from '../components/path';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Home() {
  return (
    <div>
      <Layout title="Homepage | Adif" bgColor="bg-slate-900">
        <div className="my-auto">
          <Container>
            <div className="flex flex-col md:flex-row justify-around w-full">
              <Link href={path.profile}>
                <a>
                  <HomeCard content={content.profile} />
                </a>
              </Link>
              <Link href={path.projects}>
                <a>
                  <HomeCard content={content.projects} />
                </a>
              </Link>
              <Link href={path.contacts}>
                <a>
                  <HomeCard content={content.contacts} />
                </a>
              </Link>
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
