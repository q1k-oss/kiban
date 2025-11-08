'use client';

import { transformerRemoveNotationEscape } from '@shikijs/transformers';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createHighlighter, type Highlighter } from 'shiki';

// Singleton highlighter instance
let highlighterInstance: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = async (): Promise<Highlighter> => {
  if (highlighterInstance) {
    return highlighterInstance;
  }
  
  if (highlighterPromise) {
    return highlighterPromise;
  }
  
  highlighterPromise = createHighlighter({
    themes: ['one-light', 'ayu-dark'],
    langs: ['tsx', 'javascript', 'typescript', 'json', 'css', 'html', 'jsx', 'ts'],
  });
  
  highlighterInstance = await highlighterPromise;
  return highlighterInstance;
};

export default function CodeBlockClient(props: any) {
  const {
    code,
    lang = 'tsx',
  } = props ?? {};
  
  const [highlightedCode, setHighlightedCode] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const highlightCode = async () => {
      try {
        const highlighter = await getHighlighter();

        const out = highlighter.codeToHast(code, {
          lang,
          themes: {
            light: 'one-light',
            dark: 'ayu-dark',
          },
          transformers: [
            transformerRemoveNotationEscape(),
          ],
        });

        if (isMounted) {
          const jsxElement = toJsxRuntime(out, {
            Fragment,
            jsx,
            jsxs,
            components: {
              pre: props => <pre data-custom-codeblock {...props} className='not-prose text-xs highlight' />
            },
          });
          
          setHighlightedCode(jsxElement);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error highlighting code:', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    highlightCode();

    return () => {
      isMounted = false;
    };
  }, [code, lang]);

  if (isLoading) {
    return (
      <pre data-custom-codeblock className='not-prose text-xs highlight'>
        <code>{code}</code>
      </pre>
    );
  }

  return highlightedCode;
}