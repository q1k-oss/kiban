import { cn } from '../../../utils/cn';
import { ISingleBlogAuthorProp } from '../types/type';

const SingleBlogAuthor = ({
  className,
  blogAuthorName,
  blogAuthorEmail,
  blogAuthorRole,
  blogAuthorBio,
  blogAuthorAvatar,
}: ISingleBlogAuthorProp) => {
  return (
    <div className={cn('border-2 border-border-3 p-6 rounded-lg', className)}>
      <div className="flex items-start justify-start gap-4">
        {blogAuthorAvatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blogAuthorAvatar}
            alt={`${blogAuthorName} avatar`}
            className="h-14 w-14 rounded-full object-cover border border-border-3"
          />
        )}
        <div className="min-w-0">
          <h1 className="text-lg text-primary-text font-semibold leading-tight">
            {blogAuthorName}
          </h1>
          {blogAuthorRole && (
            <p className="text-secondary-text text-sm leading-tight">
              {blogAuthorRole}
            </p>
          )}
          {blogAuthorEmail && (
            <p className="text-primary-text text-sm mt-1">{blogAuthorEmail}</p>
          )}
        </div>
      </div>
      {blogAuthorBio ? (
        <p className="mt-4 text-secondary-text text-sm leading-relaxed">
          {blogAuthorBio}
        </p>
      ) : (
        <p className="mt-6 text-secondary-text">About Author</p>
      )}
    </div>
  );
};

export default SingleBlogAuthor;
