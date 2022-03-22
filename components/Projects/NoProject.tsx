import { GiCardboardBox } from 'react-icons/gi';

const NoProject: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <GiCardboardBox className="h-36 w-36 text-blue-900" />
      <p className="font-bold text-lg md:text-xl text-blue-900">
        No projects to show
      </p>
    </div>
  );
};

export default NoProject;
