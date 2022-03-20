import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProjectLink from './ProjectLink';
import formatDate from '@/utils/formatDate';
import { ProjectProps } from '@/types/types';

const ProjectCard: React.FC<ProjectProps> = ({ attributes }) => {
  return (
    <div className="flex flex-col p-5 mb-5 bg-slate-100 rounded-xl drop-shadow-lg">
      <div className="flex mb-5 justify-center">
        <Image
          src={attributes.img.data[0].attributes.formats.small.url}
          alt={attributes.title}
          width={500}
          height={300}
          objectFit="cover"
          className="rounded-xl"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0Do2vBwADcgGA2WOZUwAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-xl text-slate-700 mb-1">
          {attributes.title}
        </h1>
        <Link
          href={`/projects/category/${attributes.category.data.attributes.slug}`}
        >
          <a className="text-md font-semibold text-slate-500 mb-2 opacity-60 text-indigo-600 hover:opacity-100 hover:text-indigo-700 ease-in duration-100">
            {attributes.category.data.attributes.name}
          </a>
        </Link>
      </div>
      <div className="flex-auto border-t-2 border-slate-700/20 py-5 px-2">
        <p className="text-justify">{attributes.description}</p>
      </div>
      <div className="flex pt-2 border-t-2 border-slate-700/20">
        <p className="text-xs font-semibold text-slate-400 text-left italic">
          Last updated: {formatDate(attributes.updatedAt)}
        </p>
      </div>
      <div className="flex flex-row mt-2 justify-between pt-2">
        <ProjectLink attributes={attributes} size={22} />
        <div className="flex my-auto">
          <Link href={`/projects/${attributes.slug}`}>
            <a className="pl-2 font-semibold text-slate-900 hover:text-indigo-600 hover:border-l-2 hover:border-indigo-600 ease-in duration-100">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
