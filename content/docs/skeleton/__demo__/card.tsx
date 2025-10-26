import { Skeleton } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col space-y-3">
    <div className="space-y-2">
      <Skeleton className="h-10 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <Skeleton className="h-[125px] w-full rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
    <div className="flex items-center space-x-2 pt-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  </div>
) 