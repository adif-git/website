import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ attributes }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col p-5 mb-5 bg-slate-100 rounded-xl drop-shadow-lg">
      <div className="flex mb-5 justify-center">
        <Image
          src={attributes.img.data[0].attributes.formats.thumbnail.url}
          alt={attributes.title}
          width={210}
          height={120}
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-xl text-slate-700 mb-1">
          {attributes.title}
        </h1>
        <p className="text-md font-semibold text-slate-500 mb-2 text-indigo-600">
          {attributes.category.data.attributes.name}
        </p>
      </div>
      <div className="flex-auto border-t-2 border-slate-800/30 pt-2">
        <p className="text-justify">{attributes.description}</p>
      </div>
      <div className="flex mt-5">
        <p className="text-xs font-semibold text-slate-400 text-left italic">
          Last updated: {formatDate(attributes.updatedAt)}
        </p>
      </div>
      <div className="flex flex-row mt-1 border-t-2 border-slate-800/30 pt-2">
        <div className="flex flex-auto  text-slate-500">
          {attributes.link_project !== null ? (
            <Link href={attributes.link_project} className="">
              <a className="mr-2 bg-blue-700 px-5 rounded-full text-slate-50 font-semibold">
                Link
              </a>
            </Link>
          ) : null}
          {attributes.link_github !== '' ? (
            <Link href={attributes.link_github} className="">
              <a className="bg-blue-500 px-5 rounded-full text-slate-50 font-semibold">
                GitHub
              </a>
            </Link>
          ) : null}
        </div>
        <div className="flex my-auto">
          <Link href={`/projects/${attributes.slug}`}>
            <a className="font-semibold text-slate-900">Read More...</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
