import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

import { API_URL } from '@/config/index';
import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import path from '@/utils/path';

const CategoryPage: React.FC<{ category: string; projects: [] }> = ({
  category,
  projects,
}) => {
  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          <h1 className="leading-relaxed text-4xl font-bold text-center uppercase text-slate-900 underline decoration-solid decoration-4 decoration-sky-500 underline-offset-8 mb-16">
            {`${category} PROJECTS`}
          </h1>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/categories`);
  const categories = await res.json();

  const paths = categories.data.map((category) => ({
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
  const qs = require('qs');
  const query = qs.stringify({
    fields: ['slug', 'name'],
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      projects: {
        populate: '*',
      },
    },
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/categories?${query}`);
  const category = await res.json();

  return {
    props: {
      category: category.data[0].attributes.name,
      projects: category.data[0].attributes.projects.data,
    },
    revalidate: 10,
  };
};

export default CategoryPage;
