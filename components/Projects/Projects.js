import React from 'react';
import Project from './Project';

export default function Projects({ projects }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {projects.map(({ id, attributes }) => {
        return <Project key={id} attributes={attributes} />;
      })}
    </div>
  );
}
