import React from 'react';

import type { LineSegment, LineCap, AnimationMode, Variant, Size } from './types';

interface BorderSvgProps {
  clipId: string;
  size: Size;
  displayLines: LineSegment[];
  visibleCount: number;
  effectiveSegments: number;
  animationCompleted: boolean;
  strokeWidth: number;
  borderRadius: number;
  lineCapStart: LineCap;
  lineCapEnd: LineCap;
  animationMode: AnimationMode;
  variant: Variant;
  reverse: boolean;
  animate: boolean;
  ants: boolean;
  parsedBorderOffset: number;
  borderPosition: 'inner' | 'outer';
  antsGroupRef: React.RefObject<SVGGElement | null>;
}

const BorderSvg: React.FC<BorderSvgProps> = ({
  clipId,
  size,
  displayLines,
  visibleCount,
  effectiveSegments,
  animationCompleted,
  strokeWidth,
  borderRadius,
  lineCapStart,
  lineCapEnd,
  animationMode,
  variant,
  reverse,
  animate,
  ants,
  parsedBorderOffset,
  borderPosition,
  antsGroupRef,
}) => {
  const baseOffset = borderPosition === 'outer' ? strokeWidth / 2 : -strokeWidth / 2;
  const totalOffset = baseOffset + parsedBorderOffset;

  const expansion = Math.max(0, totalOffset + strokeWidth / 2);
  const svgWidth = size.width + expansion * 2;
  const svgHeight = size.height + expansion * 2;

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

          let visible: boolean;
          let isTip: boolean;
          let isFirstHalf: boolean;

          if (isLoop) {
            visible = true;
            isTip = false;
            isFirstHalf = false;
          } else if (isSplit) {
            const halfCount = Math.floor(visibleCount / 2);
            const forwardTip = Math.min(halfCount, Math.floor(effectiveSegments / 2) - 1);
            const backwardTip = Math.max(effectiveSegments - 1 - halfCount, Math.floor(effectiveSegments / 2));

            visible = i <= forwardTip || i >= backwardTip;
            isTip = i === forwardTip || i === backwardTip;
            isFirstHalf = i <= Math.floor(effectiveSegments / 4) || i >= effectiveSegments - Math.floor(effectiveSegments / 4);
          } else if (reverse) {
            const tipIndex = Math.max(effectiveSegments - 1 - visibleCount, 0);
            visible = i >= effectiveSegments - 1 - visibleCount;
            isTip = i === tipIndex;
            isFirstHalf = i > effectiveSegments / 2;
          } else {
            const tipIndex = Math.min(visibleCount, effectiveSegments - 1);
            visible = i <= visibleCount;
            isTip = i === tipIndex;
            isFirstHalf = i < effectiveSegments / 2;
          }

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
};

export { BorderSvg };
