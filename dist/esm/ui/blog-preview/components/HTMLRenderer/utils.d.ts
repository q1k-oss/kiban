export declare const generateId: (text: string) => string;
export declare const extractTextContent: (html: string) => string;
export declare const parseAttributes: (attrString: string) => Record<string, string>;
export declare const BLOCK_TAGS: Set<string>;
export declare const sanitizeHtml: (html: string, config?: {
    allowedTags?: string[];
    stripScripts?: boolean;
    stripStyles?: boolean;
    stripEvents?: boolean;
}) => string;
