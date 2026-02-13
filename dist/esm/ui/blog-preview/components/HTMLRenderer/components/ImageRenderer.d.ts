import React from 'react';
import { HtmlRendererConfig } from '../type';
declare const ImageRenderer: React.FC<{
    src: string;
    alt: string;
    config?: HtmlRendererConfig['images'];
}>;
export { ImageRenderer };
