import React from 'react';
import Image from 'next/image';

export default function Icons({ src, alt }) {
  return (
    <div className="mx-2">
      <Image src={src} alt={alt} width={48} height={48} priority="false" />
    </div>
  );
}
