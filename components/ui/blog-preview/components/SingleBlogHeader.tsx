import { format, isValid } from 'date-fns';

import { cn } from '../../../utils/cn';
import { ISingleBlogHeaderProp } from '../types/type';

import InlineShareWidget from './InlineShareWidget';
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
  shareUrl,
  shareTitle,
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
          {blogFlagName && readTime && (
            <span aria-hidden className="text-secondary-text text-xs">
              •
            </span>
          )}
          {readTime && <span className="text-sm">{readTime}</span>}
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
      {(formattedDate || shareUrl) && (
        <div className="flex items-center justify-between gap-4 z-10">
          {formattedDate ? (
            <p className="text-secondary-text font-light">
              Updated, {formattedDate}
            </p>
          ) : (
            <span />
          )}
          {shareUrl && (
            <div className="md:hidden">
              <InlineShareWidget url={shareUrl} title={shareTitle} />
            </div>
          )}
        </div>
      )}
      <hr className="border-border-3 z-10" />
    </div>
  );
}
