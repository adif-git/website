import { GetServerSideProps } from 'next';

import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProjectsFilter from '@/components/Projects/ProjectsFilter';
import { getAllCategories } from 'lib/categories';
import { getProjectsBySearch } from 'lib/projects';
import { useRouter } from 'next/router';
import { CategoriesProps, ProjectsProps } from '@/types/types';

const SearchPage: React.FC<{
  projects: ProjectsProps;
  categories: CategoriesProps;
}> = ({ projects, categories }) => {
  const router = useRouter();

  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          <ProjectsFilter categories={categories} />
          <p className="text-slate-800 text-lg mb-14">
            Search results for{' '}
            <span className="font-semibold text-sky-600">
              {router.query.term}
            </span>
          </p>
          {projects.length <= 0 ? (
            <div className="text-center font-semibold ">
              <h2 className="text-slate-700 text-3xl mb-5">
                No projects to show
              </h2>
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

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const projects = await getProjectsBySearch({ term });
  const categories = await getAllCategories();

  return {
    props: {
      projects,
      categories,
    },
  };
};

export default SearchPage;
