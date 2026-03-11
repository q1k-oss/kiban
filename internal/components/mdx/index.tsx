import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { Toaster } from '@q1k-oss/kiban';

import { ExternalLinks } from '../external-links';
import { CodePreview } from '../preview';

const generator = createGenerator();

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    Preview: (props: any) => {
      return (
        <CodePreview {...props} />
      )
    },
    Links: (props: any) => {
      return (
        <ExternalLinks {...props} />
      )
    },
    Toaster: () => (
      <Toaster />
    ),
    ...components,
  };
}
