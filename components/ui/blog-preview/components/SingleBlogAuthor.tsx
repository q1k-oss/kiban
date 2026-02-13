import { cn } from '@happect/ethereal-ui';
import { ISingleBlogAuthorProp } from '../types/type';

const SingleBlogAuthor = ({
  className,
  blogAuthorName,
  blogAuthorEmail,
}: ISingleBlogAuthorProp) => {
  return (
    <div className={cn('border-2 border-border-3 p-6 rounded-lg', className)}>
      <div className="flex items-start justify-start gap-4">
        
        <div>
          <h1 className="text-lg text-primary-text font-semibold">
            {blogAuthorName}
          </h1>
          <p className="text-primary-text">{blogAuthorEmail}</p>
        </div>
      </div>
      <p className="mt-6 text-secondary-text">About Author</p>
    </div>
  );
};

export default SingleBlogAuthor;
