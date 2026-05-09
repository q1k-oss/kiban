import { cn } from '../../../utils/cn';
import { ISingleBlogAuthorProp } from '../types/type';

// Wrap any Q1k brand mention ("Q1k.ai", "q1kai", etc.) in a span so the host
// app can style it with the brand monospace font (Q1k uses DM Mono). Keeps
// kiban decoupled from a specific font — consumers map `.brand-name` in
// their own CSS.
const BRAND_PATTERN = /q1\s*k\.?\s*ai/gi;
function renderWithBrand(text: string) {
  const parts: Array<string | { brand: string; key: number }> = [];
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(BRAND_PATTERN)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push({ brand: match[0], key: i++ });
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p) =>
    typeof p === 'string' ? (
      p
    ) : (
      <span key={p.key} className="brand-name">
        {p.brand}
      </span>
    ),
  );
}

const SingleBlogAuthor = ({
  className,
  blogAuthorName,
  blogAuthorRole,
  blogAuthorBio,
  blogAuthorAvatar,
}: ISingleBlogAuthorProp) => {
  // Initials fallback for the avatar circle when no image URL is provided —
  // keeps the "circle on the left" visual rhythm of the card.
  const initials = (blogAuthorName ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div className={cn('border border-border-3 p-6 rounded-lg', className)}>
      <div className="flex items-center gap-4">
        {blogAuthorAvatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blogAuthorAvatar}
            alt={`${blogAuthorName} avatar`}
            className="h-12 w-12 rounded-full object-cover border border-border-3 shrink-0"
          />
        ) : initials ? (
          <span
            aria-hidden
            className="h-12 w-12 rounded-full flex items-center justify-center text-sm font-semibold text-primary-text bg-button-fill-3 border border-border-3 shrink-0"
          >
            {initials}
          </span>
        ) : null}
        <div className="min-w-0">
          <h1 className="text-base text-primary-text font-semibold leading-tight">
            {blogAuthorName}
          </h1>
          {blogAuthorRole && (
            <p className="text-secondary-text text-sm leading-tight mt-0.5">
              {renderWithBrand(blogAuthorRole)}
            </p>
          )}
        </div>
      </div>
      {blogAuthorBio && (
        <>
          <hr className="my-4 border-border-3" />
          <p className="text-secondary-text text-sm leading-relaxed">
            {blogAuthorBio}
          </p>
        </>
      )}
    </div>
  );
};

export default SingleBlogAuthor;
