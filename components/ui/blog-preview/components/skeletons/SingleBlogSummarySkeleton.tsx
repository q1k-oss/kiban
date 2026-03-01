import React from 'react';

import { Skeleton } from "../../../skeleton";



export const SingleBlogSummarySkeleton = () => {
  return (
    <div className="p-4 italic">
      <h4 className="font-bold mb-4 text-lg">Summary</h4>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-1/5 h-4" />
      </div>
    </div>
  );
};
