import { NextPage, GetStaticProps } from 'next';

import Introduction from '@/components/Profile/Introduction';
import Skills from '@/components/Profile/Skills';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import { SkillsProps } from '@/types/types';
import { getAllSkills } from 'lib/skills';

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
  const skills = await getAllSkills();

  return {
    props: { skills },
    revalidate: 10,
  };
};

export default Profile;
