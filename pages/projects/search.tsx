import { GetServerSideProps } from 'next';

import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProjectsFilter from '@/components/Projects/ProjectsFilter';
import { getAllCategories } from 'lib/categories';
import { getProjectsBySearch } from 'lib/projects';
import { CategoriesProps, ProjectsProps } from '@/types/types';

const SearchPage: React.FC<{
  projects: ProjectsProps;
  categories: CategoriesProps;
}> = ({ projects, categories }) => {
  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          <ProjectsFilter categories={categories} />
          {projects.length === 0 ? (
            <h2 className="mb-10 text-lg text-center md:text-2xl bg-red-700 p-2 md:p-4 rounded-xl text-slate-100 uppercase font-bold">
              Search results: No project found
            </h2>
          ) : projects.length === 1 ? (
            <h2 className="mb-10 text-lg text-center md:text-2xl bg-green-700 p-2 md:p-4 rounded-xl text-slate-100 uppercase font-bold">
              {`Search results: ${projects.length} project found`}
            </h2>
          ) : (
            <h2 className="mb-10 text-lg text-center md:text-2xl bg-green-700 p-2 md:p-4 rounded-xl text-slate-100 uppercase font-bold">
              {`Search results: ${projects.length} projects found`}
            </h2>
          )}
          {projects.length >= 0 && (
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
