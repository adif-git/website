import React from 'react';
import Icons from './Icons';

export default function Skill({ name, Icon, list }) {
  return (
    <div className="flex flex-auto flex-col mb-24">
      <div className={`flex pb-2 mb-2 mx-2 pt-5 justify-center`}>
        {list.map((skill, key) => {
          return <Icons src={skill.src} alt={skill.alt} key={key} />;
        })}
      </div>
      <div className="flex flex-row justify-center">
        <Icon className={`w-10 h-10 mr-3`} />
        <span
          className={`inline-block font-semibold text-center text-2xl my-auto`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
