import { Skeleton } from '@happect/ethereal-ui';
import React from 'react';

export const SingleBlogSummarySkeleton = () => {
  return (
    <div className="border-2 rounded-xl border-[#F49D5699] p-4 italic">
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
