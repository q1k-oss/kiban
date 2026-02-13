'use client';

import React from 'react';


import { AppIcon, IconSource } from '../app-icon';
import { Skeleton } from '../skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip';

import FloatingBuildAgentButton from './components/FloatingBuildAgentButton';
import HtmlRenderer from './components/HTMLRenderer';
import SingleBlogAuthor from './components/SingleBlogAuthor';
import SingleBlogHeader from './components/SingleBlogHeader';
import { SingleBlogPrompt } from './components/SingleBlogPrompt';
import { SingleBlogSummary } from './components/SingleBlogSummary';
import SingleBlogAuthorSkeleton from './components/skeletons/SingleBlogAuthorSkeleton';
import { SingleBlogContentSkeleton } from './components/skeletons/SingleBlogContentSkeleton';
import { SingleBlogHeaderSkeleton } from './components/skeletons/SingleBlogHeaderSkeleton';
import SingleBlogPromptSkeleton from './components/skeletons/SingleBlogPromptSkeleton';
import { SingleBlogSummarySkeleton } from './components/skeletons/SingleBlogSummarySkeleton';
import { SingleBlogTOCSkeleton } from './components/skeletons/SingleBlogTOCSkeleton';
import TableOfContent from './components/TableOfContent';
import { ISingleBlogViewProp } from './types/type';


const SOCIAL_MEDIA = [
  { id: 1, title: 'Copy link', icon: 'link', source: 'lucide' },
  { id: 2, title: 'X(twitter)', icon: 'custom-xtwitter', source: 'custom' },
  { id: 3, title: 'Facebook', icon: 'custom-facebook-fill', source: 'custom' },
  { id: 4, title: 'LinkedIn', icon: 'custom-linkedin-fill', source: 'custom' },
  { id: 5, title: 'Reddit', icon: 'custom-reddit-fill', source: 'custom' },
];
const SingleBlogView: React.FC<ISingleBlogViewProp> = ({
  loading,
  blog,
  error,
}) => {
  const renderSocialMediaIcons = () => {
    if (loading) {
      return Array.from({ length: 5 }).map((_, idx) => (
        <Skeleton key={idx} className="w-10 h-10" />
      ));
    }
    return SOCIAL_MEDIA.map((media, idx) => {
      return (
        <Tooltip key={idx}>
          <TooltipTrigger asChild>
            <div
              className="border border-border-3 rounded-sm p-2.5 cursor-pointer"
              onPointerDown={(e) => e.preventDefault()}
            >
              <AppIcon
                iconName={media.icon}
                size={16}
                source={media.source as IconSource}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary-foreground text-black">
            {media.title}
          </TooltipContent>
        </Tooltip>
      );
    });
  };

  const renderBlogHeader = () => {
    if (loading) {
      return <SingleBlogHeaderSkeleton />;
    } else if (blog) {
      return (
        <SingleBlogHeader
          title={blog.title}
          excerpt={blog.excerpt}
          blogFlagName={blog.flag?.name}
          updatedAt={blog.updatedAt}
          className='px-0 md:px-6 pt-4 md:pt-14 pb-6'
          
        />
      );
    } else {
      return <h1>Blog Header not found</h1>;
    }
  };
  const renderBlogSummary = () => {
    if (loading) {
      return <SingleBlogSummarySkeleton />;
    } else if (blog?.summary) {
      return <SingleBlogSummary blogSummary={blog.summary} />;
    } else {
      return <h1>Blog Summary not found</h1>;
    }
  };
  const renderBlogContent = () => {
    if (loading) {
      return <SingleBlogContentSkeleton />;
    } else if (blog) {
      return (
        <div className="w-full">
          <HtmlRenderer
            content={blog.content}
            config={{
              codeBlock: {
                wrapperClassName:
                  'border border-stroke p-6 rounded-xl text-icon-color-default text-base',
                showLanguage: true,
                copyButton: true,
                lineNumbers: false,
                className:
                  'mt-4 text-icon-color-default font-light text-sm leading-6 py-1',
                headerLanguageClassName:
                  'text-icon-color-default text-md! capitalize pb-4',
              },
              headings: {
                addIds: true,
                h1ClassName: 'text-2xl font-bold mt-8 mb-5',
                h2ClassName: 'text-xl font-bold mt-6 mb-4',
                h3ClassName: 'text-lg font-semibold mt-4 mb-3',
              },

              links: {
                // className: 'text-blue-600 hover:underline',
                openInNewTab: false,
              },
              images: {
                className: 'rounded-sm shadow-md',

                addCaption: true,
              },
              paragraphs: {
                className: 'text-secondary-text text-lg font-light ',
              },
              blockquote: {
                className:
                  'border-l border-stroke bg-white/5 py-2 my-4 italic px-2 text-secondary-text',

                // showIcon: true,
              },
              wrapper: {
                tag: 'article',
                className: 'prose prose-lg',
              },
              lists: {
                ulClassName: 'list-disc ml-6 my-5',
                olClassName: 'list-decimal ml-6 my-5 font-bold',
                liClassName: 'my-1 font-semi-bold',
              },
              hr: {
                className: 'my-8 border-t border-border-3 ',
              },
            }}
          />
        </div>
      );
    } else {
      return <h1>Blog Content not found</h1>;
    }
  };

  const renderBlogTag = () => {
    if (loading) {
     return Array.from({ length: 4 }).map((_, idx) => (
        <Skeleton key={idx} className="w-16 h-8" />
      ));
    } else if (blog.tags) {
      const tagsArray = blog.tags.split(',');
      return tagsArray.map((tag, idx) => {
        return (
          <span
            key={idx}
            className="py-2 px-4 text-sm bg-minimap border border-border-3 font-light rounded-sm text-secondary-text "
          >
            {tag}
          </span>
        );
      });
    } else {
      return <h1>Blog Tags not found</h1>;
    }
  };

  const renderAuthorDetails = () => {
    if (loading) {
      return <SingleBlogAuthorSkeleton />;
    } else if (blog.authorEmail && blog.authorName) {
      return (
        <SingleBlogAuthor
          blogAuthorEmail={blog.authorEmail}
          blogAuthorName={blog.authorName}
        />
      );
    } else {
      return <h1>Blog Author not found</h1>;
    }
  };
  const renderBlogTOC = () => {
    if (loading) {
      return <SingleBlogTOCSkeleton />;
    } else if (blog?.content) {
      return <TableOfContent blogContent={blog.content} />;
    } else {
      return <h1>Blog Table of content not found</h1>;
    }
  };

  const renderBlogPrompt = () => {
    if (loading) {
      return <SingleBlogPromptSkeleton/>
    } else if (blog?.prompt) {
      return <SingleBlogPrompt blogPrompt={blog.prompt} />;
    } else {
      return <h1>Blog Prompt not found</h1>;
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center max-w-md p-8 border border-red-500 rounded-lg bg-red-50 dark:bg-red-900/10">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
            Error Loading Blog
          </h1>
          <p className="text-red-500 dark:text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" md:pt-5">
      <div>{renderBlogHeader()}</div>
      <div className="flex items-start gap-10 relative mt-2 md:mt-6 ">
        <div className="w-full px-0 md:px-6">
          <div className="mb-6">{renderBlogSummary()}</div>
          <div className="md:px-8">
            <div>{renderBlogContent()}</div>
            <div className=" flex items-start justify-start gap-4 mt-12">
              <span className="text-lg  text-icon-color-default mr-4">
                Tags:
              </span>
              <div className="flex flex-wrap justify-start gap-4">
                {renderBlogTag()}
              </div>
            </div>
            <div className=" mt-12">{renderAuthorDetails()}</div>
          </div>
        </div>
        <div className="hidden md:block w-full max-h-screen overflow-y-scroll max-w-xs sticky top-4 pb-20 no-scrollbar">
          {renderBlogTOC()}
          <div className="flex items-center justify-center gap-2 my-10">
            <TooltipProvider>{renderSocialMediaIcons()}</TooltipProvider>
          </div>
          <div className="mt-10">
            <span className="text-primary-text font-semibold text-lg">
              Ready to turn ideas into action?
            </span>
            <div className="mt-4">{renderBlogPrompt()}</div>
          </div>
        </div>
      </div>
      <FloatingBuildAgentButton />
    </div>
  );
};

export default SingleBlogView;
export { SingleBlogView };
export type { ISingleBlogViewProp, IBlog } from './types/type';
