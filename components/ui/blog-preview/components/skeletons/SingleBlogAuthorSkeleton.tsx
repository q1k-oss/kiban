import { cn } from '../../../../utils/cn';
import { Skeleton } from "../../../skeleton";

interface ISingleBlogAuthorSkeleton {
  className?: string;
}
const SingleBlogAuthorSkeleton = ({ className }: ISingleBlogAuthorSkeleton) => {
  return (
    <div className={cn('border-2 border-border-3 p-6 rounded-lg', className)}>
      <div className="w-full">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-5 w-1/2 mt-2" />
      </div>

      <Skeleton className="h-5 w-full mt-6" />
    </div>
  );
};

export default SingleBlogAuthorSkeleton;
