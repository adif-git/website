import Link from 'next/link';
import {
  AiOutlinePlayCircle,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai';

export default function ProjectLink({ attributes, size }) {
  return (
    <div className="inline-flex flex-row text-slate-500">
      {attributes.link_project !== null ? (
        <Link href={attributes.link_project} className="">
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlineLink size={size} className="text-slate-900" />
          </a>
        </Link>
      ) : null}
      {attributes.link_github !== null ? (
        <Link href={attributes.link_github} className="">
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={size} className="text-slate-900" />
          </a>
        </Link>
      ) : null}
      {attributes.vid.data !== null ? (
        <Link href={attributes.vid.data[0].attributes.url} className="">
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlinePlayCircle size={size} className="text-slate-900" />
          </a>
        </Link>
      ) : null}
    </div>
  );
}
