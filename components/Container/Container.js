import React from 'react';

export default function Container({ children }) {
  return (
    <div className="px-20 h-full">
      <div className="">{children}</div>
    </div>
  );
}
