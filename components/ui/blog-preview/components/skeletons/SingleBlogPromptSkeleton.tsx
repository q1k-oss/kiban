import React from 'react';

import { cn } from '../../../../utils/cn';
import { Skeleton } from "../../../skeleton";


export default function SingleBlogPromptSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div>
      {' '}
      <div
        className={cn(
          'p-6 flex flex-col gap-4 ',
          className,
        )}
      >
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <div className="w-full flex items-center justify-end mt-4">
          <Skeleton className="w-20 h-8" />
        </div>
      </div>
    </div>
  );
}
