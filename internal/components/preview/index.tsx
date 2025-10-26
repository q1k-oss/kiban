'use server';

import dynamic from 'next/dynamic';

import { sanitizeUrl } from '@/internal/utils/common';
import { getFileContent } from '@/internal/utils/file-parser';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Skeleton,
} from 'ethereal-ui';

import { CopyToClipboard } from '../copy-to-clipboard';


const CodeBlock = dynamic(() => import('../codeblock'), {
  loading: () => <Skeleton className='w-full h-[480px]' />,
});

export const CodePreview = async ({
  children,
  file,
  lang,
  title = 'Default',
  description,
}: any) => {
  let internalLang = lang ?? file?.split('.').pop() ?? null;

  if (
    file
    && typeof file === 'string'
    && internalLang != null
  ) {
    let Component = null;
    let fileContents = '';
    
    try {
      Component = dynamic(() => import(`../../../content/docs${file}`), {
        loading: () => <Skeleton className='w-full h-[480px]' />,
      });      
    } catch (error) {
      console.error(`Error loading component: ${file}`, error);
    }

    try {
      fileContents = await getFileContent(`/content/docs${file}.tsx`);
    } catch (error) {
      console.error(`Error loading file contents: ${file}`, error);
    }
    
    if (!Component) {
      return children;
    }

    return (
      <div className='not-prose w-full md:pl-4 relative'>
        <Tabs defaultValue='preview'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between items-center flex-wrap'>
              <h4 id={title} className='font-bold'>
                <a href={`#${sanitizeUrl(title)}`} className='group flex flex-row gap-1'>
                  {title}
                  <span className='hidden group-hover:block text-blue-500'>
                    #
                  </span>
                </a>
              </h4>
              <div className='flex flex-row gap-2 items-center'>
                <TabsList>
                  <TabsTrigger value='preview'>Preview</TabsTrigger>
                  <TabsTrigger value='code'>Code</TabsTrigger>
                </TabsList>
                <CopyToClipboard text={fileContents} />
              </div>
            </div>
          </div>          
          <div className='border rounded-lg my-4'>
            <TabsContent value='preview' className='!mt-0 p-4 relative'>
              <Component />
            </TabsContent>
            <TabsContent value='code' className='!mt-0 h-fit max-h-[320px] overflow-y-auto overflow-x-auto p-4'>
              <CodeBlock code={fileContents} lang={internalLang} />
            </TabsContent>
            {
              description ? (
                <div className='text-sm text-fd-muted-foreground border border-t p-4'>
                  {description}
                </div>
              ) : null
            }
          </div>
        </Tabs>
      </div>
    )
  }

  return children;
};
