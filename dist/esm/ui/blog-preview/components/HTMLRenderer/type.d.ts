import { CSSProperties } from "react";
export interface HtmlRendererConfig {
    codeBlock?: {
        className?: string;
        wrapperClassName?: string;
        showLanguage?: boolean;
        copyButton?: boolean;
        lineNumbers?: boolean;
        style?: CSSProperties;
        headerLanguageClassName?: string;
        copyButtonClassName?: string;
    };
    headings?: {
        addIds?: boolean;
        addAnchors?: boolean;
        anchorSymbol?: string;
        h1ClassName?: string;
        h2ClassName?: string;
        h3ClassName?: string;
        h4ClassName?: string;
        h5ClassName?: string;
        h6ClassName?: string;
        className?: string;
    };
    links?: {
        openInNewTab?: boolean;
        noFollow?: boolean;
        className?: string;
        onLinkClick?: (href: string, event: React.MouseEvent) => void;
    };
    images?: {
        className?: string;
        wrapperClassName?: string;
        addCaption?: boolean;
        onImageError?: (src: string) => string;
        placeholder?: string;
        priority?: boolean;
        quality?: number;
        fill?: boolean;
        sizes?: string;
        width?: number;
        height?: number;
    };
    paragraphs?: {
        className?: string;
    };
    lists?: {
        ulClassName?: string;
        olClassName?: string;
        liClassName?: string;
    };
    blockquote?: {
        className?: string;
        style?: CSSProperties;
        showIcon?: boolean;
        iconSymbol?: string;
    };
    table?: {
        className?: string;
        theadClassName?: string;
        tbodyClassName?: string;
        trClassName?: string;
        thClassName?: string;
        tdClassName?: string;
        responsive?: boolean;
        striped?: boolean;
    };
    textStyles?: {
        strongClassName?: string;
        emClassName?: string;
        codeClassName?: string;
        underlineClassName?: string;
        delClassName?: string;
    };
    hr?: {
        className?: string;
        style?: CSSProperties;
    };
    wrapper?: {
        className?: string;
        style?: CSSProperties;
        tag?: React.ElementType;
    };
    preprocessing?: {
        removeEmptyParagraphs?: boolean;
        trimWhitespace?: boolean;
        replacePatterns?: Array<{
            find: string | RegExp;
            replace: string;
        }>;
        customTransform?: (html: string) => string;
    };
    sanitization?: {
        allowedTags?: string[];
        stripScripts?: boolean;
        stripStyles?: boolean;
        stripEvents?: boolean;
    };
}
export interface HtmlRendererProps {
    content: string;
    config?: HtmlRendererConfig;
    className?: string;
    style?: CSSProperties;
}
