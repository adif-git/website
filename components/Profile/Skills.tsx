import { HiCode, HiChip, HiCollection, HiGlobeAlt } from 'react-icons/hi';

import programming from './skill-list/programming';
import webdev from './skill-list/webdev';
import embedded from './skill-list/embedded';
import others from './skill-list/others';
import Skill from './Skill';

const Skills: React.FC = () => {
  return (
    <>
      <h1 className="leading-relaxed font-bold text-4xl text-center text-slate-800 mb-24">
        <span className="underline decoration-solid decoration-4 decoration-sky-500 underline-offset-8">
          Tech Stack
        </span>{' '}
        I Used & Currently Learning...
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center ">
        <Skill name="Programming" list={programming} Icon={HiCode} />
        <Skill name="Web Development" list={webdev} Icon={HiGlobeAlt} />
        <Skill name="Embedded Systems" list={embedded} Icon={HiChip} />
        <Skill name="Others" list={others} Icon={HiCollection} />
      </div>
    </>
  );
};

export default Skills;
