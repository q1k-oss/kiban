import { Skeleton } from '@happect/ethereal-ui';
import React from 'react';

export const SingleBlogContentSkeleton = () => {
  return (
    <div className="flex flex-col w-full items-start gap-10 ">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="flex flex-col justify-start gap-3 w-full">
          <Skeleton className="w-2xs h-12 mb-4" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-xs h-8" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
      ))}
    </div>
  );
};
