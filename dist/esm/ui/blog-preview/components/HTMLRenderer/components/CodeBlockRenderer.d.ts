import React from 'react';
import { HtmlRendererConfig } from '../type';
declare const CodeBlockRenderer: React.FC<{
    language: string;
    code: string;
    config?: HtmlRendererConfig['codeBlock'];
}>;
export { CodeBlockRenderer };
