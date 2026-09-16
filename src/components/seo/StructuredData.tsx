import { createPortal } from 'react-dom';

/**
 * Escapes characters that could prematurely close the <script> tag or be
 * misinterpreted, even though this component only ever receives trusted,
 * developer-authored data (never raw user input).
 */
function safeJsonLdStringify(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a single JSON-LD <script> block via a portal into <head>. Because
 * React owns the node, re-renders update it in place and unmounting removes
 * it — navigating between pages never leaves duplicate blocks behind.
 */
export function StructuredData({ data }: StructuredDataProps) {
  return createPortal(
    <script type="application/ld+json">{safeJsonLdStringify(data)}</script>,
    document.head,
  );
}
