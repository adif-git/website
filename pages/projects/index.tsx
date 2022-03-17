import { GetStaticProps } from 'next';
import Link from 'next/link';

import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import path from '@/utils/path';
import { getAllProjects } from 'lib/projects';

const Projects: React.FC<{ projects: [] }> = ({ projects }) => {
  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          {projects === null ? (
            <div className="text-center font-semibold ">
              <h2 className="text-slate-700 text-3xl mb-5">
                No projects to show
              </h2>
              <p className="text-slate-400 text-xl">
                Return to{' '}
                <Link href={path.home}>
                  <a className="text-indigo-500">home</a>
                </Link>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map(({ id, attributes }) => {
                return <ProjectCard key={id} attributes={attributes} />;
              })}
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
    revalidate: 10,
  };
};

export default Projects;
