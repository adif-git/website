import Link from 'next/link';

import { CategoriesProps } from '@/types/types';
import path from '@/utils/path';
import Dropdown from './Dropdown';
import Search from './Search';

const ProjectsFilter: React.FC<{ categories: CategoriesProps }> = ({
  categories,
}) => {
  return (
    <div className="flex justify-between flex-col flex-col-reverse md:flex-row mb-10">
      <div className="flex flex-row justify-between md:justify-start">
        <p className="hidden md:inline-block mr-5 font-semibold text-lg my-auto">
          Category:
        </p>
        <Dropdown categories={categories} />
        <div className="my-auto inline-block md:hidden">
          <Link href={path.projects}>
            <a className="text-sm tracking-wide text-sky-600 font-semibold">
              Clear All Filters
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mb-5 md:mb-0">
        <Search />
        <Link href={path.projects}>
          <a className="hidden md:flex ml-5 my-auto text-sm tracking-wide text-sky-600 font-semibold">
            Clear All Filters
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsFilter;
