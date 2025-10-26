'use server';

import { readFile } from 'fs/promises';

import { TableOfContents } from 'fumadocs-core/server';

import { sanitizeUrl } from './common';

const getFileContents = async (filePath: string): Promise<string> => {
  try {
    const fileBuffer = await readFile(filePath);
    return fileBuffer.toString('utf8');
  } catch (error) {
    console.error(error);
  }

  return '';
}

export const getCustomContentToc = async (toc: TableOfContents, filePath: string) : Promise<TableOfContents> => {
  const newTOCs: TableOfContents = [];

  const fileContents = await getFileContents(filePath);

  const sections = fileContents.split(/(?=###\s)/g).slice(1);

  sections.map(section => {
    const headingMatch = section.match(/^###\s(.+)/); 
    const previews = section.match(/<Preview\s+[^>]*\/>/g) || [];

    newTOCs.push({
      title: headingMatch ? headingMatch[1].trim(): "Example",
      url: `#${sanitizeUrl(headingMatch ? headingMatch[1].trim().replace(/\s+/g, '-')  : "Example")}`,
      depth: 3
    });

    previews.map(element => {
      const titleMatch = element.match(/title=["']([^"']+)["']/);

      newTOCs.push({
        title: titleMatch ? titleMatch[1] : "Default",
        url: `#${sanitizeUrl(titleMatch ? titleMatch[1].replace(/\s+/g, '-')  : "Default")}`,
        depth: 4
      });
    });
  });

  return [
    ...newTOCs,
  ]
};