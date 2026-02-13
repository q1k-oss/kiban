// Helper functions for HTML rendering

// Generate ID from text
export const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

// Extract text content from HTML
export const extractTextContent = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

// Parse HTML attributes
export const parseAttributes = (attrString: string): Record<string, string> => {
  const attrs: Record<string, string> = {};
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
export const sanitizeHtml = (
  html: string,
  config?: {
    allowedTags?: string[];
    stripScripts?: boolean;
    stripStyles?: boolean;
    stripEvents?: boolean;
  },
): string => {
  let sanitized = html;

  // Strip scripts
  if (config?.stripScripts !== false) {
    sanitized = sanitized.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      '',
    );
  }

  // Strip inline styles
  if (config?.stripStyles) {
    sanitized = sanitized.replace(/style\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(
      /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
      '',
    );
  }

  // Strip event handlers
  if (config?.stripEvents !== false) {
    sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  }

  // Filter allowed tags
  if (config?.allowedTags && config.allowedTags.length > 0) {
    const allowedPattern = config.allowedTags.join('|');
    const tagRegex = new RegExp(`<(?!\\/?(${allowedPattern})\\b)[^>]+>`, 'gi');
    sanitized = sanitized.replace(tagRegex, '');
  }

  return sanitized;
};
