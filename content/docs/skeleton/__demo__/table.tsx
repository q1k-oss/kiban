import { Skeleton } from 'ethereal-ui';

export default () => (
  <div className="w-full">
    {/* Table header */}
    <div className="flex border-b pb-2 pt-4">
      <div className="w-[35%]">
        <Skeleton className="h-5 w-[120px]" />
      </div>
      <div className="w-[25%]">
        <Skeleton className="h-5 w-[80px]" />
      </div>
      <div className="w-[20%]">
        <Skeleton className="h-5 w-[80px]" />
      </div>
      <div className="w-[20%]">
        <Skeleton className="h-5 w-[80px]" />
      </div>
    </div>
    
    {/* Table rows */}
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center border-b py-4">
        <div className="flex w-[35%] items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-3 w-[80px]" />
          </div>
        </div>
        <div className="w-[25%]">
          <Skeleton className="h-4 w-[100px]" />
        </div>
        <div className="w-[20%]">
          <Skeleton className="h-4 w-[60px]" />
        </div>
        <div className="w-[20%]">
          <Skeleton className="h-8 w-[80px] rounded-md" />
        </div>
      </div>
    ))}
  </div>
) 