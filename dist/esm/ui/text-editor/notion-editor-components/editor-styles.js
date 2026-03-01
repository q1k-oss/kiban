export const editorStyles = `
  .ProseMirror {
    min-height: 200px;
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
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }

  .ProseMirror pre {
    background-color: rgba(31, 41, 55, 0.3);
    color: var(--color-secondary-text);
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    
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

  .ProseMirror img[style*="text-align: center"],
  .ProseMirror img[style*="text-align:center"] {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .ProseMirror img[style*="text-align: right"],
  .ProseMirror img[style*="text-align:right"] {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }

  .ProseMirror mark {
    background-color: #fef3c7;
    padding: 0.125em 0.25em;
    border-radius: 0.125rem;
  }

  .ProseMirror p.is-editor-empty:first-child::before {
    color: var(--disabled-text);
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
    
.prose h1 a,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  color: inherit !important;
  text-decoration: none !important;
  font-weight: inherit !important;
}

  .ProseMirror .tableWrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 1.5em 0;
  }

  .ProseMirror table {
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
    border: 1px solid var(--button-fill-3);
    border-radius: 0.75rem;
  }

  .ProseMirror td,
  .ProseMirror th {
    min-width: 1em;
    border: 1px solid var(--button-fill-3);
    padding: 0.5rem 0.75rem;
    vertical-align: top;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    word-break: break-word;
    
  }

  .ProseMirror th {
    font-weight: 600;
    background-color: var(--button-fill-3);
    color: var(--color-primary-text);
    border: 1px solid var(--node-field-fill);
  }

  .ProseMirror td {
    color: var(--color-secondary-text);
  }

  /* Rounded corners on outer cells */
  .ProseMirror table tr:first-child th:first-child,
  .ProseMirror table tr:first-child td:first-child {
    border-top-left-radius: 0.75rem;
  }

  .ProseMirror table tr:first-child th:last-child,
  .ProseMirror table tr:first-child td:last-child {
    border-top-right-radius: 0.75rem;
  }

  .ProseMirror table tr:last-child td:first-child,
  .ProseMirror table tr:last-child th:first-child {
    border-bottom-left-radius: 0.75rem;
  }

  .ProseMirror table tr:last-child td:last-child,
  .ProseMirror table tr:last-child th:last-child {
    border-bottom-right-radius: 0.75rem;
  }

  .ProseMirror .selectedCell::after {
    z-index: 2;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(59, 130, 246, 0.15);
    pointer-events: none;
  }

  .ProseMirror .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #3b82f6;
    pointer-events: none;
  }

  .ProseMirror.resize-cursor {
    cursor: col-resize;
  }

  .ProseMirror table > * + * {
    margin-top: 0;
  }
  `;
