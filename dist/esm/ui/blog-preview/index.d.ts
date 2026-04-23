import React from "react";
import { IBlogPreviewProp } from "./types/type";
declare const BlogPreview: React.FC<IBlogPreviewProp>;
export default BlogPreview;
export { BlogPreview };
export type { IBlogPreviewProp, Blog, BlogStatus, Flag } from "./types/type";
export type { HtmlRendererConfig } from "./components/HTMLRenderer/type";
