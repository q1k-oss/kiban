import type { ReactNode, CSSProperties } from 'react';

export type StartPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | number;

export type AnimationMode = 'once' | 'loop';
export type Trigger = 'mount' | 'hover' | 'focus' | 'click' | 'manual';
export type LineCap = 'round' | 'square';
export type Variant = 'default' | 'split';
export type BorderPosition = 'inner' | 'outer';

export interface IBorderMovingWrapperProps {
  /** Content to render inside the gradient border */
  children?: ReactNode;
  /** Array of colors for the gradient (hex format) */
  colors?: string[];
  /** Where on the border the gradient starts. Can be a position name or a number 0-1. */
  startPosition?: StartPosition;
  /** Width of the border stroke in pixels */
  strokeWidth?: number;
  /** Line cap style for the start of the stroke: 'round' | 'square' (default: 'square') */
  lineCapStart?: LineCap;
  /** Line cap style for the end/tip of the stroke: 'round' | 'square' (default: 'square') */
  lineCapEnd?: LineCap;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Number of segments to divide the border into */
  segments?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Whether to animate the border drawing in (default: true) */
  animate?: boolean;
  /** What triggers the border to appear: 'mount' | 'hover' | 'click' | 'manual' (default: 'mount') */
  trigger?: Trigger;
  /** Animation mode: 'once' draws and stops, 'loop' continuously animates around (default: 'once') */
  animationMode?: AnimationMode;
  /** Animation variant: 'default' draws from one point, 'split' draws from both directions meeting in the middle (default: 'default') */
  variant?: Variant;
  /** Reverse the animation direction (default: false) */
  reverse?: boolean;
  /** For manual trigger control - whether the border is active */
  active?: boolean;
  /** Whether border is visible when not triggered (for hover/click modes) (default: false) */
  showWhenInactive?: boolean;
  /** Lazy load - only render when visible in viewport (default: true) */
  lazy?: boolean;
  /** Root margin for lazy loading intersection observer (default: '100px') */
  lazyRootMargin?: string;
  /** Throttle interval in ms for resize recalculations (default: 150) */
  resizeThrottle?: number;
  /** Enable ants marching (dashed line) effect (default: false) */
  ants?: boolean;
  /** Width of each dash in the ants marching effect in pixels (default: 20) */
  antsDashWidth?: number;
  /** Gap between dashes in the ants marching effect in pixels (default: 16) */
  antsGapWidth?: number;
  /** Speed of the ants marching animation in ms per dash cycle (default: 250) */
  antsSpeed?: number;
  /** Border position: 'inner' draws inside the element, 'outer' draws outside (default: 'inner') */
  borderPosition?: BorderPosition;
  /** Offset the border by a CSS length value. Positive = outward, negative = inward. (e.g., 4, "10px", "-5px") */
  borderOffset?: number | string;
  /** Additional CSS styles for the container */
  style?: CSSProperties;
  /** Additional CSS class name for the container */
  className?: string;
}

export interface LineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}

export interface Size {
  width: number;
  height: number;
}
