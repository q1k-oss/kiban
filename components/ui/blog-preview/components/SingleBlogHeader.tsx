import { format } from 'date-fns';
import SingleBlogHeaderBackground from './SingleBlogHeaderBackground';
import { ISingleBlogHeaderProp } from '../types/type';
import { cn } from '@happect/ethereal-ui';

export default function SingleBlogHeader({
  blogFlagName,
  excerpt,
  updatedAt,
  title,
  className,
}: ISingleBlogHeaderProp) {
  return (
    <div
      className={cn(
        'relative w-full min-h-80 bg-cover bg-center bg-no-repeat  flex flex-col justify-end gap-10 md:gap-8',
        className,
      )}
    >
      <SingleBlogHeaderBackground className="absolute inset-0 z-0 hidden md:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-0 bg-linear-to-b from-transparent to-black" />

      <div className="flex items-center  gap-4 z-100">
        <span className="px-2 py-1.5 text-primary-text bg-button-fill-3 rounded-sm font-medium text-base  md:text-xs">
          {blogFlagName}
        </span>
        <span className="text-base md:text-sm">. 4 min read</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-semibold text-primary-text z-10">
        {title}
      </h1>
      <p className="text-secondary-text font-light text-lg z-10">{excerpt}</p>
      <p className="text-secondary-text font-light z-10">
        Updated, {format(new Date(updatedAt), 'MMM dd, yyyy')}
      </p>
      <hr className="border-border-3 z-10" />
    </div>
  );
}
