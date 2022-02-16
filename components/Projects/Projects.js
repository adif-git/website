import React from 'react';
import Project from './Project';

export default function Projects({ projects }) {
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {projects.map(({ id, attributes }) => {
        return <Project key={id} attributes={attributes} />;
      })}
    </div>
  );
}
