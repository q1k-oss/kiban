import { DEFAULT_OG_BG_DATA_URL } from './defaultBg';

// Pure-presentational layout for the dynamic OG card. Designed for
// `next/og`'s ImageResponse / Satori — accepts simple JSX with inline
// styles and avoids any client-only APIs (no useState, no event handlers,
// no document/window access). Both q1k-admin and q1k-landing call this
// from their /api/og route so the rendered card stays consistent.

export interface BlogOgImageProps {
  /** Headline shown in the upper-left. */
  title: string;
  /** Optional secondary line under the title. Auto-dropped when the title
   *  alone is long enough that adding it would crowd the card. */
  excerpt?: string;
  /** Optional override for the dark cube-pattern background. When omitted,
   *  the bundled brand placeholder (DEFAULT_OG_BG_DATA_URL) is used —
   *  embedded as a data URL so the Edge runtime doesn't need to make a
   *  self-referential public-HTTPS fetch (which times out on Cloud Run). */
  bgImageUrl?: string;
}

// Tuned for the 1200×630 canvas + sans-serif default font in next/og.
const TEXT_WIDTH = 900;
const TITLE_FONT = 64;
const EXCERPT_FONT = 28;
const APPROX_CHARS_PER_TITLE_LINE = 28;
const MAX_TITLE_LINES_WITH_EXCERPT = 2;
const EXCERPT_MAX_CHARS = 130;

export function BlogOgImage({ title, excerpt = '', bgImageUrl }: BlogOgImageProps) {
  const trimmedTitle = title.trim() || 'Untitled Blog Post';
  const trimmedSrc = excerpt.trim();
  const bgSrc = bgImageUrl || DEFAULT_OG_BG_DATA_URL;

  const titleLines = Math.ceil(trimmedTitle.length / APPROX_CHARS_PER_TITLE_LINE);
  const showExcerpt =
    trimmedSrc.length > 0 && titleLines <= MAX_TITLE_LINES_WITH_EXCERPT;
  const excerptText =
    trimmedSrc.length > EXCERPT_MAX_CHARS
      ? trimmedSrc.slice(0, EXCERPT_MAX_CHARS - 1) + '…'
      : trimmedSrc;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: '#000000',
        fontFamily: '"Maven Pro", sans-serif',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bgSrc}
        width={1200}
        height={630}
        style={{ position: 'absolute', inset: 0 }}
        alt=""
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 80px 0 80px',
          width: TEXT_WIDTH + 160,
        }}
      >
        <div
          style={{
            fontSize: TITLE_FONT,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {trimmedTitle}
        </div>
        {showExcerpt && (
          <div
            style={{
              marginTop: 24,
              fontSize: EXCERPT_FONT,
              color: '#b0b0b8',
              lineHeight: 1.35,
            }}
          >
            {excerptText}
          </div>
        )}
      </div>
    </div>
  );
}
