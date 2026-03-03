import React from 'react';

import { Skeleton } from "../../../skeleton";


export const SingleBlogHeaderSkeleton = () => {
  return (
    <div
      className="relative w-full min-h-[300px] bg-[url(/q1ader_bg.png)]
                 bg-cover bg-center bg-no-repeat px-6 py-8 flex flex-col justify-end gap-6"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-transparent to-black" />

      <div className="flex items-center text-xs gap-4">
        <Skeleton className="h-7 w-20 rounded-md " />
        <Skeleton className="h-7 w-24" />
      </div>
      
      <Skeleton className="h-10 w-3/4" />
      
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-2/3" />
      
      <Skeleton className="h-5 w-40" />
      
      <hr className="border-border-3" />
    </div>
  );
};
