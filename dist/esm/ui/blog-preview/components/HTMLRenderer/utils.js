// Helper functions for HTML rendering
// Generate ID from text
export const generateId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};
// Extract text content from HTML
export const extractTextContent = (html) => {
    return html.replace(/<[^>]*>/g, '');
};
// Parse HTML attributes
export const parseAttributes = (attrString) => {
    const attrs = {};
    const attrRegex = /(\w+)(?:\s*=\s*["']([^"']*)["'])?/g;
    let match;
    while ((match = attrRegex.exec(attrString)) !== null) {
        attrs[match[1]] = match[2] || '';
    }
    return attrs;
};
// Block tags that shouldn't be wrapped in <p>
export const BLOCK_TAGS = new Set([
    'img',
    'figure',
    'table',
    'pre',
    'code',
    'ul',
    'ol',
    'blockquote',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
]);
// Basic HTML sanitization
export const sanitizeHtml = (html, config) => {
    let sanitized = html;
    // Strip scripts
    if ((config === null || config === void 0 ? void 0 : config.stripScripts) !== false) {
        sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    }
    // Strip inline styles
    if (config === null || config === void 0 ? void 0 : config.stripStyles) {
        sanitized = sanitized.replace(/style\s*=\s*["'][^"']*["']/gi, '');
        sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    }
    // Strip event handlers
    if ((config === null || config === void 0 ? void 0 : config.stripEvents) !== false) {
        sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
    }
    // Filter allowed tags
    if ((config === null || config === void 0 ? void 0 : config.allowedTags) && config.allowedTags.length > 0) {
        const allowedPattern = config.allowedTags.join('|');
        const tagRegex = new RegExp(`<(?!\\/?(${allowedPattern})\\b)[^>]+>`, 'gi');
        sanitized = sanitized.replace(tagRegex, '');
    }
    return sanitized;
};
