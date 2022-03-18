import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProjectsFilter from '@/components/Projects/ProjectsFilter';
import { getAllCategories } from 'lib/categories';
import { getProjectsByCategory } from 'lib/projects';

const CategoryPage: React.FC<{
  categories: [];
  projects: [];
}> = ({ categories, projects }) => {
  const { asPath } = useRouter();
  const categoryPath = asPath.split('/')[3];

  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          <ProjectsFilter categories={categories} />
          <div className="flex justify-center mb-10 text-lg md:text-2xl bg-slate-700 p-2 md:p-4 rounded-xl text-slate-100">
            <h2 className="uppercase font-bold mr-4">
              {categoryPath.replace('-', ' ')}{' '}
            </h2>
          </div>
          {projects.length === 0 ? (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      slug: category.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const category = await getProjectsByCategory({ slug });
  const categories = await getAllCategories();

  return {
    props: {
      categories,
      projects: category.attributes.projects.data,
    },
    revalidate: 10,
  };
};

export default CategoryPage;
