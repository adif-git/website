import { IoConstructOutline } from 'react-icons/io5';

import { API_URL } from '../../config/index';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import CarouselContainer from '../../components/Projects/Carousel';
import ProjectLink from '../../components/Projects/ProjectLink';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default function ProjectPage({ projects: { attributes } }) {
  return (
    <>
      <Layout title={`${attributes.title} | Adif`}>
        <Container>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-6xl mb-5 leading-relaxed md:leading-normal">
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
            <div className="">
              <p className="text-lg text-justify">{attributes.article}</p>
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
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  const paths = projects.data.map((project) => ({
    params: {
      slug: project.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/projects?populate=*&filters[slug][$eq]=${slug}`
  );
  const projects = await res.json();

  return {
    props: { projects: projects.data[0] },
    revalidate: 60,
  };
}
