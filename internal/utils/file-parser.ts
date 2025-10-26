'use server';

import { readFile } from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function getFileContent(filePath: string): Promise<string> {
  const fileBuffer = await readFile(`${__dirname.replace('\\internal\\utils', '').replace('/internal/utils', '')}${filePath}`);
  return fileBuffer.toString('utf8');
}
