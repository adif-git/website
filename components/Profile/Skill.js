import React from 'react';
import Icons from './Icons';

export default function Skill({ name, Icon, list }) {
  return (
    <div className="flex flex-col mb-24">
      <div className={`flex pb-2 px-2 mb-2 mx-10 pt-5`}>
        {list.map((skill, key) => {
          return <Icons src={skill.src} alt={skill.alt} key={key} />;
        })}
      </div>
      <div className="flex flex-row align-center justify-center">
        <Icon className={`w-10 h-10 mr-3`} />
        <span
          className={`inline-block font-semibold text-center text-2xl align-center my-auto`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
