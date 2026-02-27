import type { BorderPosition, LineSegment, StartPosition } from './types';
/**
 * Get color at position t (0-1) from an array of colors
 */
export declare function getColorAtPosition(colors: string[], t: number): string;
/**
 * Convert a StartPosition to a normalized offset (0-1) along the path
 */
export declare function getStartOffset(position: StartPosition, width: number, height: number, radius: number): number;
/**
 * Parse a CSS length value to pixels.
 * Supports: numbers (treated as px), "10px", "1rem", "0.5em"
 * Note: rem/em are approximated (1rem = 16px)
 */
export declare function parseCssLength(value: number | string): number;
export declare function generateLines(width: number, height: number, borderRadius: number, segments: number, colors: string[], startOffset: number, strokeWidth: number, borderPosition: BorderPosition, borderOffset: number): LineSegment[];
