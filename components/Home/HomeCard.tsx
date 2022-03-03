import { HomeCardProps } from '../../types/types';

const HomeCard: React.FC<HomeCardProps> = ({ title, Icon }) => {
  return (
    <div className="flex flex-row md:flex-col justify-center align-center text-slate-400 md:hover:text-blue-900 my-5 md:m-2 p-2 md:p-10 border-4 border-slate-400 rounded-2xl md:hover:scale-110 md:hover:bg-slate-50 ease-in duration-200">
      <div className="mr-5 md:mx-auto md:mb-10">
        {<Icon className="h-10 w-10 md:h-36 md:w-36" />}
      </div>
      <div className="my-auto text-2xl md:text-4xl font-bold md:text-center uppercase">
        {title}
      </div>
    </div>
  );
};

export default HomeCard;
