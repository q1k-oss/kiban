import { Skeleton } from "../../../skeleton";


export const SingleBlogTOCSkeleton = () => {
  return (
    <div className="relative hidden md:flex ">
      <div className="relative w-1 rounded-full overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="relative pl-4 w-full">
        <div
          className="overflow-hidden max-h-80"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        >
          <Skeleton className="w-40 h-6 mb-4" />

          <div className="flex flex-col gap-2 pl-4">
            <Skeleton className="w-full h-4 ml-0" />
            <Skeleton className="w-1/2 h-4 ml-6" />
            <Skeleton className="w-1/3 h-4 ml-10" />
            <Skeleton className="w-1/2 h-4 ml-10" />
            <Skeleton className="w-1/3 h-4 ml-14" />
            <Skeleton className="w-full h-4 ml-0" />
            <Skeleton className="w-1/2 h-4 ml-6" />
            <Skeleton className="w-1/3 h-4 ml-10" />
            <Skeleton className="w-1/2 h-4 ml-10" />
            <Skeleton className="w-full h-4 ml-0" />
            <Skeleton className="w-1/2 h-4 ml-6" />
            <Skeleton className="w-1/3 h-4 ml-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
