import { format, isValid } from 'date-fns';

import { cn } from '../../../utils/cn';
import { ISingleBlogHeaderProp } from '../types/type';

import SingleBlogHeaderBackground from './SingleBlogHeaderBackground';

function formatDate(value: string): string | null {
  const date = new Date(value);
  if (!isValid(date)) return null;
  return format(date, 'MMM dd, yyyy');
}

export default function SingleBlogHeader({
  blogFlagName,
  excerpt,
  updatedAt,
  title,
  readTime,
  className,
}: ISingleBlogHeaderProp) {
  const formattedDate = updatedAt ? formatDate(updatedAt) : null;
  return (
    <div
      className={cn(
        'relative w-full min-h-80 bg-cover bg-center bg-no-repeat  flex flex-col justify-end gap-10 md:gap-8',
        className,
      )}
    >
      <SingleBlogHeaderBackground className="absolute inset-0 z-0 hidden md:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-0 bg-linear-to-b from-transparent to-black" />

      {(blogFlagName || readTime) && (
        <div className="flex flex-wrap items-center gap-2 z-10">
          {blogFlagName && (
            <span className="px-2 py-1.5 text-primary-text bg-button-fill-3 rounded-sm font-medium text-xs">
              {blogFlagName}
            </span>
          )}
          {readTime && <span className="text-sm ml-2">{readTime}</span>}
        </div>
      )}
      {title && (
        <h1 className="text-3xl lg:text-5xl font-semibold text-primary-text z-10">
          {title}
        </h1>
      )}
      {excerpt && (
        <p className="text-secondary-text font-light text-lg z-10">{excerpt}</p>
      )}
      {formattedDate && (
        <p className="text-secondary-text font-light z-10">
          Updated, {formattedDate}
        </p>
      )}
      <hr className="border-border-3 z-10" />
    </div>
  );
}
