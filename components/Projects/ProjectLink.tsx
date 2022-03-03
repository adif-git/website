import Link from 'next/link';
import {
  AiOutlinePlayCircle,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai';

import { ProjectLinkProps } from '../../types/types';

const ProjectLink: React.FC<ProjectLinkProps> = ({ attributes, size }) => {
  const iconStyles =
    'text-slate-900 hover:text-indigo-600 ease-in duration-100';

  return (
    <div className="inline-flex flex-row text-slate-500">
      {attributes.link_project !== null ? (
        <Link href={attributes.link_project}>
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlineLink size={size} className={iconStyles} />
          </a>
        </Link>
      ) : null}
      {attributes.link_github !== null ? (
        <Link href={attributes.link_github}>
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={size} className={iconStyles} />
          </a>
        </Link>
      ) : null}
      {attributes.vid.data !== null ? (
        <Link href={attributes.vid.data[0].attributes.url}>
          <a className="mr-3 p-1" target="_blank" rel="noopener noreferrer">
            <AiOutlinePlayCircle size={size} className={iconStyles} />
          </a>
        </Link>
      ) : null}
    </div>
  );
};

export default ProjectLink;
