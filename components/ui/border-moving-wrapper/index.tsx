"use client";
import { useRef, useEffect, useState, useLayoutEffect, useCallback, useMemo, useId } from 'react';

import type {
  IBorderMovingWrapperProps,
  LineSegment,
  LineCap,
  Size,
} from './types';
import {
  getColorAtPosition,
  getStartOffset,
  generateLines,
  parseCssLength,
} from './utils';

const BorderMovingWrapper = ({
  children,
  colors = ['#0066ff', '#ffdd00'],
  startPosition = 'top-left',
  strokeWidth = 3,
  lineCapStart = 'square',
  lineCapEnd = 'square',
  borderRadius = 12,
  segments = 200,
  duration = 2000,
  animate = true,
  trigger = 'mount',
  animationMode = 'once',
  variant = 'default',
  reverse = false,
  active: manualActive,
  showWhenInactive = false,
  lazy = true,
  lazyRootMargin = '100px',
  resizeThrottle = 150,
  ants = false,
  antsDashWidth = 20,
  antsGapWidth = 16,
  antsSpeed = 250,
  borderPosition = 'inner',
  borderOffset = 0,
  style = {},
  className = '',
}: IBorderMovingWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipId = useId();
  const [lines, setLines] = useState<LineSegment[]>([]);
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : segments);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [isInViewport, setIsInViewport] = useState(!lazy);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [loopOffset, setLoopOffset] = useState(0);
  const antsGroupRef = useRef<SVGGElement>(null);
  const antsStartTimeRef = useRef<number | null>(null);
  const lastResizeRef = useRef<number>(0);
  const trailingResizeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasBeenVisible = useRef(false);
  const animationStarted = useRef(false);
  const [animationCompleted, setAnimationCompleted] = useState(!animate);

  // Determine if border should be active based on trigger
  const isActive = (() => {
    switch (trigger) {
      case 'hover': return isHovered;
      case 'focus': return isFocused;
      case 'click': return isClicked;
      case 'manual': return manualActive ?? false;
      case 'mount':
      default: return true;
    }
  })();

  // Should the border be visible at all?
  const shouldShowBorder = isActive || showWhenInactive;

  // Stable colors key to avoid JSON.stringify on every render
  const colorsKey = useMemo(() => colors.join(','), [colors]);

  // Throttled resize handler - update at most once per interval for smooth visual feedback
  const throttledSetSize = useCallback((newSize: Size) => {
    const now = Date.now();
    const timeSinceLastResize = now - lastResizeRef.current;

    if (timeSinceLastResize >= resizeThrottle) {
      // Enough time has passed, update immediately
      lastResizeRef.current = now;
      setSize(newSize);
    } else {
      // Schedule a trailing update to catch the final size
      if (trailingResizeRef.current) {
        clearTimeout(trailingResizeRef.current);
      }
      trailingResizeRef.current = setTimeout(() => {
        lastResizeRef.current = Date.now();
        setSize(newSize);
      }, resizeThrottle - timeSinceLastResize);
    }
  }, [resizeThrottle]);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    if (!lazy || !containerRef.current) {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInViewport(true);
          hasBeenVisible.current = true;
        }
      },
      {
        rootMargin: lazyRootMargin,
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [lazy, lazyRootMargin]);

  // Measure container size with debounced resize
  useLayoutEffect(() => {
    if (!containerRef.current || !isInViewport) return;

    const measure = () => {
      const el = containerRef.current;
      if (!el) return;

      // Use offsetWidth/offsetHeight for more accurate sizing
      const width = el.offsetWidth;
      const height = el.offsetHeight;

      if (width > 0 && height > 0) {
        throttledSetSize({ width, height });
      }
    };

    // Initial measure without throttle for faster first paint
    const el = containerRef.current;
    if (el) {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width > 0 && height > 0) {
        setSize({ width, height });
      }
    }

    const observer = new ResizeObserver(measure);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (trailingResizeRef.current) {
        clearTimeout(trailingResizeRef.current);
      }
    };
  }, [throttledSetSize, isInViewport]);

  // Parse borderOffset to pixels
  const parsedBorderOffset = useMemo(() => parseCssLength(borderOffset), [borderOffset]);

  // Auto-scale segments based on perimeter for smooth edges at any size
  const effectiveSegments = useMemo(() => {
    if (size.width === 0 || size.height === 0) return segments;
    const perimeter = 2 * (size.width + size.height);
    // ~1 segment per 3px of perimeter, clamped between segments prop and 1000
    const autoSegments = Math.ceil(perimeter / 3);
    return Math.max(segments, Math.min(autoSegments, 1000));
  }, [size.width, size.height, segments]);

  // Generate line segments when size or props change
  useEffect(() => {
    if (size.width === 0 || size.height === 0 || !isInViewport) return;

    const startOffset = getStartOffset(startPosition, size.width, size.height, borderRadius);

    const newLines = generateLines(
      size.width,
      size.height,
      borderRadius,
      effectiveSegments,
      colors,
      startOffset,
      strokeWidth,
      borderPosition,
      parsedBorderOffset
    );
    setLines(newLines);

    if (animate) {
      setVisibleCount(0);
    } else {
      setVisibleCount(effectiveSegments);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps -- colorsKey is the stable surrogate for colors array
  }, [size.width, size.height, borderRadius, effectiveSegments, colorsKey, startPosition, animate, strokeWidth, isInViewport, borderPosition, parsedBorderOffset]);

  // Reset animation when becoming active
  useEffect(() => {
    if (isActive && animate && !animationStarted.current) {
      setVisibleCount(0);
      setAnimationCompleted(false);
      animationStarted.current = true;
    } else if (!isActive) {
      animationStarted.current = false;
      setAnimationCompleted(false);
      if (!showWhenInactive) {
        setVisibleCount(0);
      }
    }
  }, [isActive, animate, showWhenInactive]);

  // Handle animation - draw once or loop
  useEffect(() => {
    if (!isActive || !animate || lines.length === 0 || !isInViewport) return;

    const startTime = performance.now();
    let frameId: number;

    if (animationMode === 'loop') {
      // Continuous loop animation
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = (elapsed / duration) % 1;
        setLoopOffset(progress);
        setVisibleCount(effectiveSegments); // All segments visible in loop mode
        frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
    } else {
      // Draw once and stop
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setVisibleCount(Math.floor(progress * effectiveSegments));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setAnimationCompleted(true);
        }
      };
      frameId = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(frameId);
  }, [lines, duration, effectiveSegments, animate, isInViewport, isActive, animationMode]);

  // Generate display lines with colors adjusted for animation mode/variant
  const displayLines = useMemo(() => {
    if (animationMode === 'loop' && isActive) {
      // Subtract offset for forward motion, add for reverse
      const direction = reverse ? 1 : -1;
      return lines.map((line, i) => ({
        ...line,
        color: getColorAtPosition(colors, ((i / effectiveSegments) + direction * loopOffset + 1) % 1),
      }));
    }
    if (variant === 'split') {
      // Split mode: both arms start with first color and meet at last color
      const halfSegments = effectiveSegments / 2;
      return lines.map((line, i) => {
        let colorT: number;
        if (i < halfSegments) {
          // Forward arm: 0 -> 1 as i goes 0 -> halfSegments
          colorT = i / halfSegments;
        } else {
          // Backward arm: 0 -> 1 as i goes effectiveSegments-1 -> halfSegments
          colorT = (effectiveSegments - 1 - i) / halfSegments;
        }
        return {
          ...line,
          color: getColorAtPosition(colors, colorT),
        };
      });
    }
    return lines;
  }, [animationMode, isActive, lines, colors, effectiveSegments, loopOffset, reverse, variant]);

  // Ants marching animation - updates DOM directly via ref to avoid React re-renders
  useEffect(() => {
    if (!ants || !isActive || !isInViewport || !antsGroupRef.current) {
      // Reset start time when ants is disabled
      antsStartTimeRef.current = null;
      return;
    }

    const group = antsGroupRef.current;
    const lineElements = Array.from(group.querySelectorAll('line'));
    if (lineElements.length === 0) return;

    // Pre-calculate cumulative lengths from the actual line elements
    const cumulativeLengths: number[] = [];
    let cumulative = 0;
    for (const line of lineElements) {
      const x1 = parseFloat(line.getAttribute('x1') || '0');
      const y1 = parseFloat(line.getAttribute('y1') || '0');
      const x2 = parseFloat(line.getAttribute('x2') || '0');
      const y2 = parseFloat(line.getAttribute('y2') || '0');
      const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      cumulativeLengths.push(cumulative);
      cumulative += length;
    }

    const dashCycle = antsDashWidth + antsGapWidth;
    const numLines = lineElements.length;
    // Direction: forward (reverse=false) subtracts offset, reverse adds offset
    const direction = reverse ? 1 : -1;

    // Track previous visibility state to only update changed elements
    // Initialize from actual DOM state to handle effect restarts correctly
    const prevVisible: boolean[] = lineElements.map(line => line.style.opacity !== '0');

    let frameId: number;

    // Use persistent start time to avoid jumps when effect re-runs
    if (antsStartTimeRef.current === null) {
      antsStartTimeRef.current = performance.now();
    }

    const tick = (now: number) => {
      const elapsed = now - antsStartTimeRef.current!;
      const offset = (elapsed / antsSpeed) * dashCycle;

      for (let i = 0; i < numLines; i++) {
        // Check if segment should be visible from draw-in animation
        const drawInVisible = lineElements[i].getAttribute('data-visible') === '1';
        const isTip = lineElements[i].getAttribute('data-tip') === '1';

        if (!drawInVisible) {
          // Segment not yet drawn in, keep it hidden
          if (prevVisible[i] !== false) {
            lineElements[i].style.opacity = '0';
            prevVisible[i] = false;
          }
          continue;
        }

        // Keep tip segment always visible during draw-in for smooth animation
        if (isTip) {
          if (prevVisible[i] !== true) {
            lineElements[i].style.opacity = '1';
            prevVisible[i] = true;
          }
          continue;
        }

        const positionInCycle = ((cumulativeLengths[i] + direction * offset) % dashCycle + dashCycle) % dashCycle;
        const isVisible = positionInCycle < antsDashWidth;

        // Only update DOM if visibility changed
        if (isVisible !== prevVisible[i]) {
          lineElements[i].style.opacity = isVisible ? '1' : '0';
          prevVisible[i] = isVisible;
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [ants, antsDashWidth, antsGapWidth, antsSpeed, isActive, isInViewport, displayLines, reverse]);

  // Event handlers for hover/focus/click triggers
  const handleMouseEnter = trigger === 'hover' ? () => setIsHovered(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setIsHovered(false) : undefined;
  const handleFocus = trigger === 'focus' ? () => setIsFocused(true) : undefined;
  const handleBlur = trigger === 'focus' ? () => setIsFocused(false) : undefined;
  const handleClick = trigger === 'click' ? () => setIsClicked(prev => !prev) : undefined;

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: trigger === 'click' ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
      {size.width > 0 && displayLines.length > 0 && shouldShowBorder && (() => {
        // Calculate total offset from element edge (includes borderPosition base + user offset)
        const baseOffset = borderPosition === 'outer' ? strokeWidth / 2 : -strokeWidth / 2;
        const totalOffset = baseOffset + parsedBorderOffset;

        // If border extends outside element, expand SVG to accommodate
        // expansion = how much the stroke extends beyond the element edge
        const expansion = Math.max(0, totalOffset + strokeWidth / 2);
        const svgWidth = size.width + expansion * 2;
        const svgHeight = size.height + expansion * 2;

        // Don't clip if border is outside the element
        const shouldClip = totalOffset < 0;

        return (
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -expansion,
            left: -expansion,
            width: svgWidth,
            height: svgHeight,
            pointerEvents: 'none',
            overflow: 'visible',
            zIndex: 1,
          }}
          viewBox={`${-expansion} ${-expansion} ${svgWidth} ${svgHeight}`}
        >
          <defs>
            <clipPath id={clipId}>
              <rect
                x="0"
                y="0"
                width={size.width}
                height={size.height}
                rx={Math.min(borderRadius, size.width / 2, size.height / 2)}
                ry={Math.min(borderRadius, size.width / 2, size.height / 2)}
              />
            </clipPath>
          </defs>
          <g clipPath={shouldClip ? `url(#${clipId})` : undefined} ref={antsGroupRef}>
            {displayLines.map((line, i) => {
              const isLoop = animationMode === 'loop';
              const isSplit = variant === 'split';

              // Calculate visibility and tip based on variant
              let visible: boolean;
              let isTip: boolean;
              let isFirstHalf: boolean;

              if (isLoop) {
                visible = true;
                isTip = false;
                isFirstHalf = false;
              } else if (isSplit) {
                // Split mode: two arms drawing from start, meeting on opposite side
                const halfCount = Math.floor(visibleCount / 2);
                const forwardTip = Math.min(halfCount, Math.floor(effectiveSegments / 2) - 1);
                const backwardTip = Math.max(effectiveSegments - 1 - halfCount, Math.floor(effectiveSegments / 2));

                visible = i <= forwardTip || i >= backwardTip;
                isTip = i === forwardTip || i === backwardTip;
                isFirstHalf = i <= Math.floor(effectiveSegments / 4) || i >= effectiveSegments - Math.floor(effectiveSegments / 4);
              } else if (reverse) {
                // Reverse mode: reveal from end
                const tipIndex = Math.max(effectiveSegments - 1 - visibleCount, 0);
                visible = i >= effectiveSegments - 1 - visibleCount;
                isTip = i === tipIndex;
                isFirstHalf = i > effectiveSegments / 2;
              } else {
                // Default mode: reveal from start
                const tipIndex = Math.min(visibleCount, effectiveSegments - 1);
                visible = i <= visibleCount;
                isTip = i === tipIndex;
                isFirstHalf = i < effectiveSegments / 2;
              }

              // Line caps logic:
              // - During animation: first half gets lineCapStart, tip gets lineCapEnd
              // - After animation completes: first half switches to round (no square overhang when ends meet)
              // - Key: check isTip BEFORE isFirstHalf so tip always gets lineCapEnd even in first half
              // - For ants: use lineCapEnd for all segments (consistent dash appearance)
              let segmentLineCap: LineCap = ants ? lineCapEnd : 'round';
              if (!isLoop && !ants) {
                if (isTip) {
                  segmentLineCap = lineCapEnd;
                } else if (!animationCompleted && isFirstHalf) {
                  segmentLineCap = lineCapStart;
                }
              }

              return (
                <line
                  key={`main-${i}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={line.color}
                  strokeWidth={strokeWidth}
                  strokeLinecap={segmentLineCap}
                  data-visible={visible ? '1' : '0'}
                  data-tip={isTip ? '1' : '0'}
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: !animate ? 'none' : undefined,
                  }}
                />
              );
            })}
          </g>
        </svg>
        );
      })()}
    </div>
  );
};

export { BorderMovingWrapper };
export type {
  IBorderMovingWrapperProps,
  StartPosition,
  AnimationMode,
  Trigger,
  LineCap,
  Variant,
  BorderPosition,
} from './types';
