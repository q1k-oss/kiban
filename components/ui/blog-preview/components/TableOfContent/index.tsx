import { useEffect, useMemo, useState } from 'react';


import { AppIcon } from "../../../app-icon";
import { cn } from "../../../../utils/cn";

import { useActiveHeading } from './useActiveHeading';

type HeadingTag = {
  level: number; // 1 to 6
  text: string;
  id: string;
};

// Mirror of HtmlRenderer's `generateId` so the TOC produces the same id the
// HeadingRenderer puts on the rendered heading element. If they diverge,
// document.getElementById(...) returns null in useActiveHeading and the
// progress rail never advances past 0%.
function generateIdFromText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

function getAllHeadings(html: string): HeadingTag[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  return Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(
    (el) => {
      // Extract text: prefer non-anchor text, fall back to anchor text
      const clone = el.cloneNode(true) as HTMLElement;
      const anchors = clone.querySelectorAll('.heading-anchor');
      const anchorText = anchors.length > 0 ? anchors[0].textContent?.trim() || '' : '';
      anchors.forEach((a) => a.remove());

      const remainingText = clone.textContent?.trim() || '';
      const text = remainingText || anchorText;
      // Use the heading's id, or extract from heading-anchor href, or
      // fall back to a generated slug — same algorithm HeadingRenderer
      // uses so the TOC link targets the actual rendered heading id.
      let id = el.id;
      if (!id) {
        const anchor = el.querySelector('.heading-anchor');
        const href = anchor?.getAttribute('href');
        if (href?.startsWith('#')) {
          id = href.slice(1);
        }
      }
      if (!id && text) {
        id = generateIdFromText(text);
      }

      return { level: Number(el.tagName.replace('H', '')), text, id };
    },
  );
}

interface ITableOfContentProp {
  blogContent: string;
}
export default function TableOfContent({
  blogContent,
}: ITableOfContentProp) {
  const [expanded, setExpanded] = useState(false);
  const [result, setResult] = useState<HeadingTag[]>([]);

  useEffect(() => {
    // Skip TL;DR sections from the TOC even when authors include the heading
    // in the body — design treats it as part of the prose, not a navigable
    // anchor. Strip ALL non-letter chars so we catch "TL;DR", "TL:DR",
    // "TL DR", "TLDR", etc. — whatever punctuation the author used.
    const headings = getAllHeadings(blogContent).filter(
      (h) => h.text.replace(/[^a-zA-Z]/g, '').toLowerCase() !== 'tldr',
    );
    setResult(headings);
  }, [blogContent]);
  const headingIds = useMemo(() => result.map((h) => h.id), [result]);
  const activeId = useActiveHeading(headingIds);

  const indentMap: Record<number, string> = {
    1: 'ml-0 mt-4',
    2: 'ml-6 mt-2',
    3: 'ml-10 mt-0',
    4: 'ml-14',
    5: 'ml-18',
    6: 'ml-22',
  };

  const activeIndex = headingIds.indexOf(activeId);
  const progress =
    activeIndex >= 0 ? ((activeIndex + 1) / headingIds.length) * 100 : 0;

  // No headings → no TOC. Avoids rendering an empty progress rail.
  if (result.length === 0) return null;

  return (
    <div className="relative hidden md:flex">

     {/* Progress rail. Faint white track + warm gold fill — matches the
         calm palette of the q1k-console sign-in card. The fill is fully
         opaque at the warm hue so the active reading position reads
         clearly against the dim track. */}
     <div className="relative w-1 rounded-full overflow-hidden self-stretch bg-white/10">
        <div
          className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
          style={{
            height: `${progress}%`,
            background: '#e7c9a8',
          }}
        />
      </div>
      <div className="relative pl-4">
        <div
          className={`transition-all duration-300 overflow-hidden ${
            expanded ? 'max-h-none' : 'max-h-80'
          }`}
          style={
            !expanded
              ? {
                  maskImage:
                    'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 60%, transparent 100%)',
                }
              : undefined
          }
        >
          <nav
            className={`overflow-hidden ${
              expanded ? 'overflow-visible' : 'overflow-y-hidden'
            }`}
          >
            <h2 className="font-semibold text-lg mb-4">Table of Contents</h2>

            <ul className="list-none pl-0" style={{ listStyle: 'none' }}>
              {result.map((head, idx) => (
                <li
                  key={idx}
                  className={indentMap[head.level]}
                  style={{ listStyle: 'none' }}
                >
                  <a
                    href={`#${head.id}`}
                    className={cn(
                      'block my-1 text-sm transition-colors',
                      head.id === activeId
                        ? 'text-[#e7c9a8] font-medium'
                        : 'text-zinc-400 font-light hover:text-zinc-200',
                    )}
                    onClick={(e) => {
                      // Smooth scroll behavior
                      e.preventDefault();
                      document.getElementById(head.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                      
                      window.history.pushState(null, '', `#${head.id}`);
                    }}
                  >
                    {head.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {!expanded && (
          <div
            className="group absolute bottom-0 left-0 right-0 h-12
             flex items-end justify-center z-1000"
          >
            <div
              onClick={() => setExpanded(true)}
              className="opacity-0 translate-y-2
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-300 cursor-pointer ml-2 mb-1 z-1000"
            >
              <AppIcon
                iconName="chevron-down"
                size={26}
                className="text-primary-text"
                strokeWidth={2}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
