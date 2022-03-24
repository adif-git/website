import { GetServerSideProps } from 'next';
import { IoConstructOutline, IoChevronBack } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import CarouselContainer from '@/components/Projects/Carousel';
import ProjectLink from '@/components/Projects/ProjectLink';
import formatDate from '@/utils/formatDate';
import { ProjectProps } from '@/types/types';
import { getProjectBySlug } from '@/lib/projects';

const ProjectPage: React.FC<{ project: ProjectProps }> = ({
  project: { attributes },
}) => {
  const router = useRouter();

  return (
    <>
      <Layout title={`${attributes.title} | Adif`}>
        <Container>
          <button
            type="button"
            onClick={() => router.back()}
            className="flex flex-row mb-10 text-slate-500 hover:text-slate-900 ease-in duration-100"
          >
            <IoChevronBack className="w-7 h-7 mr-2" />
            <p className="my-auto font-semibold text-xl">Return to projects</p>
          </button>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-6xl mb-2 leading-relaxed md:leading-normal">
              {attributes.title}
            </h1>
            <p className="font-semibold text-indigo-500 mb-2 md:mb-5 text-xl">
              {attributes.category.data.attributes.name}
            </p>
            <div className="flex mb-3 justify-center md:justify-start w-full">
              <ProjectLink attributes={attributes} size={30} />
            </div>
            <p className="text-md md:text-lg font-semibold italic border-b-2 border-slate-300 pb-2 text-slate-600">
              Last updated: {formatDate(attributes.updatedAt)}
            </p>
          </div>
          <div className="bg-slate-300/50 border-l-8 border-blue-500 pr-10 pl-5 py-4 rounded-md my-10">
            <p className="text-lg text-justify italic font-semibold">
              {attributes.description}
            </p>
          </div>
          <div>
            <CarouselContainer img={attributes.img.data} />
          </div>
          {attributes.article ? (
            <div className="w-full">
              <article className="prose prose-slate lg:prose-xl max-w-none prose-p:text-justify">
                <ReactMarkdown>{attributes.article}</ReactMarkdown>
              </article>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full p-24">
              <IoConstructOutline className="w-40 h-40 mb-10" />
              <p className="text-xl md:text-4xl font-semibold text-center">
                This article currently under maintenance
              </p>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params: { projectSlug },
}) => {
  const project = await getProjectBySlug({ projectSlug });

  return {
    props: { project },
  };
};

export default ProjectPage;
