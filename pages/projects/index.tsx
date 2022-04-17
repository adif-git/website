import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import ProjectsFilter from '@/components/Projects/ProjectsFilter';
import ProjectCard from '@/components/Projects/ProjectCard';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import NoProject from '@/components/Projects/NoProject';
import path from '@/utils/path';
import { getPageArray } from '@/utils/pagination';
import { getAllProjects } from '@/lib/projects';
import { getAllCategories } from '@/lib/categories';
import { CategoriesProps, PaginationProps, ProjectsProps } from '@/types/types';

const Projects: React.FC<{
  projects: ProjectsProps;
  categories: CategoriesProps;
  pagination: PaginationProps;
}> = ({ projects, categories, pagination }) => {
  const router = useRouter();
  const { page, pageCount } = pagination;

  useEffect(() => {
    // Validate Page Number
    if (page > pageCount && pageCount !== 0)
      router.push({
        pathname: path.projects,
        query: {
          page: pageCount,
        },
      });
  }, [page, pageCount, router]);

  const pageArray = getPageArray({ pagination });
  const baseUrl = router.asPath.split('?')[0];

  return (
    <>
      <Layout title="Adif | Projects">
        <Container>
          <ProjectsFilter categories={categories} />
          {projects.length === 0 ? (
            <NoProject />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map(({ id, attributes }) => {
                return <ProjectCard key={id} attributes={attributes} />;
              })}
            </div>
          )}
          {pageCount > 1 && (
            <div className="grid grid-cols-5 mt-10 pb-5 border-t-2 border-slate-400/70 pt-2">
              {page > 1 && (
                <Link href={baseUrl + `?page=${page - 1}`}>
                  <a className="flex flex-row col-start-1 font-semibold text-slate-700 items-center">
                    <MdNavigateBefore className="h-7 w-7" />
                    <span className="my-auto">Previous</span>
                  </a>
                </Link>
              )}
              <div className="col-start-2 col-span-3">
                <div className="flex flex-row justify-center font-semibold">
                  {pageArray.map((num, index) => {
                    return (
                      <Link key={index} href={baseUrl + `?page=${num}`}>
                        <a
                          className={
                            'px-3 py-1' +
                            `${
                              num === page
                                ? ' bg-sky-500 rounded-full text-white'
                                : ''
                            }`
                          }
                        >
                          {num}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {page < pageCount && (
                <Link href={baseUrl + `?page=${page + 1}`}>
                  <a className="flex flex-row col-start-5 font-semibold text-slate-700 items-center justify-self-end">
                    <span className="my-auto">Next</span>
                    <MdNavigateNext className="h-7 w-7" />
                  </a>
                </Link>
              )}
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const projects = await getAllProjects({ page });
  const categories = await getAllCategories();

  return {
    props: {
      projects: projects.data,
      categories,
      pagination: projects.meta.pagination,
    },
  };
};

export default Projects;
