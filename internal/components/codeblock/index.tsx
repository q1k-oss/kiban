import { transformerRemoveNotationEscape } from '@shikijs/transformers';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

export default async function CodeBlock(props: any) {
  const {
    code,
    lang = 'tsx',
  } = props ?? {};
  
  const out = await codeToHast(code, {
    lang,
    themes: {
      light: 'one-light',
      dark: 'ayu-dark',
    },
    transformers: [
      transformerRemoveNotationEscape(),
    ],
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: props => <pre data-custom-codeblock {...props} className='not-prose text-xs highlight' />
    },
  })
}