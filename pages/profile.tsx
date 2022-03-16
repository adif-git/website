import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { API_URL } from '@/config/index';

import Introduction from '@/components/Profile/Introduction';
import Skills from '@/components/Profile/Skills';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import { SkillsProps } from '@/types/types';

const Profile: NextPage<SkillsProps> = ({ skills }) => {
  return (
    <>
      <Layout title="Profile | Adif">
        <div className="flex bg-slate-100">
          <Container>
            <Introduction />
          </Container>
        </div>
        <div className="flex bg-slate-50">
          <Container>
            <Skills skills={skills} />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/skills`);
  const skills = await res.json();

  return {
    props: { skills: skills.data },
    revalidate: 10,
  };
};

export default Profile;
