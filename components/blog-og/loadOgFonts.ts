// Loads Maven Pro at the weights `BlogOgImage` uses (regular for the
// excerpt, extrabold for the title) from the Google Fonts static CDN, and
// returns the descriptor array `next/og`'s `ImageResponse` expects.
//
// Done at runtime rather than bundled because:
//   1) The Edge runtime can't `import` binary assets from a published npm
//      package without a custom loader.
//   2) Google Fonts serves a TTF when the request UA isn't a modern
//      browser — we explicitly opt into that so Satori (which only handles
//      TTF/OTF/WOFF, not WOFF2) gets a parseable file.
//
// Cached at module scope so a hot dev server doesn't refetch on every
// request.

const FONT_FAMILY = 'Maven Pro';
const WEIGHTS = [400, 800] as const;

// UA that nudges Google Fonts to return TTF instead of WOFF2.
const TTF_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.36 (KHTML, like Gecko)';

interface FontDescriptor {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 800;
  style: 'normal';
}

let cached: FontDescriptor[] | null = null;

async function fetchOne(weight: number): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    FONT_FAMILY,
  )}:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, { headers: { 'User-Agent': TTF_UA } }).then(
    (r) => r.text(),
  );
  const match = css.match(/src:\s*url\((https?:\/\/[^)]+)\)\s*format\(['"]truetype['"]\)/);
  if (!match) {
    throw new Error(
      `Could not extract Maven Pro @${weight} TTF URL from Google Fonts CSS`,
    );
  }
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export async function loadOgFonts(): Promise<FontDescriptor[]> {
  if (cached) return cached;
  const buffers = await Promise.all(WEIGHTS.map((w) => fetchOne(w)));
  cached = WEIGHTS.map((weight, i) => ({
    name: FONT_FAMILY,
    data: buffers[i]!,
    weight,
    style: 'normal' as const,
  }));
  return cached;
}
