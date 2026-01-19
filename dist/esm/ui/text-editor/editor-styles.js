export const editorStyles = `
  .ProseMirror {
    min-height: 400px;
  }
  
  .ProseMirror > * + * {
    margin-top: 0.75em;
  }

  .ProseMirror h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: var(--color-primary-text);
  }

  .ProseMirror h2 {
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 1.5em;
    color: var(--color-primary-text);
  }

  .ProseMirror h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    margin-top: 1.5em;
    color: var(--color-primary-text);
  }

  .ProseMirror p {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-secondary-text);
  }

  .ProseMirror ul,
  .ProseMirror ol {
    padding-left: 1.5rem;
    color: var(--color-secondary-text);
  }

  .ProseMirror ul li {
    list-style-type: disc;
    padding-left: 0.25rem;
  }

  .ProseMirror ol li {
    list-style-type: decimal;
    padding-left: 0.25rem;
  }

  .ProseMirror li {
    margin-top: 0.5em;
    line-height: 1.75;
  }

  .ProseMirror blockquote {
    border-left: 2px solid var(--color-stroke);
    padding-left: 1rem;
    font-style: italic;
    color: var(--color-primary-text);
    margin: 1.5em 0;
  }

  .ProseMirror code {
    color: var(--color-secondary-text);
    color: #ef4444;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-family: 'Monaco', 'Courier New', monospace;
  }

  .ProseMirror pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 1.5em 0;
  }

  .ProseMirror pre code {
    background: none;
    color: inherit;
    padding: 0;
    font-size: inherit;
  }

  .ProseMirror hr {
    border: none;
    border-top: 2px solid var(--color-border);
    margin: 2rem 0;
  }

  .ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1em 0;
  }

  .ProseMirror mark {
    background-color: #fef3c7;
    padding: 0.125em 0.25em;
    border-radius: 0.125rem;
  }

  .ProseMirror p.is-editor-empty:first-child::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .ProseMirror h1.is-empty::before,
  .ProseMirror h2.is-empty::before,
  .ProseMirror h3.is-empty::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .ProseMirror:focus {
    outline: none;
  }

  .ProseMirror a {
    color: #3b82f6;
    text-decoration: underline;
    cursor: pointer;
  }

  .ProseMirror a:hover {
    color: #2563eb;
  }
`;
