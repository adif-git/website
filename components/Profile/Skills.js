import React from 'react';
import Skill from './Skill';
import {
  CodeIcon,
  GlobeAltIcon,
  ChipIcon,
  CollectionIcon,
} from '@heroicons/react/outline';

import programming from './skill-list/programming';
import webdev from './skill-list/webdev';
import embedded from './skill-list/embedded';
import others from './skill-list/others';

export default function Skills() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center text-slate-800 mb-24">
        <span className="underline decoration-solid decoration-4 decoration-sky-500 underline-offset-8">
          Tech Stack
        </span>{' '}
        I Used & Currently Learning...
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center ">
        <Skill name="Programming" list={programming} Icon={CodeIcon} />
        <Skill name="Web Development" list={webdev} Icon={GlobeAltIcon} />
        <Skill name="Embedded Systems" list={embedded} Icon={ChipIcon} />
        <Skill name="Others" list={others} Icon={CollectionIcon} />
      </div>
    </div>
  );
}
