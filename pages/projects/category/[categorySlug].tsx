import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { GiCardboardBox } from 'react-icons/gi';

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
          <div className="hidden md:flex justify-center mb-10 text-lg md:text-2xl bg-slate-700 p-2 md:p-4 rounded-xl text-slate-100">
            <h2 className="uppercase font-bold mr-4">
              {categoryPath.replace('-', ' ')}{' '}
            </h2>
          </div>
          {projects.length === 0 ? (
            <div className="flex flex-col justify-center text-center items-center">
              <GiCardboardBox className="h-36 w-36 text-blue-900" />
              <p className="font-bold text-lg md:text-xl text-blue-900">
                No projects to show
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

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      categorySlug: category.attributes.slug
        ? category.attributes.slug.toString()
        : '',
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { categorySlug },
}) => {
  const category = await getProjectsByCategory({ categorySlug });
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
