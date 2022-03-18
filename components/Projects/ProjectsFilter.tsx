import Link from 'next/link';

import { CategoriesProps } from '@/types/types';
import path from '@/utils/path';
import Dropdown from './Dropdown';
import Search from './Search';

const ProjectsFilter: React.FC<{ categories: CategoriesProps }> = ({
  categories,
}) => {
  return (
    <div className="flex justify-between flex-row mb-10 text-lg">
      <div className="flex flex-row">
        <p className="hidden md:inline-block mr-5 font-semibold text-xl my-auto">
          Category:
        </p>
        <Dropdown categories={categories} />
      </div>
      <div className="flex flex-row">
        <Search />
        <Link href={path.projects}>
          <a className="ml-5 my-auto text-sm tracking-wide text-sky-600 font-semibold">
            Clear All Filters
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsFilter;
