import { HiCode, HiChip, HiCollection, HiGlobeAlt } from 'react-icons/hi';
import { SkillsProps } from '../../types/types';

import Skill from './Skill';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <h1 className="leading-relaxed font-bold text-4xl text-center text-slate-800 mb-24">
        <span className="underline decoration-solid decoration-4 decoration-sky-500 underline-offset-8">
          Tech Stack
        </span>{' '}
        I Used & Currently Learning...
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center ">
        {skills.map(({ attributes }, key) => {
          switch (attributes.name) {
            case 'Programming':
              return <Skill attributes={attributes} Icon={HiCode} key={key} />;
            case 'Web Development':
              return (
                <Skill attributes={attributes} Icon={HiGlobeAlt} key={key} />
              );
            case 'Embedded Systems':
              return <Skill attributes={attributes} Icon={HiChip} key={key} />;
            case 'Others':
              return (
                <Skill attributes={attributes} Icon={HiCollection} key={key} />
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default Skills;
