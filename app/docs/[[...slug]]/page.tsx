import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

import { source } from '@/app/source';
import { getMDXComponents } from '@/internal/components/mdx';
// import { getCustomContentToc } from '@/internal/utils/get-toc';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const pageParams = await params;
  const page = source.getPage(pageParams.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // const toc = await getCustomContentToc(
  //   page.data.toc,
  //   page.data._file.absolutePath,
  // );

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
          // components={{ ...defaultMdxComponents, ...CustomMdxComponents }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}