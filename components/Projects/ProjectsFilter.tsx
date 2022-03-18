import { CategoriesProps } from '@/types/types';
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
      <Search />
    </div>
  );
};

export default ProjectsFilter;
