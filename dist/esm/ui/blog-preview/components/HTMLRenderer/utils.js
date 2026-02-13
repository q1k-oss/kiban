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
// Dangerous URI protocol pattern
const DANGEROUS_URI = /^\s*(javascript|vbscript|data\s*:(?!image\/(png|jpe?g|gif|webp|svg\+xml)))/i;
// Risky tags that should always be stripped
const DANGEROUS_TAGS = new Set([
    'script', 'noscript', 'iframe', 'object', 'embed', 'applet',
    'form', 'input', 'textarea', 'select', 'button',
    'svg', 'math', 'base', 'link', 'meta',
]);
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// HTML sanitization
export const sanitizeHtml = (html, config) => {
    let sanitized = html;
    // Always strip dangerous tags (script, iframe, svg, etc.)
    if ((config === null || config === void 0 ? void 0 : config.stripScripts) !== false) {
        for (const tag of DANGEROUS_TAGS) {
            const open = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
            sanitized = sanitized.replace(open, '');
            // Self-closing variants
            const selfClose = new RegExp(`<${tag}\\b[^>]*/?>`, 'gi');
            sanitized = sanitized.replace(selfClose, '');
        }
    }
    // Strip <style> blocks and inline style attributes
    if ((config === null || config === void 0 ? void 0 : config.stripStyles) !== false) {
        sanitized = sanitized.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
        sanitized = sanitized.replace(/\bstyle\s*=\s*["'][^"']*["']/gi, '');
    }
    // Strip event handlers (on*)
    if ((config === null || config === void 0 ? void 0 : config.stripEvents) !== false) {
        sanitized = sanitized.replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, '');
        // Also handle unquoted event handlers
        sanitized = sanitized.replace(/\bon\w+\s*=\s*[^\s>]+/gi, '');
    }
    // Strip dangerous URI protocols from href/src/action/formaction attributes
    sanitized = sanitized.replace(/\b(href|src|action|formaction)\s*=\s*["']([^"']*)["']/gi, (match, attr, url) => {
        if (DANGEROUS_URI.test(url)) {
            return `${attr}="#"`;
        }
        return match;
    });
    // Filter allowed tags
    if ((config === null || config === void 0 ? void 0 : config.allowedTags) && config.allowedTags.length > 0) {
        const escaped = config.allowedTags.map(escapeRegex);
        const allowedPattern = escaped.join('|');
        const tagRegex = new RegExp(`<(?!\\/?(${allowedPattern})\\b)[^>]+>`, 'gi');
        sanitized = sanitized.replace(tagRegex, '');
    }
    return sanitized;
};
